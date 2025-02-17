<template>
  <div class="profile-container">
    <Navigation />
    <div class="content-container">
      <ProfileComponent />
    </div>
  </div>
</template>

<script>
import ProfileComponent from '@/components/Profile/index.vue'
import Navigation from '@/components/Navigation/index.vue'

export default {
  name: 'PostView',
  components: {
    ProfileComponent,
    Navigation,
  }
}
</script>

<style scoped lang="scss">
.profile-container {
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