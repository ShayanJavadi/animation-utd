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
    "gatsby-transformer-remark",
  ],
};
