<template>
  <div class="home-container">
    <HeaderBar />
    <Hero />
    <Timeline />
  </div>
</template>

<script>
import Hero from '@/components/Hero/index.vue'
import HeaderBar from '@/components/Header/index.vue'
import Timeline from '@/components/Timeline/index.vue'
export default {
  name: 'HomeView',
  components: {
    HeaderBar,
    Hero,
    Timeline
  }
}
</script>
