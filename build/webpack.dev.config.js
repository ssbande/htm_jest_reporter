const Webpack = require("webpack");
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const baseConfig = require("./webpack.base.config");
const paths = require("../paths");

module.exports = {
  mode: "development",
  devtool: "source-map",
  entry: {
    app: [paths.resolveFromRoot("src/index.js")]
  },
  devServer: {
    contentBase: paths.resolveFromRoot("dist"),
    hot: true,
    inline: true,
    open: true,
    historyApiFallback: true,
    port: 3131
  },
  output: {
    filename: "[name].js",
    path: paths.resolveFromRoot("dist")
  },
  module: baseConfig.module,
  resolve: {
    extensions: ['.jsx', '.js', '.json', '.tgz', '.sh']
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css",
    }),
    new HTMLWebpackPlugin({
      inject: true,
      template: paths.resolveFromRoot("src/index.html"),
    }),
    new Webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("development"),
    }),
    new Webpack.HotModuleReplacementPlugin(),
  ]
}
