const path = require('node:path')
const { defineConfig } = require('@vue/cli-service')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

const plugins = []

if (process.env.ANALAYZ)
  plugins.push(new BundleAnalyzerPlugin())

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = defineConfig({
  transpileDependencies: true,
  productionSourceMap: false,
  configureWebpack: {
    name: '大屏',
    resolve: {
      alias: {
        '@': resolve('src'),
      },
    },
    plugins,
  },
  css: {
    // 全局配置utils.scss
    loaderOptions: {
      scss: {
        additionalData: `@import "@/styles/utils.scss";`,
      },
    },
  },
})
