import Navigation from "../components/Navigation";
import Rank from "../components/Rank";

import nft from "../assets/nft.png";
export default function Garage() {
  return (
    <div className="garage">
      <div className="top-spacer"></div>
      <Rank />
      <div className="container">
        <div className="container-content">
          <div className="garage-title">customise your nfts</div>
          <div className="garage-items">
            <div className="garage-item">
              <div className="garage-item-content">
                <div className="garage-item-cover">
                  <img src={nft} alt="nft" />
                </div>
                <div className="garage-item-details">
                  <div className="garage-item-name"></div>
                  <div className="garage-item-specs">
                    <div className="garage-item-spec">
                      <div className="garage-item-key">Engine</div>
                      <div className="garage-item-value">
                        Ferrari 066 10 | Pos 18
                      </div>
                    </div>
                    <div className="garage-item-spec">
                      <div className="garage-item-key">Driver</div>
                      <div className="garage-item-value">
                        Esteban Ocon | Pos 11
                      </div>
                    </div>
                    <div className="garage-item-spec">
                      <div className="garage-item-key">Cockpit</div>
                      <div className="garage-item-value">
                        Logan Sargeant | Pos 15
                      </div>
                    </div>
                    <div className="garage-item-spec">
                      <div className="garage-item-key">Front Wing</div>
                      <div className="garage-item-value">Williams | Pos 13</div>
                    </div>
                    <div className="garage-item-spec">
                      <div className="garage-item-key">Rear Wing</div>
                      <div className="garage-item-value">
                        George Russell | Pos 2
                      </div>
                    </div>
                    <div className="garage-item-spec">
                      <div className="garage-item-key">Tires</div>
                      <div className="garage-item-value">
                        Esteban Ocon | Pos 2
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Navigation id={2} />
    </div>
  );
}
