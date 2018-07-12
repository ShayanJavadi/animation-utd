import React from "react";
import propTypes from "prop-types";
import { startCase } from "lodash";

const PACKAGE_NAME = "section-header-component";

const SectionHeader = ({ text }) => (
  <section className={PACKAGE_NAME}>
    <div className="container">
      <h1 className="title">
        {startCase(text)}
      </h1>
    </div>
  </section>
);

SectionHeader.propTypes = {
  text: propTypes.string,
};

export default SectionHeader;
