import React from "react";
import {
  advancers,
  carbonprint,
  civildiscord,
  flippo,
  yse,
  shewhocodes,
  rass,
} from "../Constants.js";
import { Container, Row, Col } from "react-bootstrap";
import Card from "./Card";
import CardEmpty from "./CardEmpty";
import { HiLightBulb, HiOutlineLightBulb } from "react-icons/hi";
import { VscOrganization } from "react-icons/vsc";
function Projects(props) {
  const { otherBgLight, textColour } = props.theme;
  const thisTheme = otherBgLight + " " + textColour;
  return (
    <div className={thisTheme} id="projects">
      <div className="d-flex flex-row justify-content-center center fs-2vw pt-5">
        <h3 className="mr-1">Projects</h3>{" "}
        <HiOutlineLightBulb color={textColour} />
      </div>
      <Container>
        <Row className="mb-5 pb-3 pt-3">
          <Col className="mr-4">
            <a href={rass.link} className="text-decoration-none">
              <Card data={rass} />
            </a>
          </Col>
          <Col className=" ml-4">
            <a href={carbonprint.link} className="text-decoration-none">
              <Card data={carbonprint} />
            </a>
          </Col>
        </Row>

        <Row className="my-5 py-3 ">
          <Col className="mr-4">
            <Card data={advancers} />
          </Col>
          <Col className="ml-4">
            <a href={civildiscord.link} className="text-decoration-none">
              <Card data={civildiscord} />
            </a>
          </Col>
        </Row>
        <Row className="my-5 py-3 ">
          <Col className=" mr-4">
            <a href={flippo.link} className="text-decoration-none">
              <Card data={flippo} />
            </a>
          </Col>
          <Col className="ml-4">
            <CardEmpty />
          </Col>
        </Row>
      </Container>
      <div className="d-flex flex-row justify-content-center center fs-2vw pt-5">
        <h3 className="mr-1">Organizations</h3>
        <VscOrganization color={textColour} />
      </div>

      <Container>
        <Row className="pb-5 pt-3">
          <Col className=" mr-4">
            <Card data={yse} />
          </Col>
          <Col className="ml-4">
            <Card data={shewhocodes} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Projects;
