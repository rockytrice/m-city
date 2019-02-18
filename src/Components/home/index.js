import React from "react";
import Featured from "./featured";
import MachesHome from "./matches";
import MeetPlayers from "./meetPlayers";
import PromoAnimation from "./promotion";

const Home = () => {
  return (
    <div className="bck_blue">
      <Featured />
      <MachesHome />
      <MeetPlayers />
      <PromoAnimation />
    </div>
  );
};

export default Home;
