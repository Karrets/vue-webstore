<script>
import ShippingForm from '@/components/cart/ShippingForm.vue';
import CheckoutCard from '@/components/cart/CheckoutCard.vue';
import PaymentForm from '@/components/cart/PaymentForm.vue';
import ConfirmationForm from '@/components/cart/ConfirmationForm.vue';
import CartItemCard from '@/components/cart/CartItemCard.vue';
import { CheckoutItem } from '@/models/CheckoutItem';

export default {
  components: { CartItemCard, ConfirmationForm, PaymentForm, CheckoutCard, ShippingForm },
  id: 'CartPage',
  data: function () {
    return {
      step: 0,
      cart: {}
    };
  },

  watch: {
    cart: {
      handler: function () {
        console.log('Cart updated: ', this.cart);
        localStorage.setItem('cart', JSON.stringify(this.cart));
      },
      deep: true
    }
  },

  mounted: function () {
    let stored = JSON.parse(localStorage.getItem('cart'));

    if (stored) {
      for (const property in stored) {
        this.addToCart(new CheckoutItem(stored[property], stored[property].type));
        console.log(`Printing item in storage: `, stored[property]);
      }
    }
  },

  methods: {
    addToCart(storeItem) {
      if (this.cart[storeItem.checkoutID]) this.cart[storeItem.checkoutID].qty++;
      else this.cart[storeItem.checkoutID] = storeItem;

      this.step = 0;
    },

    previous() {
      if (this.step > 0) this.step--;
    },

    next() {
      this.step++;

      if (this.step === 3) {
        this.cart = {};
      }
    },

    updateQty(newQty, item) {
      if (newQty <= 0) delete this.cart[item.checkoutID];
      item.qty = newQty;
    }
  }
};
</script>

<template class="cart-page">
  <div class="row justify-around q-gutter-xl q-px-xl">
    <div class="col-12 col-lg-4">
      <q-card square>
        <q-item-section horizontal>
          <p class="text-h6 q-ma-md">Cart:</p>
          <p v-show="Object.keys(cart).length === 0" class="q-ma-md">
            Your cart is empty! Start shopping :)
          </p>
        </q-item-section>
      </q-card>
      <cart-item-card
        v-for="(item, i) in cart"
        @update-qty="(newQty) => updateQty(newQty, item)"
        :key="`cart-item-${i}`"
        :item="item"
      >
      </cart-item-card>
    </div>
    <div class="col-12 col-lg">
      <q-linear-progress :value="step / 3 + 0.01" color="primary" size="md"></q-linear-progress>
      <checkout-card
        name="Shipping"
        v-if="step === 0"
        @previous="previous"
        @next="next"
        next="Payment"
      >
        <shipping-form></shipping-form>
      </checkout-card>
      <checkout-card
        name="Payment"
        v-if="step === 1"
        @previous="previous"
        @next="next"
        previous="Shipping"
        next="Confirmation"
      >
        <payment-form></payment-form>
      </checkout-card>
      <checkout-card
        name="Confirmation"
        v-if="step === 2"
        @previous="previous"
        @next="next"
        previous="Payment"
        next="Place Order"
      >
        <confirmation-form></confirmation-form>
      </checkout-card>
      <checkout-card name="Thank You" v-if="step === 3" @previous="previous" @next="next">
        <confirmation-form></confirmation-form>
      </checkout-card>
    </div>
  </div>
</template>

<style scoped></style>
