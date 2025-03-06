<template>
  <div class="home-container" style="height: 100%">
    <!-- <HeaderBar />
    <Hero />
    <Timeline />
    <Footer /> -->
    <!-- <Bar /> -->
    <v-layout>
      <v-main>
        <Navigation />
        <div class="content-container pa-3" :class="{'background-body-dark': themeState.isDarkMode}">
          <HeroVariant />
          <div class="d-flex mt-10">
            <div class="content-right-container">
              <!-- <GameGrid /> -->
              <GameList />
              <Blog />
              <Timeline />
            </div>
            <Aside class="aside" />
          </div>
          <Community />
        </div>
      </v-main>
    </v-layout>
    <!-- <BottomNavigation class="bottom-navigation" active="home" /> -->
  </div>
</template>

<style scoped lang="scss">
.aside {
  @media screen and (max-width: 960px) {
    display: none;
  }
}

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
}

.content-container {
  position: relative;
  max-width: 1080px;
  margin: 0 auto;
  width: 100%;
}
</style>

<script>
  import { themeState } from "../theme";
  // import Bar from '@/components/Bar/index.vue'
  import Navigation from '@/components/Navigation/index.vue'
  // import BottomNavigation from '@/components/Navigation/Bottom/index.vue'
  import HeroVariant from '@/components/Hero/Variant/index.vue'
  // import GameGrid from '@/components/Game/Grid/index.vue'
  import GameList from '@/components/Game/List/index.vue'
  import Blog from '@/components/Blog/index.vue'
  import Community from '@/components/Community/index.vue'
  import Aside from '@/components/Aside/index.vue'
// import Hero from '@/components/Hero/index.vue'
// import HeaderBar from '@/components/Header/index.vue'
import Timeline from '@/components/Timeline/index.vue'
export default {
  name: 'HomeView',
  data() {
    return {
      themeState
    }
  },
  components: {
    // Bar,
    Navigation,
    HeroVariant,
    // BottomNavigation,
    // GameGrid,
    GameList,
    Blog,
    Community,
    Aside,
    // HeaderBar,
    // Hero,
    Timeline
  }
}
</script>
