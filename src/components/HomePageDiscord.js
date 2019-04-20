import React from "react";
import Link from "gatsby-link";
import SectionHeader from "../common/SectionHeader";

const PACKAGE_NAME = "home-page-discord";

const HomePagePastSpeakers = ({ events }) => (
  <section className={PACKAGE_NAME}>
    <div className="container">
    <iframe src="https://discordapp.com/widget?id=567486502184157204&theme=dark" width="350" height="500" allowtransparency="true" frameborder="0"></iframe>
    </div>
  </section>
);

export default HomePagePastSpeakers;
