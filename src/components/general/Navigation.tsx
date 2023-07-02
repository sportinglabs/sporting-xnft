import { useState } from "react";
import { Link } from "react-router-dom";
import Tutorial from "../../pages/tutorial/Tutorial";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faWarehouse,
  faChartLine,
  faBoltLightning,
  faFlagCheckered,
  faRankingStar,
  faBolt,
  faGear,
  faToolbox,
  faTools,
} from "@fortawesome/free-solid-svg-icons";

import { motion } from "framer-motion";

export default function Navigation(props: { id: number }) {
  const [gameMechanics, setGameMechanics] = useState(false);
  const closeGameMechanics = () => {
    setGameMechanics(false);
  };
  return (
    <>
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
                <FontAwesomeIcon icon={faTools} />
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
          <motion.button
            className="navigation-button navigation-last"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
              duration: 0.1,
              delay: 0.5,
            }}
            viewport={{ once: false }}
            onClick={() => {
              setGameMechanics(true);
            }}
          >
            <FontAwesomeIcon icon={faBolt} />
          </motion.button>
        </div>
      </motion.div>
      {gameMechanics && <Tutorial onTutorialClose={closeGameMechanics} />}
    </>
  );
}
