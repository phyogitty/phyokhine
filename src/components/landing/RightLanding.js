import React, { useEffect, useState } from "react";
import EventCard from "./EventCard.js";
import { getNextFour, techstack, tools } from "../Constants.js";
const RightLanding = () => {
  const initialIndex = {
    one: "small-nav mx-1 bg-blue",
    two: "small-nav mx-1 bg-gray",
    three: "small-nav mx-1 bg-gray",
  };
  const [displayEvents, setDisplayEvents] = useState(getNextFour());
  const [indexSetting, setIndexSetting] = useState(initialIndex);
  const [index, setIndex] = useState(1);
  const totalPanels = 3;
  useEffect(() => {
    const interval = setInterval(() => {
      setDisplayEvents(getNextFour());
      if (index % totalPanels === 1) {
        setIndexSetting({
          one: "small-nav mx-1 bg-gray",
          two: "small-nav mx-1 bg-blue",
          three: "small-nav mx-1 bg-gray",
        });
      } else if (index % totalPanels === 2) {
        setIndexSetting({
          one: "small-nav mx-1 bg-gray",
          two: "small-nav mx-1 bg-gray",
          three: "small-nav mx-1 bg-blue",
        });
      } else {
        setIndexSetting(initialIndex);
      }
      setIndex(index + 1);
    }, 5000);
    return () => clearTimeout(interval);

    //   return () => reset;
  }, [index]);

  console.log("Display-----", displayEvents);
  return (
    <div className="full-wid-hei py-3 px-4">
      <div data-aos="fade-left">
        <h1 className="fs-8vw mt-3">
          <strong>Phyo Khine</strong>
        </h1>
        <p className="fs-2vw">Aspiring Software Engineer</p>
        <br />
        <p className="fs-1-5vw pt-3">
          <strong>Countries</strong> 🇲🇲 <span className="pl-1"></span>🇺🇸
        </p>
        <p className="fs-1-5vw">
          <strong>Education</strong>
          <ul className="fs-1-5vw">
            <li>
              BA in Computer Science, University of Californa, Berkeley, Class
              of 2021 (May)
            </li>
          </ul>
        </p>

        <div className="d-flex flex-row justify-content-start">
          <div className="vw-50">
            <p className="fs-1-5vw">
              <strong>Tech Stack</strong>
            </p>
          </div>

          <div className="vw-50">
            <p className="fs-1-5vw">
              <strong>Tools</strong>
            </p>
          </div>
        </div>

        <div className="d-flex flex-row justify-content-start">
          <div className="vw-45">
            <div
              className="gridContainer dash-border rounded"
              data-aos="fade-bottom"
            >
              {techstack.map((tech) => (
                <img src={tech} className="tech-dim1" alt="some" />
              ))}
            </div>
          </div>
          <div className="px-3"></div>
          <div className="vw-45">
            {" "}
            <div
              className="gridContainer dash-border rounded"
              data-aos="fade-bottom"
            >
              {tools.map((tool) => (
                <img src={tool} className="tech-dim1" alt="some" />
              ))}
            </div>
          </div>
        </div>

        <p className="fs-1-5vw mt-4">
          <strong>Events of Interst I've Been To</strong>
        </p>
        <div
          className="d-flex flex-row justify-content-around mt-3 vw-60"
          data-aos="fade-bottom"
        >
          {displayEvents.map((event) => (
            <EventCard data={event} />
          ))}
        </div>
        <div className="d-flex flex-row justify-content-center vw-60">
          <div className={indexSetting.one}></div>
          <div className={indexSetting.two}></div>
          <div className={indexSetting.three}></div>
        </div>
      </div>
    </div>
  );
};

export default RightLanding;
