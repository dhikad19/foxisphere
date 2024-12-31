<template>
  <div class="hero-container">
    <div class="hero-wrapper">
      <v-row dense class="top-hero">
        <v-col cols="12" sm="12" md="10">
          <h1 class="hero-title">Blog</h1>
        </v-col>
        <v-col cols="12" sm="12" md="2">
          <SearchComponent class="search" />
        </v-col>
      </v-row>
      <v-carousel
        height="100%"
        interval="7000"
        :show-arrows="false"
        :cycle="cycleMode"
        v-model="model"
        hide-delimiters>
        <v-carousel-item v-for="(slide, i) in slides" :key="i">
          <v-row dense>
            <v-col cols="12" md="8">
              <v-sheet :color="colors[i]" height="400">
                <div class="d-flex fill-height justify-center align-center">
                  <div class="text-h2">{{ slide }} Slide</div>
                </div>
              </v-sheet>
            </v-col>
            <v-col cols="12" md="4">
              <h2 style="color: white">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                Necessitatibus vel recusandae quisquam voluptates hic soluta 
                possimus quia excepturi magni! Soluta, nihil vero.
              </h2>
            </v-col>
          </v-row>
        </v-carousel-item>
      </v-carousel>
      <div class="carousel-controller mt-10">
        <div style="gap: 6px;" class="carousel-container d-flex align-center justify-center">
          <div class="carousel-wrapper"  v-for="(item, i) in colors" :key="i">
            
            <div @click="model = i" v-if="model == i" class="progress-container">
              <div class="progress-bar" :style="{ width: progressWidth + '%' }"></div>
            </div>
            <div v-else @click="model = i" class="dot">
              
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import SearchComponent from '../Search/index.vue'
  export default {
    data() {
      return {
        model: 0,
        modelBackup: 0,
        progressWidth: 0,
        cycleMode: true,
        progressInterval: null,
        isTabActive: true,
        items: [
          {
            title: '',
            image: ''
          },
          {
            title: '',
            image: ''
          },
          {
            title: '',
            image: ''
          },
          {
            title: '',
            image: ''
          },
          {
            title: '',
            image: ''
          },
        ],
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
    name: "HeroComponent",
    components: {
      SearchComponent
    },
    mounted() {
      document.addEventListener('visibilitychange', this.handleVisibilityChange);
      this.startProgress();
    },
    beforeUnmount() {
      document.removeEventListener('visibilitychange', this.handleVisibilityChange);
    },
    methods: {
      handleVisibilityChange() {
        this.isTabActive = !document.hidden;
      },
      startProgress() {
        this.resetProgress(); 
        const totalTime = 6650; 
        const interval = 100; 
        const increment = (interval / totalTime) * 100; // Calculate increment

        this.progressInterval = setInterval(() => {
          this.progressWidth += increment;
          if (this.progressWidth >= 100) {
            this.progressWidth = 100;
            clearInterval(this.progressInterval); // Stop the interval when complete
          }
        }, interval);
      },
      resetProgress() {
        clearInterval(this.progressInterval); // Clear any existing intervals
        this.progressWidth = 0 // Reset the width
      }
    },
    watch: {
      isTabActive(val) {
        this.progressWidth = 0
        this.model = this.modelBackup
        this.startProgress()
        if (!val) {
          this.cycleMode = false
        } else {
          this.cycleMode = true
        }
      },
      model() {
        this.progressWidth = 0;
        this.modelBackup = this.model
        this.resetProgress()
        this.startProgress()
      }
    },
  }
</script>

<style lang="scss" scoped>
  @import "./style.scss";
</style>
