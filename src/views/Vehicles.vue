<template>
  <div class="container my-5">
    <h1 class="display-4 text-center my-5">Our Vehicles</h1>
    <div class="row">
      <template v-for="vehicle in vehicles">
        <div
          class="col-12 col-md-4 text-center card z-depth-0 p-0"
          :key="vehicle"
        >
          <img :src="vehicle.img" alt="" class="img-fluid card-img-top" />
          <div class="card-body">
            <h4>{{ vehicle.name }}</h4>
            <p class="small text-left">
              {{ vehicle.desc }}
            </p>
            <div class="gallery">
              <img
                v-for="img in vehicle.gallery"
                :src="img"
                class=""
                alt=""
                :key="img"
              />
            </div>
          </div>

          <div class="card-footer">
            <dl class="row mb-0">
              <dt class="col-6">Damage Cover</dt>
              <dd class="col-6">${{ vehicle.damageCover }}/day</dd>
            </dl>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      vehicles: [
        {
          name: 'Car',
          img:
            'https://res.cloudinary.com/dg5ybbkbh/image/upload/v1584682729/hh/1.jpg',
          desc:
            'Hostel Hoppers range of smll and medium sized cars. Great fuel economy and available in automatic and manual transmission',
          damageCover: '35'
          // gallery: [
          //   'https://res.cloudinary.com/dg5ybbkbh/image/upload/c_fill,h_200,w_200/v1578025859/al01.jpg',
          //   'https://res.cloudinary.com/dg5ybbkbh/image/upload/c_fill,h_200,w_200/v1578025859/al02.jpg'
          // ]
        },
        {
          name: 'Tourer',
          img:
            'https://res.cloudinary.com/dg5ybbkbh/image/upload/v1584682729/hh/3.jpg',
          desc:
            'Hostel Hoppers range of smll and medium sized cars. Great fuel economy and available in automatic and manual transmission',
          damageCover: '45'
          // gallery: [
          //   'https://res.cloudinary.com/dg5ybbkbh/image/upload/c_fill,h_200,w_200/v1579735803/aventus/nz2/0.jpg',
          //   'https://res.cloudinary.com/dg5ybbkbh/image/upload/c_fill,h_200,w_200/v1581917215/aventus/elg11.jpg'
          // ]
        },
        {
          name: '4WD SUV',
          img:
            'https://res.cloudinary.com/dg5ybbkbh/image/upload/v1584682730/hh/2.jpg',
          desc:
            '4WD SUVs - spacious, modern 5 seater 4WDs if you need a bit more room for luggage.',
          damageCover: '55'
          // gallery: [
          //   'https://res.cloudinary.com/dg5ybbkbh/image/upload/c_fill,h_200,w_200/v1583124413/photo-1529369623266-f5264b696110.jpg'
          // ]
        }
      ]
    }
  }
}
</script>

<style lang="scss">
// .gallery {
//   display: grid;
//   grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
//   min-height: 150px;
//   img {
//     // height: auto;
//     min-height: 150px;
//     width: 100%;
//     height: 100%;
//     object-fit: cover !important;
//   }
// }

// p.small.text-left {
//   min-height: 95px;
// }
</style>
