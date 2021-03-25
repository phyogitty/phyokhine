import React from "react";

const EventCard = (props) => {
  return (
    <div
      className="d-flex flex-column justify-content-center"
      data-aos="fade-up"
    >
      <div className="event-card mr-1 p-1 center">
        <img
          src={props.data.pic}
          className="full-wid-hei rounded-circle"
          alt="some"
        />
      </div>
      <div className="p-1 event-year center">
        <h4 className="fs-1-2vw">
          <strong>{props.data.year}</strong>
        </h4>
      </div>
    </div>
  );
};

export default EventCard;
