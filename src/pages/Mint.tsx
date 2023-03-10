import { AnimatePresence } from "framer-motion";
import nft_unrevealed from "../assets/nft-unrevealed.png";
import { useState } from "react";
import Countdown from "react-countdown";
import { toDate } from "../utils";
import { MintButton } from "../components/MintButton"; 
import { useCandyMachine } from "../hooks/useCandyMachine";
import { Loading } from "../components/Loading";

export default function Mint() {

  const { cm, loading, error} = useCandyMachine()
  const [isActive, setIsActive] = useState(false);

  if (loading) {
    return <Loading />
  }

  return (
    <>
      <AnimatePresence>
        <div className="mint">
          <div className="mint-content">
            <div className="mint-title">Become a racer</div>
            <div className="mint-cover">
              <img src={nft_unrevealed} />
            </div>
            {cm && cm.candyGuard && (
              <>
              {!isActive ? ( 
                <div className="text-center mt-4 ">
                  {/* @ts-ignore */}
                  <Countdown
                    date={toDate(
                      cm.candyGuard.guards.startDate?.date
                    )}
                    onComplete={() => {
                      setIsActive(true);
                    }}
                    renderer={renderGoLiveDateCounter}
                    onMount={() => {
                      if (
                        // @ts-ignore
                        toDate(cm?.candyGuard?.guards.startDate?.date) > new Date()
                      ) {
                        setIsActive(false);
                      } else {
                        setIsActive(true);
                      }
                    }}
                  />
                </div>
              ) : (
                <>
                  <div className="mint-status">
                    <div>
                      Total Minted:{" "}
                      <span className="text-lg font-bold">
                        {cm.itemsMinted?.toNumber()} /{" "}
                        {cm.itemsLoaded}
                      </span>
                    </div>
                  </div>
                  <div className="text-center w-full p-2">
                    <MintButton />
                    {/* {wallet && (
                      <p>SOL Balance: {(balance || 0).toLocaleString()}</p>
                    )} */}
                  </div>
                </>
              )}
            </>
            )}
          </div>
        </div>
      </AnimatePresence>
    </>
  );
}

const renderGoLiveDateCounter = ({ days, hours, minutes, seconds }: any) => {
  return (
    <div className="mint-countdown">
      <div className="">{days}d {hours}h {minutes}m {seconds}s</div>
    </div>
  );
};