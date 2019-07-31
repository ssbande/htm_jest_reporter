const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const paths = require("../paths.js");
const baseConfig = require("./webpack.base.config");

module.exports = {
    mode: "development",
    devServer: {
        contentBase: paths.resolveFromRoot("dist"),
        hot: true,
        inline: true,
        open: true,
        historyApiFallback: true,
        port: 3838
    },
    devtool: "source-map",
    entry: {
        app: [paths.resolveFromRoot("src/local.js")],
        vendor: ['react', 'react-dom']
    },
    module: baseConfig.module,
    output: {
        filename: "js/[name].js",
        path: paths.resolveFromRoot("dist"),
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "[name].css",
        }),
        new HTMLWebpackPlugin({
            inject: true,
            template: paths.resolveFromRoot("src/index.html"),
        }),
        new webpack.DefinePlugin({
            "process.env.NODE_ENV": JSON.stringify("development"),
            "process.version": JSON.stringify("8.12.0"),
        }),
        new webpack.HotModuleReplacementPlugin(),
    ],
};
