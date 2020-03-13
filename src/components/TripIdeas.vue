<template>
  <div class="col">
    <div class="trips" v-for="region in trips" :key="region">
      <h2 class="orange-text">{{ region.country }}</h2>
      <h5>Weekend Getaways</h5>
      <dl class="row mb-0 small" v-for="trip in region.short" :key="trip">
        <dt class="col-6 font-weight-normal">{{ trip.name }}</dt>
        <dd class="col-6 orange-text mb-0">{{ trip.days }} days</dd>
      </dl>
      <h5>Longer Trips</h5>
      <dl class="row mb-0 small" v-for="trip in region.long" :key="trip">
        <dt class="col-6 font-weight-normal">{{ trip.name }}</dt>
        <dd class="col-6 orange-text mb-0">{{ trip.days }} days</dd>
      </dl>
    </div>
  </div>
</template>
<style>
dl:nth-of-type(odd) {
  background: rgb(243, 243, 243);
}

dl {
  margin-bottom: 1rem !important;
}
</style>

<script>
export default {
  name: 'TripIdeas',
  data() {
    return {
      trips: [
        {
          country: 'Australia',
          short: [
            {
              name: 'Blue Mountains',
              days: '3'
            },
            {
              name: 'Great Ocean Road',
              days: '3'
            },
            {
              name: 'Margaret River',
              days: '3'
            },
            {
              name: 'Kangaroo Island',
              days: '3'
            },
            {
              name: 'Gippsland',
              days: '3'
            },
            {
              name: 'Cairns to Cape Tribulation',
              days: '3'
            },
            {
              name: 'Kakadu and Litchfield',
              days: '3'
            },
            {
              name: 'Flinders Ranges',
              days: '5'
            }
          ],
          long: [
            {
              name: 'Sydney to Cairns',
              days: '14 - 21'
            },
            {
              name: 'Perth to Karijini to Monkey Mia to Darwin',
              days: '18'
            },
            {
              name: 'Darwin to Uluru to Adelaide',
              days: '10'
            }
          ]
        },
        {
          country: 'New Zealand',
          short: [
            {
              name: 'Queenstown to Franz Josef',
              days: '5'
            },
            {
              name: 'Milford Sound to Lord of the Ring Tour',
              days: '3'
            },
            {
              name: 'Queenstown to Lake Wanaka to Mt Cook',
              days: '4'
            },
            {
              name: 'Queenstown to Milford Sound',
              days: '5'
            },
            {
              name: 'Auckland to Hobbiton movie set',
              days: '2'
            },
            {
              name: 'Aucklands to  Cape Reinga',
              days: '4'
            },
            {
              name: 'Rotorua to Gisborne',
              days: '3'
            }
          ],
          long: [
            {
              name: 'Auckland to Wellington',
              days: '12'
            },
            {
              name: 'Queenstown to Auckland',
              days: '14'
            },
            {
              name: 'Auckland to Bay of Islands',
              days: '7'
            },
            {
              name: 'Christchurch to Queenstown',
              days: '7'
            }
          ]
        }
      ]
    }
  }
}
</script>
