import React from "react";

const FormField = ({ formdata, id, change }) => {
  const showError = () => {
    /* accessing formdata and validation and also checking if the formdata is valid.
       if it is not valid display validation message  
       if it is valid do nothing 
 */
    let errorMessage = (
      <div className="error_label">
        {formdata.validation && !formdata.valid
          ? formdata.validationMessage
          : null}
      </div>
    );
    return errorMessage;
  };

  const renderTemplate = () => {
    let formTemplate = null;
    // switch that will check what type of input we have in email
    // formdata element is input!!
    switch (formdata.element) {
      case "input":
        formTemplate = (
          <div>
            {/* all the fields that were in the config */}
            <input
              {...formdata.config}
              value={formdata.value}
              onChange={event => change({ event, id })}
            />
            {showError()}
          </div>
        );
        break;
      // if we are not matching a case, the default is still the form template input which will return nothing.
      default:
        formTemplate = null;
    }
    return formTemplate;
  };

  return <div>{renderTemplate()} </div>;
};

export default FormField;
