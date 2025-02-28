<template>
  <div class="game-container">
    <Navigation />
    <div class="content-container pa-3">
      
      <div class="d-flex mt-10">

      </div>
    </div>
  </div>
</template>

<script>
import Navigation from '@/components/Navigation/index.vue'


export default {
  name: 'GameView',
  components: {
    Navigation,
  }
}
</script>

<style scoped lang="scss">
.game-container {
  display: flex;
  @media screen and (max-width: 1080px) {
    display: unset;
  }
}

.content-container {
  position: relative;
  margin-top: 65px !important;
  max-width: 1080px;
  margin: 0 auto;
  width: 100%;
  @media screen and (max-width: 1280px) {
    margin-top: 65px !important;
  }
  @media screen and (max-width: 1080px) {
    margin-top: -92vh !important;
  }
  @media screen and (max-width: 768px) {
    margin-top: -93.5vh !important;
  }
}
</style>