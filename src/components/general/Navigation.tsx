import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faWarehouse,
  faChartLine,
  faBoltLightning,
  faFlagCheckered,
  faRankingStar,
} from "@fortawesome/free-solid-svg-icons";

import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Navigation(props: { id: number }) {
  return (
    <motion.div
      className="navigation"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{
        duration: 0.1,
        delay: 0,
      }}
      viewport={{ once: false }}
    >
      <div className="navigation-content">
        <Link to={"/"}>
          {props.id == 1 ? (
            <motion.button
              className="navigation-button navigation-first navigation-active"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{
                duration: 0.1,
                delay: 0.1,
              }}
              viewport={{ once: false }}
            >
              <FontAwesomeIcon icon={faHome} />
            </motion.button>
          ) : (
            <motion.button
              className="navigation-button navigation-first"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{
                duration: 0.1,
                delay: 0.1,
              }}
              viewport={{ once: false }}
            >
              <FontAwesomeIcon icon={faHome} />
            </motion.button>
          )}
        </Link>
        <Link to={"/garage"}>
          {props.id == 2 ? (
            <motion.button
              className="navigation-button navigation-active"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{
                duration: 0.1,
                delay: 0.2,
              }}
              viewport={{ once: false }}
            >
              <FontAwesomeIcon icon={faWarehouse} />
            </motion.button>
          ) : (
            <motion.button
              className="navigation-button"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{
                duration: 0.1,
                delay: 0.2,
              }}
              viewport={{ once: false }}
            >
              <FontAwesomeIcon icon={faWarehouse} />
            </motion.button>
          )}
        </Link>
        <Link to={"/race"}>
          {props.id == 3 ? (
            <motion.button
              className="navigation-button navigation-active"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{
                duration: 0.1,
                delay: 0.3,
              }}
              viewport={{ once: false }}
            >
              <FontAwesomeIcon icon={faFlagCheckered} />
            </motion.button>
          ) : (
            <motion.button
              className="navigation-button"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{
                duration: 0.1,
                delay: 0.3,
              }}
              viewport={{ once: false }}
            >
              <FontAwesomeIcon icon={faFlagCheckered} />
            </motion.button>
          )}
        </Link>
        <Link to={"/leaderboard"}>
          {props.id == 4 ? (
            <motion.button
              className="navigation-button navigation-active"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{
                duration: 0.1,
                delay: 0.4,
              }}
              viewport={{ once: false }}
            >
              <FontAwesomeIcon icon={faRankingStar} />
            </motion.button>
          ) : (
            <motion.button
              className="navigation-button"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{
                duration: 0.1,
                delay: 0.4,
              }}
              viewport={{ once: false }}
            >
              <FontAwesomeIcon icon={faRankingStar} />
            </motion.button>
          )}
        </Link>
        <Link to={"/garage"}>
          {props.id == 6 ? (
            <motion.button
              className="navigation-button navigation-last navigation-active"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{
                duration: 0.1,
                delay: 0.5,
              }}
              viewport={{ once: false }}
            >
              <FontAwesomeIcon icon={faBoltLightning} />
            </motion.button>
          ) : (
            <motion.button
              className="navigation-button navigation-last"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{
                duration: 0.1,
                delay: 0.5,
              }}
              viewport={{ once: false }}
            >
              <FontAwesomeIcon icon={faChartLine} />
            </motion.button>
          )}
        </Link>
      </div>
    </motion.div>
  );
}
