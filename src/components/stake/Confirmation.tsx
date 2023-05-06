import { stake, unstake } from "@builderz/sporting-f1-sdk";
import { useConnection } from "@solana/wallet-adapter-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { useWallet } from "../../hooks/useWallet";
import { toast } from "react-toastify";
import { PublicKey } from "@solana/web3.js";
import { fetchPool } from "../../utils/pools";

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

export const StakingConfirmation = ({
  nft,
  closeConfirmScreen,
  race,
  reload,
}: any) => {
  const [loading, setLoading] = useState<boolean>(false);

  const { connection } = useConnection();
  const wallet = useWallet();

  const handleEvent = async () => {
    setLoading(true);

    let toastId = toast.loading(`${nft.stakeEntry ? "Unstaking" : "Staking"}`);

    try {
      const pool = await fetchPool(connection, race.poolAddress)
      console.log(pool.identifier);
      
      if (nft.stakeEntry) {
        const res = await unstake(
          connection,
          wallet,
          new PublicKey(nft.id),
          Number(pool.identifier)
        );

        console.log(res);

        toast.update(toastId, {
          render: "Unstaked",
          type: toast.TYPE.SUCCESS,
          isLoading: false,
          autoClose: 2000,
        });
        reload();
        closeConfirmScreen();
      } else {
        const res = await stake(
          connection,
          wallet,
          new PublicKey(nft.id),
          Number(pool.identifier)
        );

        console.log(res);

        toast.update(toastId, {
          render: "Staked",
          type: toast.TYPE.SUCCESS,
          isLoading: false,
          autoClose: 2000,
        });
        reload();
        closeConfirmScreen();
      }
    } catch (error) {
      console.log(error);
      toast.update(toastId, {
        render: "Error",
        type: toast.TYPE.ERROR,
        isLoading: false,
        autoClose: 2000,
      });
    }

    setLoading(false);
  };

  return (
    <motion.div
      className="stake-confirm"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.2 }}
    >
      <motion.div className="stake-confirm-container">
        <motion.div className="stake-confirm-image">
          <img src={nft.content.files[0]?.uri} alt="image of the NFT" />
        </motion.div>
        <motion.div className="stake-confirm-name">{nft.content.metadata.name}</motion.div>
        <motion.div className="stake-confirm-metadata">
          <motion.div className="stake-confirm-metadata-content">
            {nft.content.metadata.attributes.length > 1 &&
              nft.content.metadata.attributes.map((m: any) => (
                <div key={m.trait_type} className="stake-confirm-attribute">
                  <div className="stake-confirm-attribute-name">
                    {m.trait_type}
                  </div>
                  <div className="stake-confirm-attribute-value">{m.value}</div>
                </div>
              ))}
          </motion.div>
        </motion.div>
        <div className="stake-confirm-button">
          {race.status === "Upcoming" && (
            <button onClick={handleEvent} className={loading ? "btn loading" : ""}>
            {nft.stakeEntry ? "Unstake" : "Stake"}
          </button>
          )}
          {race.status === "Active" && (
            <button disabled onClick={handleEvent} className={loading ? "btn loading" : ""}>
            {nft.stakeEntry ? "Unstake" : "Stake"}
          </button>
          )}
          {race.status === "Finished" && (
            <button disabled={!nft.stakeEntry} onClick={handleEvent} className={loading ? "btn loading" : ""}>
            {nft.stakeEntry ? "Unstake" : "Stake"}
          </button>
          )}
        </div>
        <div className="stake-confirm-button stake-confirm-back-button">
          <button onClick={closeConfirmScreen}>back</button>
        </div>
      </motion.div>
    </motion.div>
  );
};
