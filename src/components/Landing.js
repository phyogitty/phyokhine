import React, { Component, useEffect } from "react";
import ReactRoundedImage from "react-rounded-image";
import phyo from "../images/phyo.jpg";
import twinpeak from "../images/twinpeak.png";
import phyo1 from "../images/phyo1.jpg";
import { Container, Row, Col } from "react-bootstrap";

// will add more later

const Landing = () => {
  return (
    <div className="container-fluid add-bg px-0">
      <Container className="px-0" fluid>
        <Row noGutters>
          <Col lg={4} md={3} sm={2} className="bg-white-blur">
            <div className="m-5">
              <img
                src={phyo1}
                data-aos="fade-right"
                className="full-wid-hei profile"
              ></img>
            </div>
          </Col>
          <Col lg={8} md={9} sm={10}>
            <div className="full-wid-hei bg-white-blur p-2 px-4">
              <div data-aos="fade-left">
                <h1 className="fs-8vw">Phyo Khine</h1>
                <p className="fs-2vw">Aspiring Software Engineer</p>
                <br />
                <p className="fs-1-5vw">
                  Countries 🇲🇲 <span className="pl-1"></span>🇺🇸
                  <br />
                  <br />
                  Education
                  <ul className="fs-1-5vw">
                    <li>
                      BA in Computer Science, University of Californa, Berkeley,
                      Class of 2021
                    </li>
                    <li>
                      AS in CS and Math, City College of San Francisco, Class of
                      2018
                    </li>
                  </ul>
                  <br />
                  Events of Interst I've Been To
                </p>
                <div className="bg-primary"></div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      {/* <div className="full-wid-hei bg-blue-blur">HELLOW</div>
      <div className="full-wid-hei bg-blue-blur">HELLOW</div>
      <div className="full-wid-hei bg-blue-blur">HELLOW</div>
      <div className="full-wid-hei bg-blue-blur">HELLOW</div> */}

      {/* <div className="full-wid-hei bg-white-blur">HELLOW</div>
      <div className="full-wid-hei bg-white-blur">HELLOW</div>
      <div className="full-wid-hei bg-white-blur">HELLOW</div>
      <div className="full-wid-hei bg-white-blur">HELLOW</div>
      <div className="full-wid-hei bg-white-blur">HELLOW</div>
      <div className="full-wid-hei bg-white-blur">HELLOW</div>
      <div className="full-wid-hei bg-white-blur">HELLOW</div>

      <div className="full-wid-hei bg-white-blur">HELLOW</div> */}

      {/* <div className="my-3"></div>
          <h1 className="font-fantasy display-2 mt-5">
            <strong>Phyo Khine</strong>
          </h1>
          <div className="center my-3">
            <div className="my-3">
              <ReactRoundedImage
                image={phyo}
                roundedColor="#E1E3DF "
                imageWidth="190"
                imageHeight="190"
                roundedSize="15"
              />
            </div>
            <div className="auto px-5 my-2 bg-white-blur center rounded">
              <p className="text-white">
                __________________________________________________________
              </p>
              <h2>
                <u>About Me</u>
              </h2>
              <h4>Pursuing B.A. degree in Computer Science,</h4>

              <h4>Graduating Class of 2021</h4>

              <br></br>
              <p>******</p>
              <h3>
                <u>Interests</u>
              </h3>
              <ul class="fs-30">
                <li>Full-Stack Development</li>
                <li>Web Development</li>
                <li>Mobile Development</li>
                <li>Health Tech</li>
                <li>Social Impact</li>
              </ul>

              <p>******</p>
              <h3>
                <u>Programming Languages</u>
              </h3>
              <ul class="fs-30">
                <li>Java</li>
                <li>Python</li>
                <li>Javascript</li>
                <li>C++</li>
                <li>SQL</li>
                <li>Dart</li>
                <li>HTML/CSS</li>
              </ul>
              <p className="text-white">
                __________________________________________________________
              </p>
            </div>
          </div> */}
      {/* </div> */}
    </div>
  );
};

export default Landing;
