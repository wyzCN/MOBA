import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
import router from './router'

import './style.css'

Vue.config.productionTip = false

import http from './http'
Vue.prototype.$http = http

// 全局混入
Vue.mixin({
  computed: {
    // 上传文件地址
    uploadUrl() {
      return this.$http.defaults.baseURL + '/upload'
    }
  },
  methods: {
    // 上传文件的登录校验
    getAuthHeaders() {
      return {
        Authorization: `Bearer ${localStorage.token || ''}`
      }
    }
  }
})


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
