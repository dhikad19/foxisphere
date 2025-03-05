<template>
  <div class="card-container">
    <v-card 
      :color="themeState.isDarkMode ? '#141414' : '#f7f7f7'" 
      variant="flat" 
      class="card-content mb-5 pa-3" 
      style="width: 100%; height: 100%; cursor: pointer"
    >
      <v-row 
        dense 
        style="height: 100%;" 
        class="desktop"
      >
        <v-col cols="8" class="pr-6">
          <div class="left-content">
            <div>
              <div class="d-flex align-center">
                <v-img style="margin-top: -10px" class="mr-2" height="35" max-width="35" :src="gameImage"></v-img>
                <p :class="{'background-dark': themeState.isDarkMode}" 
                  class="categories-content">
                  {{game}}
                </p>
              </div>
              <h1 
                :class="{'title-dark': themeState.isDarkMode}" 
                class="blog-title"
              >
                {{title}}
              </h1>
              <p 
                :class="{'subtitle-dark': themeState.isDarkMode}" 
                class="blog-subtitle"
              >
                {{subTitle}}
              </p>
            </div>
            <div class="d-flex justify-space-between" style="width: 100%">
              <div>
                <div class="d-flex align-center mt-3">
                  <p class="card-categories mr-1">Ditulis oleh</p>
                  <p class="card-categories mr-1"><b style="color: black">{{writters}}</b></p>
                </div>
                <div>
                  <p style="font-size: 13px; color: gray">{{formatDate(date)}}</p>
                </div>
              </div>
              <div>
                <div class="d-flex flex-row-reverse align-center mt-7">
                  <div class="d-flex align-center mr-3">
                    <v-icon color="grey" size="18" class="mr-1">mdi-comment-outline</v-icon>
                    <p style="font-size: 14px; margin-top: 0px; color: gray">{{comments}}</p>
                  </div>
                  <div class="d-flex align-center mr-3">
                    <v-icon color="grey" size="18" class="mr-1">mdi-thumb-up-outline</v-icon>
                    <p style="font-size: 14px; margin-top: 0px; color: gray">{{like}}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </v-col>
        <v-col cols="4">
          <v-img :src="image"></v-img>
        </v-col>
      </v-row>
      <v-row dense style="height: 100%;" class="mobile">
        <v-col cols="7" class="pr-6">
          <div class="left-content">
            <div>
              <div class="d-flex align-center">
                <p class="categories-content mr-2">{{categories}}</p>
                <p class="reads">{{read}}</p>
              </div>
              <h1 
                :class="{'title-dark': themeState.isDarkMode}" 
                class="blog-title"
              >
                {{title}}
              </h1>
              <p 
                :class="{'subtitle-dark': themeState.isDarkMode}" 
                class="blog-subtitle"
              >
                {{subTitle}}
              </p>
            </div>
          </div>
        </v-col>
        <v-col cols="5">
          <v-img :src="image"></v-img>
        </v-col>
        <v-col cols="12">
          <v-row dense class="mt-1">
            <v-col cols="8">
              <div class="d-flex align-center mt-3">
                <p class="card-categories mr-1">Ditulis oleh</p>
                <p class="card-categories mr-1"><b style="color: black">{{writters}}</b></p>
              </div>
              <div>
                <p style="font-size: 13px; color: gray">{{formatDate(date)}}</p>
              </div>
            </v-col>
            <v-col cols="4">
              <div class="d-flex flex-row-reverse align-center mt-6">
                <div class="d-flex align-center mr-3">
                  <v-icon color="grey" size="17" class="mr-1">mdi-comment-outline</v-icon>
                  <p style="font-size: 14px; margin-top: 0px; color: gray">{{comments}}</p>
                </div>
                <div class="d-flex align-center mr-3">
                  <v-icon color="grey" size="17" class="mr-1">mdi-thumb-up-outline</v-icon>
                  <p style="font-size: 14px; margin-top: 0px; color: gray">{{like}}</p>
                </div>
              </div>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>

<script>
import { themeState } from "../../theme";
export default {
  name: 'CardComponents',
  data() {
    return {
      themeState
    }
  },
  methods: {
    formatDate(date) {
      const parsedDate = new Date(date);

      // Check if the parsed date is valid
      if (isNaN(parsedDate)) {
        console.error("Invalid date format:", date);
        return "Invalid Date";  // or any other fallback message
      }

      const options = { year: 'numeric', month: 'short', day: 'numeric' };
      return parsedDate.toLocaleDateString('id', options);
    }
  },
  props: {
    title: {
      type: String,
      required: true
    },
    subTitle: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: true
    },
    game: {
      type: String,
      required: true
    },
    gameImage: {
      type: String,
      required: true
    },
    like: {
      type: Number,
      required: true
    },
    read: {
      type: String,
      required: true
    },
    writters: {
      type: String,
      required: true
    },
    writtersImage: {
      type: String,
      required: true
    },
    date: {
      type: String,
      required: true
    },
    comments: {
      type: Number,
      required: true
    },
  }
}
</script>

<style lang="scss" scoped>
@import './style.scss'
</style>