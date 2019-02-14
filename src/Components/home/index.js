import React from "react";
import Featured from "./featured";
import MachesHome from "./matches";
import MeetPlayers from "./meetPlayers";

const Home = () => {
  return (
    <div className="bck_blue">
      <Featured />
      <MachesHome />
      <MeetPlayers />
    </div>
  );
};

export default Home;
