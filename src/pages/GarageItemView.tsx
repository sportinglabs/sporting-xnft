import Navigation from "../components/general/Navigation";
import Rank from "../components/general/Rank";
import GarageItem from "../components/garage/GarageItem";

export default function GarageItemView() {
  const array = [1, 1, 2, 2];
  return (
    <div className="garage">
      <div className="top-spacer"></div>
      <Rank />
      <div className="container">
        <div className="container-content"></div>
      </div>
      <Navigation id={2} />
    </div>
  );
}
