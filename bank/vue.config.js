/*
 * @Author: mikey.zhaopeng
 * @Date: 2020-05-21 17:32:02
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2020-05-23 14:29:15
 */
const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('api', resolve('src/api'))
      .set('views', resolve('src/views'))
      .set('config', resolve('src/config'))
      .set('components', resolve('src/components'))
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:7001',
        changeOrigin: true,
        secure: false,
        pathRewrite: {
          '/api': '/'
        }
      }
    }
  }
}
