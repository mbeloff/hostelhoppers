import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Pay from '../views/Pay.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/locations',
    name: 'Locations',
    props: true,
    component: function() {
      return import(
        /* webpackChunkName: "Vehicles" */
        '../views/Locations.vue'
      )
    }
  },
  {
    path: '/pay',
    name: 'Pay',
    component: Pay
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

router.afterEach(() => {
  window.scrollTo(0, 0)
})

export default router
