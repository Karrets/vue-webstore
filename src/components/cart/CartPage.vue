<script>
import ShippingForm from "@/components/cart/ShippingForm.vue";
import CheckoutCard from "@/components/cart/CheckoutCard.vue";
import PaymentForm from "@/components/cart/PaymentForm.vue";
import ConfirmationForm from "@/components/cart/ConfirmationForm.vue";
import CartItemCard from "@/components/cart/CartItemCard.vue";

export default {
  components: {CartItemCard, ConfirmationForm, PaymentForm, CheckoutCard, ShippingForm},
  id: "CartPage",
  data: function () {
    return {
      step: 0,
      cart: {},
      columns: [
        {
          name: 'name',
          required: true,
          label: 'Product',
          align: 'left',
          field: row => row.name,
          format: val => `${val}`,
          sortable: true
        },
        {
          name: 'quantity',
          required: true,
          label: 'Quantity',
          align: 'left',
          field: () => '1',
          format: val => `${val}`,
          sortable: true
        },
        {
          name: 'price',
          label: 'Price',
          align: 'left',
          field: () => "20",
          format: val => `$${val}`,
          sortable: true
        },
        {
          name: 'brief',
          label: 'Description',
          align: 'left',
          field: row => row.brief,
          format: val => `${val}`,
          sortable: false
        },
        {
          name: 'type',
          label: 'Type',
          align: 'left',
          field: row => row.purchaseType,
          format: val => `${val}`,
          sortable: true
        }
      ],
    }
  },

  watch: {
    cart: {
      handler: function() {
        localStorage.setItem('cart', JSON.stringify(this.cart))
      },
      deep: true
    }
  },

  mounted: function() {
    let stored = localStorage.getItem('cart');
    if(stored) {
      this.cart = JSON.parse(stored);
    }
  },

  methods: {
    addToCart(storeItem) {
      if(this.cart[storeItem.id])
        this.cart[storeItem.id].qty++;
      else
        this.cart[storeItem.id] = {...storeItem, qty: 1};
    },

    previous() {
      if (this.step > 0)
        this.step--;
    },

    next() {
      this.step++;

      if(this.step === 2) {
        this.cart = {}
      }
    }
  }
}
</script>

<template class="cart-page">
  <div class="row justify-around q-gutter-md">
    <div class="col-12 col-lg">
      <q-card square >
        <q-item-section horizontal>
          <p class="text-h6 q-ma-md">Cart: </p>
          <p v-show="Object.keys(cart).length === 0" class="q-ma-md">Your cart is empty! Start shopping :)</p>
        </q-item-section>
      </q-card>
      <cart-item-card
          v-for="(item, i) in cart"
          @update-qty="(newQty) => {item.qty = Math.max(newQty, 0)}"
          :key="`cart-item-${i}`"
          :item="item"
          v-show="item.qty > 0">
      </cart-item-card>
    </div>
    <div class="col-12 col-lg">
      <q-linear-progress :value="(step / 2) + 0.01" color="primary" size="md"></q-linear-progress>
      <checkout-card
          name="Shipping"
          v-if="step === 0"
          @previous="previous"
          @next="next"
          next="Payment">
        <shipping-form></shipping-form>
      </checkout-card>
      <checkout-card
          name="Payment"
          v-if="step === 1"
          @previous="previous"
          @next="next"
          previous="Shipping"
          next="Confirmation">
        <payment-form></payment-form>
      </checkout-card>
      <checkout-card
          name="Confirmation"
          v-if="step === 2"
          @previous="previous"
          @next="next">
        <confirmation-form></confirmation-form>
      </checkout-card>
    </div>
  </div>
</template>

<style scoped>
</style>