import React from "react";
import SectionHeader from "../common/SectionHeader";

const PACKAGE_NAME = "about-section";

const AboutSection = () => (
  <section className={PACKAGE_NAME}>
    <div className="container">
      <SectionHeader text="Who We Are">
        <p className="sub-title">
          The Animation Guild at UT Dallas was founded in 2012 and has been growing steadily since as an active student-run organization representing and serving animation students in the School of Arts, Technology, and Emerging Communication (ATEC).
        </p>
        <p>
          In 2017, the Guild launched a new brand identity and refocused its mission around building a community of aspiring animation professionals. The Guild seeks to foster more collaboration among students and build stronger relationships with animation studios, alumni, faculty, and the local community.
        </p>
      </SectionHeader>
    </div>
  </section>
);

export default AboutSection;
