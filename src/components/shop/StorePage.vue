<script>
import StoreCard from '@/components/shop/StoreCard.vue';

export default {
  id: 'StorePage',
  components: { StoreCard },
  data: function () {
    return {
      searchText: '',
      maxItems: 18
    };
  },

  props: {
    prefilter: {
      type: Array,
      required: true
    },
    label: String
  },

  methods: {
    resetMax() {
      this.maxItems = 18;
    },

    incMax(index, done) {
      this.maxItems += 12;

      if (done) done();
    }
  },

  computed: {
    postFilter() {
      let list = [];

      if (!this.searchText) list = this.prefilter;
      else
        list = this.prefilter.filter((item) =>
          item.name.toLowerCase().includes(this.searchText.toLowerCase())
        );
      return list.slice(0, this.maxItems);
    }
  },

  emits: ['add-to-cart']
};
</script>

<template class="store-page">
  <div>
    <div v-if="this.label" class="row justify-center">
      <h2 class="q-ma-none">{{ this.label }}</h2>
    </div>
    <div class="row justify-center q-ma-md q-mb-lg">
      <q-input
        outlined
        rounded
        hide-bottom-space
        v-model="searchText"
        input-class="search"
        class="col col-md-6"
      >
        <template v-slot:append>
          <q-icon v-if="searchText === ''" name="search" />
          <q-icon v-else name="clear" class="cursor-pointer" @click="searchText = ''" />
        </template>
      </q-input>
    </div>
    <q-infinite-scroll @load="incMax" class="row q-pb-lg q-gutter-lg justify-around">
      <store-card
        @add-to-cart="(item, type) => $emit('add-to-cart', item, type)"
        :item="storeItem"
        v-for="(storeItem, index) in this.postFilter"
        :key="`card-${index}`"
      >
      </store-card>
    </q-infinite-scroll>
    <div class="q-pt-lg row justify-center">
      <q-btn
        v-show="maxItems < prefilter.length"
        label="Load More..."
        color="primary"
        size="lg"
        @click="maxItems += 12"
      >
      </q-btn>
    </div>
  </div>
</template>

<style lang="scss">
.search {
  margin-left: 5px;
  height: 100%;
  line-height: 100%;
}

.store-card {
}
</style>
