import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import FormField from "../../utils/formFields";
import { validate } from "../../utils/misc";

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

  updateForm(element) {
    // created copy of the form data and element. (not good to mutate the state directly!!!)
    // newFormdata is equal to what ever is in the formdata
    const newFormdata = { ...this.state.formdata };

    // inside element we are getting the id!!
    // so inside newElement we will get a copy of the email state
    const newElement = { ...newFormdata[element.id] };

    // new element with all the new values that needs to be updated now.
    // so this allows the newElement to contain the value that the user is typing
    newElement.value = element.event.target.value;

    // grab newFormdata and access the element id and set it equal to the newelement
    // basically updating the state of the newFordata variable
    newFormdata[element.id] = newElement;

    // this will let us know if the data is valid or if there is a error message.
    // so we call the validate function and pass all of the values from inside newElement
    let validateData = validate(newElement);
    // here we update the state of validation
    newElement.valid = validateData[0];
    newElement.validationMessage = validateData[1];
    console.log(newFormdata);
    this.setState({
      formdata: newFormdata,
      formError: false
    });
  }

  //   function to submit form in the Enroll section
  submitForm(event) {
    event.preventDefault();
    // this will be hosting the data
    let dataToSubmit = {};
    // this will be true or false. before we start checking it will assume that all the inputs are valid
    let formIsValid = true;
    // so now go through all the formdata and check to see if they are valid true
    for (let key in this.state.formdata) {
      // on each loop grab the key(email) and push a new value to dataToSubmit just with the key. note that key has a value!!
      dataToSubmit[key] = this.state.formdata[key].value;
      formIsValid = this.state.formdata[key].valid && formIsValid;

      if (formIsValid) {
        console.log(dataToSubmit);
      } else {
        this.setState({
          formError: true
        });
      }
    }
  }

  render() {
    return (
      <Fade>
        <div className="enroll_wrapper">
          <form onSubmit={event => this.submitForm(event)}>
            <div className="enroll_title">Enter your email</div>
            <div className="enroll_input">
              {/* will be recieving an id which is the name of the key  and then all of the form data inside  */}
              <FormField
                id={"email"}
                formdata={this.state.formdata.email}
                change={element => this.updateForm(element)}
              />
              {/* form error display message */}
              {this.state.formError ? (
                <div className="error_label">
                  opps!! Something went wrong, try again.
                </div>
              ) : null}
              <button onClick={event => this.submitForm(event)}>Enroll</button>
            </div>
          </form>
        </div>
      </Fade>
    );
  }
}
export default Enroll;
