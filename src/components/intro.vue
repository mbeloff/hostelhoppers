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
    </div>
    <div class="container pt-5">
      <div class="row">
        <div class="col-12 col-md-10 col-lg-9 mx-auto text-justify">
          <h2 class="pb-2 mb-4 text-left h1">
            How does it Work?
          </h2>
          <p class="intro-text">
            Hostel Hoppers is a pre-paid car rental season pass - 90 days of car
            hire, that you can use at any time over the course of 12 months.
            With a season pass you can pick up a Hostel Hoppers car, 4WD SUV or
            spacious tourer, anytime you want, whether it's for a day, a long
            weekend getaway, or a month-long cross-country roadtrip.
          </p>
          <p class="intro-text">
            And because your season pass covers the daily rental rate, you won't
            have to worry about prices fluctuating during the year, even during
            peak season! As you redeem your rental days, you'll just pay a fixed
            daily amount for our comprehensive damage cover.
          </p>
          <p class="intro-text">
            Hostel Hoppers season passes can be transferred into another name,
            or even extended for a small fee.
          </p>
        </div>
      </div>
    </div>
    <!-- <div class="container pt-5 mb-5">
      <div class="d-flex flex-wrap justify-content-around">
        <div
          class="col-5 m-1 col-sm-4 m-sm-2 m-md-0 col-md-3 col-lg-2 p-1 p-md-2 text-sm-center"
        >
          <div class="square-outside rounded-circle not-featured">
            <div class="square-inside flex-column flex-center">
              <i class="fal fa-route fa-2x"></i>
              <p class="small text-center">
                Locations all <br />
                around Australia <br />
                and NZ
              </p>
            </div>
          </div>
        </div>
        <div
          class="col-5 m-1 col-sm-4 m-sm-2 m-md-0 col-md-3 col-lg-2 p-1 p-md-2 text-sm-center"
        >
          <div class="square-outside rounded-circle not-featured">
            <div class="square-inside flex-column flex-center">
              <i class="fal fa-cogs fa-2x"></i>
              <p class="small text-center">
                Automatic and <br />
                Manual <br />
                Available
              </p>
            </div>
          </div>
        </div>
        <div
          class="col-5 m-1 col-sm-4 m-sm-2 m-md-0 col-md-3 col-lg-2 p-1 p-md-2 text-sm-center"
        >
          <div class="square-outside rounded-circle not-featured">
            <div class="square-inside flex-column flex-center">
              <i class="fal fa-id-card fa-2x"></i>
              <p class="small text-center">
                All Valid <br />
                Licences <br />
                Accepted
              </p>
            </div>
          </div>
        </div>
        <div
          class="col-5 m-1 col-sm-4 m-sm-2 m-md-0 col-md-3 col-lg-2 p-1 p-md-2 text-sm-center"
        >
          <div class="square-outside rounded-circle not-featured">
            <div class="square-inside flex-column flex-center">
              <i class="fal fa-comments-dollar fa-2x"></i>
              <p class="small text-center">
                Credit/Debit Cards <br />
                and Cash All <br />
                Accepted
              </p>
            </div>
          </div>
        </div>
      </div>
    </div> -->
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

.square-outside {
  position: relative;
  height: 0;
  padding-top: 100%;
  // background: rgb(56, 56, 56);
  border: 0.5px rgb(255, 136, 0) solid;
  margin-bottom: 1rem;
  @media only screen and (max-width: 768px) {
    box-shadow: none;
  }
}

.square-inside {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  color: rgb(243, 157, 29) !important;
  font-size: 1rem;
  @media only screen and (min-width: 768px) {
    font-size: 1.2rem !important;
  }
}

.intro-text {
  font-weight: 400;
  font-size: 1.1rem;
}
</style>
