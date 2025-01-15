<template>
  <div>
    <v-app>
      <v-app-bar :elevation="2">
        <template v-slot:prepend>
          <v-app-bar-nav-icon></v-app-bar-nav-icon>
        </template>
      
        <v-app-bar-title>Application Bar</v-app-bar-title>
      </v-app-bar>
    </v-app>
    
  </div>
</template>

<style lang="scss" scoped>
@use './style.scss';
</style>

<script>
export default {
  name: 'BarComponents'
}
</script>