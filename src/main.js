import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'
import iView from 'iview/dist/iview'
import locale from 'iview/dist/locale/en-US'
import 'iview/dist/styles/iview.css'
import VCharts from 'v-charts'
import 'vue-good-table/dist/vue-good-table.css'
import VueGoodTable from 'vue-good-table'

Vue.use(iView, {
  locale: locale
})

Vue.use(VCharts)

Vue.use(VueGoodTable)

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
