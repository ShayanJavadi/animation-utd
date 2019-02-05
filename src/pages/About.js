import React from "react";
import { find, sortBy } from "lodash";
import Link from "gatsby-link";
import Header from "../common/Header";
import AboutSection from "../components/AboutSection";
import OfficersSection from "../components/OfficersSection";
import MailingListSection from "../components/MailingListSection";
import Footer from "../common/Footer";

const mapPropsToOfficers = ({ data }) => {
  const officerPictures = data.allFile.edges.reduce(
    (acc, curr) => [...acc, ...curr.node.childImageSharp.resolutions.src],
    [],
  );

  const officerProfiles = data.allMarkdownRemark.edges.reduce(
    (acc, curr) => [...acc, ...curr.node.frontmatter],
    [],
  );

  const officerProfilesWithPictures = officerProfiles.reduce(
    (acc, curr) => [
      ...acc,
      {
        ...curr,
        ...{
          key: Math.random(),
          image: find(officerPictures, picture => picture.includes(`${curr.firstName}-${curr.lastName}`)),
        },
      },
    ],
    [],
  );

  return sortBy(officerProfilesWithPictures, "order");
};

const AboutPage = (props) => {
  const officers = mapPropsToOfficers(props);

  return (
    <div>
      <h1>
        about
      </h1>
      <Link to="/">
        Go back to the homepage
      </Link>
      <Header />
      <AboutSection />
      <OfficersSection officers={officers} />
      <MailingListSection />
      <Footer />
    </div>
  );
};

export default AboutPage;


export const pageQuery = graphql`
  query HeaderImageQuery {
      allFile(
        filter: { absolutePath: { regex: "/(\/assets\/images\/officers)/" } }
      ) {
        edges {
          node {
              childImageSharp {
              # Specify the image processing specifications right in the query.
              # Makes it trivial to update as your page's design changes.
              resolutions(width: 250, height: 250) {
                ...GatsbyImageSharpResolutions
              }
            }
        }
      }
    }
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/(\/data\/officers)/.*\\.md$/" } }
      ) {
      edges {
        node {
          id
          html
          frontmatter {
            firstName
            lastName
            position
            linkedin
            order
          }
        }
      }
    }
  }
`;
