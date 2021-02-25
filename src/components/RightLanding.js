import React, { useEffect, useState } from "react";

const RightLanding = () => {
  //   useEffect(() => {
  //     const timer = setTimeout(() => {}, 3000);
  //     return () => reset;
  //   }, []);
  return (
    <div className="full-wid-hei bg-white-blur p-2 px-4">
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
        <div className="d-flex flex-row mt-5">
          <RightLanding />
          <RightLanding />
          <RightLanding />
          <RightLanding />
        </div>
      </div>
    </div>
  );
};

export default RightLanding;
