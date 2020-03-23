<template>
  <div>
    <div class="container my-5">
      <!-- <pricecards></pricecards> -->
      <h4 class="display-4 text-center mb-5">
        Get Your Pass <br />
        Today
      </h4>
      <div class="col-12 col-md-6 mx-auto p-0" style="height: 400px;">
        <div class="persp position-absolute">
          <div class="menu">
            <div class="pricing-card white-text featured">
              <div class="gradient-four rounded-top">
                <p class="option h2">90 Days</p>
              </div>
              <div
                class="card-body dark-grey-text striped orange-striped card-background px-2 view"
              >
                <p class="my-0 my-sm-3 pb-3 h1 font-weight-light text-muted">
                  $700
                </p>
                <ul>
                  <li>
                    <p class="text-muted"><strong>12</strong> months to use</p>
                  </li>
                  <li>
                    <p class="small text-muted daily">
                      less than <strong>$8</strong> a day!
                    </p>
                  </li>
                </ul>
                <Pay></Pay>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- <div class="col-6 col-lg-4 mx-auto invisible">
        <div class="pricing-card white-text featured">
          <div class="gradient-four rounded-top">
            <p class="option h2">90 Days</p>
          </div>
          <div
            class="card-body dark-grey-text striped orange-striped card-background px-2"
          >
            <p class="my-0 my-sm-3 pb-3 h1 font-weight-light text-muted">
              $700
            </p>
            <ul>
              <li>
                <p class="text-muted"><strong>12</strong> months to use</p>
              </li>
              <li>
                <p class="small text-muted daily">
                  less than <strong>$8</strong> a day!
                </p>
              </li>
            </ul>
            <Pay></Pay>
          </div>
        </div>
      </div> -->

      <div class="row mt-5 pt-5">
        <Testimonials class="col-12 col-md-6" />
        <feeTable class="col-12 col-md-6 mt-5 mt-md-0" />
      </div>
      <div class="row my-5">
        <terms class="col-12"></terms>
      </div>
    </div>
  </div>
</template>

<script>
import Testimonials from '@/components/Testimonials.vue'
import feeTable from '@/components/feeTable.vue'
import terms from '@/components/terms.vue'
import Pay from '@/components/Pay.vue'
// import pricecards from '@/components/pricecards.vue'
export default {
  components: {
    Testimonials,
    feeTable,
    terms,
    Pay
    // pricecards
  }
}
</script>

<style lang="scss">
.persp {
  width: 250px;
  // height: 300px;
  top: -50%;
  // margin-left: auto;
  // margin-right: auto;
  margin-top: 20vh;
  margin-bottom: 50px;
  border-radius: 5px;
  cursor: pointer;
  // background: #000;
  transform-origin: center center 0px;
  box-shadow: -20px 30px 30px 2px rgba(226, 74, 36, 0.212);
  transition: all 0.5s ease-in-out;
  animation-name: animate;
  animation-duration: 4s;
  animation-iteration-count: infinite;
  animation-timing-function: cubic-bezier(0.1, 0.32, 0.33, 0.99);
  transform: perspective(1000px) rotateX(50deg) rotateY(4deg) rotateZ(-30deg);
  z-index: 1;
  // left: 28%;

  @media only screen and (min-width: 720px) {
    left: 27%;
    // top: -50% !important;
    transform: perspective(1000px) rotateX(50deg) rotateY(4deg) rotateZ(-30deg);
  }
  @media only screen and (max-width: 720px) {
    left: 25%;
    // top: -50% !important;
    transform: perspective(1000px) rotateX(50deg) rotateY(4deg) rotateZ(-30deg);
  }
  @media only screen and (max-width: 500px) {
    left: 22%;
    top: -25%;
    transform: perspective(1000px) rotateX(50deg) rotateY(4deg) rotateZ(-30deg)
      scale(0.8);
  }
  @media only screen and (max-width: 425px) {
    // animation: unset;
    // top: -25% !important;
    // margin-top: 20vh !important;
    position: relative !important;
    left: 0%;
    width: 100%;
    transform: scale(1) !important;
    box-shadow: 0px 0px 30px 2px rgba(226, 74, 36, 0.212) !important;
  }
}
.persp:hover {
  animation-name: hove;
  margin-top: 19vh;
  transition: all 0.3s ease-in-out;
  animation-timing-function: cubic-bezier(0.1, 0.32, 0.33, 0.99);
  transform: perspective(1000px) rotateX(0deg) rotateY(0deg) rotateZ(0deg);
}
.persp .menu {
  display: flex;
  justify-content: space-around;
  align-items: center;
  max-width: 100%;
  // width: 300px;
  height: 100%;
  color: #fff;
}

