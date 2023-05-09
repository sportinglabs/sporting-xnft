import Rank from "../components/general/Rank";
import HomeWagon from "../components/home/HomeWagon";
import Navigation from "../components/general/Navigation";

import { faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import tensor from "../assets/tensor.png";
import newsline from "../assets/newsline.png";

export default function Home() {
  const array = [0, 1, 2];
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
          <a
            href="https://www.tensor.trade/de/trade/sporting_f1"
            target="_blank"
          >
            <div className="home-wagon-shop">
              <div className="home-wagon-shop-content">
                <div className="home-wagon-text">Become a racer today.</div>
                <div className="home-wagon-text">Buy on tensor.</div>
                <div className="home-wagon-image">
                  <img src={tensor} alt="tensor" />
                </div>
              </div>
            </div>
          </a>

          {array.map(() => (
            <HomeWagon
              name="Sporting F1 #724"
              staked={false}
              image="https://piluty6xffqyh23pbbnfomhwi3jmnawalmghzngvfwhairtzha5q.arweave.net/ehdJ49cpYYPrbwhaVzD2RtLGgsBbDHy01S2OBEZ5ODs?ext=png"
            />
          ))}
        </div>
      </div>
      <Navigation id={1} />
    </div>
  );
}
