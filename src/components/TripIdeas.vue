<template>
  <div class="text-muted">
    <h1 class="text-muted">Trip Ideas</h1>
    <p class="text-justify small">
      A Hostel Hoppers pass gives you the freedom to plan small journeys
      throughout the year, or take huge, cross-country roadtrips. Here's a small
      list of places you could be checking out along the way.
    </p>
    <div class="trips mb-4" v-for="(region, i) in trips" :key="i">
      <h4 class="amber-text">{{ region.country }}</h4>
      <h5 class="mt-2 amber-text">Weekend Getaways</h5>
      <dl
        class="row mb-0 small no-gutters"
        v-for="trip in region.short"
        :key="trip.name"
      >
        <dt class="col-8 col-lg-9 font-weight-normal">{{ trip.name }}</dt>
        <dd class="col-4 col-lg-3 mb-0">{{ trip.days }} days</dd>
      </dl>
      <h5 class="mt-2 amber-text">Longer Trips</h5>
      <dl
        class="row mb-0 small no-gutters"
        v-for="trip in region.long"
        :key="trip.name"
      >
        <dt class="col-8 col-lg-9 font-weight-normal">{{ trip.name }}</dt>
        <dd class="col-4 col-lg-3 mb-0">{{ trip.days }} days</dd>
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

.trips {
  margin-bottom: 2rem;
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
