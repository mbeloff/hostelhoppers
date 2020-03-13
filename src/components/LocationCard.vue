<template>
  <div class="col-6 col-md-4 col-lg-3 mb-2 mb-md-0">
    <div class="card mb-2 z-depth-0">
      <img :src="location.img" class="card-img-top" />
      <div class="card-body p-2">
        <p class="font-weight-bold mb-0">{{ location.city }}</p>
        <p class="small">{{ location.townAdd }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LocationCard',
  props: ['location']
}
</script>

<style></style>
