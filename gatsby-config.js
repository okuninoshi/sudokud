module.exports = {
  siteMetadata: {
    title: "Sudokud",
    titleTemplate: "%s ^.^ sudokud",
    description:
      "chetoui hamza's personal website.",
    url: "https://sudokud.gatsbyjs.io", // No trailing slash allowed!
    image: "/images/avatar-small.png", // Path to your image you placed in the 'static' folder
    twitterUsername: "@okuninoshi",
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-transition-link",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/avatar-small.png",
      },
    },
    "gatsby-plugin-mdx",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
  ],
};
