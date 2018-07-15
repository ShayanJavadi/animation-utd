import React from "react";
import SectionHeader from "../common/SectionHeader";
import Event from "./Event";

const PACKAGE_NAME = "events-section-component";

const renderEvents = events => events.map(event => <Event event={event.node} />);


const EventsSection = ({ events }) => (
  <section className={PACKAGE_NAME}>
    <div className="container">
      <SectionHeader text="upcoming events" />
      {renderEvents(events)}
    </div>
  </section>
);

export default EventsSection;
