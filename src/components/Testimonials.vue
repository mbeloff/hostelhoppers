<template>
  <div>
    <div
      class="col-12 h-100 d-flex flex-column view"
      style="background-image: url(https://res.cloudinary.com/dg5ybbkbh/image/upload/c_fill,h_800,w_800/v1583127953/DJI_0989.jpg); background-size: cover; background-position: 50% 50%; border-radius: 3px; min-height: 488px;"
    >
      <div class="mask rgba-white-slight"></div>
      <mdb-carousel
        class="my-auto rgba-white-strong rounded mb-3 py-3 z-depth-1 mx-0 mx-md-2"
        testimonial
        :interval="7000"
        controlls
        :items="7"
      >
        <template #[i+1] v-for="(testimonial, i) in testimonials">
          <div class="text-center" :key="i">
            <p class="lead p-0 p-md-5 mb-0">
              <sup><span class="fas fa-quote-left orange-text"></span></sup>
              {{ testimonial.quote }}
            </p>
            <p class="font-weight-bold mb-0">{{ testimonial.name }}</p>
            <p class="my-1 small">{{ testimonial.position }}</p>
            <mdb-rating
              class="small mb-2"
              :value="testimonial.rating"
              disabled
              fas
              iconActiveClass="orange-text"
            />
          </div>
        </template>
      </mdb-carousel>
    </div>
  </div>
</template>

<script>
import { mdbRating, mdbCarousel } from 'mdbvue'
export default {
  name: 'Testimonials',
  components: {
    mdbCarousel,
    mdbRating
  },
  data() {
    return {
      testimonials: [
        {
          quote:
            'Hostel Hoppers is the best value for money way to travel Australia with your mates, we had an absolute blast, would recommend to anyone looking to travel ',
          name: 'Jakub',
          position: 'Czech Republic',
          rating: 4
        },
        {
          quote:
            'We were so happy with our Hostel Hoppers experience & after chatting with other travelers we realized we got to visit a lot more places that the buses just won’t go, Hostel Hoppers is so flexible in NZ',
          name: 'Maël',
          position: 'France',
          rating: 5
        },
        {
          quote:
            'What a great idea! My trip in Australia ended sooner than I planned and I was easily able to transfer my credit to a friend - thanks for making my experience so easy and enjoyable',
          name: 'Anna',
          position: 'Germany',
          rating: 4
        },
        {
          quote:
            'I was worried to return my car as I accidentally scraped it on the side but they were fine with it & didn’t charge me! I was so relieved that they were so nice about it, thanks Hostel Hoppers!',
          name: ' Vinh',
          position: 'Vietnam',
          rating: 4
        },
        {
          quote:
            'We used Hostel Hoppers to travel both islands in New Zealand, the car was great and very cheap on fuel',
          name: 'Emmanuel',
          position: 'Columbia',
          rating: 3
        },
        {
          quote:
            "We took a tourer and it's so cool having a kitchen in the van. They gave us a free table and chairs too",
          name: 'Haruki',
          position: 'Japan',
          rating: 5
        },
        {
          quote:
            'We bought a car when we arrived in New Zealand. It broke down and was going to cost another $3000 to repair. We ended up saving money by hiring with Hostel Hoppers instead. We should have done it from the start - if you break down they give you another car!',
          name: 'Faye',
          position: 'Ireland',
          rating: 4
        }
      ]
    }
  }
}
</script>

<style></style>
