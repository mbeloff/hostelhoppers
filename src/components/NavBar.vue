<template>
  <nav
    id="nav"
    class="navbar navbar-expand-lg navbar-light py-0 z-depth-0"
    style="z-index: 100;"
  >
    <div class="container">
      <router-link class="navbar-brand" to="/">
        <img src="../assets/hh-logo.svg" alt style="height: 50px;" />
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link router-link" to="/">Home</router-link>
          </li>
          <!-- <li class="nav-item">
            <router-link class="nav-link" to="/about">About</router-link>
          </li>-->
          <li class="nav-item">
            <router-link class="nav-link router-link" to="/locations"
              >Locations & Trip Ideas</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link router-link" to="/vehicles"
              >Our Vehicles</router-link
            >
          </li>
        </ul>
        <div class="navbar-nav ml-auto">
          <div
            class="nav-item d-flex flex-column flex-lg-row flex-center justify-content-between mt-2"
          >
            <!-- <p class="h4 hh-text mr-2">1800 24 68 69</p> -->
            <Pay></Pay>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import Pay from '@/components/Pay.vue'
export default {
  name: 'NavBar',
  components: { Pay }
}
</script>

<style>
#nav a {
  font-weight: 400;
  margin-right: 1rem;
}

#nav a.nav-link {
  position: relative;
  color: rgb(124, 115, 111);
}

#nav a.router-link-exact-active {
  color: #ff7535;
}

#nav .router-link::after {
  content: '';
  position: absolute;
  width: 0%;
  height: 1px;
  background: rgba(255, 255, 255, 0);
  bottom: 0rem;
  left: 50%;
  transition: width 0.2s, left 0.2s, height 0.6s, bottom 0.4s;
  transition-timing-function: ease, ease, ease,
    cubic-bezier(0.86, -0.5, 0.57, 2);
}

#nav .router-link.router-link-exact-active::after {
  content: '';
  position: absolute;
  width: 100%;
  height: 5px;
  bottom: -5px;
  background: #ff7535;
  left: 0;
}

@media only screen and (max-width: 992px) {
  #nav .router-link::after {
    display: none;
  }
}
</style>
