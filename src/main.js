import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import router from './routes'

Vue.config.productionTip = false

Vue.use(VueRouter)

new Vue({
  render: function (h) { return h(App) },
  router
}).$mount('#app')
