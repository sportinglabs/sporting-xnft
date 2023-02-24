import car from "../assets/car.png";
export function Stakeable(props: {}) {
  return (
    <div className="stakeable">
      <div className="stakeable-content">
        <img className="stakeable-image" src={car} />
        <div className="stakeable-details">
          <div className="stakeable-text">
            <div className="stakeable-text-content">
              <div className="stakeable-name">Mercedes AMG Petronas</div>
              <div className="stakeable-points">Points: 1460</div>
            </div>
          </div>
          <button className="stakeable-button">stake</button>
        </div>
      </div>
    </div>
  );
}
