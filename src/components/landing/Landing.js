import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import LeftLanding from "./LeftLanding.js";
import RightLanding from "./RightLanding.js";

const Landing = (props) => {
  const landingLeftTheme =
    props.theme.blurColour2 + " " + props.theme.textColour;
  const landingRightTheme =
    props.theme.blurColour1 + " " + props.theme.textColour;

  return (
    <div className="container-fluid add-bg px-0 aos-item" id="landing">
      <Container className="px-0" fluid>
        <Row noGutters>
          <Col lg={4} md={3} sm={2} className={landingLeftTheme}>
            <LeftLanding
              textColor={props.theme.textColour}
              isDarkMode={props.theme.isDarkMode}
            />
          </Col>
          <Col lg={8} md={9} sm={10} className={landingRightTheme}>
            <RightLanding />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Landing;
