//解决IE浏览器报错：[vuex] vuex requires a Promise polyfill in this browser
//1，npm install es6-promise --save 2, 在main.js顶部引入import 'es6-promise/auto'
import 'es6-promise/auto'
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import MuseUI from 'muse-ui'//引入museUI组件库
import 'muse-ui/dist/muse-ui.css'
import 'muse-ui/dist/theme-carbon.css' // 使用 teal 主题
import axios from 'axios'
Vue.config.productionTip = false

Vue.use(MuseUI);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
