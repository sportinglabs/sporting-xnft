import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useNFTs } from "../../hooks/useNFTs";
import { Loading } from "../Loading";
import { PublicKey } from "@solana/web3.js";
import { StakeEntry, PROGRAM_ID } from "@builderz/sporting-f1-sdk";
import { useWallet } from "../../hooks/useWallet";
import { useConnection } from "@solana/wallet-adapter-react";

const dropIn = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.2,
      ease: [0, 0.1, 0.15, 0.2],
    },
  },
  exit: {
    opacity: 0,
  },
};

export function CarSelection(props: {
  controlModal: Function;
  poolAddress: string;
}) {
  const nfts = useNFTs();
  const wallet = useWallet();
  const { connection } = useConnection()

  const [nftsStaking, setNftsStaking] = useState<any>(null)

  useEffect(() => {
    const fetchStakeEntries = async () => {
      const withStakingData = await Promise.all(
        nfts.nfts.map(async (nft) => {
          console.log(nft);

          const [stakeEntryPda] = PublicKey.findProgramAddressSync(
            [
              Buffer.from("stake-entry"),
              new PublicKey(props.poolAddress).toBuffer(),
              new PublicKey(nft.tokenAddress).toBuffer(),
              wallet.publicKey.toBuffer(),
            ],
            PROGRAM_ID
          );
          
          try {
            const stakeEntry = await StakeEntry.fromAccountAddress(connection, stakeEntryPda);
            return { ...nft, stakeEntry };

          } catch (error) {
            
          }          
        })
      );

      console.log(withStakingData);
    }

    if (nfts.nfts.length > 0) {
      console.log("Fetching stake entries");
      
      fetchStakeEntries();
    }
  }, [nfts])

  const handleClick = (e: any) => {
    // TODO
  };

  nfts.loading && <Loading />;
  nfts.error && <div>error</div>;

  return (
    <motion.div
      className="car-selection"
      onClick={() => props.controlModal()}
      variants={dropIn}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div
        className="car-selection-content"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="car-selection-title">Choose your car</div>
        <div className="car-selection-list">
          <div className="car-selection-list-content">
            {nfts.nfts.map((i) => (
              <motion.div
                key={i.tokenAddress}
                className="car-selection-item"
                variants={dropIn}
                initial="hidden"
                animate="visible"
                exit="exit"
                whileHover={{ scale: 0.95 }}
                whileTap={{ scale: 0.9 }}
                onClick={handleClick}
                transition={{ duration: 0.2 }}
              >
                <div className="car-selection-item-content">
                  <div className="car-selection-cover">
                    <img src={i.imageUrl} />
                  </div>
                  <div className="car-selection-name">{i.name}</div>
                  <div className="car-selection-metadata">
                    {i.traits.length > 1 &&
                      i.traits.map((m: any) => (
                        <div className="car-selection-attribute">
                          <div className="car-selection-attribute-name">
                            {m.trait_type}
                          </div>
                          <div className="car-selection-attribute-value">
                            {m.value}
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="car-selection-button">
          <button onClick={() => props.controlModal()}>Back</button>
        </div>
      </div>
    </motion.div>
  );
}
