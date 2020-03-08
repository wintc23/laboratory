const CompressionPlugin = require('compression-webpack-plugin')

module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? './' : '/',
  productionSourceMap: false,
  configureWebpack: {
    plugins: [
      new CompressionPlugin({
        test: /\.(js|css)?$/i,
        filename: '[dir][name].gz[ext][query]',
        algorithm: 'gzip',
        minRatio: 0.8,
        deleteOriginalAssets: true
      })
    ]
  }
}