import Navigation from "../../components/general/Navigation";
import Rank from "../../components/general/Rank";

export default function Leaderboard() {
  const leaderboards = { leaderboard: [] };
  return (
    <div className="leaderboard">
      <div className="top-spacer"></div>
      <Rank />
      <div className="container">
        <div className="container-content">
          <div className="leaderboard-title">customise your nfts</div>
          <div className="leaderboard-items">
            {leaderboards.leaderboard.map((item, index) => (
              <div className="profile-container">
                <div className="profile">
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
              </div>
            ))}
          </div>
        </div>
      </div>
      <Navigation id={4} />
    </div>
  );
}
