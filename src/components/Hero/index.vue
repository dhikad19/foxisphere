<template>
  <div class="hero-container">
    <div class="hero-wrapper">
      <v-carousel
        height="400"
        :show-arrows="false"
        cycle
        hide-delimiter-background
      >
        <v-carousel-item
          v-for="(slide, i) in slides"
          :key="i"
        >
          <v-card style="margin-bottom: 100px;" flat height="400" color="transparent">
            <v-row dense>
              <v-col cols="8">
                <v-sheet
                :color="colors[i]"
                height="400"
              >
              </v-sheet>
              </v-col>
              <v-col cols="4"></v-col>
            </v-row>
          </v-card>
          
        </v-carousel-item>
      </v-carousel>
      <h1>test</h1>
      <h1>test</h1>
      <h1>test</h1>
      <h1>test</h1>
      <h1>test</h1>
      <h1>test</h1>
      <h1>test</h1>
      <h1>test</h1>
      <h1>test</h1>
      <h1>test</h1>
      <h1>test</h1>
      <h1>test</h1>
      <h1>test</h1>
      <h1>test</h1>
      <h1>test</h1>
      <h1>test</h1>
      <h1>test</h1>
      <h1>test</h1>
      <h1>test</h1>
      <h1>test</h1>
      <h1>test</h1>
      <h1>test</h1>
      <h1>test</h1>
      <h1>test</h1>
      <h1>test</h1>
      <h1>test</h1>
      <h1>test</h1>
      <h1>test</h1>
      <h1>test</h1>
      <h1>test</h1>
      <h1>test</h1>
      <h1>test</h1>
      <h1>test</h1>
      <h1>test</h1>
      <h1>test</h1>
      <h1>test</h1>
      <h1>test</h1>
      <h1>test</h1>
      <h1>test</h1>
      <h1>test</h1>
      <h1>test</h1>
      <h1>test</h1>
      <h1>test</h1>
      <h1>test</h1>
      <h1>test</h1>
      <h1>test</h1>
      <h1>test</h1>
      <h1>test</h1>
      <h1>test</h1>
      <h1>test</h1>
      <h1>test</h1>
      <h1>test</h1>
      <h1>test</h1>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      colors: [
          'indigo',
          'warning',
          'pink darken-2',
          'red lighten-1',
          'deep-purple accent-4',
        ],
        slides: [
          'First',
          'Second',
          'Third',
          'Fourth',
          'Fifth',
        ],
    }
  },
  name: 'HeroContainer'
}
</script>

<style lang="scss" scoped>
@import './style.scss'
</style>
