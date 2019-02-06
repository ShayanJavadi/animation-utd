import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { Element } from "react-scroll";
import scrollRoutes from "../common/consts/scroll-routes";
import "./index.scss";
import favicon from 'https://raw.githubusercontent.com/ShayanJavadi/animation-utd/master/assets/images/favicon.ico';

const { TOP_OF_THE_PAGE_ROUTE } = scrollRoutes;

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: "description", content: "Animation Guild at UT Dallas" },
        { name: "keywords", content: "animation, guild, ag" },
      ]}
      link={[
        { rel: 'shortcut icon', type: 'image/ico', href:'${favicon}'  }
      ]}
    />
    <main>
      <Element to={TOP_OF_THE_PAGE_ROUTE}>
        {children()}
      </Element>
    </main>
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
