import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { CrowdContextProvider } from "./context/CrowdContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CrowdContextProvider>
      <App />
    </CrowdContextProvider>
  </React.StrictMode>
);
