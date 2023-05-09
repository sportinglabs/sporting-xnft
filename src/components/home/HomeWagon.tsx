import React from "react";
import { Link } from "react-router-dom";

export default function HomeWagon(props: {
  image: string;
  name: string;
  staked: boolean;
}) {
  return (
    <div className="home-wagon">
      <div className="home-wagon-content">
        <div className="home-wagon-image">
          <img src={props.image} alt="nft" />
        </div>
        <div className="home-wagon-title">{props.name}</div>
        {props.staked ? (
          <div className="home-wagon-status home-wagon-staked">staked</div>
        ) : (
          <div className="home-wagon-status home-wagon-unstaked">unstaked</div>
        )}
      </div>
    </div>
  );
}
