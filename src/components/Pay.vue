<template>
  <stripe-checkout
    ref="checkoutRef"
    :pk="publishableKey"
    :items="items"
    :successUrl="successUrl"
    :cancelUrl="cancelUrl"
  >
    <template slot="checkout-button">
      <button class="btn btn-pay white-text gradient-one" @click="checkout">
        BUY NOW
      </button>
    </template>
  </stripe-checkout>
</template>

<style lang="scss">
.btn-pay {
  padding: 0.5rem 2rem !important;
  border-radius: 20px !important;
  box-shadow: -7px 7px 18px rgba(207, 91, 37, 0.3);
  &:hover {
    background: white !important;
    color: rgb(255, 92, 64) !important;
    border: 1px solid rgb(255, 92, 64);
    box-shadow: 0px 2px 10px rgba(207, 91, 37, 0.2);
  }
}
</style>

<script>
import { StripeCheckout } from 'vue-stripe-checkout'
export default {
  components: {
    StripeCheckout
  },
  data: () => ({
    loading: false,
    publishableKey: 'pk_live_WExzLvKS4ZMkJHeiTeC3BaGY005wECFs30',
    items: [
      {
        sku: 'sku_GwV9FvY7oHyZM4',
        quantity: 1
      }
    ],
    successUrl: 'https://hostelhoppers.com.au/success',
    cancelUrl: 'https://hostelhoppers.com.au/canceled'
  }),
  methods: {
    checkout() {
      this.$refs.checkoutRef.redirectToCheckout()
    }
  }
}
</script>
