import text_logo from "../assets/text_logo.png";
import { Link } from "react-router-dom";
export default function Home() {
  return (
    <div className="home">
      <div className="home-content">
        <div className="home-section-1">
          <div className="home-section-1-content">
            <div className="home-background"></div>
            <div className="home-title">
              <img
                src={text_logo}
                alt="the logo"
                className="home-title-image"
              />
            </div>
          </div>
        </div>
        <div className="home-section-2">
          <div className="home-tabs">
            <Link to={"/purchase"}>
              <button className="home-tab mint-tab">
                <div className="home-tab-text">
                  <div className="home-tab-title">Mint</div>
                  <div className="home-tab-description">Mint an NFT</div>
                </div>
              </button>
            </Link>
            <Link to={"/stake"}>
              <button className="home-tab stake-tab">
                <div className="home-tab-text">
                  <div className="home-tab-title">Stake</div>
                  <div className="home-tab-description">Coming soon!</div>{" "}
                  {/* Stake your cars! */}
                </div>
                <div className="home-tab-icon"></div>
              </button>
            </Link>
            <Link to={"/leaderboard"}>
              <button className="home-tab leaderboard-tab">
                <div className="home-tab-text">
                  <div className="home-tab-title">Leaderboard</div>
                  <div className="home-tab-description">
                    Coming soon! {/* Winning is everything. */}
                  </div>
                </div>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
