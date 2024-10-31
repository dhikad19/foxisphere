<template>
  <div class="home-container">
    <HeaderBar />
    <Hero />
  </div>
</template>

<script>
import Hero from '@/components/Hero/index.vue'
import HeaderBar from '@/components/Header/index.vue'
export default {
  name: 'HomeView',
  components: {
    HeaderBar,
    Hero
  }
}
</script>
