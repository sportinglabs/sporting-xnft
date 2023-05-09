import { motion } from "framer-motion";

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

export const NftItem = ({ nft, handleClick, withPoints }: any) => {
  return (
    <motion.div
      className="car-selection-item"
      variants={dropIn}
      initial="hidden"
      animate="visible"
      exit="exit"
      whileHover={{ scale: 0.95 }}
      whileTap={{ scale: 0.9 }}
      transition={{ duration: 0.2 }}
      key={nft.id}
      onClick={() => handleClick && handleClick(nft)}
    >
      <div className="car-selection-item-content">
        <div className="car-selection-cover">
          <img src={nft.content.files[0]?.uri} />
        </div>
        <div className="car-selection-name">
          {nft.content.metadata.name + (nft.stakeEntry ? " (staked)" : "")}
        </div>
        {withPoints && (
          <div>
            {nft.points} {nft.points === 1 ? "point" : "points"}
          </div>
        )}
        <div className="car-selection-metadata">
          {nft.content.metadata.attributes.length > 1 &&
            nft.content.metadata.attributes.map((m: any) => (
              <div key={m.trait_type} className="car-selection-attribute">
                <div className="car-selection-attribute-name">
                  {m.trait_type}
                </div>
                <div className="car-selection-attribute-value">{m.value}</div>
              </div>
            ))}
        </div>
      </div>
    </motion.div>
  );
};
