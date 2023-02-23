import { useEffect, useState } from "react";
import { useSolanaConnection, usePublicKeys } from "../hooks/xnft-hooks"
import { getNFTsByOwner } from "../utils/nfts";

export const useNFTs = () => {
  const [nfts, setNfts] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const publicKey = usePublicKeys();
  console.log(publicKey);
  
  const connection = useSolanaConnection();

  useEffect(() => {
    const fetchNFTs = async () => {
      setLoading(true);
      setError(false);

      try {
        const nfts = await getNFTsByOwner(publicKey)
        setNfts(nfts)
        setLoading(false)
      } catch (error) {
        console.error(error)
        setError(true)
        setLoading(false)
      }
    }

    console.log("fetching nfts");
    fetchNFTs()
  }, [connection, publicKey])

  return { nfts, loading, error }
}