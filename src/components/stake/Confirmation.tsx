import { motion } from "framer-motion";

export const StakingConfirmation = ({ nft, closeConfirmScreen }: any) => {
  console.log(nft);

  const handleEvent = async() => {
    // TODO
  }

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.2, delay: 0 }}
        className="mint-process"
      >
        <motion.div
          className="mint-result"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.2, delay: 0 }}
        >
          <div className="car-selection-item-content">
            <div className="car-selection-cover">
              <img src={nft.imageUrl} />
            </div>
            <div className="car-selection-name">{nft.name}</div>
            <div className="car-selection-metadata">
              {nft.traits.length > 1 &&
                nft.traits.map((m: any) => (
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
          <div className="mint-result-text">Ready to Stake/Unstake?</div>
          {/* TODO */}
          <div className="mint-result-button">
            <button onClick={handleEvent}>Stake/Unstake</button>
          </div>
        </motion.div>
      </motion.div>
      <div className="car-selection-button">
        <button onClick={closeConfirmScreen}>Back</button>
      </div>
    </>
  );
};
