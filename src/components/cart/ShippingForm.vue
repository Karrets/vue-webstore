<script>
export default {
  data() {
    return {
      user: {
        name: '',
        address: '',
        city: '',
        state: '',
        country: '',
        zip: ''
      }
    };
  },

  emits: ['update:modelValue'],

  name: 'ShippingForm',

  props: {
    modelValue: Object
  },

  watch: {
    user: {
      deep: true,
      handler() {
        this.$emit('update:modelValue', this.user);
      }
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
      <q-input
        label="Name"
        v-model="user.name"
        lazy-rules
        :rules="[(val) => (val && val.length > 0) || 'Name cannot be empty']"
        filled
      >
      </q-input>
      <q-input
        label="Address"
        v-model="user.address"
        lazy-rules
        :rules="[(val) => (val && val.length > 0) || 'Address cannot be empty']"
        filled
      >
      </q-input>
      <q-input
        label="City"
        v-model="user.city"
        hint="City or Town"
        lazy-rules
        :rules="[(val) => (val && val.length > 0) || 'City cannot be empty']"
        filled
      >
      </q-input>
      <q-input
        label="State"
        v-model="user.state"
        hint="State / Province"
        lazy-rules
        :rules="[(val) => (val && val.length > 0) || 'State cannot be empty']"
        filled
      >
      </q-input>
      <q-input
        label="Country"
        v-model="user.country"
        lazy-rules
        :rules="[(val) => (val && val.length > 0) || 'Country cannot be empty']"
        filled
      >
      </q-input>
      <q-input
        label="Zip Code"
        v-model="user.zip"
        hint="Zip / Postal Code"
        lazy-rules
        :rules="[(val) => (val && val.length > 0) || 'Zip cannot be empty']"
        filled
      >
      </q-input>
    </q-form>
  </div>
</template>

<style scoped lang="scss"></style>
