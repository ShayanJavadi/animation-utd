import React from "react";
import SectionHeader from "../common/SectionHeader";

const PACKAGE_NAME = "event-section-component";

const EventSection = () => (
  <section className={PACKAGE_NAME}>
    <div>
      <SectionHeader text="upcoming events" />
    </div>
  </section>
);

export default EventSection;
