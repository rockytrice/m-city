import React from "react";
import { Link } from "react-router-dom";

import mcitylogo from "../../Resources /images/logos/manchester_city_logo.png";

export const CityLogo = props => {
  const template = (
    <div
      className="img_cover"
      //   whenever using this CityLogo we must pass the width and height
      style={{
        width: props.width,
        height: props.height,
        background: `url(${mcitylogo})no-repeat`
      }}
    />
  );
  // making the reusable component versatile.
  if (props.link) {
    //   if it is a link, return the link that we are importing at the top👌🏾
    return (
      <Link to={props.linkTo} className="link_logo">
        {template}
      </Link>
    );
  } else {
    //   if its not a link return whatever template we have above👆🏾
    return template;
  }
};
