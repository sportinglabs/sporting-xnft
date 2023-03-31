import { motion } from "framer-motion";
import { useNFTs } from "../../hooks/useNFTs";
import { Loading } from "../Loading";

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
  const nfts = useNFTs();

  const handleClick = (e: any) => {
    // TODO
  };

  nfts.loading && <Loading />;
  nfts.error && <div>error</div>;

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
        <div className="car-selection-title">Choose your car</div>
        <div className="car-selection-list">
          <div className="car-selection-list-content">
            {nfts.nfts.map((i) => (
              <motion.div
                key={i.tokenAddress}
                className="car-selection-item"
                variants={dropIn}
                initial="hidden"
                animate="visible"
                exit="exit"
                whileHover={{ scale: 0.95 }}
                whileTap={{ scale: 0.9 }}
                onClick={handleClick}
                transition={{ duration: 0.2 }}
              >
                <div className="car-selection-item-content">
                  <div className="car-selection-cover">
                    <img src={i.imageUrl} />
                  </div>
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
        <div className="car-selection-button">
          <button onClick={() => props.controlModal()}>Back</button>
        </div>
      </div>
    </motion.div>
  );
}
