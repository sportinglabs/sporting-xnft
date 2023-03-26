import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import 'react-toastify/dist/ReactToastify.css';
import "./style/index.css";
import "./style/home.css";
import "./style/stake.css";
import "./style/leaderboard.css";
import "./style/mint.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
