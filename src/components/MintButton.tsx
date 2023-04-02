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

  const onClick = async () => {
    if (!wallet.publicKey) {
      toast.error("Wallet is not connected");
      console.log("error", "Wallet not connected!");
      return;
    }

    setLoading(true);

    // let discordWallets;
    // let madlistWallets;
    let allowList;

    try {
      // discordWallets = await (await fetch("/discord_wallets.json")).json();
      // madlistWallets = await (await fetch("/madlist_wallets.json")).json();
      allowList = await (await fetch("/allowList.json")).json();
    } catch (error) {
      toast.error("Failed to check permissions, please try again");
      console.log("error", "Failed to fetch allowlists!");
      return;
    }

    const metaplex = Metaplex.make(connection).use(
      walletAdapterIdentity(wallet)
    );
    const candyMachineAddress = new PublicKey(import.meta.env.VITE_CM);

    const cm = await metaplex
      .candyMachines()
      .findByAddress({ address: candyMachineAddress });

    // const groups = cm.candyGuard!.groups;
    // const startTimes = groups.map((group) => ({
    //   time: toDate(group.guards.startDate!.date).getTime(),
    //   group: group.label,
    // }));

    // startTimes.sort((a, b) => b.time - a.time);

    // let phase;
    // for (const startTime of startTimes) {
    //   if (startTime.time <= new Date().getTime()) {        
    //     phase = startTime.group;
    //     break;
    //   }
    // }

    // console.log(phase);

    // if (phase === "wl") {
    //   if (!discordWallets.includes(wallet.publicKey.toBase58())) {
    //     toast.error("You are not on the allowlist for phase 1");
    //     console.log("error", "You are not in the discord allowlist!");
    //     return;
    //   }
    // } else if (phase === "mad") {
    //   if (!madlistWallets.includes(wallet.publicKey.toBase58())) {
    //     toast.error("You are not on the allowlist for phase 2");
    //     console.log("error", "You are not in the madlist allowlist!");
    //     return;
    //   }
    // }

    if (!allowList.includes(wallet.publicKey.toBase58())) {
      toast.error("You are not on the allowlist");
      console.log("error", "You are not in the allowlist!");
      return;
    }

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
          // group: phase,
        });

      // if (phase === "wl") {
      //   await metaplex.candyMachines().callGuardRoute({
      //     candyMachine: cm,
      //     guard: "allowList",
      //     settings: {
      //       path: "proof",
      //       merkleProof: getMerkleProof(
      //         discordWallets,
      //         metaplex.identity().publicKey.toBase58()
      //       ),
      //     },
      //     group: phase,
      //   })

      // } else if (phase === "mad") {
      //   await metaplex.candyMachines().callGuardRoute({
      //     candyMachine: cm,
      //     guard: "allowList",
      //     settings: {
      //       path: "proof",
      //       merkleProof: getMerkleProof(
      //         madlistWallets,
      //         metaplex.identity().publicKey.toBase58()
      //       ),
      //     },
      //     group: phase,
      //   })
      // }

      await metaplex.candyMachines().callGuardRoute({
        candyMachine: cm,
        guard: "allowList",
        settings: {
          path: "proof",
          merkleProof: getMerkleProof(
            allowList,
            metaplex.identity().publicKey.toBase58()
          ),
        },
      })

      await mintBuilder.sendAndConfirm(metaplex).then((res) => {
        console.log(res);
        props.closePopup();
        props.reload();
        props.setRes(res.tokenAddress);
      });

    } catch (error) {
      console.log(error);
      toast.error("Failed to mint, please try again");
      props.reload();
      props.closePopup();
      props.setRes(null)
      setLoading(false);
      return;
    }
    setLoading(false);
  };

  return (
    <div className="mint-button">
      <motion.button
        onClick={() => onClick()}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.2, delay: 0.6 }}
      >
        <span>Mint for free</span>
      </motion.button>
    </div>
  );
};
