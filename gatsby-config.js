module.exports = {
  siteMetadata: {
    title: 'Stories & Coffee',
    desc:
      'Enjoy a hot cup of your favourite beverage while learning new and interesting things',
    keywords: 'coffee, stories, interesting, learning',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-transformer-remark',
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: 'm1izjj3wg21a',
        accessToken: 'e33287273b563aeb233c1b74a80445ee5e2f6577122c18e3cb58ed002e311a76',
        // spaceId: '134ed9j0nsgu',
        // accessToken: 'b00004a5d438c19ef134eb2beecb5f97ae025051032b4e5ba2e6190134bdb2f6',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'img',
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'img',
        path: `${__dirname}/static/assets`,
      },
    },
    {
      resolve: `gatsby-plugin-favicon`,
      options: {
        logo: './src/images/favicon.png',
        injectHTML: true,
        icons: {
          android: true,
          appleIcon: true,
          appleStartup: true,
          coast: false,
          favicons: true,
          firefox: true,
          twitter: true,
          yandex: false,
          windows: false,
        },
      },
    },
  ],
};
