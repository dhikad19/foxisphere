<template>
  <div class="game-container">
    <router-view></router-view>
    <v-layout>
      <v-main>
        <Navigation />
        <div
          v-if="!itemId"
          class="content-container pa-4"
          :class="{ 'background-body-dark': themeState.isDarkMode }">
          <TopContent />
          <TierList />
        </div>
      </v-main>
    </v-layout>
  </div>
</template>

<script>
  import { themeState } from "../theme";
  import Navigation from "@/components/Navigation/index.vue";
  import TopContent from "@/components/Game/Detail/TopContent/index.vue";
  import TierList from "@/components/Game/Detail/Content/TierList/index.vue";
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
      this.gamesId = this.$route.params.id
      this.itemsId = this.$route.params.items
      this.itemId = this.$route.params.item
      if (this.itemsId == 'tier-list') {
        document.title = this.gamesId.replace('-', ' ').toUpperCase() + ', Tier List | Foxcore'
      } else {
        document.title = this.gamesId.replace('-', ' ').toUpperCase() + ', Panduan & Wiki | Foxcore'
      }
      
    },
    components: {
      Navigation,
      TierList,
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
