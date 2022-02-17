import React from "react";
import { user } from "../ride";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <Link to="/">
        <h1>Edvora</h1>
      </Link>
      <div>
        <h2>{user["name"]}</h2>
        <img src={`../img/${user["img"]}`} alt={user["name"]} />
      </div>
    </header>
  );
};

export default Header;
