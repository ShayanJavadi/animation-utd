import React from "react";
import classNames from "classnames";
import Button from "../common/Button";
import Header from "./Header";

const HERO_COMPONENT = "hero-component";

const bigFontClassNames = classNames("huge-font", "title");

const Hero = () => (
  <section className={HERO_COMPONENT}>
    <Header />
    <div className="text-container">
      <h1 className={bigFontClassNames}>
        Welcome to
      </h1>
      <h1 className={bigFontClassNames}>
        the
      </h1>
      <h1 className={bigFontClassNames}>
        Animation Guild At UTD
      </h1>
    </div>
    <div className="button-container">
      <Button
        text="Learn More"
      />
    </div>
  </section>
);

export default Hero;
