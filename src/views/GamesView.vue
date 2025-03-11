<template>
  <div class="game-container">
    <v-layout>
      <v-main>
        <Navigation />
        <div
          class="content-container pa-4"
          :class="{ 'background-body-dark': themeState.isDarkMode }">
          <TopContent />
          <div class="d-flex mt-10">
            
          </div>
        </div>
      </v-main>
    </v-layout>
  </div>
</template>

<script>
import { themeState } from "../theme";
  import Navigation from "@/components/Navigation/index.vue";
  import TopContent from "@/components/Game/Detail/TopContent/index.vue";
  export default {
    name: "GamesView",
    data() {
      return {
        themeState
      }
    },
    components: {
      Navigation,
      TopContent
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
