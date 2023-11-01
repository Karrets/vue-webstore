<script>
export default {
  name: 'CheckoutCard',

  props: {
    name: String,
    previous: String,
    next: String
  },

  emits: ['previous', 'next']
};
</script>

<template>
  <q-card>
    <q-card-section class="text-h6">{{ this.name }}</q-card-section>

    <slot></slot>

    <div class="row justify-between">
      <q-btn
        @click="$emit('previous')"
        v-if="previous"
        color="secondary"
        icon="arrow_back"
        class="q-ma-sm justify-start"
        >{{ this.previous }}
      </q-btn>
      <div v-else></div>
      <q-btn
        @click="$emit('next')"
        v-if="next"
        color="primary"
        icon-right="arrow_forward"
        class="q-ma-sm"
        >{{ this.next }}
      </q-btn>
      <div v-else></div>
    </div>
  </q-card>
</template>

<style scoped lang="scss"></style>
