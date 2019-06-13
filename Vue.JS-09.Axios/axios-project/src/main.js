import Vue from 'vue'
import App from './App.vue'
//  axios import
import axios from 'axios'

Vue.config.productionTip = false
//  global로 사용가능
Vue.prototype.$http = axios

new Vue({
  render: h => h(App),
}).$mount('#app')
