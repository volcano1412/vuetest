import Vue from 'vue'
import App from './App.vue'
import router from './routes'
import axios from  'axios';

Vue.config.productionTip = false

Vue.prototype.$axios = axios; //전역변수로 설정

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')