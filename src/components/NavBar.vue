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
        </ul>
        <!-- <div class="navbar-nav ml-auto">
          <div class="nav-item mt-2">
            <iframe
              src="https://condescending-albattani-a73c45.netlify.com"
              frameborder="0"
              scrolling="no"
              width="100"
              height="40"
            ></iframe>
          </div>
        </div> -->
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>

<style>
#nav a {
  font-weight: 600;
  margin-right: 1rem;
}

#nav a.nav-link {
  position: relative;
  color: rgb(124, 115, 111);
}

#nav a.router-link-exact-active {
  color: orange;
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
  background: rgb(253, 156, 9);
  left: 0;
}

@media only screen and (max-width: 992px) {
  #nav .router-link::after {
    display: none;
  }
}
</style>
