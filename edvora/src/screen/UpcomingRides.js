import React from "react";
import Nav from "../components/Nav";
import RideCard from "../components/RideCard";

// Data
import { ride } from "../ride";

const UpcomingRides = () => {
  return (
    <main>
      <Nav screen="UpcomingRides" />
      {ride.map((i) => (
        <RideCard ride={i} key={i["id"]} />
      ))}
    </main>
  );
};

export default UpcomingRides;
