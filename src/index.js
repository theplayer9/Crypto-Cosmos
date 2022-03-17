import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import CryptoContext from "./CryptoContext";
import "./index.css";

ReactDOM.render(
  <CryptoContext>
    <App />
  </CryptoContext>,
  document.getElementById("root")
);
