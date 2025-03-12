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
        themeState,
        // gameList: [
        //   {
        //     id: "1",
        //     image:
        //       "https://res.cloudinary.com/dqaylwrrx/image/upload/v1740473419/Games/reverse-1999_voa7td.png",
        //     name: "Reverse: 1999",
        //     url: 'reverse-1999'
        //   },
        //   {
        //     id: "2",
        //     image:
        //       "https://res.cloudinary.com/dqaylwrrx/image/upload/v1740469634/Games/arknights_oz6wzl.png",
        //     name: "Arknights",
        //     url: 'arknights'
        //   },
        //   {
        //     id: "3",
        //     image:
        //       "https://res.cloudinary.com/dqaylwrrx/image/upload/v1740469629/Games/epic-seven_psohrd.png",
        //     name: "Epic Seven",
        //     url: 'epic-seven'
        //   },
        //   {
        //     id: "4",
        //     image:
        //       "https://res.cloudinary.com/dqaylwrrx/image/upload/v1740466847/Games/wuthering-waves_gpltcq.png",
        //     name: "Wuthering Waves",
        //     url: 'wuthering-waves'
        //   },
        //   {
        //     id: "5",
        //     image:
        //       "https://res.cloudinary.com/dqaylwrrx/image/upload/v1740469635/Games/honkai-impact_tgn56j.png",
        //     name: "Honkai Impact 3rd",
        //     url: 'honkai-impact-3rd'
        //   },
        //   {
        //     id: "6",
        //     image:
        //       "https://res.cloudinary.com/dqaylwrrx/image/upload/v1739259775/Games/zzz_rceyrv.png",
        //     name: "Zenless Zone Zero",
        //     url: 'zenless-zone-zero'
        //   },
        //   {
        //     id: "7",
        //     image:
        //       "https://res.cloudinary.com/dqaylwrrx/image/upload/v1739259648/Games/genhin-impact_tvqxbi.png",
        //     name: "Genshin Impact",
        //     url: 'genshin-impact'
        //   },
        //   {
        //     id: "8",
        //     image:
        //       "https://res.cloudinary.com/dqaylwrrx/image/upload/v1739259649/Games/star-rail_esjixp.png",
        //     name: "Honkai: Star Rail",
        //     url: 'honkai-star-rail'
        //   },
        //   {
        //     id: "9",
        //     image:
        //       "https://res.cloudinary.com/dqaylwrrx/image/upload/v1740469629/Games/summoners-war_f5u2md.png",
        //     name: "Summoners War",
        //     url: 'summoners-war'
        //   },
        //   {
        //     id: "10",
        //     image:
        //       "https://res.cloudinary.com/dqaylwrrx/image/upload/v1740469636/Games/Group_63_whjhdt.png",
        //     name: "Guardian Tales",
        //     url: 'guardian-tales'
        //   },
        //   {
        //     id: "11",
        //     image:
        //       "https://res.cloudinary.com/dqaylwrrx/image/upload/v1740469634/Games/brown-dust2_aceotn.png",
        //     name: "Brown Dust 2",
        //     url: 'brown-dust-2'
        //   },
        //   {
        //     id: "12",
        //     image:
        //       "https://res.cloudinary.com/dqaylwrrx/image/upload/v1740473418/Games/afk-journey_pivr1a.png",
        //     name: "AFK Journey",
        //     url: 'afk-journey'
        //   },
        // ],
        // game: null,
      }
    },
    // beforeRouteEnter(to, from, next) {
    // // Find the game based on the URL parameter (gameUrl)
    //   const game = this.gameList.find(game => game.url === to.params.gameUrl);
    //   if (game) {
    //     document.title = `${game.name}, wiki and database | Foxon`; // Set dynamic title
    //   }
    //   next(vm => {
    //     // Pass the game object to the component instance after navigation
    //     vm.game = game;
    //   });
    // },
    // beforeRouteUpdate(to, from, next) {
    //   // Update the game and title when the route changes but within the same component
    //   const game = this.gameList.find(game => game.url === to.params.gameUrl);
    //   if (game) {
    //     document.title = `${game.name}, wiki and database | Foxon`; // Update title
    //     this.game = game;
    //   }
    //   next();
    // },
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
