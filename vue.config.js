const CompressionPlugin = require('compression-webpack-plugin')

module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? './' : '/',
  productionSourceMap: false,
  productionGzip: true,
  configureWebpack: {
    plugins: [
      new CompressionPlugin({
        test: /\.(js|css)?$/i,
        algorithm: 'gzip',
        threshold: 10240,
        minRatio: 0.5
      })
    ]
  }
}