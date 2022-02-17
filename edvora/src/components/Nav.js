import React from "react";
import FilterOption from "./FilterOption";

import { Link } from "react-router-dom";

const Nav = ({ screen }) => {
  const filterOption = () => {
    document.querySelector(".FilterOption").classList.toggle("hide");
    console.log("filterOption");
  };
  return (
    <div className="Nav">
      <div className="nav">
        <Link to="/">
          <p className={screen == "NearestRides" ? "active" : ""}>
            Nearest rides
          </p>
        </Link>
        <Link to="/upcoming-rides/">
          <p className={screen == "UpcomingRides" ? "active" : ""}>
            Upcoming rides (3)
          </p>
        </Link>
        <Link to="/past-rides/">
          <p className={screen == "PastRides" ? "active" : ""}>
            Past rides (3)
          </p>
        </Link>
      </div>

      <div className="filter" onClick={filterOption}>
        <img src="../img/sort.svg" alt="sort" />
        <p>Filters</p>
      </div>
      <FilterOption />
    </div>
  );
};

export default Nav;
