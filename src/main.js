import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// Tailwindcss import
import './index.css'

Vue.config.productionTip = true

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
