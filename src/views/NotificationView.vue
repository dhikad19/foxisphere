<template>
  <div class="chat-container">
    <Navigation />
    <ChatComponent />
  </div>
</template>

<script>
import ChatComponent from '@/components/Chat/Mobile/index.vue'
import Navigation from '@/components/Navigation/index.vue'

export default {
  name: 'PostView',
  components: {
    ChatComponent,
    Navigation,
  }
}
</script>
