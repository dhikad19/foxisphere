<template>
  <div class="search-containers">
    <Navigation />
    <div class="content-container">
      <SearchComponent />
    </div>
  </div>
</template>

<script>
import SearchComponent from '@/components/Search/Page/index.vue'
import Navigation from '@/components/Navigation/index.vue'

export default {
  name: 'PostView',
  components: {
    SearchComponent,
    Navigation
  }
}
</script>

<style scoped lang="scss">
.search-containers {
  display: flex;
  @media screen and (max-width: 1080px) {
    display: unset;
  }
}

.content-container {
  position: relative;
  margin-top: 50px !important;
  max-width: 1080px;
  margin: 0 auto;
  width: 100%;
  padding: 12px;
  @media screen and (max-width: 1280px) {
    margin-top: 50px !important;
  }
  @media screen and (max-width: 1080px) {
    margin-top: -93.5vh !important;
    padding: 0px;
  }
}
</style>