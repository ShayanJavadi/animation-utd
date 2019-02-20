import React, { Component } from "react";
import { take } from "lodash";
import { Element } from "react-scroll";
import Waypoint from "react-waypoint";
import moment from "moment";
import { Helmet } from "react-helmet";
import HeroSection from "../components/HeroSection";
import Header from "../common/Header";
import MissionStatementSection from "../components/MissionStatementSection";
import PhotoReelSection from "../components/PhotoReelSection";
import EventsSection from "../components/HomePageEventsSection";
import MailingListSection from "../components/MailingListSection";
import Footer from "../common/Footer";
import scrollRoutes from "../common/consts/scroll-routes";
import { NAV_BAR_HEIGHT } from "../common/consts/dimensions";
import isTodayOrInTheFuturePredicate from "../lib/isTodayOrInTheFuturePredicate";
import favicon from 'https://raw.githubusercontent.com/ShayanJavadi/animation-utd/master/assets/images/favicon.ico';

const { EVENTS_SECTION_SCROLL_ROUTE } = scrollRoutes;

class IndexPage extends Component {
  state = { 
    isAtHeroSection: true,
  };
  
  renderHeroSection = () => (
    <Waypoint
      onEnter={() => this.setState({ isAtHeroSection: true })}
      onLeave={() => this.setState({ isAtHeroSection: false })}
      topOffset={NAV_BAR_HEIGHT + 5}
    >
      <div>
        <HeroSection /> 
      </div>
    </Waypoint>
  )

  render() {
    const { data } = this.props;

    const events = data.allMarkdownRemark.edges.filter(isTodayOrInTheFuturePredicate);

    return (
      <div>
        {this.renderHeroSection()}
        <Header isTransparent={this.state.isAtHeroSection} />
        <Element name={EVENTS_SECTION_SCROLL_ROUTE}>
          <EventsSection events={events} />
        </Element>
        <PhotoReelSection />
        <MissionStatementSection />
        <MailingListSection />
        <Footer />

        <Helmet>
          <meta name="description" 
          content="We aim to become an open and collaborative community where members feel inspired to fulfill their creative potential." />
          link={[
          { rel: 'shortcut icon', type: 'image/png', href: `${favicon}` }
          ]}
        </Helmet>
      </div>
    );
  }
};

export default IndexPage;

export const query = graphql`
  query IndexQuery {
    allMarkdownRemark(
      sort: { order: ASC, fields: [frontmatter___date] }
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
