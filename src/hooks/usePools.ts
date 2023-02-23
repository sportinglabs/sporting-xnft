import { useConnection } from "@solana/wallet-adapter-react";
import { useEffect, useState } from "react";
import { usePublicKeys } from "./xnft-hooks";
import { getAllPools } from "../sdk";
import { Wallet } from "@coral-xyz/anchor";

export const usePools = () => {
  const [pools, setPools] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const publicKey = usePublicKeys();
  console.log(publicKey);
  
  const { connection } = useConnection();  

  useEffect(() => {
    const fetchPools = async () => {
      setLoading(true);
      setError(false);

      try {
        const pools = await getAllPools(connection)
        setPools(pools)
        setLoading(false)
      } catch (error) {
        console.error(error)
        setError(true)
        setLoading(false)
      }
    }

    console.log("fetching pools");
    fetchPools()
  }, [])

  return { pools, loading, error }
}