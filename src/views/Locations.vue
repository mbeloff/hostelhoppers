<template>
  <div class="container mt-5">
    <TripIdeas></TripIdeas>
  </div>
</template>

<script>
import TripIdeas from '@/components/TripIdeas.vue'

export default {
  name: 'locations',
  components: { TripIdeas },
  data() {
    return {
      activeRegion: 0
    }
  },
  methods: {},
  computed: {}
}
</script>

<style scoped></style>
