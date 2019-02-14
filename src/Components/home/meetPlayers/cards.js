import React, { Component } from "react";
import { easePolyOut } from "d3-ease";
import Animate from "react-move/Animate";
import Otamendi from "../../../Resources /images/players/Otamendi.png";

class HomeCards extends Component {
  // this component recieves a props with show in which it is true or false
  state = {
    cards: [
      {
        bottom: 90,
        left: 300
      },
      {
        bottom: 60,
        left: 200
      },
      {
        bottom: 30,
        left: 100
      },
      {
        bottom: 0,
        left: 0
      }
    ]
  };

  showAnimatedCards = () =>
    // loop through this.state.cards
    // map will be returning one card and iteration number
    // run a function and return some jsx
    this.state.cards.map((card, i) => (
      // always add key if looping something
      <Animate
        key={i}
        show={this.props.show}
        start={{
          left: 0,
          bottom: 0
        }}
        enter={{
          left: [card.left],
          bottom: [card.bottom],
          timing: { duration: 500, ease: easePolyOut }
        }}
      >
        {({ left, bottom }) => {
          return (
            <div
              style={{
                position: "absolute",
                left,
                bottom
              }}
            >
              div
            </div>
          );
        }}
      </Animate>
    ));

  render() {
    return <div> {this.showAnimatedCards()}</div>;
  }
}

export default HomeCards;
