import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import FormField from "../../utils/formFields";

class Enroll extends Component {
  // this will control the form input. Everything will be controlled through here. Will render all the inputs thats been declared here through another file
  state = {
    formError: false,
    formSuccess: "",
    formdata: {
      email: {
        element: "input",
        value: "",
        config: {
          name: "email_input",
          type: "email",
          placeholder: "Enter your email"
        },
        // checks to see if you are entering text in the input and that a valid email address is being used
        validation: {
          required: true,
          email: true
        },
        // whenver the application starts we don't have a value
        valid: false,
        validationMessage: ""
      }
    }
  };

  //   function to submit form in the Enroll section
  submitForm() {}

  render() {
    return (
      <Fade>
        <div className="enroll_wrapper">
          <form onSubmit={event => this.submitForm(event)}>
            <div className="enroll_title">Enter your email</div>
            <div className="enroll_input">
              {/* will be recieving an id which is the name of the key  and then all of the form data inside  */}
              <FormField id={"email"} formdata={this.state.formdata.email} />
            </div>
          </form>
        </div>
      </Fade>
    );
  }
}
export default Enroll;
