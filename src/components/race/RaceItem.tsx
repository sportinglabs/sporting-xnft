import { motion } from "framer-motion";

export default function RaceItem(props: {
  poolAddress: string;
  country: string;
  name: string;
  racetrack: string;
  date: { day: number; month: number; year: number };
  status: string;
  image: string;
}) {
  const anchor = "/race/track?pool=" + props.poolAddress;
  return (
    <a href={anchor}>
      <motion.div
        className="race-item"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          duration: 0.2,
          delay: 0.8,
        }}
        viewport={{ once: false }}
      >
        <div className="race-item-content">
          <div className="race-item-cover">
            <img src={props.image} alt="nft" />
          </div>
          <div className="race-item-details">
            <div className="race-item-date">
              {props.date.day.toString() +
                "/" +
                props.date.month.toString() +
                "/" +
                props.date.year.toString() +
                " - " +
                props.country.toString()}
            </div>
            <div className="race-item-name">{props.name}</div>
            <div className="race-item-track">{props.racetrack}</div>
          </div>
        </div>
        <div className="race-item-status">
          {props.status}
          {props.status == "expired" && <div className="blob red"></div>}
          {props.status == "live" && <div className="blob green"></div>}
          {props.status == "upcoming" && <div className="blob yellow"></div>}
        </div>
      </motion.div>
    </a>
  );
}
