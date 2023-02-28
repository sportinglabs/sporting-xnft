import car from "../assets/car.png";
import { motion } from "framer-motion";
import { useNFTs } from "../../hooks/useNFTs";
import { useState } from "react";

const dropIn = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.2,
      ease: [0, 0.1, 0.15, 0.2],
    },
  },
  exit: {
    opacity: 0,
  },
};

export function CarSelection(props: {
  controlModal: Function;
  race_id: string;
}) {
  const nfts = useNFTs().nfts;

  return (
    <motion.div
      className="car-selection"
      onClick={() => props.controlModal()}
      variants={dropIn}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div
        className="car-selection-content"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="car-selection-title">Choose your cars</div>
        <div className="car-selection-list">
          <div className="car-selection-list-content">
            {nfts.map((i) => (
              <motion.div
                className="car-selection-item"
                variants={dropIn}
                initial="hidden"
                animate="visible"
                exit="exit"
                whileHover={{ scale: 0.95 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => {
                  console.log(nfts);
                  //TODO: STAKING FUNKTION EINFÜGEN
                }}
                transition={{ duration: 0.2 }}
              >
                <div className="car-selection-item-content">
                  <div className="car-selection-name">{i.name}</div>
                  <div className="car-selection-metadata">
                    {i.traits.length > 1 &&
                      i.traits.map((m: any) => (
                        <div className="car-selection-attribute">
                          <div className="car-selection-attribute-name">
                            {m.trait_type}
                          </div>
                          <div className="car-selection-attribute-value">
                            {m.value}
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
