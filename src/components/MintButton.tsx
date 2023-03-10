import { PublicKey } from "@solana/web3.js";
import {
  getMerkleProof,
  Metaplex,
  walletAdapterIdentity,
} from "@metaplex-foundation/js";
import { useConnection } from "@solana/wallet-adapter-react";
import { useWallet } from "../hooks/useWallet";
import { useState } from "react";
import { motion } from "framer-motion";
import { toDate } from "../utils";

export const MintButton = () => {
  const [loading, setLoading] = useState(false);
  const { connection } = useConnection();
  const wallet = useWallet();  

  const onClick = async () => {
    // const allowList = await (await fetch("/allowList.json")).json()

    if (!wallet.publicKey) {
      console.log("error", "Wallet not connected!");
      return;
    }

    // if (!allowList.includes(wallet.publicKey.toBase58())) {
    //     toast.error("You're not on the allowlist");
    //     return;
    // }

    setLoading(true);

    const metaplex = Metaplex.make(connection).use(
      walletAdapterIdentity(wallet)
    );
    const candyMachineAddress = new PublicKey(
      "8juEXpPuJQwccyF3R56npbMaEUNVS9eiz39KVbSqtaUd"
    );
    
    const cm = await metaplex
      .candyMachines()
      .findByAddress({ address: candyMachineAddress });

    // @ts-ignore
    const phase = toDate(cm.candyGuard?.groups[1].guards.startDate?.date) > new Date() ? "wl" : "pub";
    console.log(phase);

    let res;

    try {
      // await metaplex.candyMachines().callGuardRoute({
      //     candyMachine: cm,
      //     guard: "allowList",
      //     settings: {
      //         path: "proof",
      //         merkleProof: getMerkleProof(allowList, metaplex.identity().publicKey.toBase58())
      //     }
      // })

      res = await metaplex.candyMachines().mint({
        candyMachine: cm,
        collectionUpdateAuthority: new PublicKey(
          "37zhnSs3SRavzQ8GDAHHfJ65Fb6gZH7XvrCesqBHEhNw"
        ),
        group: phase
      });
    } catch (error) {
      console.log(error);
      setLoading(false);
      return;
    }

    console.log(res);

    setLoading(false);
  };

  return (
    <div className="mint-button">
      <motion.button
        className={(loading ? "loading" : "loading")}
        onClick={() => onClick()}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.2, delay: 0.6 }}
      >
        <span>Mint for 10 SOL</span>
      </motion.button>
    </div>
  );
};
