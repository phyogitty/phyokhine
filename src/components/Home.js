import React, { useState, useEffect } from "react";
import Landing from "./landing/Landing.js";
import Projects from "./projects/Projects.js";
import Footer from "./Footer.js";
import { Button, DropdownButton, Dropdown } from "react-bootstrap";
import { ToggleButton, ToggleButtonGroup } from "react-bootstrap";
import { BsMoon } from "react-icons/bs/";
import { BiSun } from "react-icons/bi/";
import { AiOutlineMenu } from "react-icons/ai/";
import ContactMe from "./contactme/ContactMe.js";
import Aos from "aos";
import "aos/dist/aos.css";

import Switch from "react-switch";

function Home() {
  useEffect(() => {
    Aos.init({ duration: 1500, once: false, mirror: true });
  }, []);
  const unSelected = "my-1 bg-secondary";
  const selected = "my-1 text-dark nav-btn-size rounded-circle bg-white";

  const [btn1, setLanding] = useState("1");
  const [btn2, setProjects] = useState("2");
  const [btn3, setResume] = useState("3");

  const [checked, setChecked] = useState(false);

  const handleChange = (nextChecked) => {
    setChecked(nextChecked);
  };
  const stageLanding = (label, style) => {
    setLanding(label);
  };
  const stageProjects = (label, style) => {
    setProjects(label);
  };
  const stageResume = (label, style) => {
    setResume(label);
  };

  return (
    <div>
      <div className="sticky">
        <div className="d-flex flex-column justify-content-center toggle-style">
          <div className="mb-3 center">
            <BiSun color="#ffff14" />
          </div>
          <div className=" mt-1">
            {" "}
            <div className="rotate-vert">
              <Switch
                onChange={handleChange}
                checked={checked}
                className="react-switch"
                uncheckedIcon={false}
                checkedIcon={false}
                offHandleColor="#b20000"
                offColor="#ebeb00"
                onHandleColor="#ace5aa"
                onColor="#000"
              />
            </div>
          </div>
          <div className="mt-3 mr-1 center">
            <BsMoon className="ml-2" color="#000aaa" />
          </div>
        </div>

        {/* <DropdownButton id="dropdown-basic-button" title={<AiOutlineMenu />}>
          <Dropdown.Item href="#/action-1">
            {" "}
            <Button
              className={unSelected}
              data-aos="fade-top"
              onMouseEnter={() => stageLanding("Landing", selected)}
              onMouseOut={() => stageLanding("1", unSelected)}
            ></Button>
          </Dropdown.Item>
          <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        </DropdownButton> */}
        <div className="d-flex flex-column justify-content-center">
          <div className="nav-btn-size bg-gray rounded mt-1"></div>
          <div className="nav-btn-size bg-gray rounded mt-1"></div>
          <div className="nav-btn-size bg-gray rounded mt-1"></div>
        </div>
        {/* <a href="#landing">
          <Button
            className={unSelected}
            data-aos="fade-top"
            onMouseEnter={() => stageLanding("Landing", selected)}
            onMouseOut={() => stageLanding("1", unSelected)}
          ></Button>
        </a>
        <a href="#projects">
          <Button
            className={unSelected}
            data-aos="fade-top"
            onMouseEnter={() => stageProjects("Projects", selected)}
            onMouseOut={() => stageProjects("2", unSelected)}
          ></Button>
        </a>
        <a href="#contactme">
          <Button
            className={unSelected}
            data-aos="fade-top"
            onMouseEnter={() => stageResume("Contact", selected)}
            onMouseOut={() => stageResume("3", unSelected)}
          ></Button>
        </a>{" "} */}
      </div>
      <Landing />
      <Projects />
      <Footer />
      <ContactMe />
    </div>
  );
}

export default Home;
