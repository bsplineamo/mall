import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from "./router"
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import echarts from 'echarts'
Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(VueRouter)
Vue.prototype.$echartts = echarts
new Vue({
  render: h => h(App),
  router:router
}).$mount('#app')
