import React, { Component, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import LeftLanding from "./LeftLanding.js";
import RightLanding from "./RightLanding.js";

// will add more later

const Landing = () => {
  return (
    <div className="container-fluid add-bg px-0">
      <Container className="px-0" fluid>
        <Row noGutters>
          <Col lg={4} md={3} sm={2} className="bg-black-blur">
            <LeftLanding />
          </Col>
          <Col lg={8} md={9} sm={10}>
            <RightLanding />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Landing;
