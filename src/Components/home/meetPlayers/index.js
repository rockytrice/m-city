import React, { Component } from "react";
import Stripes from "../../../Resources /images/stripes.png";
import { Tag } from "../../utils/misc";
import Reveal from "react-reveal/Reveal";
import HomeCards from "./cards";

class MeetPlayers extends Component {
  state = {
    show: false
  };
  render() {
    return (
      // contains reveal property. whenever this is happening we can trigger a function!!
      <Reveal
        //   how much of the compoenent should be visible on the screen in order for the react reveal to trigger the onReveal callback.  😎
        fraction={0.7}
        onReveal={() => {
          // so whenever we call to the component that will be ruling the animation, we will pass the state of show which is false. When we get on reveal the show will now be set to true and the animation will run
          this.setState({
            show: true
          });
        }}
      >
        <div
          className="home_meetplayers"
          style={{ background: `#ffffff url(${Stripes})` }}
        >
          <div className="container">
            <div className="home_meetplayers_wrapper">
              <div className="home_card_wrapper">
                <HomeCards show={this.state.show} />
              </div>
              <div className="home_text_wrapper">
                <div>
                  <Tag
                    bck="#0e1731"
                    size="100px"
                    color="#ffffff"
                    add={{
                      display: "inline-block",
                      marginBottom: "20px"
                    }}
                  >
                    Meet
                  </Tag>
                </div>
                <div>
                  <Tag
                    bck="#0e1731"
                    size="100px"
                    color="#ffffff"
                    add={{
                      display: "inline-block",
                      marginBottom: "20px"
                    }}
                  >
                    The
                  </Tag>
                </div>
                <div>
                  <Tag
                    bck="#0e1731"
                    size="100px"
                    color="#ffffff"
                    add={{
                      display: "inline-block",
                      marginBottom: "20px"
                    }}
                  >
                    Players
                  </Tag>
                </div>
                <div>
                  <Tag
                    bck="#ffffff"
                    size="27px"
                    color="#0e1731"
                    link={true}
                    linkto="/the_team"
                    add={{
                      display: "inline-block",
                      marginBottom: "27px",
                      border: "1px solid #0e1731"
                    }}
                  >
                    Meet the Players
                  </Tag>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    );
  }
}

export default MeetPlayers;
