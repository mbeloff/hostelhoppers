import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Success from '../views/Success.vue'
import Cancelled from '../views/Cancelled.vue'
import Vehicles from '../views/Vehicles.vue'

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
    path: '/success',
    name: 'Success',
    component: Success
  },
  {
    path: '/cancelled',
    name: 'Cancelled',
    component: Cancelled
  },
  {
    path: '/vehicles',
    name: 'Vehicles',
    component: Vehicles
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
