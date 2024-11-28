<template>
  <div class="home-container">
    <HeaderBar />
    <Hero />
    <Timeline />
    <Footer />
  </div>
</template>

<script>
import Hero from '@/components/Hero/index.vue'
import HeaderBar from '@/components/Header/index.vue'
import Timeline from '@/components/Timeline/index.vue'
import Footer from '@/components/Footer/index.vue'
export default {
  name: 'HomeView',
  components: {
    HeaderBar,
    Hero,
    Footer,
    Timeline
  }
}
</script>
