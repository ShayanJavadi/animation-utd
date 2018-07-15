import React from "react";
import HeroSection from "../components/HeroSection";
import Header from "../components/Header";
import MissionStatementSection from "../components/MissionStatementSection";
import PhotoReelSection from "../components/PhotoReelSection";
import EventsSection from "../components/EventsSection";

const IndexPage = (props) => {
  const events = props.data.allMarkdownRemark.edges;
  return (
    <div>
      <Header />
      <HeroSection />
      <MissionStatementSection />
      <PhotoReelSection />
      <EventsSection events={events} />
    </div>
  );
};

export default IndexPage;

export const query = graphql`
  query IndexQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { fileAbsolutePath: { regex: "/(\/data\/events)/.*\\.md$/" } }
      ) {
      edges {
        node {
          id
          html
          frontmatter {
            title
            date(formatString: "dddd, MMMM DD")
            location
            time
            imageUrl
            eventUrl
          }
        }
      }
    }
  }
`;