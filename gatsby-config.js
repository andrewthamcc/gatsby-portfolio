module.exports = {
  siteMetadata: {
    author: `Andrew Tham`,
    description: `Website of Toronto based developer Andrew Tham.`,
    image: `${__dirname}/static/seo.png`,
    keywords: `web devloper, web dev, developer, dev, portfolio, toronto, andrew tham, tham, frontend developer, frontend, javascript, html, css, react developer, react, node`,
    title: `Andrew Tham`,
    twitterName: `@Andrew_Tham`,
    url: `http://andrewtham.cc`,
  },
  plugins: [
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
        icon: `src/images/favicon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Montserrat`,
            variants: [`300`, `400`, `600`],
          },
        ],
      },
    },
    `gatsby-plugin-styled-components`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
