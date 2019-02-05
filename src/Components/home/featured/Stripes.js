import React, { Component } from "react";
import { easePolyOut } from "d3-ease";
import Animate from "react-move/Animate";

class Stripes extends Component {
  showStripes = () => <div>stripes </div>;
  render() {
    return (
      <div className="featured_stripes">
        {/* return a function that will loop the state of something */}
        {this.showStripes()}
      </div>
    );
  }
}

export default Stripes;
