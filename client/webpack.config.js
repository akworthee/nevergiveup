const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
//const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin")

module.exports = {
    devServer: {
        inline:true,
        //public: not_reachable.com,
        port: 8008
      },
    entry: "./src/index.js",
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            exclude: "/node_modules/",
            use: [{
                loader: "babel-loader"
            }]
        },
        {
            test: /\.(scss|css)$/,
            exclude: "/node_modules/",
            use: [
                
                 "style-loader",
                 "css-loader",
                 "sass-loader"
            ]
        }]
    },
    output: {
        path: path.join(__dirname,"./dist"),
        filename: "bundle.js"
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        }),
        new CleanWebpackPlugin(),
       // new MiniCssExtractPlugin({filename: "[name].[contentHash].scss"}),
        new NodePolyfillPlugin()
    ],
    //target: 'node'
    resolve:{
        fallback: {
            "fs": false,
            "child_process": false,
            "worker_threads": false
        }
    }
    
}