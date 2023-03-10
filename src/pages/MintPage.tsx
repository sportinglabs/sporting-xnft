import { useState } from "react";
import Countdown from "react-countdown";
import { useWallet } from "../hooks/useWallet";
import { AnimatePresence } from "framer-motion";

import mintBanner from '../assets/car.png'
import { toDate } from "../utils";
import { MintButton } from "../components/MintButton"; 
import { useCandyMachine } from "../hooks/useCandyMachine";
import { Loading } from "../components/Loading";

export const MintPage = () => {
  const cm = useCandyMachine()

  if (cm.loading) {
    <Loading />
  }

  if (cm.error) {
    <div>error</div>
  }

  return (
    <div className="h-full">
          <section className='my-5'>
            <Mint />
          </section>
    </div>
  )
}

export const Mint = () => {
  const { cm, loading, error} = useCandyMachine()

  console.log(cm);
  
  const [isActive, setIsActive] = useState(false);

  return (
    <AnimatePresence>
        <div className="stake">
          <div className="stake-content">
            <div className="stake-title">Mint</div>
            <img src={mintBanner} className="home-title-image" />
            <div>
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
                  <div className="mt-10">
                    <p className="text-center m-2">
                      Total Minted:{" "}
                      <span className="text-lg font-bold">
                        {cm.itemsMinted?.toNumber()} /{" "}
                        {cm.itemsLoaded}
                      </span>
                    </p>
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
      </div>
    </AnimatePresence> 
  )
};

const renderGoLiveDateCounter = ({ days, hours, minutes, seconds }: any) => {
  return (
    <div className="flex mx-6 space-x-2">
      <div className="flex-1 bg-blue-500 rounded font-bold py-6">
        <h1>{days}</h1>Days
      </div>
      <div className="flex-1 bg-blue-500 rounded font-bold py-6">
        <h1>{hours}</h1>
        Hours
      </div>
      <div className="flex-1 bg-blue-500 rounded font-bold py-6">
        <h1>{minutes}</h1>Mins
      </div>
      <div className="flex-1 bg-blue-500 rounded font-bold py-6">
        <h1>{seconds}</h1>Secs
      </div>
    </div>
  );
};
