<template>
  <div>
    <!-- <v-container>
      <v-row>
        <v-col cols="12">
          <h1>Home test</h1>
        </v-col>
      </v-row>
    </v-container> -->

    <post-list />
  </div>
    
</template>

<script>
import PostList from './posts/PostList.vue'

export default {
  name: 'Home',
  components: {
    PostList 
  },
  data() {
    return {}
  }
}
</script>