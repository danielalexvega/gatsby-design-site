require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
// const queries = require("./src/constants/algolia")
module.exports = {
  siteMetadata: {
    title: `Design Shop`,
    description: `Gatsby Airtable Example. Built using Airtable, Algolia Search, Gatsby Background Image plugin and  React Context API. Containts two sliders, real-time Airtable updates and submenus. Styled using Styled-Components. `,
    author: `@johnsmilga`,
    titleTemplate: `%s | Gatsby - Airtable`,
    url: `https://gatsby-airtable-design-project.netlify.app/`,
    image: `mainBcg.png`,
    twitterUsername: `@john_smilga`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
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
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: "Roboto",
              variants: ["300", "400", "500", "700"]
            },
            {
              family: "Open Sans",
              variants: ["400"]
            },
            {
              family: "Caveat",
              variants: ["400"]
            }
          ]
        }
      }
    },
    {
      resolve: `gatsby-source-airtable`,
      options: {
        apiKey: process.env.GATSBY_AIRTABLE_API,
        concurrency: 5,
        tables: [
          {
            baseId: process.env.GATSBY_AIRTABLE_BASE_ID,
            tableName: `Projects`,
            mapping: { image: `fileNode` }
          },
          {
            baseId: process.env.GATSBY_AIRTABLE_BASE_ID,
            tableName: `Customers`,
            mapping: { image: `fileNode` }
          }
        ]
      }
    }
  ],
}
