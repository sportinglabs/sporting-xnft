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
        //filtering NFT's to only load items from the sporting collection
        const filtered = [];
        for (let i = 0; i < nfts.length; i++) {
          if (
            nfts[i].collectionAddress ==
            "Et9ckpQCXFN5PsiYN781AczSVuQYyGEdDEPDJ7jrxz4c"
          ) {
            filtered.push(nfts[i]);
          }
        }

        console.log(filtered);

        setNfts(filtered);
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
