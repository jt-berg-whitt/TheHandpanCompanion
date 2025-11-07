import React from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter, BrowserRouter } from "react-router-dom";
import App from "./App";
import "./styles.css";

// .
createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HashRouter
      basename={
        process.env.NODE_ENV === "production" ? "/TheHandpanCompanion/" : "/"
      }>
      <App />
    </HashRouter>
  </React.StrictMode>
);
