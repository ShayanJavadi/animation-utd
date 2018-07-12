import React from "react";
import HeroSection from "../components/HeroSection";
import Header from "../components/Header";
import MissionStatementSection from "../components/MissionStatementSection";
import PhotoReelSection from "../components/PhotoReelSection";
import EventsSection from "../components/EventsSection";

const IndexPage = () => (
  <div>
    <Header />
    <HeroSection />
    <MissionStatementSection />
    <PhotoReelSection />
    <EventsSection />
  </div>
);

export default IndexPage;
