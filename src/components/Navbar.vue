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
    <v-toolbar color="blue accent-2">
      <v-app-bar-nav-icon @click="openNav = true" color="white" class="d-flex d-md-none"></v-app-bar-nav-icon>

      <v-toolbar-title class="pl-0">
        <v-btn plain color="white" to="/">My Blog</v-btn>
      </v-toolbar-title>

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

    </v-toolbar>
  </v-card>

    <v-main>
      <v-container>
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
}

</style>