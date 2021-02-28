import React from "react";
import {
  advancers,
  carbonprint,
  civildiscord,
  flippo,
  yse,
  shewhocodes,
} from "../Constants.js";
import { Container, Row, Col } from "react-bootstrap";
import Card from "./Card";

function Projects() {
  return (
    <div className="bg-blue-blur" id="projects">
      <div className="center fs-2vw pt-5">Projects</div>
      <Container fluid>
        <Row className="mx-5 mb-5 pb-5 pt-3">
          <Col className="mr-4">
            <Card data={advancers} />
          </Col>
          <Col className=" ml-4">
            <a href={carbonprint.link} className="text-decoration-none">
              <Card data={carbonprint} />
            </a>
          </Col>
        </Row>

        <Row className="m-5 py-5 ">
          <Col className=" mr-4">
            <a href={flippo.link} className="text-decoration-none">
              <Card data={flippo} />
            </a>
          </Col>
          <Col className="ml-4">
            <a href={civildiscord.link} className="text-decoration-none">
              <Card data={civildiscord} />
            </a>
          </Col>
        </Row>
      </Container>
      <div className="center fs-2vw pt-5">Organizations</div>

      <Container fluid>
        <Row className="mx-5 pb-5 pt-3">
          <Col className=" mr-4">
            <Card data={yse} />
          </Col>
          <Col className="ml-4">
            <Card data={shewhocodes} />
          </Col>
        </Row>
      </Container>
    </div>
    // <div className="container-fluid d-flex justify-content-center">
    //   <div className="row">
    //     <div className="col">
    //       <Card />
    //     </div>
    //     <div className="col">
    //       <Card />
    //     </div>
    //   </div>
    // </div>
  );
}

export default Projects;
