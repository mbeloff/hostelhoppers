<template>
  <div class="locations container">
    <div class="flex-center" style="min-height: 150px;">
      <h1 class="font-weight-bold blue-text">Locations</h1>
    </div>
    <div class="col-12 col-md-6 col-lg-5 mb-4 p-0">
      <p class="mb-0 text-muted">Select Country:</p>
      <div class="d-flex">
        <span
          class="btn btn-md btn-filter"
          v-for="(region, i) in regions"
          :key="i"
          @click.prevent="activeRegion = i"
          :class="{ active: isActiveRegion(i) }"
          >{{ strReplace(region) }}</span
        >
      </div>
    </div>

    <div>
      <h2 class="blue-text">{{ strReplace(global[activeRegion].name) }}</h2>
      <h4 class="font-weight-light mb-4">
        {{ global[activeRegion].location.length }} rental locations
      </h4>
      <div class="row dark-grey-text mb-5">
        <LocationCard
          v-for="(location, i) in global[activeRegion].location"
          :key="i"
          v-bind:location="location"
        ></LocationCard>
      </div>
    </div>
  </div>
</template>

<script>
import LocationCard from '@/components/LocationCard.vue'

export default {
  name: 'locations',
  props: ['global'],
  components: { LocationCard },
  data() {
    return {
      activeRegion: 0
    }
  },
  methods: {
    strReplace(el) {
      return el.replace(/-/g, ' ')
    }
  },
  computed: {
    regions() {
      let all = []
      this.global.forEach(el => all.push(el.name))
      return all
    }
  }
}
</script>

<style scoped></style>
