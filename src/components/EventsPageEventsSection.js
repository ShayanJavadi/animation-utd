import React from "react";
import SectionHeader from "../common/SectionHeader";
import Event from "./Event";
import Button from "../common/Button";

const PACKAGE_NAME = "events-page-events-section-component";
const BIG_SECTION_HEADER_CLASS_NAME = "big-section-header";

const renderEvents = events => events.map(event => <Event event={event.node} />);


const EventsPageEventsSection = ({ events }) => (
  <section className={PACKAGE_NAME}>
    <div className="container">
      <SectionHeader text="events" />
      <div className="events-container">
        {renderEvents(events)}
      </div>
      <SectionHeader className={BIG_SECTION_HEADER_CLASS_NAME} text="More Events Coming Soon!" isSecondary>

        <a href="https://www.facebook.com/pg/animationutd/events/?ref=page_internal">
          <Button text="View Our Events On Facebook" isSecondary />
        </a>
      </SectionHeader>
    </div>
  </section>
);

export default EventsPageEventsSection;
