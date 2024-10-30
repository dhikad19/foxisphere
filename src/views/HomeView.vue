<template>
  <div class="home-container">
    <HeaderBar style="max-width: 250px" />
    <!-- <SignInComponent /> -->
     <h1>Hello home</h1>
  </div>
</template>

<script>
// import SignInComponent from '@/components/SignIn/index.vue'
import HeaderBar from '@/components/Header/index.vue'
export default {
  name: 'HomeView',
  components: {
    HeaderBar
  }
}
</script>
