import React from "react";

const FormField = ({ formdata, id }) => {
  const renderTemplate = () => {
    let formTemplate = null;
    // switch that will check what type of input we have in email
    // formdata element is input!!
    switch (formdata.element) {
      case "input":
        formTemplate = (
          <div>
            {/* all the fields that were in the config */}
            <input {...formdata.config} value={formdata.value} />
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
