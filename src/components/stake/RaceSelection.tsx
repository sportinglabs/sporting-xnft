import { motion } from "framer-motion";
import { useEffect } from "react";
export default function RaceSelection(props: {
  country: string;
  poolAddress: string;
  name: string;
  month_date: string;
  day_date: string;
  status?: string;
  staked?: number;
  racetrack: string;
  isModalOpen: boolean;
  controlModal: Function;
  // setPoolAddress: Function;
  setRace: Function;
}) {
  return (
    <motion.div
      className={"race-selection " + props.country}
      whileInView={{ opacity: 1 }}
      whileHover={{ scale: 0.95 }}
      whileTap={{ scale: 0.9 }}
      onClick={() => {
        // props.setPoolAddress(props.poolAddress);
        props.setRace({
          country: props.country,
          poolAddress: props.poolAddress,
          name: props.name,
          month_date: props.month_date,
          day_date: props.day_date,
          status: props.status,
          staked: props.staked,
          racetrack: props.racetrack,
        })
        props.controlModal();
      }}
      transition={{ duration: 0.2 }}
    >
      <div className="race-selection-detail race-date">
        <div className="race-selection-content">
          <div className="race-selection-date">
            <div className="race-selection-monthspan">{props.month_date}</div>
            <div className="race-selection-dayspan">{props.day_date}</div>
          </div>
          <div className="race-selection-trackmap">
            <img
              src={
                "/racemaps/" +
                props.racetrack +
                ".svg"
              }
              alt={"racetrack" + props.racetrack}
            />
          </div>
        </div>
      </div>
      <div className="race-selection-detail race-info">
        <div className="race-selection-content">
          <div className="race-selection-info">
            <div className="race-selection-name">{props.country}</div>
            <div className="race-selection-description">{props.name}</div>
          </div>
        </div>
      </div>
      <div className="race-selection-detail-3 race-status">
        <div className="race-selection-buttons">
          <button className={"race-live-status " + props.status}>
            {props.status}
          </button>
          <button className="race-staked-amount">{props.staked || 0} staked</button>
        </div>
      </div>
    </motion.div>
  );
}
