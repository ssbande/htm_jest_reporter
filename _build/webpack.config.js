const HTMLWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const baseConfig = require("./webpack.base.config");
const merge = require("webpack-merge");
const paths = require("../paths.js");

module.exports = merge(baseConfig, {
    mode: "production",
    entry: {
        app: [paths.resolveFromRoot("src/index.js")],
        vendor: ['react', 'react-dom']
    },
    resolve: {
        extensions: ['.js', '.json', '.tgz', '.sh']
    },
    output: {
        filename: "[name].js",
        path: paths.resolveFromRoot("dist"),
    },
    plugins: [
        new HTMLWebpackPlugin({
            inject: true,
            template: paths.resolveFromRoot("src/index.html"),
            minify: {
                collapseWhitespace: true,
                collapseInlineTagWhitespace: true,
                removeComments: true,
                removeRedundantAttributes: true,
            },
        }),
        new webpack.DefinePlugin({
            "process.env.NODE_ENV": JSON.stringify("production"),
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
});
