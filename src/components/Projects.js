import React from "react";
import {
  advancers,
  carbonprint,
  civildiscord,
  flippo,
  yse,
  shewhocodes,
} from "./ProjectsInfo.js";
import { Container, Row, Col } from "react-bootstrap";
import Card from "./Card";

function Projects() {
  return (
    <div className="bg-blue-blur">
      <Container fluid>
        <Row className="m-5 py-5">
          <Col className="card-pic mr-4">
            <Card data={advancers} />
          </Col>
          <Col className="card-pic ml-4">
            <Card data={carbonprint} />
          </Col>
        </Row>

        <Row className="m-5 py-5">
          <Col className="card-pic mr-4">
            <Card data={flippo} />
          </Col>
          <Col className="card-pic ml-4">
            <Card data={civildiscord} />
          </Col>
        </Row>

        <Row className="m-5 py-5">
          <Col className="card-pic mr-4">
            <Card data={yse} />
          </Col>
          <Col className="card-pic ml-4">
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
