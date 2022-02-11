<template>
<div class="app">
  <template v-if="is404">
    <router-view></router-view>
  </template>

  <v-app v-else>
    <navbar />
  </v-app>
</div>
</template>

<script>
import Navbar from './components/Navbar.vue'

export default {
  name: 'App',
  components: {
    Navbar,
  },

  data: () => ({
    //
  }),
  computed: {
    is404() {
      return this.$route.name === '404'
    }
  }
};
</script>

