<script>

import StoreCard from "@/components/part/StoreCard.vue";

export default {
  id: "StorePage",
  components: {StoreCard},
  data: function () {
    return {
      searchText: '',
    }
  },

  props: {
    prefilter: {
      type: Array,
      required: true
    }
  },

  computed: {
    postFilter() {
      if(!this.searchText)
        return this.prefilter;

      return this.prefilter.filter(item => item.name.toLowerCase().includes(this.searchText.toLowerCase()));
    }
  },

  emits: [
      'add-to-cart'
  ]
}
</script>

<template class="store-page">
  <div>
    <div class="row justify-center q-ma-md">
      <q-input outlined
               rounded
               hide-bottom-space
               v-model="searchText"
               input-class="search"
               class="col col-md-6">
        <template v-slot:append>
          <q-icon v-if="searchText === ''" name="search"/>
          <q-icon v-else name="clear" class="cursor-pointer" @click="searchText = ''"/>
        </template>
      </q-input>
    </div>
    <div class="row justify-around q-mx-md">
      <store-card
          @add-to-cart="(item) => $emit('add-to-cart', item)"
          :item="storeItem"
          v-for="(storeItem, index) in this.postFilter"
          :key="`card-${index}`">
      </store-card>
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