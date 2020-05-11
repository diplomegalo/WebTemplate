const path = require("path");
const merge = require("webpack-merge");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
const webpack = require("webpack");
const TerserPlugin = require("terser-webpack-plugin");

const baseConfig = {
    entry: [
        "react-hot-loader/patch",
        path.resolve(__dirname, "src/index.tsx")],
    externals: {
    },
    module: {
        rules: [
            {
                test: /\.[jt]s(x)?$/,
                exclude: /node_modules/,
                loader: "babel-loader",
            },
            {
                enforce: "pre",
                test: /\.js/,
                exclude: /node_modules/,
                loader: "source-map-loader",
            },
            {
                test: /\.html/,
                loader: "html-loader",
            },
            {
                test: /\.css/,
                use: ["style-loader", "css-loader"],
            },
        ],
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].[hash].js",
    },
    plugins: [
        new CleanWebpackPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "./src/index.html",
        }),
    ],
    resolve: {
        extensions: [".js", ".jsx", ".ts", ".tsx", ".json", "css"],
        alias: {
            components: path.resolve(__dirname, "src/components"),
        },
    },
};

const devConfig = {
    devtool: "inline-source-map",
    devServer: {
        contentBase: "./dist",
        hot: true,
        overlay: true,
        historyApiFallback: true,
    },
    plugins: [
        new ForkTsCheckerWebpackPlugin({ eslint: true }),
    ],
};

const prodConfig = {
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin()],
    },
};

module.exports = (env, args) => (args.mode === "development"
    ? merge(baseConfig, devConfig)
    : merge(baseConfig, prodConfig));
