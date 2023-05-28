import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function HomeWagon(props: {
  image: string;
  name: string;
  staked: boolean;
}) {
  return (
    <motion.div
      className="home-wagon"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{
        duration: 0.2,
        delay: 0.8,
      }}
      viewport={{ once: false }}
    >
      <div className="home-wagon-content">
        <div className="home-wagon-image">
          <img src={props.image} alt="nft" />
        </div>
        <div className="home-wagon-title">{props.name}</div>
        {props.staked ? (
          <div className="home-wagon-status home-wagon-staked">staked</div>
        ) : (
          <div className="home-wagon-status home-wagon-unstaked">unstaked</div>
        )}
      </div>
    </motion.div>
  );
}
