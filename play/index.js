import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const load = requireContext => requireContext.keys().map(requireContext)

// load files which end with `.play.js` in `../src/components` folder
load(require.context('../src/components', true, /.play.js$/))
