module.exports = {
  siteMetadata: {
    title: 'TP Gatsby Vivian Uedre',
    description: 'TP Gatsby',
    author: 'Vivi 988',
  },
  plugins: [
    `gatsby-plugin-image`,
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
        name: 'tp gatsby',
        short_name: 'tp',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/Logo_Uedre_Vivian.jpg', // chemin vers votre favicon
      },
    },
  ],
};
