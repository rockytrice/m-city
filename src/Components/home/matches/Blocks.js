import React, { Component } from "react";
import { firebaseMatches } from "../../../firebase";
import { firebaseLooper } from "../../utils/misc";
import { reverseArray } from "../../utils/misc";
import MatchesBlock from "../../utils/matches_block";
import Slide from "react-reveal/Slide";

class Blocks extends Component {
  state = {
    matches: []
  };

  // make a request to the server
  componentDidMount() {
    firebaseMatches
      .limitToLast(6)
      .once("value")
      .then(snapshot => {
        //   when ever we get the snapshot, it will got to firebaselooper, firebaselooper will run its logic and return and array with objects
        const matches = firebaseLooper(snapshot);

        // reverse the array so that the last match will be shown first in the matches component
        this.setState({
          matches: reverseArray(matches)
        });
      });
  }

  showMatches = matches =>
    matches
      ? matches.map(match => (
          <Slide bottom key={match.id}>
            <div className="item">
              <div className="wrapper">
                <MatchesBlock match={match} />
              </div>
            </div>
          </Slide>
        ))
      : null;

  render() {
    console.log(this.state);
    return (
      <div className="home_matches">{this.showMatches(this.state.matches)}</div>
    );
  }
}

export default Blocks;
