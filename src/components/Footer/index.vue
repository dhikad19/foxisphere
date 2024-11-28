<template>
  <div class="footer-component">
    <div class="footer-wrapper">
      <div class="d-flex align-center justify-center" style="gap: 10px">
        <v-icon color="#ffffffb0">mdi-instagram</v-icon>
        <v-icon color="#ffffffb0">mdi-instagram</v-icon>
        <v-icon color="#ffffffb0">mdi-instagram</v-icon>
      </div>
      <div style="width: 100%; background-color: #ffffffb0; height: 1px" class="mb-6 mt-6"></div>
      <p style="text-align: center; color: #ffffffb0; font-size: 14px">
        <b>FoxiSphere</b> 
        © {{currentYear}}. All Right Reserved</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentYear: new Date().getFullYear()
    }
  },
  name: 'footerComponent'
}
</script>

<style lang="scss" scoped>
@import './style.scss'
</style>