import { motion } from "framer-motion";

export default function RaceItem(props: {
  poolAddress: string;
  country: string;
  name: string;
  racetrack: string;
  date: { start: number; end: number; month: string };
  status: string;
  image: string;
}) {
  const anchor = "/race/track?pool=" + props.poolAddress;
  const raceClassNameFinished = "race-item finished";
  const raceClassName = "race-item";
  return (
    <a href={anchor}>
      <motion.div
        className={
          props.status == "finished" ? raceClassNameFinished : raceClassName
        }
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          duration: 0.2,
          delay: 0.8,
        }}
        viewport={{ once: false }}
      >
        <div className="race-details">
          <div className="race-details-top">
            {props.status == "finished" && (
              <div className="race-details-status red">
                <div className="blob red"></div>
                <div className="race-details-text">expired</div>
              </div>
            )}
            {props.status == "live" && (
              <div className="race-details-status green">
                <div className="blob green"></div>
                <div className="race-details-text">live</div>
              </div>
            )}
            {props.status == "upcoming" && (
              <div className="race-details-status yellow">
                <div className="blob yellow"></div>
                <div className="race-details-text">upcoming</div>
              </div>
            )}

            <div className="race-date">
              <div className="race-date-days">
                {props.date.start.toString() + "-" + props.date.end.toString()}
              </div>
              <div className="race-date-month">{props.date.month}</div>
            </div>
          </div>
          <div className="race-details-mid">
            <div className="race-title">{props.country}</div>
            <div className="race-description">{props.racetrack}</div>
            <div className="race-stake">
              <div className="race-stake-amount">25</div>Staked
            </div>
          </div>
        </div>
        <div className="race-image">
          <img src={props.image} alt="nft" />
        </div>
      </motion.div>
    </a>
  );
}
