import React from "react";
import SectionHeader from "../common/SectionHeader";
import Officer from "./Officer";

const PACKAGE_NAME = "officers-section-component";

const renderOfficers = officer => <Officer {...officer} />;

const OfficersSection = ({ officers = [] }) => {
  return (
    <section className={PACKAGE_NAME}>
      <SectionHeader text="The Team" />
      <div className="container">
        {officers.map(officer => renderOfficers(officer))}
      </div>
    </section>
  );
};

export default OfficersSection;
