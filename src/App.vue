<script>
import {Cart, Store, User} from "@/components/page/PagesGroup.vue";

export default {
  id: 'PageIndex',

  components: {
    Cart, Store, User
  },

  data: function () {
    return {
      drawerOpen: false,
      currentPage: {id: 'store'},
      cart: [],
      storeItems: [
        // {
        //   name: 'Example Product',
        //   imgSrc: 'https://picsum.photos/200/150?random=-1',
        //   brief: 'Brief description',
        //   description: 'Full Description',
        //   modal: false,
        // }
      ],
      menuItems: [
        {
          header: true, //Disables ripple and clicking, as well as new bg color
          icon: '',
          label: 'Music',
        },
        {
          icon: '', //Icon, leave blank/undef if none
          label: 'All', //Text portion
          page: {id: 'all'}, //Link for this menuitem.
        },
        {
          icon: '',
          label: 'Vinyl Records',
          page: {id: 'vinyl'},
        },
        {
          icon: '',
          label: 'Cassettes',
          page: {id: 'cassette'},
        },
        {
          icon: '',
          label: 'CDs',
          page: {id: 'cd'},
        },
        {
          icon: '',
          label: 'Digital',
          page: {id: 'digital'},
        },
        {separator: true},
        {
          header: true,
          icon: '',
          label: 'Account',
        },
        {
          icon: 'person',
          label: 'Manage',
          page: {id: 'account'},
        },
        {
          icon: 'shopping_cart',
          label: 'Cart',
          page: {id: 'cart'},
        },
        {
          icon: 'credit_card',
          label: 'Payment / Shipping',
          page: {id: 'payment'},
        }
      ]
    }
  },

  methods: {
    toggleDrawer: function () {
      this.drawerOpen = !this.drawerOpen;
    },

    navigateTo: function (link) {
      console.log(link);
      this.currentPage = link;
    },
  },

  computed: {
    vinylOnly() {
      return this.storeItems.filter(value => value.options.includes('Vinyl'));
    },

    cassetteOnly() {
      return this.storeItems.filter(value => value.options.includes('Cassette'));
    },

    cdOnly() {
      return this.storeItems.filter(value => value.options.includes('CD'));
    },

    digitalOnly() {
      return this.storeItems.filter(value => value.options.includes('Digital'));
    }
  },

  mounted: function () {
    this.navigateTo(this.menuItems[1].page);

    for (let i = 0; i < 25; i++) {
      this.storeItems.push(
          {
            name: `Vinyl ${i + 1}`,
            imgSrc: `https://picsum.photos/1000/1000?random=${i}`,
            brief: `Item no. ${i + 1}`,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae lorem leo. Nullam tincidunt, lectus eu congue viverra, neque sapien hendrerit lacus, eget vestibulum urna erat id urna. Pellentesque feugiat varius libero consequat ullamcorper. Vivamus at congue lorem. Morbi ut vulputate ligula. Cras lobortis leo ligula, ac pulvinar nibh mollis vitae. Quisque sem tellus, luctus in risus nec, pulvinar volutpat sem. Aliquam at enim sodales, sagittis leo vitae, congue lacus. Aliquam in pellentesque massa. Nulla maximus laoreet orci ut aliquet. Aliquam condimentum dolor dolor, at luctus dui rutrum in. Sed a tristique magna, id cursus nunc. Integer mollis nisl ut magna bibendum venenatis. Pellentesque lacinia congue mi ac imperdiet. Suspendisse mattis hendrerit augue id vestibulum. ',
            options: [
              'Vinyl'
            ]
          });
    }
    for (let i = 25; i < 50; i++) {
      this.storeItems.push(
          {
            name: `Cassette ${i + 1 - 25}`,
            imgSrc: `https://picsum.photos/1000/1000?random=${i}`,
            brief: `Item no. ${i + 1}`,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae lorem leo. Nullam tincidunt, lectus eu congue viverra, neque sapien hendrerit lacus, eget vestibulum urna erat id urna. Pellentesque feugiat varius libero consequat ullamcorper. Vivamus at congue lorem. Morbi ut vulputate ligula. Cras lobortis leo ligula, ac pulvinar nibh mollis vitae. Quisque sem tellus, luctus in risus nec, pulvinar volutpat sem. Aliquam at enim sodales, sagittis leo vitae, congue lacus. Aliquam in pellentesque massa. Nulla maximus laoreet orci ut aliquet. Aliquam condimentum dolor dolor, at luctus dui rutrum in. Sed a tristique magna, id cursus nunc. Integer mollis nisl ut magna bibendum venenatis. Pellentesque lacinia congue mi ac imperdiet. Suspendisse mattis hendrerit augue id vestibulum. ',
            options: [
              'Cassette'
            ]
          });
    }
    for (let i = 50; i < 75; i++) {
      this.storeItems.push(
          {
            name: `CD ${i + 1 - 50}`,
            imgSrc: `https://picsum.photos/1000/1000?random=${i}`,
            brief: `Item no. ${i + 1}`,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae lorem leo. Nullam tincidunt, lectus eu congue viverra, neque sapien hendrerit lacus, eget vestibulum urna erat id urna. Pellentesque feugiat varius libero consequat ullamcorper. Vivamus at congue lorem. Morbi ut vulputate ligula. Cras lobortis leo ligula, ac pulvinar nibh mollis vitae. Quisque sem tellus, luctus in risus nec, pulvinar volutpat sem. Aliquam at enim sodales, sagittis leo vitae, congue lacus. Aliquam in pellentesque massa. Nulla maximus laoreet orci ut aliquet. Aliquam condimentum dolor dolor, at luctus dui rutrum in. Sed a tristique magna, id cursus nunc. Integer mollis nisl ut magna bibendum venenatis. Pellentesque lacinia congue mi ac imperdiet. Suspendisse mattis hendrerit augue id vestibulum. ',
            options: [
              'CD'
            ]
          });
    }
    for (let i = 75; i < 100; i++) {
      this.storeItems.push(
          {
            name: `Digital ${i + 1 - 75}`,
            imgSrc: `https://picsum.photos/1000/1000?random=${i}`,
            brief: `Item no. ${i + 1}`,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae lorem leo. Nullam tincidunt, lectus eu congue viverra, neque sapien hendrerit lacus, eget vestibulum urna erat id urna. Pellentesque feugiat varius libero consequat ullamcorper. Vivamus at congue lorem. Morbi ut vulputate ligula. Cras lobortis leo ligula, ac pulvinar nibh mollis vitae. Quisque sem tellus, luctus in risus nec, pulvinar volutpat sem. Aliquam at enim sodales, sagittis leo vitae, congue lacus. Aliquam in pellentesque massa. Nulla maximus laoreet orci ut aliquet. Aliquam condimentum dolor dolor, at luctus dui rutrum in. Sed a tristique magna, id cursus nunc. Integer mollis nisl ut magna bibendum venenatis. Pellentesque lacinia congue mi ac imperdiet. Suspendisse mattis hendrerit augue id vestibulum. ',
            options: [
              'Digital'
            ]
          });
    }
  }
}
</script>

