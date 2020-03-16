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
      <!-- <div class="text-center">
        <img class="header-logo" src="../assets/hh-type2.svg" alt="" />
        <h3 class=" subtitle white-text mt-5">
          flexible, on-demand car rental packages
        </h3>
      </div> -->
    </div>

    <div class="container">
      <div class="row">
        <div class="col-12 col-md-10 col-lg-9 mx-auto text-justify">
          <h3 class="font-weight-bold orange-text pb-2 mb-4 text-left">
            What is Hostel Hoppers?
          </h3>
          <p>
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
          <h3 class="font-weight-bold orange-text pb-2 mb-4 text-left">
            How does it Work?
          </h3>
          <p>
            Hostel Hoppers is a car rental season pass for 12 months. With a
            season pass you can pick up a Hostel Hoppers car, 4WD SUV or
            spacious tourer, anytime you want, whether it's for a day, a long
            weekend getaway, or a month-long cross-country roadtrip.
          </p>
          <p>
            And because your season pass covers the daily rental rate, you won't
            have to worry about prices fluctuating during the year, even during
            peak season!
          </p>
          <p>
            Hostel Hoppers season passes can be transferred into another name,
            or even extended for a small fee.
          </p>
        </div>
      </div>
    </div>
    <div class="container pt-5 mb-5">
      <div class="d-flex flex-wrap justify-content-around">
        <div
          class="col-5 m-1 col-sm-4 m-sm-2 m-md-0 col-md-3 col-lg-2 p-1 p-md-2 text-sm-center"
        >
          <div class="square-outside rounded-circle not-featured">
            <div class="square-inside flex-column flex-center">
              <i class="fal fa-route fa-2x"></i>
              <p class="small font-weight-bold text-center">
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
              <p class="small font-weight-bold text-center">
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
              <p class="small font-weight-bold text-center">
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
              <p class="small font-weight-bold text-center">
                Credit/Debit Cards <br />
                and Cash All <br />
                Accepted
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'intro'
}
</script>

<style lang="scss">
// .intro-section {
//   margin-top: 50px;
//   height: 100vh;
//   max-height: 300px;
//   background-image: url('https://res.cloudinary.com/dg5ybbkbh/image/upload/c_fill,h_1200,w_1200/v1583127953/DJI_0989.jpg');
//   background-image: radial-gradient(rgb(151, 209, 248), rgb(0, 62, 112));
//   background-size: 100vw 135%;
//   background-repeat: no-repeat;
//   background-position: 50% 50%;
//   clip-path: polygon(0 5%, 100% 0, 100% 95%, 0% 100%);
//   @media only screen and (max-width: 500px) {
//     background-size: 150vw 100%;
//   }
// }

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
  border: 1px rgb(255, 136, 0) solid;
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
</style>
