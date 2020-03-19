<template>
  <div id="app">
    <script
      type="application/javascript"
      src="https://kit.fontawesome.com/933093fbcd.js"
      crossorigin="anonymous"
      sameSite="none"
    ></script>
    <NavBar />
    <div class="main-content">
      <router-view v-bind:global="$store.state.global" />
    </div>

    <Footer v-bind:global="$store.state.global" />
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import Footer from '@/components/Footer.vue'

export default {
  components: {
    NavBar,
    Footer
  },
  name: 'app'
}
</script>

<style>
html {
  scroll-behavior: smooth;
}

body {
  padding: 0;
  margin: 0;
}

.main-content {
  min-height: calc(101vh - (76px + 50px));
}

@import url('https://fonts.googleapis.com/css?family=Raleway:100,400,600&display=swap');

#app {
  font-family: 'Roboto', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: rgb(53, 53, 53);
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: 'Raleway', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
