import Navigation from "../components/Navigation";
import icon from "../assets/pfp.png";

export default function Home() {
  return (
    <div className="home">
      <div className="top-spacer"></div>
      <div className="home-profile-container">
        <div className="home-profile">
          <div className="profile-picture"></div>
          <div className="profile-stat profile-picture">
            <img src={icon} />
          </div>
          <div className="profile-stat">
            <div className="profile-stat-name">points</div>
            <div className="profile-stat-data">1428</div>
          </div>
          <div className="profile-stat">
            <div className="profile-stat-name">points</div>
            <div className="profile-stat-data">1428</div>
          </div>
          <div className="profile-stat">
            <div className="profile-stat-name">points</div>
            <div className="profile-stat-data">1428</div>
          </div>
          <div className="profile-stat">
            <div className="profile-stat-name">points</div>
            <div className="profile-stat-data">1428</div>
          </div>
        </div>
      </div>

      <Navigation />
    </div>
  );
}
