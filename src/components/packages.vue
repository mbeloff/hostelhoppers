<template>
  <div>
    <div class="container my-5">
      <!-- <pricecards></pricecards> -->
      <div class="col-lg-4 col-8 mb-4 mx-auto">
        <div class="pricing-card white-text featured">
          <div class="gradient-four rounded-top">
            <h4 class="option">90 Days</h4>
          </div>
          <div
            class="card-body dark-grey-text striped orange-striped card-background px-2"
          >
            <h2 class="my-0 my-sm-3 pb-3 h1 font-weight-light text-muted">
              $700
            </h2>
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
            <!-- <button class="my-1 btn gradient-one btn-rounded">
                Buy now
              </button> -->
          </div>
        </div>
      </div>
      <div class="row mt-5 pt-5">
        <Testimonials class="col-12 col-md-7" />
        <feeTable class="col-12 col-md-5 text-muted small mt-5 mt-md-0" />
      </div>
    </div>
  </template>
</template>

<script>
import Testimonials from '@/components/Testimonials.vue'
import feeTable from '@/components/feeTable.vue'
// import pricecards from '@/components/pricecards.vue'
export default {
  components: {
    Testimonials,
    feeTable
    // pricecards
  }
}
</script>

<style lang="scss">
dd {
  margin-bottom: 0 !important;
}

.pricing-card {
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

  .card-background {
    // background-color: #28283f;
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
</style>
