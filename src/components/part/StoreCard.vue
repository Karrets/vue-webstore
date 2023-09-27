<script>
export default {
  id: "StoreCard",

  data() {
    return {
      modalOpen: false,
      purchaseType: this.item.options[0]
    }
  },

  props: {
    item: {
      type: Object,
      required: true,

      validator(value) {
        return value.name && value.brief && value.description && value.options;
      },
    }
  },

  emits: [
    'add-to-cart'
  ]
}
</script>

<template class="store-card">
  <div>
    <q-card v-ripple class="product-card q-mx-sm q-my-md" @click="this.modalOpen = true">
      <img v-if="item.imgSrc"
           :src="item.imgSrc"
           :alt="item.name"
           width="300"
           height="300">
      <img v-else
           src="/src/assets/NoImageAvailable.jpg"
           :alt="item.name">
      <q-card-section>
        <div class="text-h6">{{ item.name }}</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        {{ item.brief }}
      </q-card-section>
    </q-card>
    <q-dialog class="product-dialog" v-model="this.modalOpen">
      <q-card>
        <q-card-section class="row items-center">
          <div class="text-h6">{{ item.name }}</div>
          <q-space/>
          <q-btn icon="close" flat round dense v-close-popup/>
        </q-card-section>
        <img :src="item.imgSrc" :alt="item.name">

        <q-card-section class="product-description">
          {{ item.description }}
        </q-card-section>

        <q-card-section>
          <q-select
              filled
              v-model="this.purchaseType"
              :options="this.item.options"
              label="Format" />
        </q-card-section>
        <q-card-section class="row justify-end">
          <q-btn
              class="col"
              v-close-popup color="primary"
              icon-right="add_shopping_cart"
              label="Add to Cart"
              @click="$emit('add-to-cart', {...item, purchaseType: this.purchaseType})">
          </q-btn>
        </q-card-section>
      </q-card>
    </q-dialog>
  </div>
</template>

<style scoped lang="scss">
.store-card {
  transition: 0.3s;

  &:hover {
    cursor: pointer;
    transform: scale(110%);
    z-index: 5;
  }
}

.product-card {
  max-width: 300px;
}

q-card {
  img {
    object-fit: cover;
  }
}
</style>