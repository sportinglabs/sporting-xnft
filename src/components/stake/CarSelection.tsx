import car from "../assets/car.png";
import { motion } from "framer-motion";
import { useNFTs } from "../../hooks/useNFTs";

const dropIn = {
  hidden: {
    y: "100vh",
    opacity: 0,
  },
  visible: {
    y: "0",
    opacity: 1,
    transition: {
      duration: 0.2,
      ease: [0, 0.1, 0.15, 0.2],
    },
  },
  exit: {
    y: "-100vh",
    opacity: 0,
  },
};

export function CarSelection(props: {
  controlModal: Function;
  race_id: string;
}) {
  const nfts = useNFTs();

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
            <div className="car-selection-item">
              <div className="car-selection-name">Sporting #001</div>
              <div className="car-selection-metadata">
                <div className="car-selection-attribute">
                  <div className="car-selection-attribute-name">Model</div>
                  <div className="car-selection-attribute-value">
                    Mercedes AMG W13
                  </div>
                </div>
                <div className="car-selection-attribute">
                  <div className="car-selection-attribute-name">Engine</div>
                  <div className="car-selection-attribute-value">
                    Mercedes AMG W13
                  </div>
                </div>
                <div className="car-selection-attribute">
                  <div className="car-selection-attribute-name">Tyres</div>
                  <div className="car-selection-attribute-value">
                    Mercedes AMG W13
                  </div>
                </div>
                <div className="car-selection-attribute">
                  <div className="car-selection-attribute-name">Driver</div>
                  <div className="car-selection-attribute-value">
                    Mercedes AMG W13
                  </div>
                </div>
              </div>
            </div>
            <div className="car-selection-item">
              <div className="car-selection-name">Sporting #001</div>
              <div className="car-selection-metadata">
                <div className="car-selection-attribute">
                  <div className="car-selection-attribute-name">Model</div>
                  <div className="car-selection-attribute-value">
                    Mercedes AMG W13
                  </div>
                </div>
                <div className="car-selection-attribute">
                  <div className="car-selection-attribute-name">Engine</div>
                  <div className="car-selection-attribute-value">
                    Mercedes AMG W13
                  </div>
                </div>
                <div className="car-selection-attribute">
                  <div className="car-selection-attribute-name">Tyres</div>
                  <div className="car-selection-attribute-value">
                    Mercedes AMG W13
                  </div>
                </div>
                <div className="car-selection-attribute">
                  <div className="car-selection-attribute-name">Driver</div>
                  <div className="car-selection-attribute-value">
                    Mercedes AMG W13
                  </div>
                </div>
              </div>
            </div>
            <div className="car-selection-item">
              <div className="car-selection-name">Sporting #001</div>
              <div className="car-selection-metadata">
                <div className="car-selection-attribute">
                  <div className="car-selection-attribute-name">Model</div>
                  <div className="car-selection-attribute-value">
                    Mercedes AMG W13
                  </div>
                </div>
                <div className="car-selection-attribute">
                  <div className="car-selection-attribute-name">Engine</div>
                  <div className="car-selection-attribute-value">
                    Mercedes AMG W13
                  </div>
                </div>
                <div className="car-selection-attribute">
                  <div className="car-selection-attribute-name">Tyres</div>
                  <div className="car-selection-attribute-value">
                    Mercedes AMG W13
                  </div>
                </div>
                <div className="car-selection-attribute">
                  <div className="car-selection-attribute-name">Driver</div>
                  <div className="car-selection-attribute-value">
                    Mercedes AMG W13
                  </div>
                </div>
              </div>
            </div>
            <div className="car-selection-item">
              <div className="car-selection-name">Sporting #001</div>
              <div className="car-selection-metadata">
                <div className="car-selection-attribute">
                  <div className="car-selection-attribute-name">Model</div>
                  <div className="car-selection-attribute-value">
                    Mercedes AMG W13
                  </div>
                </div>
                <div className="car-selection-attribute">
                  <div className="car-selection-attribute-name">Engine</div>
                  <div className="car-selection-attribute-value">
                    Mercedes AMG W13
                  </div>
                </div>
                <div className="car-selection-attribute">
                  <div className="car-selection-attribute-name">Tyres</div>
                  <div className="car-selection-attribute-value">
                    Mercedes AMG W13
                  </div>
                </div>
                <div className="car-selection-attribute">
                  <div className="car-selection-attribute-name">Driver</div>
                  <div className="car-selection-attribute-value">
                    Mercedes AMG W13
                  </div>
                </div>
              </div>
            </div>
            <div className="car-selection-item">
                <div className="car-selection-name">Sporting #001</div>
                <div className="car-selection-metadata">
                  <div className="car-selection-attribute">
                    <div className="car-selection-attribute-name">Model</div>
                    <div className="car-selection-attribute-value">
                      Mercedes AMG W13
                    </div>
                  </div>
                  <div className="car-selection-attribute">
                    <div className="car-selection-attribute-name">Engine</div>
                    <div className="car-selection-attribute-value">
                      Mercedes AMG W13
                    </div>
                  </div>
                  <div className="car-selection-attribute">
                    <div className="car-selection-attribute-name">Tyres</div>
                    <div className="car-selection-attribute-value">
                      Mercedes AMG W13
                    </div>
                  </div>
                  <div className="car-selection-attribute">
                    <div className="car-selection-attribute-name">Driver</div>
                    <div className="car-selection-attribute-value">
                      Mercedes AMG W13
                    </div>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
