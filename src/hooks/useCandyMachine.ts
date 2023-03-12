import { useConnection } from "@solana/wallet-adapter-react";
import { useEffect, useState } from "react";
import { useWallet } from "./useWallet";
import { CandyMachine } from "@metaplex-foundation/js";
import { getCandyMachine } from "../utils/candyMachine";

export const useCandyMachine = () => {
  const [cm, setCm] = useState<CandyMachine>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const { publicKey } = useWallet();

  const { connection } = useConnection();

  useEffect(() => {
    const fetchNFTs = async () => {
      setLoading(true);
      setError(false);

      try {
        const cm = await getCandyMachine(
          "4J9n1kDaK4Y7oyN2tBt93HxGr9kLfLK8t9hTGr39JgD8",
          connection
        );
        setCm(cm);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setError(true);
        setLoading(false);
      }
    };

    console.log("fetching nfts");
    fetchNFTs();
  }, [connection, publicKey]);

  return { cm, loading, error };
};
