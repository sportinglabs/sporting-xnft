import { motion } from "framer-motion";
import icon from "../../assets/icon.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDotCircle } from "@fortawesome/free-solid-svg-icons";

export default function Tutorial(props: { onTutorialClose: Function }) {
  return (
    <motion.div
      className="tutorial"
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{
        duration: 0.2,
      }}
      viewport={{ once: false }}
    >
      <div className="tutorial-content">
        <div className="tutorial-image">
          <img src={icon} alt="icon" />
        </div>
        <div className="tutorial-intro">
          <div className="tutorial-intro-content">
            Welcome to Sporting Labs, the ultimate F1 Fantasy League! In this
            game, you can stake your NFT F1 cars and earn points based on their
            performance in the races.
          </div>
        </div>
        <div className="tutorial-list">
          <div className="tutorial-list-item">
            <div className="tutorial-list-item-content">
              <FontAwesomeIcon icon={faDotCircle} />
              Points are earned based on the performance of the F1 driver's NFT
              that a user stakes.
            </div>
          </div>
          <div className="tutorial-list-item">
            <div className="tutorial-list-item-content">
              <FontAwesomeIcon icon={faDotCircle} />
              The more points the driver earns during a race, the more points
              the user earns.
            </div>
          </div>
          <div className="tutorial-list-item">
            <div className="tutorial-list-item-content">
              <FontAwesomeIcon icon={faDotCircle} />
              The number of points earned by a user is directly proportional to
              the number of NFTs staked by the user on the winning driver.
            </div>
          </div>
          <div className="tutorial-list-item">
            <div className="tutorial-list-item-content">
              <FontAwesomeIcon icon={faDotCircle} />
              At the end of the race, the points are tallied and the users with
              the top 10 highest points win prizes.
            </div>
          </div>
          <div className="tutorial-list-item">
            <div className="tutorial-list-item-content">
              <FontAwesomeIcon icon={faDotCircle} />
              Users can stake multiple NFTs on different drivers to increase
              their chances of earning points.
            </div>
          </div>
          <div className="tutorial-list-item">
            <div className="tutorial-list-item-content">
              <FontAwesomeIcon icon={faDotCircle} />
              The prize pool for the top 10 is determined based on the total
              number of NFTs staked across all drivers.
            </div>
          </div>
          <div className="tutorial-list-item">
            <div className="tutorial-list-item-content">
              <FontAwesomeIcon icon={faDotCircle} />
              The more NFTs staked in total, the larger the prize pool for the
              top 10 users.
            </div>
          </div>
          <div className="tutorial-list-item">
            <div className="tutorial-list-item-content">
              <FontAwesomeIcon icon={faDotCircle} />
              Users can also earn bonus points by predicting the correct podium
              finish for each race.
            </div>
          </div>
          <div className="tutorial-list-item">
            <div className="tutorial-list-item-content">
              <FontAwesomeIcon icon={faDotCircle} />
              Bonus points are added to a user's overall score and can increase
              their chances of winning a prize.
            </div>
          </div>
          <div className="tutorial-list-item">
            <div className="tutorial-list-item-content">
              <FontAwesomeIcon icon={faDotCircle} />
              The points system is designed to reward users for strategic
              staking and accurate predictions.
            </div>
          </div>
        </div>
        <div className="tutorial-button">
          <button onClick={() => props.onTutorialClose()}>close</button>
        </div>
      </div>
    </motion.div>
  );
}
