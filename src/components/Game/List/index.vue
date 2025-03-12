<template>
  <div class="game-list-container">
    <h1 :class="{ 'title-dark': themeState.isDarkMode }" class="game-title">
      Daftar Game
    </h1>
    <v-row dense>
      <v-col cols="3" sm="3" v-for="(item, i) in gameListData" :key="i" @click="handleGameList(i)">
        <div class="game-card">
          <div
            class="mx-auto game-image-container"
            :class="{ 'background-dark': themeState.isDarkMode }">
            <v-img
              v-if="
                item.name == 'Genshin Impact' ||
                item.name == 'Wuthering Waves' ||
                item.name == 'Arknights' ||
                item.name == 'Reverse: 1999' ||
                item.name == 'Brown Dust 2'
              "
              class="game-image align-end list-image"
              :style="themeState.isDarkMode ? 'filter: invert(100%)' : ''"
              :src="item.image"
              contain>
            </v-img>
            <v-img
              v-else
              class="game-image align-end list-image"
              :style="
                item.name == 'AFK Journey' && !themeState.isDarkMode
                  ? 'filter: grayscale(100%) brightness(0)'
                  : ''
              "
              :src="item.image"
              contain>
            </v-img>
          </div>
          <div
            :class="{ 'title-dark': themeState.isDarkMode }"
            class="image-title">
            <p>{{ item.name }}</p>
          </div>
        </div>
      </v-col>
    </v-row>
    <v-row dense>
      <v-col cols="3" v-for="(item, i) in gameList.slice(8, 12)" :key="i" @click="handleGameListExpand(i)">
        <v-expand-transition>
          <div class="game-card" v-show="gameExpand">
            <div
              class="mx-auto game-image-container"
              :class="{ 'background-dark': themeState.isDarkMode }">
              <v-img
                v-if="
                  item.name == 'Genshin Impact' ||
                  item.name == 'Wuthering Waves' ||
                  item.name == 'Arknights' ||
                  item.name == 'Reverse: 1999' ||
                  item.name == 'Brown Dust 2'
                "
                class="game-image align-end list-image"
                :style="themeState.isDarkMode ? 'filter: invert(100%)' : ''"
                :src="item.image"
                contain>
              </v-img>
              <v-img
                v-else
                class="game-image align-end list-image"
                :style="
                  item.name == 'AFK Journey' && !themeState.isDarkMode
                    ? 'filter: grayscale(100%) brightness(0)'
                    : ''
                "
                :src="item.image"
                contain>
              </v-img>
            </div>
            <div
              :class="{ 'title-dark': themeState.isDarkMode }"
              class="image-title">
              <p>{{ item.name }}</p>
            </div>
          </div>
        </v-expand-transition>
      </v-col>
      <v-col cols="12" class="mt-2">
        <div
          :class="{ 'title-dark': themeState.isDarkMode }"
          class="more-btn"
          @click="gameExpand = !gameExpand">
          <v-icon
            class="blinking"
            v-if="gameExpand"
            :color="themeState.isDarkMode ? '#ffffff' : '#4f4f4f'"
            >mdi-chevron-up</v-icon
          >
          {{ gameExpand ? "Lebih Sedikit" : "Lebih Banyak" }}
          <v-icon
            class="blinking"
            v-if="!gameExpand"
            :color="themeState.isDarkMode ? '#ffffff' : '#4f4f4f'"
            >mdi-chevron-down</v-icon
          >
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
  import { themeState } from "../../../theme";
  export default {
    name: "GameListComponent",
    data() {
      return {
        themeState,
        gameExpand: false,
        gameList: [
          {
            id: "1",
            image:
              "https://res.cloudinary.com/dqaylwrrx/image/upload/v1740473419/Games/reverse-1999_voa7td.png",
            name: "Reverse: 1999",
            url: 'reverse-1999'
          },
          {
            id: "2",
            image:
              "https://res.cloudinary.com/dqaylwrrx/image/upload/v1740469634/Games/arknights_oz6wzl.png",
            name: "Arknights",
            url: 'arknights'
          },
          {
            id: "3",
            image:
              "https://res.cloudinary.com/dqaylwrrx/image/upload/v1740469629/Games/epic-seven_psohrd.png",
            name: "Epic Seven",
            url: 'epic-seven'
          },
          {
            id: "4",
            image:
              "https://res.cloudinary.com/dqaylwrrx/image/upload/v1740466847/Games/wuthering-waves_gpltcq.png",
            name: "Wuthering Waves",
            url: 'wuthering-waves'
          },
          {
            id: "5",
            image:
              "https://res.cloudinary.com/dqaylwrrx/image/upload/v1740469635/Games/honkai-impact_tgn56j.png",
            name: "Honkai Impact 3rd",
            url: 'honkai-impact-3rd'
          },
          {
            id: "6",
            image:
              "https://res.cloudinary.com/dqaylwrrx/image/upload/v1739259775/Games/zzz_rceyrv.png",
            name: "Zenless Zone Zero",
            url: 'zenless-zone-zero'
          },
          {
            id: "7",
            image:
              "https://res.cloudinary.com/dqaylwrrx/image/upload/v1739259648/Games/genhin-impact_tvqxbi.png",
            name: "Genshin Impact",
            url: 'genshin-impact'
          },
          {
            id: "8",
            image:
              "https://res.cloudinary.com/dqaylwrrx/image/upload/v1739259649/Games/star-rail_esjixp.png",
            name: "Honkai: Star Rail",
            url: 'honkai-star-rail'
          },
          {
            id: "9",
            image:
              "https://res.cloudinary.com/dqaylwrrx/image/upload/v1740469629/Games/summoners-war_f5u2md.png",
            name: "Summoners War",
            url: 'summoners-war'
          },
          {
            id: "10",
            image:
              "https://res.cloudinary.com/dqaylwrrx/image/upload/v1740469636/Games/Group_63_whjhdt.png",
            name: "Guardian Tales",
            url: 'guardian-tales'
          },
          {
            id: "11",
            image:
              "https://res.cloudinary.com/dqaylwrrx/image/upload/v1740469634/Games/brown-dust2_aceotn.png",
            name: "Brown Dust 2",
            url: 'brown-dust-2'
          },
          {
            id: "12",
            image:
              "https://res.cloudinary.com/dqaylwrrx/image/upload/v1740473418/Games/afk-journey_pivr1a.png",
            name: "AFK Journey",
            url: 'afk-journey'
          },
        ],
        windowWidth: window.innerWidth,
      };
    },
    
    computed: {
      gameListData() {
        if (this.windowWidth <= "960") {
          return this.gameList.slice(0, 8);
        } else {
          return this.gameList;
        }
      },
    },
    created() {
      window.addEventListener("resize", this.handleResize);
    },
    beforeUnmount() {
      window.addEventListener("resize", this.handleResize);
    },
    methods: {
      handleGameList(i) {
        this.$router.push(`/games/${this.gameList[i].url}`)
      },

      handleGameListExpand(i) {
        this.$router.push(`/games/${this.gameList[i + 8].url}`)
      },

      handleResize() {
        this.windowWidth = window.innerWidth;
      },
    },
  };
</script>

<style>
  .v-row--dense > [class*="v-col-"] {
    padding: 8px !important;
    @media screen and (max-width: 960px) {
      padding: 4px !important;
    }
  }
</style>

<style lang="scss" scoped>
  @use "../style.scss";
</style>
