import { motion } from "framer-motion";
import { useState } from "react";
import { useNFTs } from "../../hooks/useNFTs";
import { Loading } from "../Loading";
import { StakingConfirmation } from "./Confirmation";
import { NftItem } from "../NftItem";

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
  race: any;
}) {
  const [reload, setReload] = useState<number>(0);
  const nfts = useNFTs(reload, props.race.poolAddress);  

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
        {/* TODO: Style title */}
        {/* <div className="car-selection-title">{props.race.name}</div>  */}
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
          {/* TODO: Style Staked + Add total staked with props.race.staked */}
            {props.race.status !== "upcoming" && <div>{nfts.nfts.filter(nft => nft.stakeEntry !== null).length} Car{nfts.nfts.filter(nft => nft.stakeEntry !== null).length > 1 && "s"} Staked</div>}
            <div className="car-selection-list">
              <div className="car-selection-list-content">
                {nfts.nfts.map((nft: any) => (
                  <NftItem key={nft.id} nft={nft} handleClick={handleClick} />
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
            reload={() => setReload(prev => prev + 1)}
            race={props.race}
          />
        )}
      </div>
    </motion.div>
  );
}
