import React, { useState, useEffect } from "react";
import Landing from "./landing/Landing.js";
import Projects from "./projects/Projects.js";
import Footer from "./Footer.js";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BiUpArrow } from "@react-icons/all-files/bi/BiUpArrow";
import { BiDownArrow } from "@react-icons/all-files/bi/BiDownArrow";
// import { BiUpArrow } from "@react-icons/all-files/fa/BiUpArrow";
// import { BiDownArrow } from "@react-icons/all-files/fa/BiDownArrow";
import ContactMe from "./contactme/ContactMe.js";
import Aos from "aos";
import "aos/dist/aos.css";

function Home() {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);
  const [btn1, setLanding] = useState("1");
  const [btn2, setProjects] = useState("2");
  const [btn3, setResume] = useState("3");

  const stageLanding = (label) => {
    setLanding(label);
  };
  const stageProjects = (label) => {
    setProjects(label);
  };
  const stageResume = (label) => {
    setResume(label);
  };

  return (
    <div>
      <div className="sticky">
        <div data-aos="fade-up">
          <BiUpArrow size="5.5vh" />
        </div>
        <Button
          className="my-1 bg-warning text-dark nav-btn-size"
          data-aos="fade-top"
          onMouseEnter={() => stageLanding("Landing")}
          onMouseOut={() => stageLanding("1")}
        >
          {btn1}
        </Button>
        <Button
          className="my-1 bg-warning text-dark nav-btn-size"
          data-aos="fade-top"
          onMouseEnter={() => stageProjects("Projects")}
          onMouseOut={() => stageProjects("2")}
        >
          {btn2}
        </Button>
        <Button
          className="my-1 bg-warning text-dark nav-btn-size"
          data-aos="fade-top"
          onMouseEnter={() => stageResume("Resume")}
          onMouseOut={() => stageResume("3")}
        >
          {btn3}
        </Button>
        <div data-aos="fade-down">
          <BiDownArrow size="5.5vh" />
        </div>
      </div>
      <Landing />
      <Projects />
      <Footer />
      <ContactMe />
    </div>
  );
}

export default Home;
