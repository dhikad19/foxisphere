<template>
  <v-layout>
    <v-app-bar
      :color="appColor"
      style="backdrop-filter: blur(15px);"
      elevation="0"
    >
      <div class="app-bar__container">
        <v-img 
          src="assets/header.png"
          style="margin-left: -8px"
          min-width="140" 
          max-width="150" 
          :class="isActive ? 'img-active' : 'img-nonactive'"
          max-height="32">
        </v-img>
        <v-spacer></v-spacer>
        <template v-if="$vuetify.display.mdAndUp">
          <v-btn elevation="0" class="btn-content">Timeline</v-btn>
          <v-btn elevation="0" class="btn-content">Write</v-btn>
          <v-btn elevation="0" class="btn-content">Categories</v-btn>
          <v-btn elevation="0" class="btn-content">About</v-btn>
        </template>
        <v-spacer></v-spacer>
        <v-btn @click="signIn()" style="border: 1px solid #fff3" class="btn-content">Sign in</v-btn>
        <template v-if="$vuetify.display.mdAndUp">
          <v-btn @click="signUp()" variant="flat" color="#ff0000" class="btn-content__sign-up ml-4">Sign Up</v-btn>
        </template>
        <template v-if="!$vuetify.display.mdAndUp">
          <!-- <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon> -->
          <div class="ml-4" style="border: 1px solid #fff3; border-radius: 4px; padding: 5px">
            <div class="side-bar" @click="onToggle()">
              <div class="menu-btn" :class="isActive ? 'active' : ''">
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
              </div>
            </div>
          </div>
        </template>
      </div>
    </v-app-bar>
    <v-navigation-drawer
      v-model="drawer"
      temporary
    >
    <!-- :location="$vuetify.display.mobile ? 'top' : undefined" -->
      <v-list
        :items="items"
      ></v-list>
    </v-navigation-drawer>
  </v-layout>
</template>
<script>
  export default {
    name: 'HeaderComponent',
    data() {
      return {
        drawer: false,
        group: null,
        appColor: 'rgb(255 255 255 / 0%)',
        isActive: false,
        items: [
          {
            title: 'Foo',
            value: 'foo',
          },
          {
            title: 'Bar',
            value: 'bar',
          },
          {
            title: 'Fizz',
            value: 'fizz',
          },
          {
            title: 'Buzz',
            value: 'buzz',
          },
        ],
      }
    },

    watch: {
      group () {
        this.drawer = false
      },
    },
    methods: {
      signUp() {
        this.$router.push('/signup')
      },
      signIn() {
        this.$router.push('/signin')
      },
      onToggle() {
      this.isActive = !this.isActive
      this.drawer = !this.drawer
      if(!this.isActive) {
        this.appColor = 'rgb(255 255 255 / 0%)'
      } else {
        this.appColor = 'white'
      }
    },
    }
  }
</script>

<style lang="scss" scoped>
@import './style.scss'
</style>