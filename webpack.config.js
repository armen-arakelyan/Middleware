module.exports = {
    entry: './src/index.js',
    devServer: {
      devMiddleware: {
        index: true,
        mimeTypes: { 'text/html': ['phtml'] },
        publicPath: __dirname + '/public',
        serverSideRender: true,
        writeToDisk: true,
      },
    },
};