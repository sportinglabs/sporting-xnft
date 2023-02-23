import { PublicKey, Connection } from "@solana/web3.js";
import axios from "axios";

export const getNFTsByOwner = async(
    owner: PublicKey,
  ) => {     
    let nfts = [];

    const url = `https://api.helius.xyz/v0/addresses/${owner.toBase58()}/nfts?api-key=6ab23117-c35c-4e3c-94f2-1ec14d058d0d&pageNumber=1`
    const { data } = await axios.get(url);    
    nfts.push(...data.nfts)

    for (let index = 2; index < data.numberOfPages + 1; index++) {
      const { data } = await axios.get(`https://api.helius.xyz/v0/addresses/${owner.toBase58()}/nfts?api-key=6ab23117-c35c-4e3c-94f2-1ec14d058d0d&pageNumber=${index}`);      
      nfts.push(...data.nfts)
    }

    return nfts;
}