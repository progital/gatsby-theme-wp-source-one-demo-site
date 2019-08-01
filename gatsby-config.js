module.exports = {
  plugins: [
    {
      resolve: `@progital/gatsby-theme-wp-source-one`,
      options: {
        wordPressUrl: `https://noh.progital.dev/`,
        processPostTypes: [`Page`, `Post`],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `WP Source Theme Demo`,
        short_name: `WP Source`,
        start_url: `/`,
        background_color: `#919191`,
        theme_color: `#484848`,
        display: `standalone`,
        icon: `src/images/favicon.jpg`,
      },
    },
    `gatsby-plugin-offline`,
  ],
};
