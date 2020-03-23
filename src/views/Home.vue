<template>
  <div class="home">
    <intro></intro>
    <packages></packages>
    <maplist></maplist>
  </div>
</template>

<script>
// @ is an alias to /src
import intro from '@/components/intro.vue'
import packages from '@/components/packages.vue'
import maplist from '@/components/maplist.vue'

export default {
  name: 'home',
  components: {
    intro,
    packages,
    maplist
  },
  props: {
    global: Array
  }
}
</script>
