import React from "react";
import SectionHeader from "../common/SectionHeader";
import Event from "./Event";
import Button from "../common/Button";

const PACKAGE_NAME = "events-section-component";
const BIG_SECTION_HEADER_CLASS_NAME = "big-section-header";

const renderEvents = events => events.map(event => <Event event={event.node} />);


const EventsSection = ({ events }) => (
  <section className={PACKAGE_NAME}>
    <div className="container">
      <SectionHeader text="upcoming events" />
      <div className="events-container">
        {renderEvents(events)}
      </div>
      <SectionHeader className={BIG_SECTION_HEADER_CLASS_NAME} text="More Events Coming Soon!" isSecondary>
        <Button text="View Our Past Events" isSecondary />
      </SectionHeader>
    </div>
  </section>
);

export default EventsSection;
