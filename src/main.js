import Vue from 'vue'
import App from './App.vue'
import VueLazyload from 'vue-lazyload'
import router from './router'
import "../public/css/output.css"
Vue.config.productionTip = false

Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: 'dist/error.png',
  loading: 'https://rickandmortyapi.com/api/character/avatar/19.jpeg',
  attempt: 1
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
