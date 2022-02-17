import React from "react";
import Nav from "../components/Nav";
import RideCard from "../components/RideCard";

// Data
import { ride } from "../ride";

const PastRides = () => {
  return (
    <main>
      <Nav screen="PastRides" />
      {ride.map((i) => (
        <RideCard ride={i} key={i["id"]} />
      ))}
    </main>
  );
};

export default PastRides;
