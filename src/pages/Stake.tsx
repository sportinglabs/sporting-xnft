import RaceSelection from "../components/stake/RaceSelection";
import { CarSelection } from "../components/stake/CarSelection";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { useConfig } from "../hooks/useConfig";
import { Loading } from "../components/Loading";

export default function Stake() {
  const [poolAddress, setPoolAddress] = useState("");
  const [race, setRace] = useState<any>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const close = () => setModalOpen(false);
  const open = () => setModalOpen(true);
  const controlModal = () => (modalOpen ? close() : open());
  
  const config = useConfig();
  console.log(config);
  
  if (config.loading) return <Loading />

  if (config.error) return <div>error</div>

  return (
    <>
      <AnimatePresence>
        <div className="stake">
          <div className="stake-content">
            <div className="stake-title">Pick a race</div>
            <div className="stake-items-container">
              <div className="stake-items">
                <div className="stake-items-content">
                  {config?.config?.map((pool) => (
                    <RaceSelection
                      key={pool.name}
                      poolAddress={pool.poolAddress!}
                      country={pool.country}
                      name={pool.name}
                      month_date={pool.month_date}
                      day_date={pool.day_date}
                      status={pool.status}
                      staked={pool.staked}
                      racetrack={pool.racetrack}
                      isModalOpen={modalOpen}
                      controlModal={controlModal}
                      // setPoolAddress={setPoolAddress}
                      setRace={setRace}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        {modalOpen && (
          <CarSelection controlModal={controlModal} race={race} />
        )}
      </AnimatePresence>
    </>
  );
}
