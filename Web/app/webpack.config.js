const path = require("path");
const merge = require("webpack-merge");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require("webpack");
const TerserPlugin = require("terser-webpack-plugin");

const baseConfig = {
    entry: [path.resolve(__dirname, "src/index.tsx")],
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
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
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
        new MiniCssExtractPlugin({
            filename: "[name].[hash].css",
            chunkFilename: "[id].css",
        }),
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "./src/index.html",
        }),
    ],
    resolve: {
        extensions: [".js", ".jsx", ".ts", ".tsx", ".json", "css"],
        alias: {
            components: path.resolve(__dirname, "src/components"),
            servicesApi: path.resolve(__dirname, "src/servicesApi"),
            containers: path.resolve(__dirname, "src/containers"),
            models: path.resolve(__dirname, "src/models"),
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
    resolve: {
        alias: {
            "react-dom": "@hot-loader/react-dom",
        },
    },
};

const prodConfig = {
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin()],
    },
    externals: {
        react: {
            root: "React",
            commonjs2: "react",
            commonjs: "react",
            amd: "react",
        },
        "react-dom": {
            root: "ReactDOM",
            commonjs2: "react-dom",
            commonjs: "react-dom",
            amd: "react-dom",
        },
    },
};

module.exports = (env, args) => (args.mode === "development"
    ? merge(baseConfig, devConfig)
    : merge(baseConfig, prodConfig));
