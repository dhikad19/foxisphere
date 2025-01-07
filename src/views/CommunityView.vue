<template>
  <div class="signup-container">
    <HeaderBar />
    <CommunityComponent />
    <Footer />
  </div>
</template>

<script>
import CommunityComponent from '@/components/Community/index.vue'
import HeaderBar from '@/components/Header/index.vue'
import Footer from '@/components/Footer/index.vue'

export default {
  name: 'SignUpView',
  components: {
    CommunityComponent,
    Footer,
    HeaderBar,
  }
}
</script>