@-webkit-keyframes animate {
  0% {
    margin-top: 20vh;
    box-shadow: -20px 30px 20px 2px rgba(226, 74, 36, 0.25);
  }
  50% {
    margin-top: 19vh;
    box-shadow: -30px 50px 30px 2px rgba(226, 74, 36, 0.1);
  }
  100% {
    margin-top: 20vh;
    box-shadow: -20px 30px 20px 2px rgba(226, 74, 36, 0.25);
  }
}
@-webkit-keyframes hove {
  0% {
    margin-top: 19.5vh;
    box-shadow: -20px 30px 50px 2px rgba(226, 74, 36, 0.2);
  }
  50% {
    margin-top: 20vh;
    box-shadow: -10px 10px 25px 2px rgba(226, 74, 36, 0.25);
  }
  100% {
    margin-top: 19.5vh;
    box-shadow: -20px 30px 50px 2px rgba(226, 74, 36, 0.2);
  }
}

dd {
  margin-bottom: 0 !important;
}

.pricing-card {
  width: 100%;
  text-align: center;
  ul {
    padding: 0;
    list-style-type: none;
  }
  .strike {
    position: relative;
    font-weight: 600;
    color: rgb(155, 155, 155);
    margin-right: 0.5rem;
  }
  .strike:after {
    content: ' ';
    // background-color: red;
    width: 20px;
    height: 1px;
    left: -0.35rem;
    top: 0.5rem;
    background: rgb(243, 86, 86);
    position: absolute;
    transform: rotate(45deg);
  }
  .strike:before {
    content: ' ';
    width: 20px;
    height: 1px;
    left: -0.35rem;
    top: 0.5rem;
    background: rgb(226, 118, 118);
    position: absolute;
    transform: rotate(-45deg);
  }
  .option {
    padding: 2rem;
    margin-bottom: 0;
    font-weight: 500;
  }
  .striped {
    padding: 1rem;
    li {
      margin-bottom: 1rem;
      border-bottom: 1px solid rgba(#888, 0.298039);
    }
    &.green-striped {
      li {
        border-color: #33c28a;
      }
    }
    &.orange-striped {
      li {
        border-color: orange;
      }
    }
    &.purple-striped {
      li {
        border-color: rgb(137, 5, 224);
      }
    }
    &.blue-striped {
      li {
        border-color: rgb(30, 128, 255);
      }
    }
  }

  .btn-rounded {
    padding: 0.2rem 2rem;
    height: 50px;
    border-radius: 25px;
    font-size: 0.8rem;
    font-weight: 300;
    border: none;
    color: white;
  }

  .btn-rounded:hover {
    color: rgb(70, 70, 70);
  }

  button:focus {
    border: none;
  }
}

.gradient-one,
.gradient-two,
.gradient-three,
.gradient-four {
  background-image: linear-gradient(
    45deg,
    rgba(255, 81, 0, 0.616),
    rgba(255, 0, 0, 0.658)
  );
}

.test {
  transform: scale(1.1);
}

.featured {
  box-shadow: 0px 2px 15px rgba(255, 123, 0, 0.226) !important;
  transform: scale(1);
  border: 1px solid rgba(255, 136, 0, 0.781);
  border-radius: 7px;
  .daily {
    color: rgb(255, 131, 49) !important;
    font-weight: 600 !important;
    strong {
      font-size: 1.2rem !important;
    }
  }
}

.not-featured {
  box-shadow: 0px 2px 7px rgba(255, 123, 0, 0.164) !important;
  transform: scale(0.95);
}

.display-4 {
  color: rgb(255, 117, 53) !important;
}
</style>
