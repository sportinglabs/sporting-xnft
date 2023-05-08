import Navigation from "../components/Navigation";
import Rank from "../components/Rank";
export default function Garage() {
  return (
    <div className="garage">
      <div className="top-spacer"></div>
      <Rank />
      <Navigation id={2}/>
    </div>
  );
}
