<template>
  <div class="notification-container d-flex">
    <Navigation />
    <div class="content-container pa-3">
      <NotificationComponent />
    </div>
  </div>
</template>

<script>
import NotificationComponent from '@/components/Notification/Full/index.vue'
import Navigation from '@/components/Navigation/index.vue'

export default {
  name: 'PostView',
  components: {
    NotificationComponent,
    Navigation,
  }
}
</script>

<style scoped lang="scss">
.content-container {
  position: relative;
  margin-top: 75px !important;
  max-width: 1080px;
  margin: 0 auto;
  width: 100%;
  @media screen and (max-width: 1280px) {
    margin-top: 65px !important;
  }
}
</style>