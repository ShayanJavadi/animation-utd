import React from "react";
import classNames from "classnames";
import Button from "../common/Button";
import Header from "./Header";

const PACKAGE_NAME = "hero-section-component hero";

const heroSectionClassNames = classNames(PACKAGE_NAME, "hero");
const bigFontClassNames = classNames("huge-font", "title");

const HeroSection = () => (
  <section className={heroSectionClassNames}>
    <div className="text-container hero-body container">
      <h1 className={bigFontClassNames}>
        Welcome to
      </h1>
      <h1 className={bigFontClassNames}>
        the
      </h1>
      <h1 className={bigFontClassNames}>
        Animation Guild At UTD
      </h1>
      <div className="button-container">
        <Button
          text="Learn More"
        />
      </div>
    </div>
    
  </section>
);

export default HeroSection;
