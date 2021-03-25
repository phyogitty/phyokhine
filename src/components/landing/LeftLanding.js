import React from "react";
import phyo1 from "../../images/profiles/phyo-headshot.png";
import linkedin from "../../images/socials/linkedin.png";
import github from "../../images/socials/github-color.png";
import gmail from "../../images/socials/gmail-1.png";
import frame from "../../images/profiles/frame.png";
import transparent from "../../images/profiles/transparent.png";
import { Carousel } from "react-bootstrap";

import { quotes } from "../Constants.js";
const LeftLanding = (props) => {
  const quoteTextStyle = "fs-1-4vw " + props.textColor;
  const quoteAuthorStyle = "fs-2vw " + props.textColor;
  const isDarkMode = props.isDarkMode;
  return (
    <div className=" my-5 ml-5 mr-4 center">
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
        <img
          src={frame}
          alt="some"
          className={
            isDarkMode === true
              ? "full-wid-hei my-2 frame"
              : "full-wid-hei my-2"
          }
        />
      </div>
      <div className="">
        <Carousel fade nextIcon={null} prevIcon={null}>
          {quotes.map((quote) => (
            <Carousel.Item className={props.textColor}>
              <img
                className="d-block w-100"
                src={transparent}
                alt="Third slide"
              />

              <Carousel.Caption className={props.textColor}>
                <p className={quoteTextStyle}>"{quote.text}"</p>
                <p className={quoteAuthorStyle}>- {quote.author}</p>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default LeftLanding;
