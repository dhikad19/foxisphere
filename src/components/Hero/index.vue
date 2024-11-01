<template>
  <div class="hero-container">
    <div class="hero-wrapper">
      <div class="top-hero">
        <h1 class="hero-title">Sphere of Inspiration</h1>
      </div>
      <carousel :items-to-show="1" autoplay="2000">
        <slide 
          v-for="(slide, i) in slides"
          :key="i"
        >
          <v-card style="width: 100%" flat height="400" color="transparent">
            <v-row dense>
              <v-col cols="8">
                <v-sheet
                  :color="colors[i]"
                  height="400"
                >
                </v-sheet>
              </v-col>
              <v-col cols="4">
                {{ slide }}
              </v-col>
            </v-row>
          </v-card>
        </slide>
    
        <template #addons>
          <pagination />
        </template>
      </carousel>
    </div>
  </div>
</template>

<script>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination } from 'vue3-carousel'
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
  components: {
    Carousel,
    Slide,
    Pagination
  },
  name: 'HeroContainer'
}
</script>

<style lang="scss" scoped>
@import './style.scss'
</style>
