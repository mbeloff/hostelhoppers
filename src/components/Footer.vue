<template>
  <div>
    <div id="footer">
      <div class="container-fluid flex-center orange">
        <p class="mb-0 white-text small">
          <i class="far fa-copyright vertical-align-middle"></i>
          hostelhoppers.com.au
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  props: ['global']
}
</script>

<style>
#footer {
  height: 50px;
}

.footer-brand {
  max-height: 50px;
}

.orange-text {
  color: #ff7535 !important;
}

.orange {
  background-color: #ff7535 !important;
}
</style>
