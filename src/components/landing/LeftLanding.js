import React from "react";
import phyo1 from "../../images/profiles/phyo-headshot.png";
import linkedin from "../../images/socials/linkedin.png";
import github from "../../images/socials/github-color.png";
import gmail from "../../images/socials/gmail-1.png";

const LeftLanding = () => {
  return (
    <div className=" my-5 ml-5 mr-4 center">
      <div
        className="tc-white fs-1vw mb-5 full-wid-hei"
        // data-aos="flip-right"
      >
        ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        {/* /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\ */}
        {/* ~~~~~~~~~~~~~~~~~~~~~~~~~ */}
      </div>
      <img
        src={phyo1}
        data-aos="fade-right"
        className="custom-wid-hei profile"
        alt="some"
      ></img>
      <div className="d-flex flex-row justify-content-center mt-5">
        <div className="rounded-circle mt-2 aos-item">
          <a href="https://www.linkedin.com/in/phyo-khine/">
            <img
              src={linkedin}
              className="social-icon rounded-circle"
              alt="some"
            />
          </a>
        </div>

        <div className="rounded-circle p-2">
          <a href="https://github.com/phyogitty?tab=repositories">
            <img
              src={github}
              className="social-icon rounded-circle"
              alt="some"
            />
          </a>
        </div>

        <div className="p-2">
          <a href="#contactme">
            <img src={gmail} className="gmail-icon " alt="some" />
          </a>
        </div>
      </div>
      <div
        className="fs-1vw pt-1 mt-3 full-wid-hei tc-white"
        // data-aos="flip-right"
      >
        ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        {/* \/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/ */}
        {/* ~~~~~~~~~~~~~~~~~~~~~~~~~ */}
      </div>
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
