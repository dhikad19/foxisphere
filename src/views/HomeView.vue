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
    </div>
  </div>
</template>

<style scoped lang="scss">
.home-container {
  display: flex;
  @media screen and (max-width: 1080px) {
    display: unset;
  }
}

.content-container {
  position: relative;
  margin-top: 75px !important;
  max-width: 1080px;
  margin: 0 auto;
  width: 100%;
  @media screen and (max-width: 1280px) {
    margin-top: 65px !important;
  }
  @media screen and (max-width: 1080px) {
    margin-top: -92.2vh !important;
  }
}
</style>

<script>
  // import Bar from '@/components/Bar/index.vue'
  import Navigation from '@/components/Navigation/index.vue'
  import HeroVariant from '@/components/Hero/Variant/index.vue'
// import Hero from '@/components/Hero/index.vue'
// import HeaderBar from '@/components/Header/index.vue'
// import Timeline from '@/components/Timeline/index.vue'
// import Footer from '@/components/Footer/index.vue'
export default {
  name: 'HomeView',
  components: {
    // Bar,
    Navigation,
    HeroVariant
    // HeaderBar,
    // Hero,
    // Footer,
    // Timeline
  }
}
</script>
