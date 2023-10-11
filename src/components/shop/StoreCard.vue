<script>
export default {
  id: "StoreCard",

  data() {
    return {
      modalOpen: false,
      purchaseType: this.item.options[0] || "None Available"
    }
  },

  props: {
    item: {
      type: Object,
      required: true,
    },
  },

  emits: [
    'add-to-cart'
  ]
}
</script>

<template class="store-card">
  <div>
    <q-card v-ripple class="product-card" @click="this.modalOpen = true">
      <img :src="item.imgSrc"
           :alt="item.name"
           width="300"
           height="300">
      <q-card-section>
        <div class="text-h6">{{ item.name }} <br/> ({{ this.item.price }})</div>
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
          <q-list bordered separator>
            <q-item>
              <q-item-section><p class="list-header">Track List</p></q-item-section>
            </q-item>
            <q-item v-for="(track, index) in item.tracklist"
                    :key="'track-' + index"
            >
              <q-item-section>{{ index + 1 }}. {{ track }}</q-item-section>
            </q-item>
          </q-list>
        </q-card-section>

        <q-card-section>
          <q-select
              filled
              v-model="this.purchaseType"
              :options="this.item.options"
              :disable="this.item.options.length === 0"
              label="Format"/>
        </q-card-section>
        <q-card-section class="row justify-end">
          <q-btn
              class="col"
              v-close-popup color="primary"
              icon-right="add_shopping_cart"
              label="Add to Cart"
              @click="$emit('add-to-cart', {...item,id: `${item.id}-${this.purchaseType}`, purchaseType: this.purchaseType})">
          </q-btn>
        </q-card-section>
      </q-card>
    </q-dialog>
  </div>
</template>

<style scoped lang="scss">
.product-card {
  transition: 0.3s;

  max-width: 300px;
  height: 100%;

  &:hover {
    cursor: pointer;
    transform: scale(110%);
    z-index: 5;
  }
}

q-card {
  img {
    object-fit: cover;
  }
}
</style>