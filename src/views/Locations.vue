<template>
  <div>
    <banner></banner>
    <div class="container mt-2">
      <div class="row">
        <DepotLocations
          class="col-12 col-md-8 order-1 order-md-2 ml-auto"
        ></DepotLocations>
        <TripIdeas
          class="col-12 col-md-3 order-2 order-md-1 mt-5 mt-md-0"
        ></TripIdeas>
      </div>
    </div>
  </div>
</template>

<script>
import TripIdeas from '@/components/TripIdeas.vue'
import DepotLocations from '@/components/DepotLocations.vue'
import banner from '@/components/banner.vue'

export default {
  name: 'locations',
  components: { TripIdeas, DepotLocations, banner },
  data() {
    return {}
  },
  methods: {},
  computed: {}
}
</script>

<style scoped></style>
