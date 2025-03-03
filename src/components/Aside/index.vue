<template>
  <div class="aside-container ml-8 mr-1">
    <div class="aside-wrapper">
      <div class="aside-content">
        <GameRank class="mb-5" />
        <v-divider></v-divider>
        <Community class="mt-5 mb-5" />
        <v-divider></v-divider>
        <Footer class="mt-5" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use './style.scss';
</style>

<script>
import GameRank from './Game/index.vue'
import Community from './Community/index.vue'
import Footer from './Footer/index.vue'
export default {
  name: 'AsideComponent',
  components: {
    GameRank,
    Community,
    Footer
  }
}
</script>