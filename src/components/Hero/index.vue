<template>
  <div class="hero-container">
    <div class="hero-wrapper">
      <div class="top-hero">
        <h1 class="hero-title">Blog Sphere</h1>
      </div>
      <v-carousel
        height="400"
        show-arrows="hover"
        cycle
        hide-delimiter-background>
        <v-carousel-item v-for="(slide, i) in slides" :key="i">
          <v-sheet :color="colors[i]" height="100%">
            <div class="d-flex fill-height justify-center align-center">
              <div class="text-h2">{{ slide }} Slide</div>
            </div>
          </v-sheet>
        </v-carousel-item>
      </v-carousel>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        colors: [
          "indigo",
          "warning",
          "pink darken-2",
          "red lighten-1",
          "deep-purple accent-4",
        ],
        slides: ["First", "Second", "Third", "Fourth", "Fifth"],
      };
    },
    name: "HeroContainer",
  };
</script>

<style lang="scss" scoped>
  @import "./style.scss";
</style>
