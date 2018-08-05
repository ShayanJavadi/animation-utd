import React from "react";
import HTMLContent from "../common/HTMLContent";
import Button from "../common/Button";

const PACKAGE_NAME = "event-component";

const Event = ({ event }) => {
  const {
    html, frontmatter: {
      title, date, location, time, imageUrl, eventUrl,
    },
  } = event;


  return (
    <div className="container event-component">
      <div className="event-image image is-2by1">
        <img src={imageUrl} alt="" />
      </div>
      <div className="event-content container content">
        <h2>
          {title}
        </h2>
        <h3>
          {`${date}, ${location}`}
        </h3>
        <h3>
          {time}
        </h3>
        <HTMLContent html={html} classNames="content" />
        <div className="learn-more-button-container">
          <Button text="Learn More" href={eventUrl} />
        </div>
      </div>
    </div>
  );
};

export default Event;
