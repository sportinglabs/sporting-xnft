import { stake, unstake } from "@builderz/sporting-f1-sdk";
import { useConnection } from "@solana/wallet-adapter-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { useWallet } from "../../hooks/useWallet";
import { toast } from "react-toastify";
import { PublicKey } from "@solana/web3.js";


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

export const StakingConfirmation = ({
  nft,
  closeConfirmScreen,
  race_track,
}: any) => {
  const [loading, setLoading] = useState<boolean>(false);

  const { connection } = useConnection();
  const wallet = useWallet();

  const handleEvent = async () => {
    setLoading(true);

    let toastId = toast.loading(`${nft.stakeEntry ? "Unstaking" : "Staking"}`);

    try {
      if (nft.stakeEntry) {
        const res = await unstake(
          connection,
          wallet,
          new PublicKey(nft.tokenAddress)
        );
        toast.update(toastId, { render: "Unstaked", type: toast.TYPE.SUCCESS });
      } else {
        const res = await stake(
          connection,
          wallet,
          new PublicKey(nft.tokenAddress)
        );
        toast.update(toastId, { render: "Staked", type: toast.TYPE.SUCCESS });
      }
    } catch (error) {
      console.log(error);
      toast.update(toastId, { render: "Error", type: toast.TYPE.ERROR });
    }

    setLoading(false);
  };

  return (
    <motion.div className="stake-confirm"
    initial={{opacity:0}}    
    whileInView={{ opacity: 1 }}
    transition={{ duration: 0.2 }}



    >
      <motion.div className="stake-confirm-container">
        <motion.div className="stake-confirm-image">
          <img src={nft.imageUrl} alt="image of the NFT" />
        </motion.div>
        <motion.div className="stake-confirm-name">{nft.name}</motion.div>
        <motion.div className="stake-confirm-metadata">
          <motion.div className="stake-confirm-metadata-content">
            {nft.traits.length > 1 &&
              nft.traits.map((m: any) => (
                <div className="stake-confirm-attribute">
                  <div className="stake-confirm-attribute-name">
                    {m.trait_type}
                  </div>
                  <div className="stake-confirm-attribute-value">{m.value}</div>
                </div>
              ))}
          </motion.div>
        </motion.div>
        <div className="stake-confirm-button">
          <button onClick={handleEvent}>
            {nft.stakeEntry ? "Unstake" : "Stake"}
          </button>
        </div>
        <div className="stake-confirm-button stake-confirm-back-button">
          <button onClick={closeConfirmScreen}>back</button>
        </div>
      </motion.div>
    </motion.div>
  );
};
