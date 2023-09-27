<script>
import ShippingForm from "@/components/page/checkout/ShippingForm.vue";
import CheckoutCard from "@/components/page/checkout/CheckoutCard.vue";
import PaymentForm from "@/components/page/checkout/PaymentForm.vue";
import ConfirmationForm from "@/components/page/checkout/ConfirmationForm.vue";

export default {
  components: {ConfirmationForm, PaymentForm, CheckoutCard, ShippingForm},
  id: "CartPage",
  data: function () {
    return {
      step: 0,
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

  props: {
    cart: {
      type: Array,
      required: true,
    }
  },

  mounted: function () {
  },

  methods: {
    previous() {
      if (this.step > 0)
        this.step--;
    },

    next() {
      this.step++;
    }
  }
}
</script>

<template class="cart-page">
  <div class="row justify-around q-gutter-md">
    <div class="col-12 col-lg">
      <q-card>
        <q-table
            grid
            grid-header
            flat bordered
            no-data-label="Nothing is in your cart :( Get out there and shop!"
            title="Cart"
            :rows="cart"
            :columns="columns">
        </q-table>
      </q-card>
    </div>
    <div class="col-12 col-lg">
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
          @next="next"
          previous="Payment">
        <confirmation-form></confirmation-form>
      </checkout-card>
    </div>
  </div>
</template>

<style scoped>

</style>