// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import '../semantic/dist/semantic.min.css';
import 'semantic'; // importing semantic js
import Icon from 'vue-svg-icon/Icon.vue';
import { Slider } from 'vue-color'

/* eslint-disable no-new */
Vue.component('icon', Icon)
Vue.component('slider-picker',Slider)

new Vue({
  el: '#app',
  template: '<App/>',
  components: { App,
    'slider-picker': Slider
  },
  mounted: function() {
    $('.ui.accordion')
    	.accordion();
  }
})

