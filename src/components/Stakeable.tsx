import car from "../assets/car.png";

export function Stakeable(props: {}) {
  return (
    <div className="stakeable">
      <div className="stakeable-content">
        <img className="stakeable-image" src={car} />
        <div className="stakeable-name">
          <p>Mercedes AMG Petronas</p>
        </div>
        <div className="stakeable-details"></div>
        <button className="stakeable-button">Stake</button>
      </div>
    </div>
  );
}
