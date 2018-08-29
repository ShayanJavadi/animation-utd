import React from "react";
import Link from "gatsby-link";
import { reverse, difference } from "lodash";
import Header from "../common/Header";
import MailingListSection from "../components/MailingListSection";
import Events from "../components/EventsPageEventsSection";
import Footer from "../common/Footer";
import isTodayOrInTheFuturePredicate from "../lib/isTodayOrInTheFuturePredicate";

const getEvents = (edges) => {
  const upcomingEvents = reverse(edges.filter(isTodayOrInTheFuturePredicate));
  const pastEvents = difference(edges, upcomingEvents);

  return [...upcomingEvents, ...pastEvents];
};

const EventsPage = ({ data }) => {
  const { edges } = data.allMarkdownRemark;

  return (
    <div>
      <Header />
      <Events events={getEvents(edges)} />
      <MailingListSection />
      <Footer />
    </div>
  );
};

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
            date
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
