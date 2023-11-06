<script>
export default {
  data() {
    return {
      user: {
        cardNumber: '',
        expiryDate: '',
        ccv: ''
      }
    };
  },

  emits: ['update:modelValue'],

  name: 'PaymentForm',

  props: {
    modelValue: Object
  },

  watch: {
    user: {
      handler() {
        this.$emit('update:modelValue', this.user);
      },
      deep: true
    },
    modelValue: {
      handler() {
        Object.assign(this.user, this.modelValue);
      },
      deep: true
    }
  }
};
</script>

<template>
  <div>
    <q-form class="q-px-lg q-gutter-md">
      <div class="row q-gutter-sm">
        <q-input
          class="col-12"
          label="Card Number"
          v-model="user.cardNumber"
          lazy-rules
          :rules="[(val) => (val && val.length > 0) || 'Card number cannot be empty']"
          filled
        >
        </q-input>
        <q-input
          class="col-12 col-lg"
          label="Expiry Date"
          v-model="user.expiryDate"
          hint="Month/Year"
          lazy-rules
          :rules="[(val) => (val && val.length > 0) || 'Expiry date cannot be empty']"
          filled
        >
        </q-input>
        <q-input
          class="col-12 col-lg"
          label="CCV"
          v-model="user.ccv"
          hint="Security Code"
          lazy-rules
          :rules="[(val) => (val && val.length > 0) || 'CCV cannot be empty']"
          filled
        >
        </q-input>
      </div>
    </q-form>
  </div>
</template>

<style scoped lang="scss"></style>
