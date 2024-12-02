<template>
  <v-layout>
    <v-app-bar
      :color="appColor"
      style="backdrop-filter: blur(15px)"
      scroll-behavior="hide"
      :class="isActive ? 'app-bar__active' : ''"
      elevation="0">
      <div class="app-bar__container">
        <v-img
          src="assets/header.png"
          style="margin-left: -8px"
          class="app-bar__logo"
          :class="isActive || scrollPosition >= heightBarAnchor ? 'img-active' : 'img-nonactive'">
        </v-img>
        <v-spacer></v-spacer>
        <template v-if="$vuetify.display.mdAndUp">
          <v-btn elevation="0" :class="scrollPosition >= heightBarAnchor ? 'btn-content__black' : 'btn-content'">Timeline</v-btn>
          <v-btn elevation="0" :class="scrollPosition >= heightBarAnchor ? 'btn-content__black' : 'btn-content'">Write</v-btn>
          <v-menu
            open-on-hover
            position-x="center" 
            position-y="top"
          >
            <template v-slot:activator="{ props }">
              <v-btn 
                elevation="0"
                v-bind="props" 
                :class="scrollPosition >= heightBarAnchor ? 'btn-content__black' : 'btn-content'"
              >
                Categories
              </v-btn>
            </template>

            <v-card width="600">
              <v-list>
                <v-list-item
                  v-for="(item, index) in items"
                  :key="index"
                >
                  <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-card>
          </v-menu>
          <v-btn elevation="0" :class="scrollPosition >= heightBarAnchor ? 'btn-content__black' : 'btn-content'">About</v-btn>
        </template>
        <v-spacer></v-spacer>
        <v-btn
          @click="signIn()"
          style="border: 1px solid #fff3"
          :class="isActive || scrollPosition >= heightBarAnchor ? 'btn-content__active' : 'btn-content'"
          >Sign in</v-btn
        >
        <template v-if="$vuetify.display.mdAndUp">
          <v-btn
            @click="signUp()"
            variant="flat"
            color="#ff0000"
            class="btn-content__sign-up ml-4"
            >Sign Up</v-btn
          >
        </template>
        <template v-if="!$vuetify.display.mdAndUp">
          <!-- <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon> -->
          <div class="ml-4 button-navigation">
            <div class="side-bar" @click="onToggle()">
              <v-icon v-if="!isActive" :color="scrollPosition >= heightBarAnchor ? 'black' : 'white'">mdi-menu</v-icon>
              <v-icon v-else color="black">mdi-close</v-icon>
            </div>
          </div>
        </template>
      </div>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" temporary>
      <!-- :location="$vuetify.display.mobile ? 'top' : undefined" -->
      <v-list :items="items"></v-list>
    </v-navigation-drawer>
  </v-layout>
</template>
<script>
  import { ref, onMounted, onBeforeUnmount } from 'vue';
  export default {
    setup() {
    const scrollPosition = ref(0);

    // Scroll handler for the window scroll
    const handleScroll = () => {
      scrollPosition.value = window.scrollY;
    };

    onMounted(() => {
      window.addEventListener('scroll', handleScroll);
    });

    onBeforeUnmount(() => {
      window.removeEventListener('scroll', handleScroll);
    });

    return {
      scrollPosition
    };
  },
    name: "HeaderComponent",
    data() {
      return {
        drawer: false,
        group: null,
        heightBarAnchor: '745',
        appColor: "rgb(255 255 255 / 0%)",
        isActive: false,
        items: [
          {
            title: "Foo",
            value: "foo",
          },
          {
            title: "Bar",
            value: "bar",
          },
          {
            title: "Fizz",
            value: "fizz",
          },
          {
            title: "Buzz",
            value: "buzz",
          },
        ],
      };
    },

    watch: {
      scrollPosition(val) {
        if (val >= this.heightBarAnchor) {
          if(this.drawer) {
            this.appColor = 'white'
          } else {
            this.appColor = 'rgba(255, 255, 255, .5)'
          }
          
        } else {
          if(this.drawer) {
            this.appColor = 'white'
          } else {
            this.appColor = 'rgb(255 255 255 / 0%)'
          }
          
        }
      },
      group() {
        this.drawer = false;
      },
      drawer(val) {
        if (val) {
          this.isActive = true;
          this.appColor = "white";
        } else {
          this.isActive = false;
          this.appColor = "rgb(255 255 255 / 0%)";
        }
      },
    },
    methods: {
      signUp() {
        this.$router.push("/signup");
      },
      signIn() {
        this.$router.push("/signin");
      },
      onToggle() {
        this.isActive = !this.isActive;
        this.drawer = !this.drawer;
        if (!this.isActive) {
          this.appColor = "rgb(255 255 255 / 0%)";
        } else {
          this.appColor = "white";
        }
      },
    },
  };
</script>

<style lang="scss" scoped>
  @import "./style.scss";
</style>
