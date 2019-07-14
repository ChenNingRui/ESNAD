import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'
import VueResource from 'vue-resource'
import iView from 'iview/dist/iview'
import locale from 'iview/dist/locale/en-US'
import 'iview/dist/styles/iview.css'
import VCharts from 'v-charts'
import 'vue-good-table/dist/vue-good-table.css'
import VueGoodTable from 'vue-good-table'
import Axios from 'axios'
import qs from 'qs'

Vue.prototype.$axios = Axios
Vue.prototype.$qs = qs

Axios.defaults.baseURL = 'http://localhost:5000'
Axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

Vue.use(iView, {
  locale: locale
})

Vue.use(VCharts)

Vue.use(VueGoodTable)

Vue.use(VueResource)

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
