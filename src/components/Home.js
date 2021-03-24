import React, { useState, useEffect } from "react";
import Landing from "./landing/Landing.js";
import Projects from "./projects/Projects.js";
import Footer from "./Footer.js";
import { Container, Row, Col } from "react-bootstrap";
import { BsMoon } from "react-icons/bs/";
import { BiSun } from "react-icons/bi/";
import { FaList } from "react-icons/fa/";
import ContactMe from "./contactme/ContactMe.js";
import { themeLight, themeDark } from "./Constants.js";
import Aos from "aos";
import "aos/dist/aos.css";

import Switch from "react-switch";

function Home() {
  useEffect(() => {
    Aos.init({ duration: 1500, once: false, mirror: true });
  }, []);
  // const unSelected = "my-1 bg-secondary";
  // const selected = "my-1 text-dark nav-btn-size rounded-circle bg-white";

  // const [btn1, setLanding] = useState("1");
  // const [btn2, setProjects] = useState("2");
  // const [btn3, setResume] = useState("3");

  const [theme, setTheme] = useState(themeLight);
  const [checked, setChecked] = useState(false);

  const handleChange = (nextChecked) => {
    if (nextChecked === true) {
      setTheme(themeDark);
    } else {
      setTheme(themeLight);
    }
    setChecked(nextChecked);
  };
  // const stageLanding = (label, style) => {
  //   setLanding(label);
  // };
  // const stageProjects = (label, style) => {
  //   setProjects(label);
  // };
  // const stageResume = (label, style) => {
  //   setResume(label);
  // };

  return (
    <div>
      <div className="sticky">
        <Container fluid className="center">
          <Row noGutters className="my-3">
            <Col>
              <div className="rotate-vert light-mode">
                <Switch
                  checked={checked}
                  onChange={handleChange}
                  handleDiameter={28}
                  offColor="#08f"
                  onColor="#0ff"
                  offHandleColor="#0ff"
                  onHandleColor="#08f"
                  height={30}
                  width={70}
                  borderRadius={6}
                  activeBoxShadow="0px 0px 1px 2px #fffc35"
                  uncheckedIcon={
                    <div className="mb-5 text-center">
                      <BsMoon className="ml-2" color="#66CCCC" />
                    </div>
                  }
                  checkedIcon={
                    <div className="mb-3 text-center">
                      <BiSun color="#ffff14" />
                    </div>
                  }
                  uncheckedHandleIcon={
                    <div className="mb-3 text-center">
                      <BiSun color="#ffff14" />
                    </div>
                  }
                  checkedHandleIcon={
                    <div className="mb-5 text-center">
                      <BsMoon color="#66CCCC" />
                    </div>
                  }
                  className="react-switch"
                  id="small-radius-switch"
                />
              </div>
            </Col>
          </Row>
          {/* <Row>
            <Col>
              <div className="menu-square bg-warning center rounded-circle">
                <FaList color="yellow" />
              </div>
            </Col>
          </Row> */}
        </Container>
      </div>
      <Landing theme={theme} />
      <Projects theme={theme} />

      <ContactMe theme={theme} />
      <Footer theme={theme} />
    </div>
  );
}

export default Home;
