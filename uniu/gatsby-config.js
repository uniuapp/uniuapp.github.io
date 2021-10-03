const path = require("path")

module.exports = {
  siteMetadata: {
    title: `UniU`,
    description: `UniU porta la tua università all'interno del tuo smartphone. Tutto ciò di cui hai bisogno a portata di mano: consulta i dati relativi alla tua carriera universitaria, la tua media, i tuoi voti, gli esami sostenuti e quelli mancanti e tanto altro ancora.`,
    author: `@sfal @marcotammaro`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-svgr`,
      options: {
        svgoConfig: {
          removeViewBox: false,
          mergePaths: false,
          collapseGroups: false,
        },
      },
    },
    `gatsby-plugin-dark-mode`,
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          "@assets": path.resolve(__dirname, "src/assets"),
          "@components": path.resolve(__dirname, "src/components"),
          "@fonts": path.resolve(__dirname, "src/assets/fonts"),
          "@pages": path.resolve(__dirname, "src/pages"),
          "@styles": path.resolve(__dirname, "src/styles"),
          "@utils": path.resolve(__dirname, "src/utils"),
          "@context": path.resolve(__dirname, "src/context"),
        },
        extensions: ["js"],
      },
    },
    `gatsby-plugin-postcss`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/assets/favicon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
