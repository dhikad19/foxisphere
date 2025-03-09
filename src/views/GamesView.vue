<template>
  <div class="game-container">
    <v-layout>
      <v-main>
        <Navigation />
        <div class="content-container pa-4"></div>
      </v-main>
    </v-layout>
  </div>
</template>

<script>
  import Navigation from "@/components/Navigation/index.vue";
  export default {
    name: "GamesView",
    components: {
      Navigation,
    },
  };
</script>

<style lang="scss" scoped>
  .content-container {
    position: relative;
    max-width: 1080px;
    margin: 0 auto;
    width: 100%;
  }
</style>
