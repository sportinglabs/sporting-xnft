import { useConnection } from "@solana/wallet-adapter-react";
import { useEffect, useState } from "react";
import { getAllPlayers } from "@builderz/sporting-f1-sdk";
import { ParsedAccountData } from "@solana/web3.js";
import axios from "axios";

export const useLeaderboard = () => {
  const [leaderboard, setLeaderboard] = useState<any>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const { connection } = useConnection();

  useEffect(() => {
    const fetchLeaderboard = async () => {
      setLoading(true);
      setError(false);

      try {
        const leaderboard = await getAllPlayers(connection);
        const withUserNames = await Promise.all(
          leaderboard.splice(0, 10).map(async (player) => {
            const holder = (
              await connection.getTokenLargestAccounts(player.data.carMint)
            ).value[0].address;

            const largestAccountInfo = await connection.getParsedAccountInfo(
              holder
            );

            const ownerWallet = (
              largestAccountInfo.value?.data as ParsedAccountData
            ).parsed.info.owner;

            console.log(ownerWallet);

            const backpackUsername = await axios.get(
              `https://xnft-api-server.xnfts.dev/v1/users/fromPubkey?pubkey=${ownerWallet}&blockchain=solana`
            );

            return {
              ...player,
              username: backpackUsername.data.username,
              ownerWallet: ownerWallet,
            };
          })
        );

        setLeaderboard(withUserNames);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setError(true);
        setLoading(false);
      }
    };

    console.log("fetching leaderboard");
    fetchLeaderboard();
  }, [connection]);

  return { leaderboard, loading, error };
};
