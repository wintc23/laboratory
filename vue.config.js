const CompressionPlugin = require('compression-webpack-plugin')

const isDev = process.env.NODE_ENV !== "production"
const plugins = []

if (!isDev) {
  plugins.push(new CompressionPlugin({
    test: /\.(js|css)?$/i, // 哪些文件要压缩
    filename: '[path].gz[query]',　// 压缩后的文件名
    algorithm: 'gzip',　// 使用gzip压缩
    minRatio: 1,　// 压缩率小于1才会压缩
    deleteOriginalAssets: true // 删除未压缩的文件，如果希望提供非gzip的资源，可不设置或者设置为false
  }))
}

module.exports = {
  publicPath: isDev ? '/' : './',
  productionSourceMap: false,
  configureWebpack: {
    plugins
  }
}