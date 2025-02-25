<template>
  <div class="game-grid-container">
    <h1 class="game-title">Game Populer</h1>
    <v-row dense>
      <v-col cols="12" md="3">
        <div class="game-card">
          <v-card class="mx-auto" color="#f0f0f0" flat>
            <v-img
              class="game-image align-end"
              height="120"
              src="https://res.cloudinary.com/dqaylwrrx/image/upload/v1739259649/Games/star-rail_esjixp.png"
              contain
            >
            </v-img>
            
          </v-card>
          <div class="image-title">
            <p>
              Honkai: Star Rail
            </p>
          </div>
        </div>
      </v-col>
      <v-col cols="12" md="3">
        <div class="game-card">
          <v-card class="mx-auto" color="#f0f0f0" flat>
            <v-img
              class="game-image align-end"
              height="120"
              src="https://res.cloudinary.com/dqaylwrrx/image/upload/v1739259775/Games/zzz_rceyrv.png"
              contain
            >
              
            </v-img>
            
          </v-card>
          <div class="image-title">
            <p>
              Zenless Zone Zero
            </p>
          </div>
        </div>
      </v-col>
      <v-col cols="12" md="3">
        <div class="game-card">
          <v-card class="mx-auto" color="#f0f0f0" flat>
            <v-img
              class="game-image align-end"
              height="120"
              src="https://res.cloudinary.com/dqaylwrrx/image/upload/v1739259648/Games/genhin-impact_tvqxbi.png"
              contain
            >
              
            </v-img>
            
          </v-card>
          <div class="image-title">
            <p>
              Genshin Impact
            </p>
          </div>
        </div>
      </v-col>
      <v-col cols="12" md="3">
        <div class="game-card">
          <v-card class="mx-auto" color="#f0f0f0" flat>
            <v-img
              class="game-image align-end"
              height="120"
              src="https://res.cloudinary.com/dqaylwrrx/image/upload/v1740466847/Games/wuthering-waves_gpltcq.png"
              contain
            >
              
            </v-img>
            
          </v-card>
          <div class="image-title">
            <p>
              Wuthering Waves
            </p>
          </div>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'GameGridComponents'
}
</script>

<style lang="scss" scoped>
@use '../style.scss';
</style>