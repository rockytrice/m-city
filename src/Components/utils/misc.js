import React from "react";
import { Link } from "react-router-dom";

export const Tag = props => {
  const template = (
    <div
      style={{
        background: props.bck,
        fontSize: props.size,
        color: props.color,
        padding: "5px 10px",
        display: "inline-block",
        fontFamily: "Righteous",
        marginBottom: "20px",
        border: "1px solid"
      }}
    >
      {props.children}
    </div>
  );

  if (props.link) {
    return <Link to={props.linkto}> {template} </Link>;
  } else {
    return template;
  }
};

// fuction that at the end will return something. it will recieve the snapshot as a argument. this function will loop the snapshot.
export const firebaseLooper = snapshot => {
  // after the loop this data will contain all of the records in the form that we want
  let data = [];

  snapshot.forEach(childSnapshot => {
    // on each loop we grap some data and push in to Data
    data.push({
      // push the entire object as well as the id
      ...childSnapshot.val(),
      id: childSnapshot.key
    });
  });
  // return the new data form
  return data;
};

export const reverseArray = actualArray => {
  let reversedArray = [];
  for (let i = actualArray.length - 1; i >= 0; i--) {
    reversedArray.push(actualArray[i]);
  }
  return reversedArray;
};

export const validate = element => {
  // if the input is valid we will return an array. the array will say if the input is true, which is valid, or false(not valid) and in the second position a message
  let error = [true, ""];

  if (element.validation.email) {
    const valid = /\S+@\S+/.test(element.value);
    const message = `${!valid ? "Must be a valid email" : ""}`;
    error = !valid ? [valid, message] : error;
  }

  // checking if required equals true
  if (element.validation.required) {
    const valid = element.value.trim() !== "";
    const message = `${!valid ? "This field is required" : ""}`;

    // if the error is equal to not valid append the array with valid(false) and the message if the element is false
    error = !valid ? [valid, message] : error;
  }
  return error;
};