<template>
  <q-layout view="HHH lpr FFF">
    <q-header class="bg-primary text-white">
      <q-toolbar>
        <q-btn class="center" flat round dense icon="menu" @click="toggleDrawer"></q-btn>
        <q-toolbar-title>
          <p class="center">Music Store</p>
        </q-toolbar-title>
        <q-btn
            flat dense
            label="Cart"
            icon="shopping_cart"
            @click="navigateTo({id: 'cart'})">
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
                :class="{'bg-separator': menuItem.header}"
                :clickable="!menuItem.header"
                :ripple="!menuItem.header"
                :active="menuItem.page === currentPage"
                @click="navigateTo(menuItem.page)">
              <q-item-section v-if="menuItem.icon" avatar>
                <q-icon :name="menuItem.icon"></q-icon>
              </q-item-section>
              <q-item-section>{{ menuItem.label }}</q-item-section>
            </q-item>
            <q-separator
                v-else
                :key="`sidebar-item-${index}`">
            </q-separator>
          </template>
        </q-list>
      </q-scroll-area>
    </q-drawer>

    <q-page-container>
      <q-page padding>
        <store
            @add-to-cart="(item) => cart.push(item)"
            v-if="currentPage.id === 'all'"
            :prefilter="this.storeItems">
        </store>
        <store
            @add-to-cart="(item) => cart.push(item)"
            v-if="currentPage.id === 'vinyl'"
            :prefilter="this.vinylOnly">
        </store>
        <store
            @add-to-cart="(item) => cart.push(item)"
            v-if="currentPage.id === 'cassette'"
            :prefilter="this.cassetteOnly">
        </store>
        <store
            @add-to-cart="(item) => cart.push(item)"
            v-if="currentPage.id === 'cd'"
            :prefilter="this.cdOnly">
        </store>
        <store
            @add-to-cart="(item) => cart.push(item)"
            v-if="currentPage.id === 'digital'"
            :prefilter="this.digitalOnly"></store>
        <cart v-if="currentPage.id === 'cart'" :cart="this.cart"></cart>
        <user v-if="currentPage.id === 'user'"></user>
        <user v-if="currentPage.id === 'payment'"></user>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<style lang="scss" scoped>
.center {
  padding-top: 15px;
  height: 50px;
  display: inline;
  vertical-align: middle;
}
</style>