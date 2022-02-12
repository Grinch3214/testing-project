<template>
    <v-container>
       <v-row>
          <v-col cols="2">
            <h3>Topics</h3>
            <div class="mb-2">
              <v-chip
              link
              @click="sortByTags"
            > All </v-chip>
            </div>
            <div 
              v-for="(list, i) in itemList"
              :key="i"
              class="mb-2"
            >
              <v-chip
              link
              filter
              @click="sortByTags(list)"
            > {{ list }} </v-chip>
            </div>
          </v-col>

          <v-col cols="10">
            <v-sheet
              v-for="(post) in filterTags" :key="post.id"
              elevation="4"
              class="mb-6 pa-3 text-center d-flex flex-column"
              min-height="25vh"
              rounded="lg"
              color="accent"
            >
              <h3 class="pb-4">{{ post.title }}</h3>
              <p> {{ formatedCommentText(post.body, 60) }} </p>

              <div class="flex-grow-1 text-left">
                <v-chip
                  v-for="list in post.lablesList"
                  :key="list"
                  color="secondary"
                  label
                  class="mr-2 mb-2"
                > {{ list }} </v-chip>
              </div>

              <div>
                <v-btn
                  @click="moreInfo(post.id)"
                  color="primary"
                  elevation="2"
                >Read More</v-btn>
              </div>
              
            </v-sheet>
          </v-col>
        </v-row>
    </v-container>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'PostList',
  data() {
    return {
      itemList: [
        "React",
        "Node",
        "Vue",
        "JS",
        "HTML",
        "CSS"
      ],
      sortedChips: [],
    }
  },
  computed: {
    ...mapGetters([ 'statePosts' ]),
    filterTags() {
      if (this.sortedChips.length) {
        return this.sortedChips
      } else {
        return this.statePosts
      }
    }
  },
  methods: {
    ...mapActions ([
      'getPosts'
    ]),
    formatedCommentText(cut, n) {
      // return cut.slice(0, 220) + "...";
      return cut.split(' ').splice(0, n).join(' ') + '...'
    },
    moreInfo(index) {
      console.log(index)
      this.$router.push('/article-page?id='+index)
    },
    sortByTags(tag) {
      this.sortedChips = []
      let vm = this
      this.statePosts.map((item) => {
        item.lablesList.filter((k) => {
          if (k === tag) {
            vm.sortedChips.push(item)
          }
        })
      })
    }
  },
  mounted() {
    this.getPosts()
  }
}
</script>