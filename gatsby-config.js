module.exports = {
  siteMetadata: {
    title: 'TP Project',
    description: 'A simple Gatsby project for TP',
    author: 'Your Name',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'tp',
        short_name: 'tp',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/Pablo-picassiette.webp', // chemin vers votre favicon
      },
    },
  ],
};
