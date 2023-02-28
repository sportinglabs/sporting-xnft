import car from "../assets/car.png";
import { motion } from "framer-motion";
export function CarSelection(props: {
  controlModal: Function;
  race_id: string;
}) {
  return (
    <motion.div className="car-selection" onClick={() => props.controlModal()}>
      {props.race_id}
    </motion.div>
  );
}
