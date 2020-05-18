const path = require('path')

module.exports = {
  siteMetadata: {
    title: 'Byron Cueva',
    titleTemplate: '%s - Byron Cueva',
    description: 'Soy Byron Cueva - Líder Técnico - Desarrollador Full Stack',
    owner: 'Byron Cueva',
    url: 'https://byron7cueva.github.io',
    image: '/byron-cueva.jpg',
    twitterUsername: '@byron7cueva'
  },
  /* Your site config here */
  plugins: [
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: [
          'Titillium Web\:300,400,600',
          'Khand\:300,400,500'
          // 'Sirin Stencil\:300,400,500'

        ],
        display: 'swap'
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: path.join(__dirname, 'src', 'assets', 'img')
      }
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-react-helmet'
  ],
}
