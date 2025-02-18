<template>
  <div class="search-container">
    <Navigation />
    <div class="content-container">
      <SearchComponent />
    </div>
    <BottomNavigation active="search" />
  </div>
</template>

<script>
import SearchComponent from '@/components/Search/Page/index.vue'
import Navigation from '@/components/Navigation/index.vue'
import BottomNavigation from '@/components/Navigation/Bottom/index.vue'

export default {
  name: 'PostView',
  components: {
    SearchComponent,
    Navigation,
    BottomNavigation
  }
}
</script>

<style scoped lang="scss">
.search-container {
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
  padding: 12px;
  @media screen and (max-width: 1280px) {
    margin-top: 65px !important;
  }
  @media screen and (max-width: 1080px) {
    margin-top: -92.2vh !important;
  }
}
</style>