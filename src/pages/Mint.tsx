import { AnimatePresence } from "framer-motion";
import nft_unrevealed from "../assets/nft-unrevealed.png";

export default function Mint() {
  return (
    <>
      <AnimatePresence>
        <div className="mint">
          <div className="mint-content">
            <div className="mint-title">Become a racer</div>
            <div className="mint-cover">
              <img src={nft_unrevealed} />
            </div>
            <div className="mint-countdown">
              <div className="">00d 00h 00m</div>
            </div>
            <div className="mint-status">
              <div className="">Total minted: 1'500</div>
            </div>
            <div className="mint-button">
              <button>mint</button>
            </div>
          </div>
        </div>
      </AnimatePresence>
    </>
  );
}
