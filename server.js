const express = require('express')
const app = express()
// app.use(express.static(__dirname + '/dist'))

const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackConfig = require('./webpack.config')
const compilier = webpack(webpackConfig)
const webpackHotMiddleware = require('webpack-hot-middleware')(compilier)

const middleware = webpackDevMiddleware(
    compilier,
    webpackConfig.devServer
)

app.use(middleware)
app.use(webpackHotMiddleware)
app.use(middleware)


app.listen(3000)