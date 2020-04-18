const path = require('path')

module.exports = {
  /* Your site config here */
  plugins: [
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: [
          'Titillium Web\:300,400,600',
          'Khand\:300,400,500'
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
    'gatsby-transformer-sharp'
  ],
}
