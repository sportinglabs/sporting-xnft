import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "react-toastify/dist/ReactToastify.css";
import "./style/globals.css";
import "./style/navigation.css";
import "./style/0_home.css";
import "./style/1_stake.css";
import "./style/2_leaderboard.css";
import "./style/3_garage.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
