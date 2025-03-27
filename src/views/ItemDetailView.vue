<template>
  <div class="item-container">
    <v-layout>
      <v-main>
        <Navigation />
        <div
          class="content-container pa-4"
          :class="{ 'background-body-dark': themeState.isDarkMode }">
          <h1 style="color: white">
            fufufafa
          </h1>
        </div>
      </v-main>
    </v-layout>
  </div>
</template>

<script>
  import { themeState } from "../theme";
  import Navigation from "@/components/Navigation/index.vue";
  export default {
    name: 'ItemView',
    data() {
      return {
        themeState
      }
    },
    components: {
      Navigation,
    },
  }
</script>

<style lang="scss" scoped>
  .item-container {
    position: relative;
    max-width: 1080px;
    margin: 0 auto;
    width: 100%;
  }
</style>
