<template>
    <v-container>
      <v-row>
        <v-col cols="12">
          <h1>Autor test</h1>
          <p><img :src="activeUser.avatar_url" alt="avatar"></p>
        </v-col>
      </v-row>
    </v-container>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  name: 'Home',
  data() {
    return {}
  },
  computed: {
    ...mapState(['activeUser'])
  },
  methods: {
    ...mapActions( ['getAutor'] )
  },
  created() {
    this.getAutor()
  },
}
</script>