const express = require('express')
const app = express()

const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackConfig = require('./webpack.config')
const compilier = webpack(webpackConfig)

const middleware = webpackDevMiddleware(
    compilier,
    webpackConfig.devServer.devMiddleware
)

app.use(middleware)

app.use(express.static('public'))

app.listen(3000)