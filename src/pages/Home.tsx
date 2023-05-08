import Navigation from "../components/Navigation";
import icon from "../assets/pfp.png";
import nft from "../assets/nft.png";
import newsline from "../assets/newsline.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import Rank from "../components/Rank";
export default function Home() {
  return (
    <div className="home">
      <div className="top-spacer"></div>
      <Rank />
      <div className="home-news-container">
        <div className="home-news">
          <img src={newsline} alt="" />
          <div className="news-tab news-tab-name">Azerbaijan GP</div>
          <div className="news-tab news-tab-timer">
            <FontAwesomeIcon icon={faLock} /> 23 h 14 m 2 s
          </div>
          <div className="news-tab news-tab-stake-button">
            <button>Stake</button>
          </div>
        </div>
      </div>
      <div className="home-wagons-container">
        <div className="home-wagons">
          <div className="home-wagon">
            <div className="home-wagon-content">
              <div className="home-wagon-image">
                <img src={nft} alt="nft" />
              </div>
              <div className="home-wagon-title">#1047</div>
              <div className="home-wagon-status home-wagon-staked">staked</div>
            </div>
          </div>{" "}
          <div className="home-wagon">
            <div className="home-wagon-content">
              <div className="home-wagon-image">
                <img src={nft} alt="nft" />
              </div>
              <div className="home-wagon-title">#1047</div>
              <div className="home-wagon-status home-wagon-staked">staked</div>
            </div>
          </div>
        </div>
      </div>
      <Navigation id={1}/>
    </div>
  );
}
