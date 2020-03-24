<template>
  <div class="col text-muted small">
    <h6 class="mb-0">Terms & Conditions</h6>
    <hr class="mt-0" />
    <ol>
      <li v-for="term in terms" :key="term">
        {{ term }}
      </li>
    </ol>
    <div class="col-12">
      <a
        href="https://res.cloudinary.com/dg5ybbkbh/image/upload/v1585022589/hh/hostelhoppers_policies_0320.pdf"
        >Policies</a
      >
      |
      <a
        href="https://res.cloudinary.com/dg5ybbkbh/image/upload/v1585023044/hh/hostelhoppers_VRA_0320.pdf"
        >Vehicle Rental Agreement</a
      >
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      terms: [
        'Pick up and drop off in any Campervan Village location around Australia and New Zealand',
        '250km per day included free with all hires. Extra kilometres charged at $0.20 per kilometre',
        'Damage cover excluded and damage resulting from driving under the influence of drugs or alcohol, falling asleep at the wheel and malicious damage by the hirer',
        'In the event of a major incident (mechanical fault or crash) a replacement vehicle with be available at the nearest Campervan Village location',
        'Manual and automatic vehicle are available, damage for automatic vehicles is $5/day extra',
        'Vehicles come with 1/4 tank of fuel and must be return with at least this amount',
        'Tyres and windscreen damage, Underbody, side/front/rear impact and rollover damage are all covered.',
        'Single vehicle damage included',
        'Standard vehicle bond is $500, SUV bond is $1000. Bonds are payable by credit and debit card at the first day of hire and held til the end of the term of credit',
        'Incident with another vehicle or single vehicle incident liability is one dollar',
        'Any malicious damage is a criminal offence and must be reported to the police',
        'No refunds will be given for credit not used',
        'Toll fees icluded'
      ]
    }
  }
}
</script>

<style scoped lang="scss">
ol {
  columns: 1;
  padding-left: 1rem;
  @media only screen and (min-width: 500px) {
    columns: 2;
    li {
      margin-right: 2rem;
    }
  }
  @media only screen and (min-width: 800px) {
    columns: 3;
  }
}
</style>
