import React from "react";
import classNames from "classnames";
import photoReel from "../../assets/images/photo-reel.png";

const PACKAGE_NAME = "photo-reel-section-component";


const PhotoReelSection = () => (
  <section className={PACKAGE_NAME}>
    <div>
      <img src={photoReel} className="logo" alt="Animation Guild at UT Dallas" />
    </div>
  </section>
);

export default PhotoReelSection;
