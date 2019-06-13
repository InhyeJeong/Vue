import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//  axios import
import axios from 'axios'

Vue.config.productionTip = false
//  global로 사용가능
Vue.prototype.$http = axios

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
