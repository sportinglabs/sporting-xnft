import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faGear } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";

import Rank from "../components/general/Rank";
import Navigation from "../components/general/Navigation";
import car_guide from "../assets/car-guide.png";
import car_transparent from "../assets/car-transparent.png";

export default function GarageItemView() {
  const [query] = useSearchParams();

  const [showHelp, setShowHelp] = useState(false);
  useEffect(() => {
    console.log(query.get("mint"));
  }, []);
  const array = [1, 1, 2, 2];
  return (
    <div className="garage">
      <div className="top-spacer"></div>
      <Rank />
      <div className="container">
        <div className="container-content">
          <div className="toolbar">
            <div className="breadcrumbs">
              <FontAwesomeIcon icon={faGear} className="breadcrumbs-icon" />
              <FontAwesomeIcon
                icon={faChevronRight}
                className="breadcrumbs-arrow"
              />
              sporting f1 #936
            </div>
            <button className="toolbar-help" onClick={() => setShowHelp(true)}>
              <FontAwesomeIcon icon={faQuestionCircle} />
            </button>
          </div>
          <div className="preview">
            <div className="preview-button-layer">
              <div className="preview-button preview-button-1">
                <button>front wing</button>
                <div className="preview-button-line-container">
                  <div className="preview-button-line"></div>
                </div>
              </div>
              <div className="preview-button preview-button-2">
                <button>cockpit</button>
                <div className="preview-button-line-container">
                  <div className="preview-button-line"></div>
                </div>
              </div>
              <div className="preview-button preview-button-3">
                <button>driver</button>
                <div className="preview-button-line-container">
                  <div className="preview-button-line"></div>
                </div>
              </div>
              <div className="preview-button preview-button-4">
                <button>engine</button>
                <div className="preview-button-line-container">
                  <div className="preview-button-line"></div>
                </div>
              </div>
              <div className="preview-button preview-button-5">
                <button>rear wing</button>
                <div className="preview-button-line-container">
                  <div className="preview-button-line"></div>
                </div>
              </div>
              <div className="preview-button preview-button-6">
                <div className="preview-button-content">
                  <div className="preview-button-line-6-container">
                    <div className="preview-button-line-6"></div>
                  </div>
                  <div className="preview-button-line-6-container">
                    <div className="preview-button-line"></div>
                  </div>
                  <button>tires</button>
                </div>
              </div>
            </div>
            <div className="preview-car-layer">
              <img src={car_transparent} alt="car" />
            </div>
          </div>
          <div className="garage-equipped-traits">
            <a href="">
              <div className="garage-equipped-trait">
                <div className="garage-equipped-trait-key">Engine</div>
                <div className="garage-equipped-trait-value">
                  Ferrari 066 10 | Pos 18
                </div>
              </div>
            </a>
            <a href="">
              <div className="garage-equipped-trait">
                <div className="garage-equipped-trait-key">Driver</div>
                <div className="garage-equipped-trait-value">
                  Esteban Ocon | Pos 11
                </div>
              </div>
            </a>
            <a href="">
              <div className="garage-equipped-trait">
                <div className="garage-equipped-trait-key">Cockpit</div>
                <div className="garage-equipped-trait-value">
                  Logan Sargeant | Pos 15
                </div>
              </div>
            </a>
            <a href="">
              <div className="garage-equipped-trait">
                <div className="garage-equipped-trait-key">Front Wing</div>
                <div className="garage-equipped-trait-value">
                  Williams | Pos 13
                </div>
              </div>
            </a>
            <a href="">
              <div className="garage-equipped-trait">
                <div className="garage-equipped-trait-key">Rear Wing</div>
                <div className="garage-equipped-trait-value">
                  George Russell | Pos 2
                </div>
              </div>
            </a>
            <a href="">
              <div className="garage-equipped-trait">
                <div className="garage-equipped-trait-key">Tires</div>
                <div className="garage-equipped-trait-value">
                  Esteban Ocon | Pos 2
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
      <Navigation id={2} />
    </div>
  );
}
