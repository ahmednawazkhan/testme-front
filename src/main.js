import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import BootstrapVue from 'bootstrap-vue'
import VueTour from 'vue-tour'
import Countdown from 'vue-awesome-countdown'
import { responsive } from './plugins/responsive/responsive'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'vue-tour/dist/vue-tour.css'
import './registerServiceWorker'

Vue.use(BootstrapVue)
Vue.use(VueTour)
Vue.use(Countdown)
Vue.use(responsive)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
