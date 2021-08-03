module.exports = {
  siteMetadata: {
    title: "CHETOUI HAMZA",
    titleTemplate: "%s ^.^ chetoui hamza",
    description:
      "chetoui hamza's personal website.",
    siteUrl: "https://sudokud.gtsb.io", // No trailing slash allowed!
    image: "/images/icon.png", // Path to your image you placed in the 'static' folder
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
        icon: "src/images/icon.png",
        name: "Sudokud",
        short_name: "Sudokud",
        start_url: "/",
        background_color: "#504C9E",
        theme_color: "#504C9E",
        display: "standalone",
        crossOrigin: `use-credentials`,
        description: `chetoui hamza's personal website`,
        lang:`en`,
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
