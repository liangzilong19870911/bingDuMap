import Vue from 'vue'
import App from './App.vue'
import router from './router'
//import axios from 'axios'

Vue.config.productionTip = false
//axios.defaults.baseURL = 'http://127.0.0.1:7002/'
//Vue.prototype.$http = axios;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
