const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');


console.log(_dirname);
console.log(path.resolve(_dirname, 'dist'));

module.exports = {
  entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'public'),
        },
        compress: true,
        port: 9000,
    },
    module: {
         rules: [
            {
            test: /\.css$/i,
             use: ["style-loader", "css-loader"],
            },
        ],
    },
  plugins: [
        new HtmlWebpackPlugin({
             template: './src/index.html'
         }),
        new HtmlWebpackPlugin({
             template: './src/index.html'
         }),

    ],
};