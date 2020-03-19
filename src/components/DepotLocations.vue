<template>
  <div>
    <h1 class="orange-text mb-4 text-center">
      Where to find us...
    </h1>
    <div class="mb-5" v-for="(location, i) in locations" :key="i">
      <div class="col-12 my-5">
        <p>Rental Locations in {{ location.name }}</p>
        <p class="text-justify">
          {{ location.desc }}
        </p>
      </div>

      <div class="row mt-4">
        <div
          class="col-12 col-lg-6 mt-2"
          v-for="depot in location.depots"
          :key="depot.city"
        >
          <div class="z-depth-1">
            <div class="row">
              <div class="col-6">
                <img :src="depot.img" alt="" class="img-fluid" />
              </div>
              <div class="col-6 py-2 pl-0">
                <h6 class="text-muted">{{ depot.city }}</h6>
                <p class="mb-0 text-muted small">{{ depot.streetAdd }}</p>
                <p class="mb-0 text-muted small">{{ depot.townAdd }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DepotLocations',
  data() {
    return {
      locations: {
        Australia: {
          name: 'Australia',
          desc:
            "No matter where you are in Australia, you're never too far away from one of our friendly rental locations. We have 14 locations conveniently situated near all major cities and fanatastic holiday hotspots. Use Hostel Hoppers' flexible car rental passes and start planning some weekend getaways, or make your way across the country at your own pace.",
          depots: [
            {
              city: 'Adelaide',
              img:
                'https://images.unsplash.com/photo-1564402788019-d16b390515db?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=125&w=250&q=80',
              streetAdd: '86 Gibson St',
              townAdd: 'Bowden, SA 5007'
            },
            {
              city: 'Airlie Beach',
              img:
                'https://images.unsplash.com/photo-1560557749-a966ed13a825?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=125&w=250&q=80',
              streetAdd: '89 Shute Harbour Rd',
              townAdd: 'Cannonvale, QLD 4802'
            },
            {
              city: 'Alice Springs',
              img:
                'https://images.unsplash.com/photo-1568596312185-2c3e8f8042c3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=125&w=250&q=80',
              streetAdd: '9 Hele Cres',
              townAdd: 'Alice Springs, NT 0870'
            },
            {
              city: 'Brisbane',
              img:
                'https://images.unsplash.com/photo-1452859030887-bb96ef08d051?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=125&w=250&q=80',
              streetAdd: '100 Longlands St',
              townAdd: 'Woolloongabba, QLD 4102'
            },
            {
              city: 'Broome',
              img:
                'https://images.unsplash.com/photo-1543917619-1dbc464e5669?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=125&w=250&q=80',
              streetAdd: '1 Tanami Dr',
              townAdd: 'Broome, WA 6725'
            },
            {
              city: 'Byron Bay',
              img:
                'https://images.unsplash.com/photo-1458594656687-226e7d3300e3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=125&w=250&q=80',
              streetAdd: 'Cnr Lawson & Butler St',
              townAdd: 'Byron Bay, NSW 2481'
            },
            {
              city: 'Cairns',
              img:
                'https://images.unsplash.com/photo-1545380883-648dd7712b3a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=125&w=250&q=80',
              streetAdd: '75 Sheridan St',
              townAdd: 'Cairns, QLD 4870'
            },
            {
              city: 'Darwin',
              img:
                'https://images.unsplash.com/photo-1552025249-2cecdd0460ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=125&w=250&q=80',
              streetAdd: '75 McMinn St',
              townAdd: 'Darwin, NT 0800'
            },
            {
              city: 'Exmouth',
              img:
                'https://images.unsplash.com/photo-1541068441678-d930e0af5c59?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=125&w=250&q=80',
              streetAdd: '6 Maley St',
              townAdd: 'Exmouth, WA 6707'
            },
            {
              city: 'Hobart',
              img:
                'https://images.unsplash.com/photo-1443915816136-7afd8c380512?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=125&w=250&q=80',
              streetAdd: '201 Kennedy Dr',
              townAdd: 'Cambridge, TAS'
            },
            {
              city: 'Melbourne',
              img:
                'https://images.unsplash.com/photo-1522939873533-d959cfee83fd?ixlib=rb-1.2.1&auto=format&fit=crop&h=125&w=250&q=80',
              streetAdd: '195 Kensington Rd',
              townAdd: 'West Melbourne, VIC 3003'
            },
            {
              city: 'Monkey Mia',
              img:
                'https://images.unsplash.com/photo-1453731419720-40d75374511b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=125&w=250&q=80',
              streetAdd: '52 Vlamingh Cr',
              townAdd: 'Denham, WA 6537'
            },
            {
              city: 'Perth',
              img:
                'https://images.unsplash.com/photo-1523273157019-a88a1e49c3aa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=125&w=250&q=80',
              streetAdd: '28 Charles St',
              townAdd: 'Bentley, WA 6102'
            },
            {
              city: 'Sydney',
              img:
                'https://images.unsplash.com/photo-1523428096881-5bd79d043006?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=125&w=250&q=80',
              streetAdd: '320 Botany Rd',
              townAdd: 'Alexandria, NSW 2015'
            }
          ]
        },
        NewZealand: {
          name: 'New Zealand',
          desc:
            "Hostel Hoppers have 4 rental locations spanning New Zealand's North and South islands. Grab a Hostel Hoppers vehicle and see everything this beautiful country has to offer.",
          depots: [
            {
              city: 'Auckland',
              img:
                'https://images.unsplash.com/photo-1560121968-7e8944b9d225?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=125&w=250&q=80',
              streetAdd: '26 Greenpark St',
              townAdd: 'Penrose, NZ 1061'
            },
            {
              city: 'Christchurch',
              img:
                'https://images.unsplash.com/photo-1565200954763-490adfa3335e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=125&w=250&q=80',
              streetAdd: '135 Ferry Rd',
              townAdd: 'Christchurch, NZ 8011'
            },
            {
              city: 'Queenstown',
              img:
                'https://images.unsplash.com/photo-1520819639166-517df2b825bd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=125&w=250&q=80',
              streetAdd: '234 Glenda Dr',
              townAdd: 'Frankton, NZ 9371'
            },
            {
              city: 'Wellington',
              img:
                'https://images.unsplash.com/photo-1558482623-d1507c001b57?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=125&w=250&q=80',
              streetAdd: '6 Hawkin St',
              townAdd: 'Waiwhetu, Lower Hutt, NZ 5010'
            }
          ]
        }
      }
    }
  }
}
</script>

<style></style>
