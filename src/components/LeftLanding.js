import React from "react";
import phyo1 from "../images/profiles/phyo1.jpg";

const LeftLanding = () => {
  return (
    <div className="m-5 center">
      <img
        src={phyo1}
        data-aos="fade-right"
        className="custom-wid-hei profile"
      ></img>
      <div className="p-4 mt-4" data-aos="flip-left">
        <h3>"This is someone'e quote that I like and I am gonna put"</h3>
        <h4>- Written by Someone</h4>
      </div>
      <div className="p-4" data-aos="flip-left">
        <h3>"This is someone'e quote that I like and I am gonna put"</h3>
        <h4>- Written by Someone</h4>
      </div>
    </div>
  );
};

export default LeftLanding;
