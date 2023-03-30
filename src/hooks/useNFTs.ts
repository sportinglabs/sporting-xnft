import { useConnection } from "@solana/wallet-adapter-react";
import { useEffect, useState } from "react";
import { getNfts } from "../utils/nfts";
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
        const nfts = await getNfts(publicKey);
        console.log(nfts);

        setNfts(nfts);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setError(true);
        setLoading(false);
      }
    };

    if (publicKey) {
      console.log("fetching nfts");
      fetchNFTs();
    }
  }, [connection, publicKey]);

  return { nfts, loading, error };
};
