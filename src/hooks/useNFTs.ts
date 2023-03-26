import { useConnection } from "@solana/wallet-adapter-react";
import { useEffect, useState } from "react";
import { getNFTsByOwner } from "../utils/nfts";
import { useWallet } from "./useWallet";

export const useNFTs = () => {
  const [nfts, setNfts] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const { publicKey } = useWallet();

  const connection = useConnection();

  useEffect(() => {
    const fetchNFTs = async () => {
      setLoading(true);
      setError(false);

      try {
        const nfts = await getNFTsByOwner(publicKey);
        setNfts(nfts);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setError(true);
        setLoading(false);
      }
    };

    console.log("fetching nfts");
    if (publicKey) {
      fetchNFTs();
    }
  }, [connection, publicKey]);

  return { nfts, loading, error };
};
