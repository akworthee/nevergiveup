const path = require("path");
const common = require("./webpack.common");
const {merge} = require("webpack-merge");
// if we are creating different file in dist using contenthash it will create for every changes so this will clean the folder.
const { CleanWebpackPlugin } = require("clean-webpack-plugin"); 
//This will create a seperate file from CSS
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// This will minify the CSS file create 
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
// This will miniafy the JS file
const TerserPlugin = require("terser-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = merge(common,{
    mode: "production",
    output:{
        filename: "[name].[contenthash].bundle.js", // content hash will create random words
        path: path.resolve(__dirname,  "dist")
    },
    optimization: {
        minimizer: [
            new OptimizeCssAssetsPlugin(), // minify for CSS
            new TerserPlugin(), // this will defaultly minify the JS but if we use any other optimize this will overridden so we are explicity using it here
            new HtmlWebpackPlugin({
                template: "./src/index.html",
                favicon: "./src/public/DDMaze.ico",
                minify: { // This is will minified only after using this option
                    removeAttributeQuotes: true,
                    collapseWhitespace: true,
                    removeComments: true
                }
            })
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({ filename: "[name].[contenthash].scss"}),
        new CleanWebpackPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    //"style-loader",
                     {
                         loader: MiniCssExtractPlugin.loader
                     },
                    "css-loader",
                    "sass-loader"
                ]
            }
        ]
    }
})