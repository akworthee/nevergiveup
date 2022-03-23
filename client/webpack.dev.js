const path = require("path");
const common = require("./webpack.common");
const {merge} = require("webpack-merge"); //Used for mergin mutiple webpack config file
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack")

   
module.exports = merge(common,{
    mode: "development", // to sepcify the mode to run the code development will not create file and it will run from dev server
    devServer:{
        //contentBase: path.join(__dirname, "dist"),
        // open: {
        //     target: 'index.html'
        // },
        inline: true,
        port: 8008
    },
    output: {
        filename: "[name].bundle.js", // name gives the exact name to create and file to bundle
        path: path.resolve(__dirname, "dist") // path to specify where to bundle
    },
    plugins:[
        new HtmlWebpackPlugin({ //generates an HTML file for your application by injecting automatically all your generated bundles.
            template: "./src/index.html", // template use to create html with the same refered in source
            favicon: "./src/public/DDMaze.ico"
        }),
        new webpack.ProvidePlugin({
            process: 'process/browser',
     })
    ],
    module: {
        rules:[
            {
                test: /\.scss$/, 
                // use:[ // for scss this should be in the below
                //     "style-loader", // 3) Convert common js under style tag
                //     "css-loader", // 2) get the css file to common js file
                //     "sass-loader", // 1) convert the scss file to css 
                // ]
                use: [
                    { loader: 'style-loader' },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                localIdentName: '[local]'    
                            }
                            //importLoaders: 1
                            
                            //localIdentName:'[local]'
                        }    
                    },
                    {loader: 'sass-loader',
                    
                }
                ]
            }
        ]
    }
})