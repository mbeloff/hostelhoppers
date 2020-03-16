<template>
  <div>
    <div class="intro-section d-flex flex-center view my-5">
      <div
        class="container mt-2"
        style="max-width: 1200px; min-width: 845px !important"
      >
        <div class="row mb-4 position-relative flex-center">
          <div
            class="position-absolute flex-center flex-column"
            style="width:35%; max-width: 80vw"
          >
            <img
              src="https://res.cloudinary.com/dg5ybbkbh/image/upload/v1584332781/hh/hh-type2.svg"
              alt=""
              class="img-fluid"
              style="z-index: 1; "
            />
            <h2 class="white-text text-center subtitle">
              Flexible, on-demand car rental
            </h2>
          </div>
          <img
            src="https://res.cloudinary.com/dg5ybbkbh/image/upload/v1584321165/banner-nz.jpg"
            alt=""
            class="img-fluid"
          />
        </div>
      </div>
    </div>
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

export default {
  name: 'locations',
  components: { TripIdeas, DepotLocations },
  data() {
    return {}
  },
  methods: {},
  computed: {}
}
</script>

<style scoped></style>
