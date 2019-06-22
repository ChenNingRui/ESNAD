import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'
import iView from 'iview/dist/iview'
import locale from 'iview/dist/locale/en-US'
import 'iview/dist/styles/iview.css'

Vue.use(iView, {
  locale: locale
})

new Vue({
  store,
  router,
  iView,
  render: h => h(App)
}).$mount('#app')
