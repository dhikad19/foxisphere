<template>
  <div class="home-container">
    <!-- <HeaderBar />
    <Hero />
    <Timeline />
    <Footer /> -->
    <!-- <Bar /> -->
    <Navigation />
    <div class="content-container pa-3">
      <HeroVariant />
      <div class="d-flex mt-10">
        <div class="content-right-container">
          <GameGrid />
          <GameList />
        </div>
        <Aside />
      </div>
    </div>
    <BottomNavigation class="bottom-navigation" active="home" />
  </div>
</template>

<style scoped lang="scss">
.content-right-container {
  width: 100%;
}

.bottom-navigation {
  display: none;
  @media screen and (max-width: 768px) {
    display: unset;
  }
}

.home-container {
  display: flex;
  @media screen and (max-width: 1080px) {
    display: unset;
  }
}

.content-container {
  position: relative;
  margin-top: 70px !important;
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

<script>
  // import Bar from '@/components/Bar/index.vue'
  import Navigation from '@/components/Navigation/index.vue'
  import BottomNavigation from '@/components/Navigation/Bottom/index.vue'
  import HeroVariant from '@/components/Hero/Variant/index.vue'
  import GameGrid from '@/components/Game/Grid/index.vue'
  import GameList from '@/components/Game/List/index.vue'
  import Aside from '@/components/Aside/index.vue'
// import Hero from '@/components/Hero/index.vue'
// import HeaderBar from '@/components/Header/index.vue'
// import Timeline from '@/components/Timeline/index.vue'
// import Footer from '@/components/Footer/index.vue'
export default {
  name: 'HomeView',
  components: {
    // Bar,
    Navigation,
    HeroVariant,
    BottomNavigation,
    GameGrid,
    GameList,
    Aside
    // HeaderBar,
    // Hero,
    // Footer,
    // Timeline
  }
}
</script>
