import React from "react";
import { FaCrown } from "react-icons/fa/";

const Card = (props) => {
  console.log("Hello", props);
  const { banner, animate, name, role, when, award, title } = props.data;
  return (
    <div className="shadow-lg text-center bg-gray" data-aos={animate}>
      <img src={banner} alt="image" className="card-pic" />

      <div className="card-body text-dark">
        <h3 className="card-title">
          {name}
          <br />
          <span className="fs-1vw">【 {title} 】</span>
        </h3>
        {award != null && (
          <h5 className="card-text text-secondary">
            {award}
            <span className="p-1"></span>
            <FaCrown color="gold" className="pt-0" />
          </h5>
        )}
        <p className="fs-1vw text-secondary">
          {role}, {when}
        </p>
      </div>
    </div>
  );
};

export default Card;
