import { useEffect, useState } from "react";

export const useConfig = () => {
  const [config, setConfig] = useState<any>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchConfig = async () => {
      setLoading(true);
      try {
        const config = await (await fetch("/config.json")).json();
        // TODO:
        for (const race of config) {
          console.log(race.poolAddress);
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
