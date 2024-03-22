import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/js/dist/dropdown";
import PathfindingVisualizer from "./pathfindingVisualizer/PathfindingVisualizer.jsx";

ReactDOM.render(
  <React.StrictMode>
    <PathfindingVisualizer />
  </React.StrictMode>,
  document.getElementById("root")
);
