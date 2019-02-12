import React from "react";
import { Tag } from "../../utils/misc";
import Blocks from "./Blocks";

const MatchesHome = () => {
  return (
    <div className="home_matches_wrapper">
      <div className="container">
        {/* TAG*/}
        <Tag bck="#0e1731" size="50px" color="#ffffff">
          Matches
        </Tag>

        <Blocks />

        {/* TAG*/}
        <Tag
          bck="#ffffff"
          size="22px"
          color="#0e1731"
          link={true}
          linkto="/the_team"
        >
          See More Matches
        </Tag>
      </div>
    </div>
  );
};

export default MatchesHome;
