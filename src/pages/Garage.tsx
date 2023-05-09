import Navigation from "../components/general/Navigation";
import Rank from "../components/general/Rank";
import GarageItem from "../components/garage/GarageItem";

export default function Garage() {
  const array = [1, 1, 2, 2];
  return (
    <div className="garage">
      <div className="top-spacer"></div>
      <Rank />
      <div className="container">
        <div className="container-content">
          <div className="garage-title">customise your nfts</div>
          <div className="garage-items">
            {array.map(() => (
              <GarageItem
                name={"sporting F1 #936"}
                image={
                  "https://piluty6xffqyh23pbbnfomhwi3jmnawalmghzngvfwhairtzha5q.arweave.net/ehdJ49cpYYPrbwhaVzD2RtLGgsBbDHy01S2OBEZ5ODs?ext=png"
                }
                specs={[
                  "Ferrari 066 10 | Pos 18",
                  "Esteban Ocon | Pos 11",
                  "Logan Sargeant | Pos 15",
                  "Williams | Pos 13",
                  "George Russell | Pos 2",
                  "Esteban Ocon | Pos 2",
                ]}
              />
            ))}
          </div>
        </div>
      </div>
      <Navigation id={2} />
    </div>
  );
}
