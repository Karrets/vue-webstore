<script>
export default {
  components: {},
  id: 'CartItemCard',
  data() {
    return {
      qty: this.item.qty
    }
  },
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  watch: {
    qty() {
      this.$emit('update-qty', this.qty)
    },
    'item.qty'() {
      this.qty = this.item.qty;
    }
  },
  emits: [
    'update-qty'
  ]
}

</script>

<template>
  <q-card square class="cart-item">
    <q-card-section horizontal>
      <q-img :src="item.imgSrc" height="100px" width="100px" class="q-mr-sm album-img"></q-img>
      <q-card-section class="col justify-between card-text">
        <div class="row justify-start q-gutter-lg">
          <p class="text-bold">{{ item.name }}</p>
        </div>
        <div class="row justify-start q-gutter-lg">
          <p>Price: {{ item.price }} </p>
          <p>Type: {{ item.purchaseType }}</p>
        </div>
      </q-card-section>
      <q-card-section class="">
        <div class="edit">
          Quantity: {{ this.qty }}
          <q-popup-edit v-model="this.qty" auto-save v-slot="scope">
            <q-input v-model="scope.value" dense autofocus counter @keyup.enter="scope.set"></q-input>
          </q-popup-edit>
        </div>
      </q-card-section>
    </q-card-section>
  </q-card>
</template>

<style scoped lang="scss">
.cart-item {
  height: 100px;
}

.card-text {
  margin: 0;
  height: 100px;
}

.edit {
  cursor: pointer;
}

.album-img {
  width: 100px;
  height: 100px;
  text-align: center;
  vertical-align: middle;
  line-height: 100px;

  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.2), 0 2px 2px rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12);
}
</style>