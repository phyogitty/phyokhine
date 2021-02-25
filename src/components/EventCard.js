import React from "react";

const EventCard = (props) => {
  return (
    <div
      className="d-flex flex-column justify-content-center"
      data-aos="fade-up"
    >
      <div className=" event-card mr-5">
        <img src={props.data.pic} className="full-wid-hei rounded-circle" />
      </div>
      <div className="p-3 event-year center">
        <h4>{props.data.year}</h4>
      </div>
    </div>
  );
};

export default EventCard;
