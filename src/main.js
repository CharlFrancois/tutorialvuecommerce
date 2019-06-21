import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import '@/registerServiceWorker'
import router from '@/router'
import '@/styles/style.scss'
import store from '@/vuex/store'

Vue.config.productionTip = false

new Vue({
  el:'#app',
  store,
  router,
  render: h => h(App)
})