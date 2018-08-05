import React from "react";
import Link from "gatsby-link";
import Header from "../common/Header";
import MailingListSection from "../components/MailingListSection";
import Events from "../components/EventsPageEventsSection";
import Footer from "../common/Footer";

const EventsPage = ({ data }) => (
  <div>
    <Header />
    <Events events={data.allMarkdownRemark.edges} />
    <MailingListSection />
    <Footer />
  </div>
);

export default EventsPage;

export const query = graphql`
  query EventsQuey {
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
