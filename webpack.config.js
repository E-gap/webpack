
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require("path");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');


module.exports = {
    entry: {
        main: path.resolve(__dirname, "./src/index.js"),
        
    },
    output: {
        path: path.resolve(__dirname, "./dist"),
        filename: "testFileWebpackOutput.js"
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
        title: "My app",
        filemame: "index.html",
        inject: "body",
    }),
    ],
    devserver: {
        contentBase: path.resolve(__dirname, "./dist"),
        hot: true,
        open: true,
port: 8080,
    },
}