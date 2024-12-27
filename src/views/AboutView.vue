<template>
  <div class="signup-container">
    <HeaderBar />
    <AboutComponent />
    <Footer />
  </div>
</template>

<script>
import AboutComponent from '@/components/About/index.vue'
import HeaderBar from '@/components/Header/index.vue'
import Footer from '@/components/Footer/index.vue'

export default {
  name: 'SignUpView',
  components: {
    AboutComponent,
    Footer,
    HeaderBar,
  }
}
</script>
