import { motion } from "framer-motion";

const users = [
  { rank: "1", name: "michael", last: 100, total: 1000 },
  { rank: "2", name: "justin", last: 154, total: 900 },
  { rank: "3", name: "jake", last: 123, total: 800 },
  { rank: "4", name: "jonas", last: 143, total: 800 },
  { rank: "5", name: "alfred", last: 113, total: 700 },
  { rank: "6", name: "bruce", last: 203, total: 600 },
  { rank: "7", name: "bryan", last: 493, total: 500 },
  { rank: "8", name: "James", last: 285, total: 400 },
  { rank: "9", name: "lincoln", last: 175, total: 300 },
  { rank: "10", name: "Kent", last: 175, total: 200 },
];

export default function Leaderboard() {
  return (
    <div className="leaderboard">
      <div className="leaderboard-content">
        <div className="leaderboard-title">Leaderboard</div>
        <div className="leaderboard-filter">
          <div className="leaderboard-filter-content">
            <div className="leaderboard-cell leaderboard-cell-rank">#</div>
            <div className="leaderboard-cell leaderboard-cell-name">Name</div>
            <div className="leaderboard-cell leaderboard-cell-last">Last</div>
            <div className="leaderboard-cell leaderboard-cell-total">Total</div>
          </div>
        </div>
        <div className="leaderboard-items-container">
          <div className="leaderboard-items">
            {users.map((u) => (
              <motion.div
                className="leaderboard-item"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
              >
                <div className="leaderboard-item-content">
                  <div className="leaderboard-cell leaderboard-cell-rank">
                    {u.rank}
                  </div>
                  <div className="leaderboard-cell leaderboard-cell-name">
                    {u.name}
                  </div>
                  <div className="leaderboard-cell leaderboard-cell-last">
                    {u.last}
                  </div>
                  <div className="leaderboard-cell leaderboard-cell-total">
                    {u.total}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
