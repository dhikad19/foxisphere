<template>
  <div class="footer-container">
    <v-row dense>
      <v-col cols="12">
        <v-img max-width="100" class="mb-3" src="assets/header-new.png"></v-img>
        <p class="slogan mb-1">A Place for Gamers to Connect, Share, and Grow.</p>
        <p><b style="color: #ff7800">© Foxon</b>, {{new Date().getFullYear()}}</p>
      </v-col>
      <v-col cols="12" class="mt-2">
        <div class="d-flex">
          <div class="d-flex align-center justify-space-between social-btn">
            <v-icon class="mr-2">mdi-twitter</v-icon>
          </div>
          <div class="d-flex align-center justify-space-between social-btn">
            <v-icon class="mr-2">mdi-instagram</v-icon>
          </div>
          <div class="d-flex align-center justify-space-between social-btn">
            <v-icon>mdi-discord</v-icon>
          </div>
        </div>
        <div class="d-flex mt-2">
          <p class="footer-link">
            Tentang
          </p>
          <p class="footer-link">
            Blog
          </p>
          <p class="footer-link">
            Kontak
          </p>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'FooterComponent'
}
</script>

<style lang="scss" scoped>
@use '../style.scss';
</style>