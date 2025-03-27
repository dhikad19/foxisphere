<template>
  <div class="game-container">
    <router-view></router-view>
    <v-layout>
      <v-main>
        <Navigation />
        <div
          v-if="!itemsId && !itemId"
          class="content-container pa-4"
          :class="{ 'background-body-dark': themeState.isDarkMode }">
          <TopContent />
          <ListContent />
        </div>
      </v-main>
    </v-layout>
    
  </div>
</template>

<script>
  import { themeState } from "../theme";
  import Navigation from "@/components/Navigation/index.vue";
  import TopContent from "@/components/Game/Detail/TopContent/index.vue";
  import ListContent from "@/components/Game/Detail/Content/List/index.vue";
  export default {
    name: "GamesView",
    data() {
      return {
        themeState,
        gamesId: '',
        itemsId: '',
        itemId: ''
      }
    },
    methods: {
    },
    created() {
      this.itemsId = this.$route.params.items
      this.gamesId = this.$route.params.id
      this.itemId = this.$route.params.item
      document.title = this.gamesId.replace('-', ' ').toUpperCase() + ', Panduan & Wiki | Foxcore'
    },
    components: {
      Navigation,
      TopContent,
      ListContent
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
