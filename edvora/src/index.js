import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import Header from "./components/Header";

import NearestRides from "./screen/NearestRides";
import UpcomingRides from "./screen/UpcomingRides";
import PastRides from "./screen/PastRides";

// React Route
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <div className="container">
      <BrowserRouter basename="/">
        <Header />
        <Routes>
          <Route path="/" element={<NearestRides />} exact />
          <Route path="/upcoming-rides/" element={<UpcomingRides />} exact />
          <Route path="/past-rides/" element={<PastRides />} exact />
        </Routes>
      </BrowserRouter>
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);
