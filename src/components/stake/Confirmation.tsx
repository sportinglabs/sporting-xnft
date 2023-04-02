import { stake, unstake } from "@builderz/sporting-f1-sdk";
import { useConnection } from "@solana/wallet-adapter-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { useWallet } from "../../hooks/useWallet";
import { toast } from "react-toastify";

export const StakingConfirmation = ({ nft, closeConfirmScreen }: any) => {
  const [loading, setLoading] = useState<boolean>(false);

  const { connection } = useConnection();
  const wallet = useWallet()

  const handleEvent = async () => {
    setLoading(true);

    toast.loading(`${nft.stakeEntry ? 'Unstaking' : 'Staking'}`)

    try {
      if (nft.stakeEntry) {
        const res = await unstake(connection, wallet, nft.tokenAddress)
        toast.success('Unstaked')
      } else {
        const res = await stake(connection, wallet, nft.tokenAddress)
        toast.success('Staked')
      }
    } catch (error) {
      console.log(error);
      toast.error("Error, something went wrong")
    }

    setLoading(false);
  };

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
          <div className="mint-result-text">
            Ready to {nft.stakeEntry ? "Unstake" : "Stake"}?
          </div>
          {/* TODO */}
          <div className="mint-result-button">
            <button
              className={loading ? " btn loading" : ""}
              onClick={handleEvent}
            >
              {nft.stakeEntry ? "Unstake" : "Stake"}
            </button>
          </div>
        </motion.div>
      </motion.div>
      <div className="car-selection-button">
        <button onClick={closeConfirmScreen}>Back</button>
      </div>
    </>
  );
};
