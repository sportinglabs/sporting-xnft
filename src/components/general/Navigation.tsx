import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faGear,
  faStore,
  faChartLine,
  faCar,
  faUser,
  faBoltLightning,
} from "@fortawesome/free-solid-svg-icons";

import { Link } from "react-router-dom";

export default function Navigation(props: { id: number }) {
  return (
    <div className="navigation">
      <div className="navigation-content">
        <Link to={"/"}>
          {props.id == 1 ? (
            <button className="navigation-button navigation-first navigation-active">
              <FontAwesomeIcon icon={faHome} />
            </button>
          ) : (
            <button className="navigation-button navigation-first">
              <FontAwesomeIcon icon={faHome} />
            </button>
          )}
        </Link>
        <Link to={"/garage"}>
          {props.id == 2 ? (
            <button className="navigation-button navigation-active">
              <FontAwesomeIcon icon={faGear} />
            </button>
          ) : (
            <button className="navigation-button">
              <FontAwesomeIcon icon={faGear} />
            </button>
          )}
        </Link>
        <Link to={"/garage"}>
          {props.id == 3 ? (
            <button className="navigation-button navigation-active">
              <FontAwesomeIcon icon={faChartLine} />
            </button>
          ) : (
            <button className="navigation-button">
              <FontAwesomeIcon icon={faChartLine} />
            </button>
          )}
        </Link>
        <Link to={"/garage"}>
          {props.id == 4 ? (
            <button className="navigation-button navigation-active">
              <FontAwesomeIcon icon={faCar} />
            </button>
          ) : (
            <button className="navigation-button">
              <FontAwesomeIcon icon={faCar} />
            </button>
          )}
        </Link>
        <Link to={"/garage"}>
          {props.id == 5 ? (
            <button className="navigation-button navigation-active">
              <FontAwesomeIcon icon={faUser} />
            </button>
          ) : (
            <button className="navigation-button">
              <FontAwesomeIcon icon={faUser} />
            </button>
          )}
        </Link>
        <Link to={"/garage"}>
          {props.id == 6 ? (
            <button className="navigation-button navigation-last navigation-active">
              <FontAwesomeIcon icon={faBoltLightning} />
            </button>
          ) : (
            <button className="navigation-button navigation-last">
              <FontAwesomeIcon icon={faChartLine} />
            </button>
          )}
        </Link>
      </div>
    </div>
  );
}
