const { NoEmitOnErrorsPlugin } = require("webpack");

module.exports = {
    devServer: {
        historyApiFallback: true,
        open: true,
        inline:true,
        //public: not_reachable.com,
        port: 8008
      },
    //devtool: "none", //To see the code as readable
    entry:{
        main: "./src/index.js", //entry point from where webpack get started
        //Split of JS file can be done like this
        //vendor: ".src/vendor.js"
    },
    //Specify the filetype and loaders
    module:{
        rules:[
            {
                test: /\.(js|jsx)$/,
                exclude: "/node_modules/",
                use: [{
                    loader: "babel-loader"
                }]
            },
           /* {
                test: '/\.html$/', //mention the exection to be supported by the below loader
                use: ["html-loader"] // to convert the JS to actual Tags
            },*/
            {
                test: /\.(svg|jpg|png|gif)/, 
                use: {
                    loader: "file-loader", // to copy the file and move to the specified output path
                    options: {
                        name: "[name].[hash].[ext]", // name and ext will get the exact of the file. hash create random words
                        outputPath: "public"
                    }
                }
            }
        ]
    },
    //this is used for restrict or add unwanted server side modules in Webpack v5
    resolve:{
        fallback: {
            "fs": false,
            "child_process": false,
            "worker_threads": false,
            "crypto": false,
            "os": false,
            "http": false,
            "https": false,
            "vm": false,
            "constants": false
        }
    }
}