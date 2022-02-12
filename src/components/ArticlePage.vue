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
      <h3 class="pb-4 pr-14">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore tenetur repellendus quae quo. Nemo, totam culpa! Consectetur mollitia alias, eligendi officiis, quo explicabo asperiores, ducimus ex aperiam perferendis sit ipsa?</h3>
      <p class="flex-grow-1"> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus, nulla eaque omnis sunt doloribus perferendis debitis rem quaerat, itaque magni vel blanditiis, minus nihil excepturi nemo sit temporibus hic alias!</p>

      <div class="text-left">
        <v-chip
          color="secondary"
          label
          class="mr-2 mb-2"
        >
          Text
        </v-chip>
      </div>
    </v-sheet>
  </div>
</template>

<script>
export default {
  name: "ArticlePage",
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