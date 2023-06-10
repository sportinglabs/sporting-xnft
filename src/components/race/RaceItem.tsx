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
        <div className="race-details"></div>
        <div className="race-image">
          <img src={props.image} alt="nft" />
        </div>
      </motion.div>
    </a>
  );
}
