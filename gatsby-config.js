module.exports = {
  siteMetadata: {
    title: "Animation Guild At UTD",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/data`,
        name: "markdown-pages",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "image",
        path: `${__dirname}/assets/images/`,
      },
    },
    {
      resolve: "gatsby-plugin-mailchimp",
      options: {
        endpoint: "https://facebook.us16.list-manage.com/subscribe/post?u=5ae11bc484c4c935998f1fcbc&amp;id=f975ddc6d4", // see instructions section below
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    "gatsby-transformer-remark",
  ],
};
