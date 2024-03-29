import { PublicKey } from "@solana/web3.js";
import axios from "axios";

export type checkNftRes = {
  mint: string;
  royaltiesPaid: boolean;
  royaltiesToPay: number;
  royaltiesPaidAmount: number;
  status: string;
};

// export const getNfts = async (owner: PublicKey) => {
//   const nfts = [];

//   try {
//     const url = `${
//       import.meta.env.VITE_RPC_URL
//     }/v0/addresses/${owner.toBase58()}/nfts?pageNumber=1`;

//     const { data } = await axios.get(url);
//     nfts.push(...data.nfts);

//     for (let index = 2; index < data.numberOfPages + 1; index++) {
//       const { data } = await axios.get(
//         `${
//           import.meta.env.VITE_RPC_URL
//         }/v0/addresses/${owner.toBase58()}/nfts?pageNumber=${index}`
//       );
//       nfts.push(...data.nfts);
//     }

//     return nfts;
//   } catch (error) {
//     throw error;
//   }
// };

// TODO: DAS API pagination
export const getAssetsByOwner = async (owner: string) => {
  const sortBy = {
    sortBy: "created",
    sortDirection: "asc",
  };
  const limit = 1000;
  const page = 1;
  const before = "";
  const after = "";
  const { data } = await axios.post(import.meta.env.VITE_RPC_URL, {
    jsonrpc: "2.0",
    id: "my-id",
    method: "getAssetsByOwner",
    params: [
      owner, // "5AsKgxeYRaHRcZivZDXoCK6PmVCbc7Nnc4LURpBV7tPv",
      sortBy,
      limit,
      page,
      before,
      after,
    ],
  });

  return data.result.items;
};

export const getAssets = async (assetId: string) => {
  const { data } = await axios.post(import.meta.env.VITE_RPC_URL, {
    jsonrpc: "2.0",
    id: "my-id",
    method: "getAsset",
    params: [assetId],
  });
  return data.result;
};
