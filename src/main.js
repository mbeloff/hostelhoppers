// import '@fortawesome/fontawesome-pro/css/all.min.css'
import 'bootstrap-css-only/css/bootstrap.min.css'
import 'mdbvue/lib/css/mdb.min.css'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'vue-stripe-checkout'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: function(h) {
    return h(App)
  }
}).$mount('#app')
