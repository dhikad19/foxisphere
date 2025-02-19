<template>
  <div class="profile-container">
    <Navigation />
    <div class="content-container">
      <ProfileComponent />
    </div>
    <BottomNavigation class="bottom-navigation" active="profile" />
  </div>
</template>

<script>
import ProfileComponent from '@/components/Profile/index.vue'
import Navigation from '@/components/Navigation/index.vue'
import BottomNavigation from '@/components/Navigation/Bottom/index.vue'

export default {
  name: 'PostView',
  components: {
    ProfileComponent,
    Navigation,
    BottomNavigation
  }
}
</script>

<style scoped lang="scss">
.bottom-navigation {
  display: none;
  @media screen and (max-width: 768px) {
    display: unset;
  }
}

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
    margin-top: -93.8vh !important;
  }
}
</style>