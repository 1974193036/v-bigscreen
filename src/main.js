import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import * as ECharts from 'echarts'
import App from './App.vue'
import router from './router'
import store from './store'
import './styles/index.scss'
import directive from './directive'

Vue.config.productionTip = false
Vue.prototype.$echarts = ECharts
Vue.use(ElementUI)
Vue.use(directive)

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
