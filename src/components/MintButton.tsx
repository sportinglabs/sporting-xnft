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
  setRes: Function;
}) => {
  const [loading, setLoading] = useState(false);
  const [reload, setReload] = useState(0);
  const { connection } = useConnection();
  const wallet = useWallet();

  const cm = useCandyMachine(reload);

  const onClick = async () => {
    const allowList = await (await fetch("/allowList.json")).json();

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

    const groups = cm.candyGuard!.groups;
    const startTimes = groups.map((group) => ({
      time: toDate(group.guards.startDate!.date).getTime(),
      group: group.label,
    }));

    startTimes.sort((a, b) => b.time - a.time);

    let phase;
    for (const startTime of startTimes) {
      if (startTime.time <= new Date().getTime()) {        
        phase = startTime.group;
        break;
      }
    }

    console.log(phase);

    try {
      props.showPopup();

      const mintBuilder = await metaplex
        .candyMachines()
        .builders()
        .mint({
          candyMachine: cm,
          collectionUpdateAuthority: new PublicKey(
            "37zhnSs3SRavzQ8GDAHHfJ65Fb6gZH7XvrCesqBHEhNw"
          ),
          group: phase,
        });

      if (phase === "wl") {
        const transactionBuilder = metaplex
          .candyMachines()
          .builders()
          .callGuardRoute({
            candyMachine: cm,
            guard: "allowList",
            settings: {
              path: "proof",
              merkleProof: getMerkleProof(
                allowList,
                metaplex.identity().publicKey.toBase58()
              ),
            },
            group: phase,
          });

        mintBuilder.prepend(transactionBuilder);
      }

      await mintBuilder.sendAndConfirm(metaplex).then((res) => {
        console.log(res);
        props.closePopup();
        props.reload();
        props.setRes(res.tokenAddress);
      });

      // transactionBuilder.add(mintBuilder.getInstructionsWithSigners())

      // const res = await transactionBuilder.sendAndConfirm(metaplex).then((res) => {
      //   console.log(res);

      //   props.closePopup()
      //   props.reload()
      //   // props.setRes(res.nft)
      // })

      // res = await metaplex
      //   .candyMachines()
      //   .mint({
      //     candyMachine: cm,
      //     collectionUpdateAuthority: new PublicKey(
      //       "37zhnSs3SRavzQ8GDAHHfJ65Fb6gZH7XvrCesqBHEhNw"
      //     ),
      //     group: phase,
      //   })
      //   .then((res) => {
      //     props.closePopup()
      //     props.reload()
      //     props.setRes(res.nft)
      //   });
    } catch (error) {
      console.log(error);
      props.reload();
      props.closePopup();
      setLoading(false);
      return;
    }
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
        <span>Mint for 2 SOL</span>
      </motion.button>
    </div>
  );
};
