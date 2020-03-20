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
  &:hover {
    background: white !important;
    color: rgb(255, 92, 64) !important;
    border: 1px solid rgb(255, 92, 64);
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
    publishableKey: 'pk_test_q4RV8oRfxvVvYOEBCMYYlpdm00Ed2gynq7',
    items: [
      {
        sku: 'sku_GvPpGQGDWKCzQK',
        quantity: 1
      }
    ],
    successUrl: 'https://hostelhoppers.com.au/success',
    cancelUrl: 'https://hostelhoppers.com.au/cancelled'
  }),
  methods: {
    checkout() {
      this.$refs.checkoutRef.redirectToCheckout()
    }
  }
}
</script>
