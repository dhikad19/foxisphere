<template>
  <div class="item-container">
    <v-layout>
      <v-main>
        <Navigation />
        <div
          v-if="itemsId"
          class="content-container pa-4"
          :class="{ 'background-body-dark': themeState.isDarkMode }">
          <h1 style="color: white">
            
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
        themeState,
        gamesId: '',
        itemsId: '',
        itemId: ''
      }
    },
    components: {
      Navigation,
    },
    mounted() {
      this.itemsId = this.$route.params.items
      this.gamesId = this.$route.params.id
      this.itemId = this.$route.params.item
    }
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
