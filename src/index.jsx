import "./styles/index.scss";
import App from "./components/app";
import React, { useContext } from "react";
import ReactDOM from "react-dom";

if (module.hot) {
  module.hot.accept();
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root"),
);
