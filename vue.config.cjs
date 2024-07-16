const { defineConfig } = require('@vue/cli-service')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

const plugins = []

if (process.env.ANALAYZ)
  plugins.push(new BundleAnalyzerPlugin())

module.exports = defineConfig({
  transpileDependencies: true,
  productionSourceMap: false,
  // plugins: [
  //   new BundleAnalyzerPlugin(),
  // ],
  // pluginOptions: {
  //   'BundleAnalyzerPlugin': {
  //     // 插件的配置选项
  //     optionA: 'value1',
  //     optionB: 'value2',
  //   },
  // },
  configureWebpack: {
    plugins,
  },
})
