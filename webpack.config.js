const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
    mode: 'production',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[fullhash].js'
    },
    devServer: {
      devMiddleware: {
        index: true,
        mimeTypes: { 'text/html': ['phtml'] },
        publicPath: __dirname + '/public',
        serverSideRender: true
      },
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: './public/index.html'
        }),
    ],
    module: {
        rules : [
            {
                test: /\/.(js|jsx)$/,
                exclude: '/node_modules/',
                use: 'babel-loader'
            }    
        ]
    }
};