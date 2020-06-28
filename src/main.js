import Vue from 'vue'
import VueWaypoint from 'vue-waypoint'
import App from './App.vue'

Vue.use(VueWaypoint)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
