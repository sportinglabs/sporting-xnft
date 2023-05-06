import Navigation from "../components/Navigation";
import icon from "../assets/pfp.png";

export default function Home() {
  return (
    <div className="home">
      <div className="top-spacer"></div>
      <div className="home-profile-container">
        <div className="home-profile">
          <div className="home-profile-stat home-profile-picture">
            <img src={icon} />
          </div>
          <div className="home-profile-stat home-profile-rank">
            <div className="home-profile-stat-name">Rank</div>
            <div className="home-profile-stat-data">1428</div>
          </div>
          <div className="home-profile-stat home-profile-points">
            <div className="home-profile-stat-name">points</div>
            <div className="home-profile-stat-data">1428</div>
          </div>
          <div className="home-profile-stat home-profile-last">
            <div className="home-profile-stat-name">Last</div>
            <div className="home-profile-stat-data">1428</div>
          </div>
          <div className="home-profile-stat home-profile-staked">
            <div className="home-profile-stat-name">Staked</div>
            <div className="home-profile-stat-data">1428</div>
          </div>
        </div>
      </div>

      <Navigation />
    </div>
  );
}
