<template>
  <div>
    <v-sheet
      elevation="4"
      class="mb-6 pa-3 text-center d-flex flex-column position-relative"
      min-height="75vh"
      rounded="lg"
      color="accent"
    >
      <v-btn
        color="primary"
        elevation="1"
        fab
        small
        class="edit-button"
      ><v-icon
      color=""
    >
      mdi-square-edit-outline
    </v-icon></v-btn>
      <h3 class="py-4 pr-14">{{ itemPost.title }}</h3>
      <p class="flex-grow-1"> {{ itemPost.body }}</p>

      <div class="text-left">
        <v-chip
          v-for="item in itemPost.lablesList"
          :key="item"
          color="secondary"
          label
          class="mr-2 mb-2"
        >
          {{ item }}
        </v-chip>
      </div>
    </v-sheet>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: "ArticlePage",
  props: {

  },
  computed: {
    ...mapGetters([
      'statePosts'
    ]),
    itemPost() {
      let result = {}
      let vm = this
      this.statePosts.filter((item) => {
        if (item.id == vm.$route.query.id) {
          result = item
        }
      })
      return result
    },
  },
  mounted() {
    console.log(this.$route.query.id)
    this.getPosts()
  },
  methods: {
    ...mapActions([ 'getPosts' ])
  }
};
</script>

<style lang="scss">
.position-relative {
    position: relative;
}
.edit-button {
    position: absolute;
    right: 15px;
    top: 15px;
}
</style>