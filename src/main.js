import Vue from 'vue'

// import 'element-ui/lib/theme-chalk/index.css'
import {
  onFCP,
  onLCP,
} from 'web-vitals'

import plugins from './plugins'
import App from './App.vue'
import router from './router'
import store from './store'
import './styles/index.scss'
import directive from './directive'

Vue.config.productionTip = false
Vue.use(plugins)
Vue.use(directive)

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')

onFCP(console.log)
onLCP(console.log)
