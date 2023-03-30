import { StakePool } from "@builderz/sporting-f1-sdk";
import { useConnection } from "@solana/wallet-adapter-react";
import { useEffect, useState } from "react";

export const useConfig = () => {
  const [config, setConfig] = useState<any>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const { connection } = useConnection();

  useEffect(() => {
    const fetchConfig = async () => {
      setLoading(true);
      try {
        const config = await (await fetch("/config.json")).json();
        // TODO:
        for (const race of config) {
          console.log(race.poolAddress);
          const stakePool = await StakePool.fromAccountAddress(
            connection,
            race.poolAddress
          );
        }

        setConfig(config);
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
