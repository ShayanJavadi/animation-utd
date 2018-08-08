import React from "react";
import moment from "moment";
import { toUpper } from "lodash";
import classNames from "classnames";
import HTMLContent from "../common/HTMLContent";
import Button from "../common/Button";
import { EVENT_TITLE_DATE_FORMAT } from "../common/consts/dates";

const PACKAGE_NAME = "event-component";
const eventComponentClassNames = classNames("container", PACKAGE_NAME);

const renderEventImage = imageUrl => (
  <div className="event-image image is-2by1">
    <img src={imageUrl} alt="" />
  </div>
);

const renderEventDetails = (event) => {
  const {
    html, frontmatter: {
      title, date, location, time, eventUrl,
    },
  } = event;

  const formattedDate = moment(date).format(EVENT_TITLE_DATE_FORMAT);

  return (
    <div className="event-content container content">
      <h2>
        {title}
      </h2>
      <h3>
        {`${formattedDate}, ${location}`}
      </h3>
      <h3>
        {time}
      </h3>
      <HTMLContent html={html} classNames="content" />
      <div className="learn-more-button-container">
        <Button text="Learn More" href={eventUrl} />
      </div>
    </div>
  );
};

const renderEventDate = (date) => {
  const parsedDate = moment(date);
  const day = parsedDate.format("D");
  const month = toUpper(parsedDate.format("MMM"));

  return (
    <div className="event-date-container">
      <p className="event-month">
        {month}
      </p>
      <p className="event-day">
        {day}
      </p>
    </div>
  );
};

const Event = ({ event }) => {
  const {
    html, frontmatter: {
      date, imageUrl,
    },
  } = event;

  return (
    <div className={eventComponentClassNames}>
      {renderEventImage(imageUrl)}
      {renderEventDetails(event)}
      {renderEventDate(date)}
    </div>
  );
};

export default Event;
