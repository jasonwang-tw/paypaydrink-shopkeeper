module.exports = {
  configureWebpack: {
    //關閉 webpack 的性能提示
    performance: {
      hints: false
    }
  },
  publicPath: process.env.NODE_ENV === 'production'
    ? '../'
    : '/'
}