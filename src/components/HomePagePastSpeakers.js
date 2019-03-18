import React from "react";
import Link from "gatsby-link";
import SectionHeader from "../common/SectionHeader";

const PACKAGE_NAME = "home-page-past-speakers";

const HomePagePastSpeakers = ({ events }) => (
  <section className={PACKAGE_NAME}>
    <div className="container">
      <SectionHeader text="past speakers" />
      <p>
        Adam Nusrallah - Explosm / Cyanide and Happiness
        Anngelica Parent - Gearbox
        Casey Johnson - Atec
        Christina Faraj - Pixar
        Daniel Leeper - Groove Jones
        Don Dixon - Reel FX
        Edward Whetstone - Rooster Teeth
        Edwardian Taylor - Freelance
        Eric Farrar - Atec
        John Yang - Rooster Teeth
        Kevin Penrod - Gearbox
        Megan McDaniel - Rooster Teeth
        Michael Sewell - Gearbox
        Molly Meyer - Pixar
        Phillip Hall - Atec
        Scott Kester - Gearbox
        Sean McComber - Atec
        Sean Muriithi - Brazen Animation
        Mindy Berardini - Blue Sky Studios
        Nick Harvey - Groove Jones
        Rob Denbleyker - Explosm
        Todd Fechter - Atec
      </p>
    </div>
  </section>
);

export default HomePagePastSpeakers;
