const path = require(`path`)

module.exports = {
  //pathPrefix: `/mygatsby`,
  siteMetadata: {
    title: 'Mariachi Agelopolis',
    author: 'Tellecorp',
    description: 'Confianza y profesionalismo en nuestro servicio.',
    menuLinks: [
      {
        name: 'Inicio',
        link: '/',
      },
      {
        name: 'Nosotros',
        link: '/#nosotros',
      },
      {
        name: 'Servicios',
        link: '/#servicios',
      },
      {
        name: 'Contacto',
        link: '/#contacto',
        cl: 'button primary',
      },
    ],
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-styled-jsx`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/assets/images/website-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-plugin-html-attributes',
      options: {
        lang: 'en',
      },
    },
    'gatsby-plugin-offline',
    {
      resolve: `gatsby-plugin-modal-routing`,
      options: {
        modalProps: {
          style: {
            overlay: {
              position: `fixed`,
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: `rgba(103, 99, 99, 0.75)`,
              display: `flex`,
              justifyContent: `center`,
            },
            content: {
              position: `absolute`,
              border: `none`,
              background: `rgba(0, 0, 0, .5 )`,
              padding: 0,
              top: 0,
              bottom: 0,
              right: 0,
              left: 0,
              overflow: `auto`,
              WebkitOverflowScrolling: `touch`,
            },
          },
          contentLabel: `Modal`,
        },
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `cywqrft2djqq`,
        // Learn about environment variables: https://gatsby.dev/env-vars  process.env.CONTENTFUL_ACCESS_TOKEN
        accessToken: '8X5SMOo7HVLAH6irX3ocoOm1_0-W11EM9BNI90WKSAk',
      },
    },
  ],
}
