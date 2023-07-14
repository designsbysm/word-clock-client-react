import React from "react";
import ReactDOM from "react-dom/client";

import "./styles/index.scss";
import App from "./components/App";

const root = document.getElementById("root");
if (!root) {
  throw new Error("Failed to find the root element");
}

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
