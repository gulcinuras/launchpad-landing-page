/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: "Branch",
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `gulcinuras`,
    siteUrl: `https://branch.com`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-image`,
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
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/icons/branch_logo.svg`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: "Inter",
              variants: ["400", "500"],
            },
          ],
          selfHosted: [
            {
              family: "Switzer",
              urls: {
                woff2: `/src/fonts/Switzer-Regular.woff2`,
                woff: `/src/fonts/Switzer-Regular.woff`,
                eot: `/src/fonts/Switzer-Regular.eot`,
                ttf: `/src/fonts/Switzer-Regular.ttf`,
              },
              fontStyle: "normal",
              fontWeight: 400,
            },
            {
              family: "Milan",
              urls: {
                otf: `/src/fonts/Milan.otf`,
              },
              fontStyle: "normal",
              fontWeight: 400,
            },
          ],
        },
      },
    },
  ],
}
