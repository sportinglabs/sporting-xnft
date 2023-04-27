import { StakePool } from "@builderz/sporting-f1-sdk";
import { Connection, PublicKey } from "@solana/web3.js";

export const fetchPool = async (
  connection: Connection,
  poolAddress: string
) => {
  const pool = await StakePool.fromAccountAddress(
    connection,
    new PublicKey(poolAddress)
  );

  return pool.pretty();
};
