const CompressionPlugin = require('compression-webpack-plugin')

module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? './' : '/',
  productionSourceMap: false,
  configureWebpack: {
    plugins: [
      new CompressionPlugin({
        test: /\.js(\?.*)?$/i
      })
    ]
  }
}