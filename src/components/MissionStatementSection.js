import React from "react";
import classNames from "classnames";

const PACKAGE_NAME = "mission-statement-section-component";

const bigFontClassNames = classNames("huge-font", "title");

const MissionStatementSection = () => (
  <section className={PACKAGE_NAME}>
    <div className="container">
      <h1 className="title">
         Our goal is to build a community of students working together to break into the animation industry
      </h1>
      <p className="sub-title">
        We aim to become an open and collaborative community where members feel inspired to fulfill their creative potential
      </p>
    </div>
  </section>
);

export default MissionStatementSection;
