import { useNFTs } from "../hooks/useNFTs";
import RaceSelection from "../components/stake/RaceSelection";
import { CarSelection } from "../components/stake/CarSelection";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";

const races = [
  {
    race_id: "SLR-0001",
    country: "saudi-arabia",
    name: "Formula 1 STC Saudi Arabian Grand Prix 2023",
    month_date: "MAR",
    day_date: "17-18",
    status: "live",
    staked: 89,
    racetrack: "saudia-arabia",
  },
  {
    race_id: "SLR-0002",
    country: "australia",
    name: "Formula 1 Rolex Australian Grand Prix 2023",
    month_date: "MAR-APR",
    day_date: "31-02",
    status: "upcoming",
    staked: 15,
    racetrack: "australia",
  },
  {
    race_id: "SLR-0003",
    country: "azerbaijan",
    name: "Formula 1 Azerbaijan Grand Prix 2023",
    month_date: "APR",
    day_date: "28-30",
    status: "upcoming",
    staked: 9,
    racetrack: "azerbaijan",
  },
];
export default function Stake() {
  const [raceID, setRaceID] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const close = () => setModalOpen(false);
  const open = () => setModalOpen(true);
  const controlModal = () => (modalOpen ? close() : open());

  const nfts = useNFTs();
  // const pools = usePools();

  return (
    <>
      <AnimatePresence>
        <div className="stake">
          <div className="stake-content">
            <div className="stake-title">Pick a race</div>
            <div className="stake-items-container">
              <div className="stake-items">
                <div className="stake-items-content">
                  {races.map((r) => (
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
