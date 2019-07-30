module.exports = {
  presets: [
      "es2015",
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
                  ]
              },
          },
      ],
  ],
  plugins: [
      "dynamic-import-node",
      "babel-plugin-transform-object-rest-spread",
      "syntax-dynamic-import",
      "transform-class-properties",
      
  ],
  env: {
      development: {
          plugins: ["react-hot-loader/babel"],
      },
  },
};
