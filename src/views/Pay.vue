<template>
  <div class="container">
    <Stripe :spk="spk">
      <Elements>
        <card-number
          ref="cardNumber"
          :options="stripeOptions"
          @change="number = $event.complete"
        ></card-number>
        <card-expiry
          ref="cardExpiry"
          :options="stripeOptions"
          @change="expiry = $event.complete"
        ></card-expiry>
        <card-cvc
          ref="cardCvc"
          :options="stripeOptions"
          @change="cvc = $event.complete"
        ></card-cvc>
        <button @click="tokenize">get token</button>
        <div>{{ token }}</div>
      </Elements>
      <!-- <button
        :click="pay"
        style="background-color:#6772E5;color:#FFF;padding:8px 12px;border:0;border-radius:4px;font-size:1em"
        id="checkout-button-sku_GvPpGQGDWKCzQK"
        role="link"
      >
        Checkout
      </button>
      <div id="error-message"></div> -->
    </Stripe>
  </div>
</template>

<script>
import {
  Stripe,
  Elements,
  CardNumber,
  CardCvc,
  CardExpiry,
  getStripe
} from '@kenkou/vue-stripe-elements'

export default {
  components: {
    Stripe,
    Elements,
    CardNumber,
    CardCvc,
    CardExpiry
  },
  data() {
    return {
      // please set this value!!!
      spk: 'pk_test_q4RV8oRfxvVvYOEBCMYYlpdm00Ed2gynq7',
      // stripe: Stripe('pk_test_q4RV8oRfxvVvYOEBCMYYlpdm00Ed2gynq7'),
      token: '-',
      complete: false,
      number: false,
      expiry: false,
      cvc: false,
      stripeOptions: {
        // see https://stripe.com/docs/stripe.js#element-options for details
        style: {
          base: {
            color: '#303238',
            fontSize: '12px',
            fontSmoothing: 'antialiased',
            '::placeholder': {
              color: '#ccc'
            }
          }
        }
      }
    }
  },
  methods: {
    pay() {
      Stripe.redirectToCheckout({
        items: [{ sku: 'sku_GvPpGQGDWKCzQK', quantity: 1 }],

        // Do not rely on the redirect to the successUrl for fulfilling
        // purchases, customers may not always reach the success_url after
        // a successful payment.
        // Instead use one of the strategies described in
        // https://stripe.com/docs/payments/checkout/fulfillment
        successUrl: 'https://hostelhoppers.com.au/success',
        cancelUrl: 'https://hostelhoppers.com.au/canceled'
      }).then(function(result) {
        if (result.error) {
          // If `redirectToCheckout` fails due to a browser or network
          // error, display the localized error message to your customer.
          var displayError = document.getElementById('error-message')
          displayError.textContent = result.error.message
        }
      })
    },
    async tokenize() {
      // get one of the stripe elements created
      const cardNumber = this.$refs.cardNumber.element()
      // see the https://stripe.com/docs/stripe-js/reference api
      const stripe = await getStripe()
      const { token, error } = await stripe.createToken(cardNumber)
      if (token) this.token = token
      else this.token = error
      console.log('tokenized element', token)
    },
    update() {
      this.complete = this.number && this.expiry && this.cvc
      // update the "valid" parent's property
      this.$emit('update:valid', this.complete)
      // field completed, find field to focus next
      if (this.number) {
        if (!this.expiry) {
          this.$refs.cardExpiry.focus()
        } else if (!this.cvc) {
          this.$refs.cardCvc.focus()
        }
      } else if (this.expiry) {
        if (!this.cvc) {
          this.$refs.cardCvc.focus()
        } else if (!this.number) {
          this.$refs.cardNumber.focus()
        }
      }
      // no focus magic for the CVC field as it gets complete with three
      // numbers, but can also have four
    }
  },
  watch: {
    number() {
      this.update()
    },
    expiry() {
      this.update()
    },
    cvc() {
      this.update()
    }
  }
}
</script>
