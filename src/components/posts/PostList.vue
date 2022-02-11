<template>
    <v-container>
       <v-row>
          <v-col cols="2">
            <v-sheet rounded="lg">
              <v-list color="transparent">
                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-title>
                      List Item content
                    </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>

              </v-list>
            </v-sheet>
          </v-col>

          <v-col>
            <v-sheet
              v-for="(post, i) in statePosts" :key="i"
              elevation="4"
              class="mb-6 pa-3 text-center d-flex flex-column"
              min-height="25vh"
              rounded="lg"
              color="accent"
            >
              <h3 class="pb-4">{{ post.title }}</h3>
              <p class="flex-grow-1"> {{ formatedCommentText(post.body) }} </p>

              <div>
                <v-btn
                  @click="moreInfo(i)"
                  color="primary"
                  elevation="2"
                >More</v-btn>
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
    }
  },
  computed: {
    ...mapGetters([ 'statePosts' ]),
  },
  methods: {
    ...mapActions ([
      'getPosts'
    ]),
    formatedCommentText(cut) {
      return cut.slice(0, 220) + "...";
    },
    moreInfo(index) {
      console.log(index)
    }
  },
  mounted() {
    this.getPosts()
  }
}
</script>