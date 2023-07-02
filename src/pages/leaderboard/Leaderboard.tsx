import Navigation from "../../components/general/Navigation";
import Rank from "../../components/general/Rank";
import { motion } from "framer-motion";

export default function Leaderboard() {
  const leaderboards = {
    leaderboard: [
      { name: "rustintern", points: 1000 },
      { name: "brandon", points: 800 },
      { name: "kulture", points: 700 },
      { name: "m2dt", points: 600 },
      { name: "reev", points: 500 },
      { name: "dinesh", points: 400 },
      { name: "sonder", points: 300 },
      { name: "solingold", points: 300 },
    ],
  };
  return (
    <motion.div className="leaderboard">
      <motion.div className="top-spacer"></motion.div>
      <Rank />
      <motion.div className="container">
        <motion.div className="container-content">
          <motion.div
            className="leaderboard-intro"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
              duration: 0.8,
              delay: 0,
            }}
          >
            <motion.div className="leaderboard-intro-content">
              <motion.div className="leaderboard-year">2023</motion.div>
              <motion.div className="leaderboard-name">
                Season winners
              </motion.div>
            </motion.div>
          </motion.div>
          <motion.div className="leaderboard-items">
            {leaderboards.leaderboard.map((item, index) => {
              if (index == 0) {
                return (
                  <motion.div
                    className="leaderboard-item first"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{
                      duration: 0.2,
                      delay: 0,
                    }}
                  >
                    <motion.div className="leaderboard-item-index">
                      {index + 1}
                    </motion.div>
                    <motion.div className="leaderboard-item-name">
                      {item.name}
                    </motion.div>
                    <motion.div className="leaderboard-item-points">
                      {item.points}
                    </motion.div>
                  </motion.div>
                );
              } else if (index == 1) {
                return (
                  <motion.div
                    className="leaderboard-item second"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{
                      duration: 0.2,
                    }}
                  >
                    <motion.div className="leaderboard-item-index">
                      {index + 1}
                    </motion.div>
                    <motion.div className="leaderboard-item-name">
                      {item.name}
                    </motion.div>
                    <motion.div className="leaderboard-item-points">
                      {item.points}
                    </motion.div>
                  </motion.div>
                );
              } else if (index == 2) {
                return (
                  <motion.div
                    className="leaderboard-item third"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{
                      duration: 0.2,
                    }}
                  >
                    <motion.div className="leaderboard-item-index">
                      {index + 1}
                    </motion.div>
                    <motion.div className="leaderboard-item-name">
                      {item.name}
                    </motion.div>
                    <motion.div className="leaderboard-item-points">
                      {item.points}
                    </motion.div>
                  </motion.div>
                );
              } else {
                return (
                  <motion.div
                    className="leaderboard-item"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{
                      duration: 0.2,
                    }}
                  >
                    <motion.div className="leaderboard-item-index">
                      {index + 1}
                    </motion.div>
                    <motion.div className="leaderboard-item-name">
                      {item.name}
                    </motion.div>
                    <motion.div className="leaderboard-item-points">
                      {item.points}
                    </motion.div>
                  </motion.div>
                );
              }
            })}
          </motion.div>
        </motion.div>
      </motion.div>
      <Navigation id={4} />
    </motion.div>
  );
}
