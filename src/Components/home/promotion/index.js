import React from "react";
import PromoAnimations from "./Animation";
import Enroll from "./Enroll";

const Promotion = () => {
  return (
    <div className="promotion_wrapper" style={{ background: "#ffffff" }}>
      <div className="container">
        <PromoAnimations />
        <Enroll />
      </div>
    </div>
  );
};

export default Promotion;
