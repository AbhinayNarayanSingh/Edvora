import React from "react";
import Nav from "../components/Nav";
import RideCard from "../components/RideCard";

// Data
import { ride } from "../ride";

const NearestRides = () => {
  return (
    <main>
      <Nav screen="NearestRides" />
      {ride.map((i) => (
        <RideCard ride={i} key={i["id"]} />
      ))}
    </main>
  );
};

export default NearestRides;
