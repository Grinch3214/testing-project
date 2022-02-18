<template>
  <v-container class="about-autor">
    <v-card elevation="2">
      <v-card-text>
        <v-row>
          <v-col cols="12" sm="5">
            <div class="about-autor-image mx-auto mb-5">
              <img :src="activeAutor.avatar_url" alt="avatar" />
            </div>
          </v-col>
          <v-col cols="12" sm="7">
            <div class="d-flex flex-column justify-center h-100">
              <div>
                <h2 class="about-autor-title">{{ allAdminInfo.name }} {{ allAdminInfo.surname }}</h2>
                <ul class="about-autor-list">
                  <li class="about-autor-item">
                    <span>Phone:</span> {{ allAdminInfo.phone }}
                  </li>
                  <li class="about-autor-item">
                    <span>Email:</span> {{ allAdminInfo.email }}
                  </li>
                  <li class="about-autor-item">
                    <span>Telegram:</span> {{ allAdminInfo.telegramUserName }}
                  </li>
                  <li class="about-autor-item">
                    <span>GitHub:</span>
                    <a target="_blank" :href="allAdminInfo.gitHubUserName"
                      >Github page</a
                    >
                  </li>
                  <li class="about-autor-item">
                    <span>Linkedin:</span>
                    <a target="_blank" :href="allAdminInfo.linkedinLink">Maxim</a>
                  </li>
                </ul>
              </div>
            </div>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <h3 class="about-autor-subtitle mb-2">About me</h3>
            <p class="about-autor-text mb-0">{{ activeAutor.bio }}</p>
          </v-col>
        </v-row>
        <v-row>
          <v-col
            cols="12"
            sm="6"
            md="4"
            v-for="(item, index) in allAdminInfo.languages"
            :key="index"
          >
            <v-sheet
              color="grey darken-0"
              elevation="3"
              rounded
              class="pa-2 text-center about-autor-card"
            >
              <h4 class="text-uppercase about-autor-card__title">{{ item.name }}</h4>
              <p class="mb-0 about-autor-card__body"><span>Level:</span> {{ item.level }}</p>
            </v-sheet>
          </v-col>
        </v-row>

        <v-row>
          <v-col>
            <h3 class="about-autor-subtitle mt-4 mb-2">Skills</h3>
          </v-col>
        </v-row>
        <v-row>
          <v-col
            cols="12"
            sm="6"
            md="4"
            v-for="(item, index) in allAdminInfo.skils"
            :key="index"
          >
            <v-sheet
              color="grey darken-0"
              elevation="3"
              rounded
              class="pa-2 text-center about-autor-card"
            >
              <h4 class="text-uppercase about-autor-card__title">{{ item.name }}</h4>
              <p class="mb-0 about-autor-card__body"><span>Level:</span> {{ item.level }}</p>
            </v-sheet>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import { mapActions, mapState, mapGetters } from "vuex";

export default {
  name: "Home",
  data() {
    return {};
  },
  computed: {
    ...mapState(["activeAutor"]),
    ...mapGetters(["allAdminInfo"]),
  },
  methods: {
    ...mapActions(["getAutor", "getAdminInfo"]),
  },
  async created() {
    this.getAutor();
    this.getAdminInfo();
  },
};
</script>

<style lang="scss">
.about-autor {
  text-align: center;
  @media screen and (min-width: 600px) {
    text-align: left;
  }
  ul {
    padding-left: 0;
    list-style: none;
  }
  &-title {
    font-size: 20px;
    margin-bottom: 15px;
    font-weight: 700;
    @media screen and (min-width: 960px) {
      font-size: 26px;
      margin-bottom: 28px;
    }
  }
  &-image {
    max-width: 200px;
    max-height: 200px;
    border-radius: 50%;
    overflow: hidden;
    @media screen and (min-width: 960px) {
      max-width: 300px;
      max-height: 300px;
    }
    img {
      width: 100%;
    }
  }
  &-item {
    font-size: 14px;
    margin-bottom: 8px;
    @media screen and (min-width: 960px) {
      font-size: 18px;
      margin-bottom: 12px;
    }
    span {
      color: #222828;
      padding-right: 8px;
    }
  }
  &-subtitle {
    font-size: 18px;
    font-weight: 700;
    @media screen and (min-width: 960px) {
      font-size: 24px;
    }
  }
  &-text {
    font-size: 14px;
    @media screen and (min-width: 960px) {
      font-size: 18px;
    }
  }
  &-card__title {
    font-weight: 700;
    font-size: 16px;
    @media screen and (min-width: 960px) {
      font-size: 18px;
    }
  }
  &-card__body {
    span {
      font-weight: 700;
    }
  }
}
</style>