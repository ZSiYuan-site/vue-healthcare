const {
  defineConfig
} = require('@vue/cli-service')
module.exports = defineConfig({
  // 关闭eslint
  lintOnSave: false,
  transpileDependencies: true,

  // 代理跨域
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
})
