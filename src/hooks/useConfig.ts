import { StakePool } from "@builderz/sporting-f1-sdk";
import { useConnection } from "@solana/wallet-adapter-react";
import { useEffect, useState } from "react";
import { PublicKey } from "@solana/web3.js";

export const useConfig = () => {
  const [config, setConfig] = useState<any>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const { connection } = useConnection();

  useEffect(() => {
    const fetchConfig = async () => {
      setLoading(true);
      try {
        let config = await (await fetch("/config.json")).json();
        const updatedConfig = await Promise.all(
          config.map(async (race: any) => {
            if (race.poolAddress) {
              const stakePool = await StakePool.fromAccountAddress(
                connection,
                new PublicKey(race.poolAddress)
              );
              // Add new properties to the race object
              race.totalStaked = Number(stakePool.totalStaked);
              race.state = stakePool.poolState;
            }
            return race;
          })
        );

        setConfig(updatedConfig);
      } catch (error) {
        console.log(error);
        setError(true);
      }
      setLoading(false);
    };
    // Fetching config
    fetchConfig();
  }, []);

  return { config, loading, error };
};
