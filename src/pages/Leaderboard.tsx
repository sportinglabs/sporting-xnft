import { motion } from "framer-motion";
import { useLeaderboard } from "../hooks/useLeaderboard";
import { Loading } from "../components/Loading";
import { truncate } from "../utils";

// const users = [
//   { rank: "1", name: "michael", last: 100, total: 1000 },
//   { rank: "2", name: "justin", last: 154, total: 900 },
//   { rank: "3", name: "jake", last: 123, total: 800 },
//   { rank: "4", name: "jonas", last: 143, total: 800 },
//   { rank: "5", name: "alfred", last: 113, total: 700 },
//   { rank: "6", name: "bruce", last: 203, total: 600 },
//   { rank: "7", name: "bryan", last: 493, total: 500 },
//   { rank: "8", name: "James", last: 285, total: 400 },
//   { rank: "9", name: "lincoln", last: 175, total: 300 },
//   { rank: "10", name: "Kent", last: 175, total: 200 },
// ];

export default function Leaderboard() {
  const leaderboard = useLeaderboard();

  if (leaderboard.loading) {
    return <Loading />;
  }

  if (leaderboard.error) {
    return <div>error</div>;
  }

  return (
    <div className="leaderboard">
      <div className="leaderboard-content">
        <div className="leaderboard-title">Leaderboard</div>
        <div className="leaderboard-filter">
          <div className="leaderboard-filter-content">
            <div className="leaderboard-cell leaderboard-cell-rank">#</div>
            <div className="leaderboard-cell leaderboard-cell-name">NFT</div>
            <div className="leaderboard-cell leaderboard-cell-name">Player</div>
            {/* <div className="leaderboard-cell leaderboard-cell-last">Last</div> */}
            <div className="leaderboard-cell leaderboard-cell-total">Total</div>
          </div>
        </div>
        <div className="leaderboard-items-container">
          <div className="leaderboard-items">
            {leaderboard?.leaderboard?.map((u: any, index: number) => {
              if (u === undefined) {
                return
              }              

              return (
                <motion.div
                  className="leaderboard-item"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  key={u.ownerWallet}
                >
                  <div className="leaderboard-item-content">
                    <div className="leaderboard-cell leaderboard-cell-rank">
                      {index + 1}
                    </div>
                    <div className="leaderboard-cell leaderboard-cell-name">
                      {truncate(u.data.carMint.toBase58(), 3, 0)}
                    </div>
                    <div className="leaderboard-cell leaderboard-cell-name">
                      {u.username ? u.username : truncate(u.ownerWallet, 3, 0)}
                    </div>
                    {/* <div className="leaderboard-cell leaderboard-cell-last">
                      {u.last}
                    </div> */}
                    <div className="leaderboard-cell leaderboard-cell-total">
                      {Number(u.data.points)}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
