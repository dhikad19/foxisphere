<template>
  <div class="d-flex">
    <!-- <HeaderBar />
    <Hero />
    <Timeline />
    <Footer /> -->
    <!-- <Bar /> -->
    <Navigation />
    <div class="content-container pa-3" style="margin-top: 65px">
      <HeroVariant />
    </div>
  </div>
</template>

<style scoped lang="scss">
.content-container {
  position: relative;
  max-width: 1080px;
  margin: 0 auto;
  width: 100%;
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
