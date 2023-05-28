import React from "react";
import icon from "../../assets/pfp.png";
import { motion } from "framer-motion";

export default function Rank() {
  return (
    <motion.div
      className="profile-container"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{
        duration: 0.2,
        delay: 0.6,
      }}
      viewport={{ once: false }}
    >
      <div className="profile">
        <div className="profile-stat profile-picture">
          <img src={icon} />
        </div>
        <div className="profile-stat profile-rank">
          <div className="profile-stat-name">Rank</div>
          <div className="profile-stat-data">18</div>
        </div>
        <div className="profile-stat profile-points">
          <div className="profile-stat-name">points</div>
          <div className="profile-stat-data">246</div>
        </div>
        <div className="profile-stat profile-last">
          <div className="profile-stat-name">Last</div>
          <div className="profile-stat-data">1428</div>
        </div>
        <div className="profile-stat profile-staked">
          <div className="profile-stat-name">Staked</div>
          <div className="profile-stat-data">5/10</div>
        </div>
      </div>
    </motion.div>
  );
}
