import { Stakeable } from "../components/Stakeable";

export default function Leaderboard() {
  return (
    <div className="stake">
      <div className="stake-content">
        <div className="stake-title">Stake</div>
        <div className="stake-items-container">
          <div className="stake-items">
            <div className="stake-items-content">
              <Stakeable />
              <Stakeable />
              <Stakeable />
              <Stakeable />
              <Stakeable />
              <Stakeable />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
