import { useNFTs } from "../hooks/useNFTs";
import RaceSelection from "../components/stake/RaceSelection";
import { CarSelection } from "../components/stake/CarSelection";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { useConfig } from "../hooks/useConfig";
import { Loading } from "../components/Loading";
import { usePools } from "../hooks/usePools";

export default function Stake() {
  const [raceID, setRaceID] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const close = () => setModalOpen(false);
  const open = () => setModalOpen(true);
  const controlModal = () => (modalOpen ? close() : open());

  const nfts = useNFTs();
  const pools = usePools();
  console.log(pools);
  

  const config = useConfig();
  console.log(config);
  

  config.loading && <Loading />

  config.error && <div>error</div>

  return (
    <>
      <AnimatePresence>
        <div className="stake">
          <div className="stake-content">
            <div className="stake-title">Pick a race</div>
            <div className="stake-items-container">
              <div className="stake-items">
                <div className="stake-items-content">
                  {config?.config?.map((r: any) => (
                    <RaceSelection
                      race_id={r.race_id}
                      country={r.country}
                      name={r.name}
                      month_date={r.month_date}
                      day_date={r.day_date}
                      status={r.status}
                      staked={r.staked}
                      racetrack={r.racetrack}
                      key={r.race_id}
                      isModalOpen={modalOpen}
                      controlModal={controlModal}
                      setRaceID={setRaceID}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        {modalOpen && (
          <CarSelection controlModal={controlModal} race_id={raceID} />
        )}
      </AnimatePresence>
    </>
  );
}
