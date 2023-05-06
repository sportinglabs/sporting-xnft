import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faGear,
  faStore,
  faChartLine,
  faCar,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

export default function Navigation() {
  return (
    <div className="navigation">
      <div className="navigation-content">
        <div className="">
          <button className="navigation-button navigation-first navigation-active">
            <FontAwesomeIcon icon={faHome} />
          </button>
        </div>
        <div className="">
          <button className="navigation-button">
            <FontAwesomeIcon icon={faGear} />
          </button>
        </div>
        <div className="">
          <button className="navigation-button">
            <FontAwesomeIcon icon={faStore} />
          </button>
        </div>
        <div className="">
          <button className="navigation-button">
            <FontAwesomeIcon icon={faChartLine} />
          </button>
        </div>
        <div className="">
          <button className="navigation-button">
            <FontAwesomeIcon icon={faCar} />
          </button>
        </div>
        <div className="">
          <button className="navigation-button  navigation-last">
            <FontAwesomeIcon icon={faUser} />
          </button>
        </div>
      </div>
    </div>
  );
}
