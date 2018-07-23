import React from "react";
import classNames from "classnames";
import { scroller } from "react-scroll";
import Button from "../common/Button";
import scrollRoutes from "../common/consts/scroll-routes";
import { NAV_BAR_HEIGHT } from "../common/consts/dimensions";

const { EVENTS_SECTION_SCROLL_ROUTE } = scrollRoutes;

const PACKAGE_NAME = "hero-section-component hero";

const heroSectionClassNames = classNames(PACKAGE_NAME, "hero");
const bigFontClassNames = classNames("huge-font", "title");

const onLearnMorePress = () => {
  scroller.scrollTo(EVENTS_SECTION_SCROLL_ROUTE, {
    duration: 1000,
    smooth: true,
    offset: -NAV_BAR_HEIGHT,
  });
};

const HeroSection = ({ backgroundUrl}) => {
  return (
    <section className={heroSectionClassNames}>
      <div className="text-container hero-body container">
        <h3>
          Welcome to
        </h3>
        <h1 className={bigFontClassNames}>
          Animation Guild
        </h1>
        <h3>
          at University of Texas at Dallas
        </h3>
        <div className="button-container">
          <Button
            text="Learn More"
            isWhite
            hasDarkShadow
            hasDownArrow
            onPress={onLearnMorePress}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
