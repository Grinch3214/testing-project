<template>
  <div class="navbar-menu">
    <v-navigation-drawer app temporary v-model="openNav">
      <v-list dense>
      <v-subheader>BLOG</v-subheader>
      <v-list-item-group
        v-model="selectedItem"
        color="blue accent-2"
      >
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.url"
        >
          <v-list-item-icon>
            <v-icon v-text="item.icon"></v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title v-text="item.text"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
    </v-navigation-drawer>

    <v-card
    flat
    tile
  >
    <v-app-bar color="blue accent-2" app>
      <v-app-bar-nav-icon @click="openNav = true" color="white" class="d-flex d-md-none"></v-app-bar-nav-icon>

    <v-app-bar-title>
        <router-link class="text-h5 d-block mt-2 white--text" style="max-width: 45px" to="/">
          <img style="width: 100%" src="~@/assets/images/logo.svg" alt="">
        </router-link>
    </v-app-bar-title>

      <v-spacer></v-spacer>

      <v-toolbar-items class="d-none d-md-flex">
        <v-btn
          plain
          v-for="(item, i) in items"
          :key="i"
          :to="item.url"
          color="white"
        >
          <v-icon left v-text="item.icon"></v-icon>
          {{ item.text }}
        </v-btn>
      </v-toolbar-items>

    </v-app-bar>
  </v-card>

    <v-main>
      <v-container style="height: 100%">
        <router-view></router-view>
      </v-container>
    </v-main>

    <v-footer app>
      Created me
    </v-footer>
  </div>
</template>

<script>

export default {
  name: 'Navbar',
  data:() => ({
    openNav: false,
    selectedItem: 1,
      items: [
        { text: 'Admin panel', icon: 'mdi-wrench', url: '/admin-panel' },
        { text: 'About Autor', icon: 'mdi-information', url: '/about-autor' },
        { text: 'Sign In', icon: 'mdi-account', url: '/login' },
      ],
  })
};
</script>

<style lang="scss">
.navbar-menu {
  // .v-toolbar__title, .v-btn.v-size--default {
  //   color: #fff;
  // }
  // .v-btn--plain:not(.v-btn--active):not(.v-btn--loading):not(:focus):not(:hover)
  // .v-btn__content {
  // opacity: 1;
  // }
  .v-main {
    min-height: 100vh;
  }
}

</style>