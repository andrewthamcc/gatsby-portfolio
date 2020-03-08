module.exports = {
  siteMetadata: {
    author: `Andrew Tham`,
    description: `Andrew Tham is a Toronto based frontend developer.`,
    image: `https://github.com/andrewthamcc/gatsby-portfolio/blob/master/static/hero.jpg`,
    keywords: `web devloper, front end developer, web dev, dev, portfolio, toronto, andrew tham, frontend developer, frontend`,
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
