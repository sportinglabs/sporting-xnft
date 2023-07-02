import { motion } from "framer-motion";

export default function RaceItem(props: {
  poolAddress: string;
  country: string;
  name: string;
  racetrack: string;
  date: {
    startDay: number;
    endDay: number;
    startMonth: number;
    endMonth: number;
  };
  status: string;
  image: string;
}) {
  const raceClassNameFinished = "race-item finished";
  const raceClassName = "race-item";
  return (
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
      <div className="race-item-name">{props.name}</div>
      <div className="race-item-date">
        {props.date.startDay}.{props.date.startMonth} - {props.date.endDay}.
        {props.date.endMonth}
      </div>
    </motion.div>
  );
}
