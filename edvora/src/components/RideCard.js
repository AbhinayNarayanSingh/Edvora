import React from "react";

const RideCard = ({ ride }) => {
  const closest = (counts, goal) => {
    const n = counts.reduce(function (prev, curr) {
      return Math.abs(curr - goal) < Math.abs(prev - goal) ? curr : prev;
    });
    return n;
  };

  const date = new Date();

  return (
    <div className="ride-card">
      <img src="../img/map.jpg" alt="" />
      <div>
        <p>
          Ride Id : <span>00{ride["id"]}</span>
        </p>
        <p>
          Origin Station : <span>{ride["origin_station_code"]}</span>
        </p>
        <p>
          station_path :{" "}
          <span>[ {ride["station_path"].map((n) => `${n}, `)}]</span>
        </p>
        <p>
          Date :{" "}
          <span>
            {date.getDate()}th Feb 2022{" "}
            {`${date.getHours()}:${date.getMinutes()}`}
          </span>
        </p>
        <p>
          Distance : <span>{closest(ride["station_path"], 40) - 40}</span>
        </p>
      </div>
    </div>
  );
};

export default RideCard;
