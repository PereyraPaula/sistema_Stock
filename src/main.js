import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'materialize-css/dist/css/materialize.min.css'
import 'material-design-icons/iconfont/material-icons.css'

import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome"
import {library} from "@fortawesome/fontawesome-svg-core"
import {fas} from "@fortawesome/free-solid-svg-icons"


library.add(fas);
Vue.component('font-awesome-icon', FontAwesomeIcon);

import vSelect from 'vue-select'
import 'vue-select/dist/vue-select.css';
Vue.component('v-select', vSelect)

Vue.config.productionTip = false



new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
