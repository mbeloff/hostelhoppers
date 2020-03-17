<template>
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
</template>

<script>
export default {
  name: 'banner'
}
</script>

<style lang="scss">
.intro-section {
  max-height: 300px;
  clip-path: polygon(0 5%, 100% 0, 100% 95%, 0% 100%);
  @media only screen and (max-width: 500px) {
  }
}

.header-logo {
  width: 100%;
}

.subtitle {
  z-index: 1;
  font-size: 5vw;
  // text-shadow: 1px 1px 15px black;
  @media only screen and (min-width: 500px) {
    font-size: 4vw;
  }
  @media only screen and (min-width: 700px) {
    font-size: 3vw;
  }
  @media only screen and (min-width: 900px) {
    font-size: 2vw;
  }
  @media only screen and (min-width: 1600px) {
    font-size: 1vw;
  }
}
</style>
