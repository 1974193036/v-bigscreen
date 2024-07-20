import chartResize from './chartResize'

const directives = {
  'chart-resize': chartResize,
}

export default {
  install(Vue) {
    Object.keys(directives).forEach((key) => {
      Vue.directive(key, directives[key])
    })
  },
}
