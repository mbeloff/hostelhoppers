<template>
  <div class="home">
    <intro></intro>
    <packages></packages>
  </div>
</template>

<script>
// @ is an alias to /src
import intro from '@/components/intro.vue'
import packages from '@/components/packages.vue'

export default {
  name: 'home',
  components: {
    intro,
    packages
  },
  props: {
    global: Array
  }
}
</script>
