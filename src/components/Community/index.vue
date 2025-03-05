<template>
  <div class="community-container">
    <h1 
      :class="{'title-dark': themeState.isDarkMode}" 
      class="community-title"
    >
      Komunitas
    </h1>
    <v-row dense>
      <v-col md="5" cols="12">
        <div 
          :class="{'background-dark': themeState.isDarkMode}" 
          class="community-card"
        >
          <p class="support-text">
            Gabung ke komunitas kami atau channel Discord di bawah ini untuk mendapatkan info terbaru.
          </p>
          <div class="d-flex align-center mt-4" style="gap: 10px">
            <div :class="{'background-secondary': themeState.isDarkMode}"  class="community">
              <p>Komunitas</p>
            </div>
            <div class="discord">
              <v-icon>
                mdi-discord
              </v-icon>
            </div>
          </div>
        </div>
      </v-col>
      <v-col md="7" cols="12">
        <div :class="{'background-dark title-dark': themeState.isDarkMode}"  class="support-card">
          <p class="support-text">
            Jika kalian suka dengan apa yang kami kerjakan, kalian bisa support lewat
            <span class="ko-fi">Ko-Fi</span> atau <span class="trakteer">Trakteer</span> di bawah.
          </p>
          <div class="d-flex align-center mt-4" style="gap: 10px">
            <div class="community-card__ko-fi">
              <v-row dense>
                <v-col cols="2">
                  <v-img 
                    min-width="32" 
                    max-width="32" 
                    height="32" 
                    src="https://res.cloudinary.com/dqaylwrrx/image/upload/v1740638595/Support/Ko-fi_COIN_xdh7a0.gif"></v-img>
                </v-col>
                <v-col cols="10">
                  <div class="mt-1">
                    <b class="mb-0">
                      Ko-fi
                    </b>
                  </div>
                </v-col>
              </v-row>
            </div>
            <div class="community-card__trakteer">
              <v-row dense>
                <v-col cols="2">
                  <v-img 
                    min-width="32" 
                    max-width="32" 
                    style="filter: brightness(0) invert(1);"
                    height="32" 
                    src="https://res.cloudinary.com/dqaylwrrx/image/upload/v1740640011/Support/trakteer-logo_bwxs8t.png">
                  </v-img>
                </v-col>
                <v-col cols="10">
                  <div class="mt-1">
                    <b class="mb-0">
                      Trakteer
                    </b>
                  </div>
                </v-col>
              </v-row>
            </div>
          </div>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { themeState } from "../../theme";
export default {
  name: 'CommunityComponents',
  data() {
    return {
      themeState
    }
  }
}
</script>

<style lang="scss" scoped>
@use './style.scss'
</style>