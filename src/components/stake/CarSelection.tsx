import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useNFTs } from "../../hooks/useNFTs";
import { Loading } from "../Loading";
import { PublicKey } from "@solana/web3.js";
import { StakeEntry, PROGRAM_ID } from "@builderz/sporting-f1-sdk";
import { useWallet } from "../../hooks/useWallet";
import { useConnection } from "@solana/wallet-adapter-react";
import { StakingConfirmation } from "./Confirmation";

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
  const nfts = useNFTs(props.poolAddress);

  const [popup, setPopup] = useState<boolean>(false);
  const [currentNft, setCurrentNft] = useState<any>(null);

  const handleClick = (nft: any) => {
    // TODO
    setPopup(true);
    setCurrentNft(nft);
  };

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
        {nfts.loading && <Loading />}
        {nfts.error && <div>error</div>}
        {nfts.nfts.length === 0 && (
          <div className="car-selection-empty">
            You don't have any NFTs in this pool
          </div>
        )}
        {!nfts.loading && !nfts.error && nfts.nfts.length > 0 && (
          <>
            <div className="car-selection-list">
              <div className="car-selection-list-content">
                {nfts.nfts.map((nft: any) => (
                  <motion.div
                    key={nft.tokenAddress}
                    className="car-selection-item"
                    variants={dropIn}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    whileHover={{ scale: 0.95 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => handleClick(nft)}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="car-selection-item-content">
                      <div className="car-selection-cover">
                        <img src={nft.imageUrl} />
                      </div>
                      <div className="car-selection-name">{nft.name}</div>
                      <div className="car-selection-metadata">
                        {nft.traits.length > 1 &&
                          nft.traits.map((m: any) => (
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
          </>
        )}
        <div className="car-selection-button">
          <button onClick={() => props.controlModal()}>Back</button>
        </div>
        {popup && (
          <StakingConfirmation
            nft={currentNft}
            closeConfirmScreen={() => setPopup(false)}
          />
        )}
      </div>
    </motion.div>
  );
}
