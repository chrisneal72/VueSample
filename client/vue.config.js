const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      'api': {
      'http://localhost:5000'
      }
    }
  }
})