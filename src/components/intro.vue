<template>
  <div>
    <banner></banner>
    <div class="container">
      <div class="row">
        <div class="col-12 col-md-10 col-lg-9 mx-auto text-justify">
          <h2 class="pb-2 mb-4 text-left h1">
            What is Hostel Hoppers?
          </h2>
          <p class="intro-text">
            Hostel Hoppers is the cheapest and easiest way to travel around
            Australia and New Zealand. Get huge savings by grabbing a Hostel
            Hoppers season pass - pre-paid use of any Hostel Hoppers vehicle,
            whenever you want, wherever you want!
          </p>
        </div>
      </div>

      <div class="row mt-5">
        <div class="col-12 col-md-10 col-lg-9 mx-auto text-justify">
          <h2 class="pb-2 mb-4 text-left h1">
            How does it Work?
          </h2>
          <p class="intro-text">
            Hostel Hoppers is a pre-paid season pass - 90 days of car hire that
            you can use at any time over the course of 12 months. Just call us
            to reserve a Hostel Hoppers car, 4WD SUV or spacious tourer at any
            of our convenient rental locations - anytime you want.
            <br /><br />
            Your season pass covers your daily rental rate (less than $8 per
            day!). You'll never have to worry about prices fluctuating during
            the year, even during peak season!
          </p>
        </div>
      </div>
      <div class="row mt-5">
        <div class="col-12 col-md-10 col-lg-9 mx-auto text-justify">
          <h2 class="pb-2 mb-4 text-left h1">
            What's included?
          </h2>
          <p class="intro-text">
            At Hostel Hoppers, we keep our fees minimal and as straight forward
            as possible. A season pass will cover your daily rental rate and
            toll fees, and includes a generous 250km per day allowance. All you
            pay when you collect a vehicle is damage cover and one-way fee if
            you choose to drop off in a different location.
            <span class="hh-text">Simple.</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import banner from '@/components/banner.vue'

export default {
  name: 'intro',
  components: {
    banner
  }
}
</script>

<style lang="scss" scoped>
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

.intro-text {
  font-weight: 400;
  font-size: 1rem;
  color: rgb(87, 81, 81) !important;
}
</style>
