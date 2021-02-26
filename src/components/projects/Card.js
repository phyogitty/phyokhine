import React from "react";

const Card = (props) => {
  console.log("Hello", props);
  const { banner, animate, name } = props.data;
  return (
    <div className="text-center bg-gray" data-aos={animate}>
      <img src={banner} alt="image" className="card-pic" />

      <div className="card-body text-dark">
        <h4 className="card-title">{name}</h4>
        <p className="card-text text-secondary">Hello There Hello Hello</p>
      </div>
    </div>
  );
};

export default Card;
