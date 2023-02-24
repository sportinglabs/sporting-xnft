import text_logo from "../assets/text_logo.png";
import { useNFTs } from "../hooks/useNFTs";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
export default function Home() {
  const nfts = useNFTs();
  console.log(nfts);

  return (
    <div className="home">
      <div className="home-content">
        <div className="home-section-1">
          <div className="home-title">
            <img src={text_logo} alt="the logo" className="home-title-image" />
          </div>
        </div>
        <div className="home-section-2">
          <div className="home-tabs">
            <Link to={"/stake"}>
              <button className="home-tab">
                <div className="home-tab-text">
                  <div className="home-tab-title">Stake</div>
                  <div className="home-tab-description">Stake your cars!</div>
                </div>
                <div className="home-tab-icon"></div>
              </button>
            </Link>
            <Link to={"/leaderboard"}>
              <button className="home-tab">
                <div className="home-tab-text">
                  <div className="home-tab-title">Leaderboard</div>
                  <div className="home-tab-description">
                    Winning is everything.
                  </div>
                </div>
              </button>
            </Link>
            <button className="home-tab" disabled>
              <div className="home-tab-text">
                <div className="home-tab-title">Garage</div>
                <div className="home-tab-description">
                  Tune your drive! Coming soon.
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
