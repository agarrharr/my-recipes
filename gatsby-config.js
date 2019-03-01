module.exports = {
  __experimentalThemes: [
    {
      resolve: `gatsby-theme-paprika`,
      options: {},
    },
  ],
  plugins: [
    {
      resolve: `gatsby-plugin-compile-es6-packages`,
      options: {
        modules: [`gatsby-theme-paprika`],
      },
    },
  ],
};
