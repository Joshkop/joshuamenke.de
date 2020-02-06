/* eslint-disable */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue'
import App from './App'
import 'semantic-ui-css/semantic.min.css'
import Icon from 'vue-svg-icon/Icon.vue'
import { Slider } from 'vue-color'
import router from './router'
import store from './store'
Vue.config.productionTip = false

/* eslint-disable no-new */
Vue.component('icon', Icon)
Vue.component('slider-picker', Slider)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  template: '<App/>',
  router,
  components: { App, 'slider-picker': Slider }
})
