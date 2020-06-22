// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
import 'vue-select/dist/vue-select.css'
import axios from 'axios'
import vSelect from 'vue-select'
import httpAdapter from 'axios/lib/adapters/http'

axios.defaults.baseURL = process.env.URL_API
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*'
axios.defaults.headers.common['Content-Type'] = 'application/json'
axios.defaults.headers.common['Accept'] = 'application/json'
axios.defaults.headers.common['x-access-token'] = localStorage.getItem('token') // for all requests

axios.defaults.adapter = httpAdapter

Vue.use(VueMaterial)
Vue.component('v-select', vSelect)

Vue.config.productionTip = false

Vue.prototype.$http = axios

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
