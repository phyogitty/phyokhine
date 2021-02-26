import React, { useEffect, useReducer, useState } from "react";
import EventCard from "./EventCard.js";
import { getNextFour } from "../Constants.js";
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
      if (index % totalPanels == 1) {
        setIndexSetting({
          one: "small-nav mx-1 bg-gray",
          two: "small-nav mx-1 bg-blue",
          three: "small-nav mx-1 bg-gray",
        });
      } else if (index % totalPanels == 2) {
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
    <div className="full-wid-hei bg-black-blur p-2 px-4">
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
              BA in Computer Science, University of Californa, Berkeley, Class
              of 2021
            </li>
            <li>
              AS in CS and Math, City College of San Francisco, Class of 2018
            </li>
          </ul>
          <br />
          Events of Interst I've Been To
        </p>
        <div
          className="d-flex flex-row justify-content-around mt-5"
          data-aos="fade-bottom"
        >
          {displayEvents.map((event) => (
            <EventCard data={event} />
          ))}
        </div>
        <div className="d-flex flex-row justify-content-center">
          <div className={indexSetting.one}></div>
          <div className={indexSetting.two}></div>
          <div className={indexSetting.three}></div>
        </div>
      </div>
    </div>
  );
};

export default RightLanding;
