import React from "react";
import phyo1 from "../../images/profiles/phyo-headshot.png";
import { SocialIcon } from "react-social-icons";
import linkedin from "../../images/socials/linkedin.png";
import github from "../../images/socials/github-color.png";
import gmail from "../../images/socials/gmail-1.png";

import { Link } from "react-router-dom";
const LeftLanding = () => {
  return (
    <div className="m-5 center">
      <div
        className="bg-white pt-1 mb-5 full-wid-hei"
        data-aos="flip-right"
      ></div>
      <img
        src={phyo1}
        data-aos="fade-right"
        className="custom-wid-hei profile"
      ></img>
      <div className="d-flex flex-row justify-content-center mt-5">
        <div
          className="rounded-circle mx-2 mt-2 aos-item"
          data-aos="fade-up-right"
          
        >
          <a href="https://www.linkedin.com/in/phyo-khine/">
            <img src={linkedin} className="social-icon rounded-circle" />
          </a>
        </div>
        <div className="rounded-circle mx-2 p-2" data-aos="fade-down-left">
          <a href="https://github.com/phyogitty?tab=repositories">
            <img src={github} className="social-icon rounded-circle" />
          </a>
        </div>
        <div className="mx-2" data-aos="fade-up-right">
          <a href="#contactme">
            <img src={gmail} className="gmail-icon " />
          </a>
        </div>
      </div>
      <div
        className="bg-white pt-1 mt-3 full-wid-hei"
        data-aos="flip-right"
      ></div>
      <div className="mt-5" data-aos="flip-left">
        <p className="fs-1-5vw">
          "If you look at what you have in life, you'll always have more. If you
          look at what you don't have in life, you'll never have enough."
        </p>
        <p className="fs-2vw">- Oprah Winfrey</p>
      </div>
    </div>
  );
};

export default LeftLanding;
