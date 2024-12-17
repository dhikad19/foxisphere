<template>
  <div class="signin-container">
    <SignInComponent />
  </div>
</template>

<script>
import SignInComponent from '@/components/SignIn/index.vue'

export default {
  name: 'SignInView',
  components: {
    SignInComponent
  }
}
</script>
