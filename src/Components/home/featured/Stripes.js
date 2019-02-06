import React, { Component } from "react";
import { easePolyOut } from "d3-ease";
import Animate from "react-move/Animate";

class Stripes extends Component {
  state = {
    stripes: [
      {
        background: "#98c5e9",
        left: 120,
        rotate: 25,
        top: -260,
        delay: 0
      },
      {
        background: "#ffffff",
        left: 360,
        rotate: 25,
        top: -397,
        delay: 200
      },
      {
        background: "#98c5e9",
        left: 600,
        rotate: 25,
        top: -498,
        delay: 400
      }
    ]
  };
  // map over array of objects with all its properties. note using parenthesis instead of curly braces because i just want to return an element which in this case will be Animate and all its properties
  showStripes = () =>
    this.state.stripes.map((stripe, i) => (
      <Animate
        // since we are looping something a key must be provided
        key={i}
        // the animation needs to know if its going to be started whenever the element gets mounted or rendered or not. so this is why we have the property called 'Show'.
        show={true}
        //⬇️ An object or function that returns an obejct to be used as the starting state.this is the starting color of the stripes.
        start={{
          background: "#ffffff",
          opacity: 0,
          left: 0,
          rotate: 0,
          top: 0
        }}
        //  ⬇️ An object, array of objects, or function that returns an object or array of objects describing how the state should transform on enter.(specify which color the element should change to).
        enter={{
          background: [stripe.background],
          opacity: [1],
          left: [stripe.left],
          rotate: [stripe.rotate],
          top: [stripe.top],
          timing: { delay: stripe.delay, duration: 400, ease: easePolyOut },
          events: {
            end() {
              console.log("animation finished");
            }
          }
        }}
      >
        {/* so this is how animate works, it returns a function and inside of that, return some JSX */}
        {/* so once we pass the property here we can pass it to the new element below ⬇️  */}
        {({ opacity, left, rotate, top, background }) => {
          return (
            <div
              className="stripe"
              style={{
                background,
                opacity,
                transform: `rotate(${rotate}deg) translate(${left}px,${top}px)`
              }}
            />
          );
        }}
      </Animate>
    ));

  render() {
    return (
      <div className="featured_stripes">
        {/* return a function that will loop the state of stripes */}
        {this.showStripes()}
      </div>
    );
  }
}

export default Stripes;
