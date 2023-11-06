<script>
import { Cart, Store, User } from '@/components/PagesGroup.vue';

import albums from '@/assets/albums.json';
import { StoreItem } from '@/models/StoreItem';

export default {
  id: 'App',

  components: {
    Cart,
    Store,
    User
  },

  data: function () {
    return {
      shopLabel: null,
      drawerOpen: false,
      currentPage: { id: 'store' },
      storeItems: StoreItem.type(albums).sort(() => Math.random() - 0.5),
      menuItems: [
        {
          header: true, //Disables ripple and clicking, as well as new bg color
          icon: '',
          label: 'Music'
        },
        {
          icon: '', //Icon, leave blank/undef if none
          label: 'All', //Text portion
          page: { id: 'shop', mod: 'all' } //Link for this menuitem.
        },
        {
          icon: '',
          label: 'Vinyl Records',
          page: { id: 'shop', mod: 'vinyl' }
        },
        {
          icon: '',
          label: 'Cassettes',
          page: { id: 'shop', mod: 'cassette' }
        },
        {
          icon: '',
          label: 'CDs',
          page: { id: 'shop', mod: 'cd' }
        },
        {
          icon: '',
          label: 'Digital',
          page: { id: 'shop', mod: 'digital' }
        },
        { separator: true },
        {
          header: true,
          icon: '',
          label: 'Account'
        },
        {
          icon: 'person',
          label: 'Manage',
          page: { id: 'account' }
        },
        {
          icon: 'shopping_cart',
          label: 'Cart',
          page: { id: 'cart' }
        },
        {
          icon: 'credit_card',
          label: 'Payment / Shipping',
          page: { id: 'payment' }
        }
      ]
    };
  },

  methods: {
    toggleDrawer: function () {
      this.drawerOpen = !this.drawerOpen;
    },

    navigateTo: function (link) {
      console.log(link);
      this.currentPage = link.page;
      this.shopLabel = link.label;
    }
  },

  computed: {
    vinylOnly() {
      return this.storeItems.filter((value) => value.options.includes('Vinyl'));
    },

    cassetteOnly() {
      return this.storeItems.filter((value) => value.options.includes('Cassette'));
    },

    cdOnly() {
      return this.storeItems.filter((value) => value.options.includes('CD'));
    },

    digitalOnly() {
      return this.storeItems.filter((value) => value.options.includes('Digital'));
    },

    prefiltered() {
      switch (this.currentPage.mod) {
        case 'vinyl':
          return this.vinylOnly;
        case 'cassette':
          return this.cassetteOnly;
        case 'cd':
          return this.cdOnly;
        case 'digital':
          return this.digitalOnly;
      }

      return this.storeItems;
    }
  },

  watch: {},

  mounted: function () {
    this.navigateTo(this.menuItems[1]);
  }
};
</script>

<template>
  <q-layout view="HHH Lpr FFF">
    <q-header class="bg-primary text-white">
      <q-toolbar>
        <q-btn flat round dense icon="menu" @click="toggleDrawer"></q-btn>
        <q-toolbar-title> Music Store</q-toolbar-title>
        <q-btn
          flat
          dense
          label="Cart"
          icon="shopping_cart"
          @click="navigateTo({ page: { id: 'cart' } })"
        >
        </q-btn>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="drawerOpen" side="left" bordered>
      <q-scroll-area class="fit">
        <q-list>
          <template v-for="(menuItem, index) in menuItems">
            <q-item
              v-if="!menuItem.separator"
              :key="`sidebar-item-${index}`"
              :class="{ 'bg-separator': menuItem.header }"
              :clickable="!menuItem.header"
              :ripple="!menuItem.header"
              :active="menuItem.page === currentPage.page"
              @click="navigateTo(menuItem)"
            >
              <q-item-section v-if="menuItem.icon" avatar>
                <q-icon :name="menuItem.icon"></q-icon>
              </q-item-section>
              <q-item-section>{{ menuItem.label }}</q-item-section>
            </q-item>
            <q-separator v-else :key="`sidebar-sep-${index}`"></q-separator>
          </template>
        </q-list>
      </q-scroll-area>
    </q-drawer>

    <q-page-container>
      <q-page padding>
        <store
          @add-to-cart="(item, type) => this.$refs.cart.addToCart(item, type)"
          :prefilter="this.prefiltered"
          :label="this.shopLabel"
          v-show="currentPage.id === 'shop'"
          ref="storePage"
        ></store>
        <cart v-show="currentPage.id === 'cart'" ref="cart"></cart>
        <user v-show="currentPage.id === 'user'"></user>
        <user v-show="currentPage.id === 'payment'"></user>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,700;1,400;1,700&display=swap');
</style>
