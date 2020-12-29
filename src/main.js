import Vue from 'vue'
import App from './App.vue'
import router from '@/routes'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import './lib/fontawesome'

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
