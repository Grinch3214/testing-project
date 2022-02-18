<template>
  <div>
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