require(`dotenv`).config({path: `.env`,})

module.exports = {
  siteMetadata: {
    name: `Star Wars Movies 🎥`,
    tagline: `"Do, or do not. There is no try."`,
    githubLink: `https://github.com/tdharmon/gatsby-example-typescript-sass-contentful`,
  }, 
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-tslint`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,// space id here
        accessToken: process.env.CONTENTFUL_DELIVERY_ACCESS_TOKEN // access token here
      },
    },
  ],
}
