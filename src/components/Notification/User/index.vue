<template>
  <div 
    class="user-box"
    :class="{'background-dark': themeState.isDarkMode}" 
    :color="themeState.isDarkMode ? '#141414' : '#ffffff'" 
    style="border-radius: 6px"
  >
    <div class="user-container pa-3">
      <div
        class="user-list__user mb-3"
        @click="handleUser()">
        <v-avatar size="35" class="mr-2">
          <v-img
            src="https://randomuser.me/api/portraits/men/82.jpg">
          </v-img>
        </v-avatar>
        <div>
          <p class="username" :class="{'title-dark': themeState.isDarkMode}">@dikad19</p>
          <p class="email" :class="{'title-dark': themeState.isDarkMode}">dwiandika01@gmail.com</p>
        </div>
      </div>

      <div :class="{'title-dark': themeState.isDarkMode}" class="user-list">
        <v-icon size="23" :color="themeState.isDarkMode ? '#e4e1da' : '#4f4f4f'">
          mdi-trophy-outline
        </v-icon>
        <p>Pencapaian</p>
      </div>
      <div class="user-list__dark-mode">
        <v-icon size="23" :color="themeState.isDarkMode ? '#e4e1da' : '#4f4f4f'">
          mdi-weather-night
        </v-icon>
        <div
          :class="{'title-dark': themeState.isDarkMode}"
          style="width: 100%"
          class="d-flex align-center justify-space-between">
          <p>Mode Gelap</p>
          <v-switch
            @click="toggleTheme()"
            v-model="darkMode"
            color="#ff7800"
            hide-details
            inset>
          </v-switch>
        </div>
      </div>
      <div :class="{'title-dark': themeState.isDarkMode}" class="user-list">
        <v-icon size="23" :color="themeState.isDarkMode ? '#e4e1da' : '#4f4f4f'">
          mdi-cog-outline
        </v-icon>
        <p>Pengaturan</p>
      </div>
      <div :class="{'title-dark': themeState.isDarkMode}" class="user-list">
        <v-icon :color="themeState.isDarkMode ? '#e4e1da' : '#4f4f4f'" size="23">
          mdi-cursor-default-click-outline
        </v-icon>
        <p>Beriklan di <b style="color: #ff7800"> Foxon</b></p>
      </div>
      <div 
        :class="{
          'divider': themeState.isDarkMode,
          'divider-dark': !themeState.isDarkMode
        }" 
        class="mt-3 mb-3">
      </div>
      <div :class="{'title-dark': themeState.isDarkMode}" class="user-list">
        <v-icon size="23" :color="themeState.isDarkMode ? '#e4e1da' : '#4f4f4f'"> mdi-headset </v-icon>
        <p>Dukungan</p>
      </div>
      <div :class="{'title-dark': themeState.isDarkMode}" class="user-list">
        <v-icon size="23" :color="themeState.isDarkMode ? '#e4e1da' : '#4f4f4f'">
          mdi-help-circle-outline
        </v-icon>
        <p>Pusat Bantuan</p>
      </div>
      <div 
        :class="{
          'divider': themeState.isDarkMode,
          'divider-dark': !themeState.isDarkMode
        }" 
        class="mt-3 mb-3">
      </div>
      <div :class="{'title-dark': themeState.isDarkMode}" class="user-list">
        <v-icon size="23" :color="themeState.isDarkMode ? '#e4e1da' : '#4f4f4f'"> mdi-logout </v-icon>
        <p>Keluar</p>
      </div>
    </div>
  </div>
</template>

<script>
import { themeState } from "../../../theme";
export default {
  name: 'NotificationUser',
  data() {
    return {
      themeState,
      darkMode: false
    }
  },

  methods: {
    toggleTheme() {
      this.themeState.toggleTheme();
    },
    handleUser() {
      this.$router.push("/profile");
    },
  },

  created() {
    if (this.themeState.isDarkMode) {
      this.darkMode = true
    } else {
      this.darkMode = false
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../style.scss'
</style>