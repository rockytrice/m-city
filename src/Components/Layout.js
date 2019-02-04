import React from "react";
import Header from "./Header_footer/Header";

const Layout = props => {
  return (
    <div>
      <Header />
      {props.children}
    </div>
  );
};

export default Layout;
