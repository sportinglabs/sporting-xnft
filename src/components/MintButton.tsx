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
import { useCandyMachine } from "../hooks/useCandyMachine";
import { toast } from "react-toastify";

export const MintButton = (props: {
  showPopup: Function;
  closePopup: Function;
  reload: Function;
  setRes: Function
}) => {
  const [loading, setLoading] = useState(false);
  const [reload, setReload] = useState(0);
  const { connection } = useConnection();
  const wallet = useWallet();

  const cm = useCandyMachine(reload)

  const onClick = async () => {
    const allowList = await (await fetch("/allowList.json")).json()

    if (!wallet.publicKey) {
      console.log("error", "Wallet not connected!");
      return;
    }

    if (!allowList.includes(wallet.publicKey.toBase58())) {
      toast.error("You are not in the allowlist");
      return;
    }

    setLoading(true);

    const metaplex = Metaplex.make(connection).use(
      walletAdapterIdentity(wallet)
    );
    const candyMachineAddress = new PublicKey(import.meta.env.VITE_CM);

    const cm = await metaplex
      .candyMachines()
      .findByAddress({ address: candyMachineAddress });

    // @ts-ignore
    const phase =
      // @ts-ignore
      toDate(cm.candyGuard?.groups[1].guards.startDate?.date) > new Date()
        ? "wl"
        : "pub";
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

      props.showPopup();
      res = await metaplex
        .candyMachines()
        .mint({
          candyMachine: cm,
          collectionUpdateAuthority: new PublicKey(
            "37zhnSs3SRavzQ8GDAHHfJ65Fb6gZH7XvrCesqBHEhNw"
          ),
          group: phase,
        })
        .then((res) => {          
          props.closePopup()
          props.reload()
          props.setRes(res.nft)
        });
    } catch (error) {
      console.log(error);
      props.reload()
      props.closePopup()
      setLoading(false);
      return;
    }

    console.log(res);

    setLoading(false);
  };

  return (
    <div className="mint-button">
      <motion.button
        className={loading ? "loading" : "loading"}
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
