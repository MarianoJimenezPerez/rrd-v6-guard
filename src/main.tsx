import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import PublicRoutes from "./routes/public/PublicRoutes";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <PublicRoutes />
    </BrowserRouter>
  </React.StrictMode>
);
