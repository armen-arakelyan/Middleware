const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack  = require("webpack");

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[fullhash].js'
    },
    devServer: {
        index: true,
        mimeTypes: { 'text/html': ['phtml'] },
        publicPath: __dirname + '/dist'
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title:'Development',
            template: './public/index.html'
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    module: {
        rules : [
            {
                test: /\.(js|jsx)$/,
                exclude: '/node_modules/',
                use: {                    
                  loader: 'babel-loader',
                  options: {
                     presets: [
                         '@babel/preset-env',
                         '@babel/preset-react'
                        ]
                  }
                }
            }    
        ]
    }
};