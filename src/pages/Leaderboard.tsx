import { BoardItem } from "../components/BoardItem";

export default function Leaderboard() {
  return (
    <div className="leaderboard">
      <div className="leaderboard-content">
        <div className="leaderboard-title">Leaderboard</div>
        <div className="leaderboard-filter">Filter</div>
        <div className="leaderboard-items-container">
          <div className="leaderboard-items">
            <div className="leaderboard-items-content"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
