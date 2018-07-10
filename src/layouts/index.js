import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import "./index.scss";

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: "description", content: "Sample" },
        { name: "keywords", content: "sample, something" },
      ]}
    />
    <div className="test container">
      {children()}
    </div>
  </div>
);

Layout.propTypes = {
  children: PropTypes.func,
  data: PropTypes.object,
};

export default Layout;

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
