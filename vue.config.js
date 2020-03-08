const CompressionPlugin = require('compression-webpack-plugin')

module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? './' : '/',
  productionSourceMap: false,
  configureWebpack: {
    plugins: [
      new CompressionPlugin({
        test: /\.(js|css)?$/i,
        asset: "[path].gz[query]",
        algorithm: 'gzip',
        threshold: 10240,
        minRatio: 0.5,
        deleteOriginalAssets: true
      })
    ]
  }
}