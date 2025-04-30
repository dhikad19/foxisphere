<template>
  <div class="hero-variant-container">
    <div class="hero-variant-wrapper">
      <v-row dense>
        <v-col cols="12" class="desktop-carousel">
          <Carousel :itemsToShow="1.2" :pauseAutoplayOnHover="true" :wrapAround="true" :autoplay="8000">
            <Slide v-for="(slide, i) in banner" :key="i">
              <img :src="slide.image" />
            </Slide>
            <template #addons>
              <Navigation />
              <Pagination />
            </template>
          </Carousel>
        </v-col>
        <v-col cols="12" class="mobile-carousel">
          <Carousel :itemsToShow="1" :pauseAutoplayOnHover="true" :wrapAround="true" :autoplay="8000">
            <Slide v-for="(slide, i) in banner" :key="i">
              <img :src="slide.image" />
            </Slide>
            <template #addons>
              <Navigation />
              <Pagination />
            </template>
          </Carousel>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use './style.scss';
</style>
<style>
:root {
  --carousel-transition: 300ms;
  --carousel-opacity-inactive: 0.7;
  --carousel-opacity-active: 1;
  --carousel-opacity-near: 0.4;
}

.carousel__pagination-button {
  height: 8px;
  width: 8px;
  border-radius: 5px;
  background-color: white;
}
.carousel__pagination-button--active {
  background-color: #ff7800;
}

.carousel__next,
.carousel__prev {
  background: rgba(0, 0, 0, 0.534);
  border-radius: 50%;
  width: 30px;
  height: 30px;
  color: white;
  
  margin: 10px;
  margin-top: 0px;
}

.carousel__viewport {
  perspective: 2000px;
}

.carousel__track {
  transform-style: preserve-3d;
}

.carousel__slide--sliding {
  transition: opacity var(--carousel-transition),
    transform var(--carousel-transition);
}

.carousel.is-dragging .carousel__slide {
  transition: opacity var(--carousel-transition),
    transform var(--carousel-transition);
}

.carousel__slide {
  opacity: var(--carousel-opacity-inactive);
  transform: translateX(5px) rotateY(-12deg) scale(0.9);
}

.carousel__slide--active {
  opacity: var(--carousel-opacity-active);
  transform: rotateY(0) scale(1);
  height: 100%;
  width: 100%;
}

.carousel__slide--next {
  opacity: var(--carousel-opacity-near);
  transform: rotateY(10deg) scale(1);
}

.carousel__slide--prev {
  opacity: var(--carousel-opacity-near);
  transform: rotateY(-10deg) scale(1);
}

.carousel__slide--next ~ .carousel__slide {
  opacity: var(--carousel-opacity-inactive);
  transform: translateX(-10px) rotateY(12deg) scale(0.9);
}
</style>

<script>
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Navigation, Pagination } from 'vue3-carousel';
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

  components: {
    Carousel,
    Slide,
    Navigation,
    Pagination
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
