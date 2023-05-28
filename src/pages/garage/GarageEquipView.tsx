import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faGear } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

import Rank from "../../components/general/Rank";
import Navigation from "../../components/general/Navigation";

import trait_image from "../../assets/trait.png";

export default function GarageEquipView() {
  const [query] = useSearchParams();
  const mint = query.get("mint") || "null";
  const trait = query.get("trait") || "null";
  const path = window.location.href.split("?")[0];

  const traits = [1, 2, 3, 4, 5];
  return (
    <div className="garage">
      <div className="top-spacer"></div>
      <Rank />
      <div className="container">
        <div className="container-content">
          <div className="toolbar">
            <div className="breadcrumbs">
              <Link to={"/garage"}>
                <FontAwesomeIcon icon={faGear} className="breadcrumbs-icon" />
              </Link>
              <FontAwesomeIcon
                icon={faChevronRight}
                className="breadcrumbs-arrow"
              />
              <Link to={"/garage/item?mint=" + mint}>sporting f1 #936</Link>
              <FontAwesomeIcon
                icon={faChevronRight}
                className="breadcrumbs-arrow"
              />
              {trait}
            </div>
          </div>
          <div className="garage-traits-grid">
            {traits.map((index) => (
              <div className="garage-trait" key={index}>
                <div className="garage-trait-image">
                  <img src={trait_image} alt="trait" />
                </div>
                <div className="garage-trait-name">Williams | Pos 13</div>
                <div className="garage-trait-button">
                  <button>Equip</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Navigation id={2} />
    </div>
  );
}
