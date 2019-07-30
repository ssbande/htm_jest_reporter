module.exports = {
  presets: [
      "babel-preset-react",
      ["babel-preset-env",
          {
              targets: {
                  browsers: [
                      "IE 11",
                      "last 3 Chrome versions",
                      "last 2 Edge versions",
                      "last 2 Firefox versions",
                      "last 2 Safari versions",
                      "last 2 ChromeAndroid versions",
                      "last 2 iOS versions",
                  ],
              },
          },
      ],
  ],
  plugins: [
      "babel-plugin-transform-object-rest-spread",
      "babel-plugin-syntax-dynamic-import",
      "transform-class-properties",
      
  ],
  env: {
      development: {
          plugins: ["react-hot-loader/babel"],
      },
  },
};
