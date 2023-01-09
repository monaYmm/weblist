import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Loading, IndexBar, IndexAnchor, Cell, Icon, PullRefresh } from 'vant'
import 'vant/lib/index.css'
const plugins = [Loading, IndexBar, IndexAnchor, Cell, Icon, PullRefresh] // Components used by vant

Vue.config.productionTip = false

plugins.forEach((el) => { Vue.use(el) }) // vant ui component introduced

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
