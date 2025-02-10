<template>
  <div class="chat-container">
    <Navigation />
    <NotificationComponent />
  </div>
</template>

<script>
import NotificationComponent from '@/components/Notification/index.vue'
import Navigation from '@/components/Navigation/index.vue'

export default {
  name: 'PostView',
  components: {
    NotificationComponent,
    Navigation,
  }
}
</script>
