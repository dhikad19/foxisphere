<template>
  <div class="signup-container">
    <HeaderBar />
    <PostComponent />
    <Footer />
  </div>
</template>

<script>
import PostComponent from '@/components/Post/index.vue'
import HeaderBar from '@/components/Header/index.vue'
import Footer from '@/components/Footer/index.vue'

export default {
  name: 'PostView',
  components: {
    PostComponent,
    Footer,
    HeaderBar,
  }
}
</script>
