import { useConnection } from "@solana/wallet-adapter-react";
import { useEffect, useState } from "react";
import { getNfts } from "../utils/nfts";
import { useWallet } from "./useWallet";
import { PublicKey } from "@solana/web3.js";
import { PROGRAM_ID, StakeEntry } from "@builderz/sporting-f1-sdk";
import { getPlayersByNftMints } from "@builderz/sporting-f1-sdk";

export const useNFTs = (reload?: number, poolAddress?: string) => {
  const [nfts, setNfts] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const { publicKey } = useWallet();
  const { connection } = useConnection();

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

        const playerAccounts = await getPlayersByNftMints(
          connection,
          filtered.map((nft) => new PublicKey(nft.tokenAddress))
        );

        const withPoints = filtered.map((nft) => {
          const playerAccount = playerAccounts.find(
            (account) => account.carMint === nft.tokenAddress
          );

          return {
            ...nft,
            points: playerAccount?.data.points || 0,
          };
        });

        if (poolAddress) {
          const withStakingData = await Promise.all(
            withPoints.map(async (nft) => {
              const [stakeEntryPda] = PublicKey.findProgramAddressSync(
                [
                  Buffer.from("stake-entry"),
                  new PublicKey(poolAddress).toBuffer(),
                  new PublicKey(nft.tokenAddress).toBuffer(),
                  publicKey.toBuffer(),
                ],
                PROGRAM_ID
              );

              try {
                const stakeEntry = await StakeEntry.fromAccountAddress(
                  connection,
                  stakeEntryPda
                );
                return { ...nft, stakeEntry };
              } catch (error) {
                return { ...nft, stakeEntry: null };
              }
            })
          );

          setNfts(withStakingData);
        } else {
          setNfts(withPoints);
        }
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
  }, [connection, publicKey, poolAddress, reload]);

  return { nfts, loading, error };
};
