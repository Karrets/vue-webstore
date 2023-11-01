<script>
import { CheckoutItem } from '@/models/CheckoutItem';

export default {
  components: {},
  id: 'CartItemCard',
  data() {
    return {
      qty: this.item.qty
    };
  },
  props: {
    item: {
      type: CheckoutItem,
      required: true
    }
  },
  watch: {
    qty() {
      this.$emit('update-qty', this.qty);
    },
    'item.qty'() {
      this.qty = this.item.qty;
    }
  },
  emits: ['update-qty']
};
</script>

<template>
  <q-card square class="cart-item">
    <q-card-section horizontal>
      <q-img :src="item.imgSrc" height="100px" width="100px" class="q-mr-sm album-img"></q-img>
      <q-card-section class="col justify-between card-text">
        <div class="row justify-start q-gutter-lg">
          <p class="text-bold fixwrap">{{ item.name }}</p>
        </div>
        <div class="row justify-start q-gutter-lg">
          <p>Price: {{ item.price }}</p>
          <p>Type: {{ item.type }}</p>
        </div>
      </q-card-section>
      <q-card-section class="text-center">
        <div class="justify-center q-mb-xs">Quantity:</div>
        <div class="edit">
          <q-btn-group size="sm" rounded>
            <q-btn size="sm" rounded color="primary" label="-" @click="this.qty--"></q-btn>
            <q-btn size="sm">
              {{ this.qty }}
              <q-popup-edit v-model="this.qty" auto-save v-slot="scope">
                <q-input
                  v-model="scope.value"
                  dense
                  autofocus
                  counter
                  @keyup.enter="scope.set"
                ></q-input>
              </q-popup-edit>
            </q-btn>
            <q-btn size="sm" rounded color="primary" label="+" @click="this.qty++"></q-btn>
          </q-btn-group>
        </div>
      </q-card-section>
    </q-card-section>
  </q-card>
</template>

<style scoped lang="scss">
.fixwrap {
  height: 40px;
  overflow: clip;
  text-overflow: ellipsis;
}

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

  box-shadow:
    0 1px 5px rgba(0, 0, 0, 0.2),
    0 2px 2px rgba(0, 0, 0, 0.14),
    0 3px 1px -2px rgba(0, 0, 0, 0.12);
}
</style>
