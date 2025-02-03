<template>
  <div class="hero-variant-container">
    <div class="hero-variant-wrapper">
      <v-row dense>
        <v-col cols="12" md="8" style="height: 100%" class="left-class">
          <v-carousel
            height="100%"
            interval="7000"
            :show-arrows="false"
            :cycle="cycleMode"
            v-model="model"
            hide-delimiters
            >
            <v-carousel-item v-for="(slide, i) in banner" :key="i">
              <v-card variant="flat">
                <v-img :src="slide.image" height="auto"></v-img>
              </v-card>
            </v-carousel-item>
          </v-carousel>
          <div class="carousel-controller">
            <div style="gap: 6px;" class="carousel-container d-flex align-center justify-center">
              <div class="carousel-wrapper"  v-for="(item, i) in banner" :key="i">
                
                <div @click="model = i" v-if="model == i" class="progress-container">
                  <div class="progress-bar" :style="{ width: progressWidth + '%' }"></div>
                </div>
                <div v-else @click="model = i" class="dot">
                </div>

              </div>
            </div>
          </div>
        </v-col>
        <v-col cols="12" md="4" style="height: 100%" class="right-class">
          <v-row dense>
            <v-col cols="6" md="12">
              <div class="top-games">
                <div class="title-section d-flex align-center">
                  <p class="mr-2">Top Games</p>
                  <v-icon color="white">
                    mdi-crown-outline
                  </v-icon>
                </div>
              </div>
            </v-col>
            <v-col cols="6" md="12">
              <div class="top-guild">
                <div class="title-section d-flex align-center">
                  <p class="mr-2">Top Guild</p>
                  <v-icon color="white">
                    mdi-crown-outline
                  </v-icon>
                </div>
              </div>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use './style.scss';
</style>

<script>
export default {
  name: 'HeroVariantComponent',
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
      banner: [
        {
          image: 'https://res.cloudinary.com/dqaylwrrx/image/upload/v1738557564/Banners/Honkai_Star_Rails_tv2ykm.png',
          id: '1',
          name: 'Honkai Star Rails',
          value: 'honkai-star-rails'
        },
        {
          image: 'https://res.cloudinary.com/dqaylwrrx/image/upload/v1738557440/Banners/Genshin_Impact_j3wssz.png',
          id: '2',
          name: 'Genshin Impact',
          value: 'genshin-impact'
        },
        {
          image: 'https://res.cloudinary.com/dqaylwrrx/image/upload/v1738557440/Banners/Zenless_Zone_Zero_ajvdny.png',
          id: '3',
          name: 'Zenless Zone Zero',
          value: 'zenless-zone-zero'
        },
      ],
    }
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
