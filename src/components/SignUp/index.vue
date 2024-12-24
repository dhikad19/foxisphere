<template>
  <div class="signup-container">
    <v-row dense>
      <v-col md="6" cols="12" class="desktop-bg">
        <div class="signup-bg d-flex align-center justify-center">
          <v-carousel
            cycle
            height="520"
            show-arrows="hover"
            hide-delimiter-background>
            <v-carousel-item v-for="(slide, i) in items" :key="i">
              <v-img :src="slide.img" contain height="300px"> </v-img>
              <v-card
                class="pt-4 d-flex align-center justify-center flex-column"
                flat
                color="transparent">
                <p class="mb-2 mt-10 signup-title">{{ slide.title }}</p>
                <p class="mt-1 signup-desc">{{ slide.description }}</p>
              </v-card>
            </v-carousel-item>
          </v-carousel>
        </div>
      </v-col>
      <v-col md="6" cols="12">
        <div style="width: 100%; height: 100%">
          <div class="desktop-signin">
            <div class="form-login__container" style="width: 100%">
              <div style="width: 125px; margin-top: 20px; width: 100%;" class="d-flex align-center justify-center">
                <div class="d-flex align-center justify-center" @click="toHome()">
                  <v-img class="header-bar" src="assets/header.png" max-height="32" width="130"></v-img>
                </div>
              </div>
              <div class="form-container mb-10 d-flex flex-column" style="width: 100%">
                <div
                  class="mb-8 d-flex align-center justify-center flex-column">
                  <p class="title-form">Get Started!</p>
                  <p class="mt-2 desc-form">
                    Create your foxi account now.
                  </p>
                </div>
                <v-form 
                fast-fail 
                v-if="step == 1" 
                @submit.prevent>
                  <v-row dense>
                    <v-col cols="12">
                      <v-text-field
                        v-model="email"
                        width="100%"
                        label="Email"
                        :rules="emailRules"
                        append-inner-icon="mdi-at"
                        variant="outlined"
                        density="compact">
                      </v-text-field>
                    </v-col>
                  </v-row>
                  <v-btn
                    color="#FF8417"
                    height="40"
                    @click="handleStep()"
                    class="mt-2"
                    style="
                      color: white;
                      text-transform: capitalize;
                      letter-spacing: normal;
                    "
                    flat
                    type="submit"
                    block
                    >Next</v-btn
                  >
                  <p class="text-divider mt-4">or</p>
                  <v-btn
                    variant="outlined"
                    @click="handleGoogleLogin()"
                    class="mt-4"
                    style="letter-spacing: normal"
                    block>
                    <template v-slot:default>
                      <img
                        src="images/icon/google.png"
                        alt="Button Image"
                        contain
                        height="20"
                        max-width="20"
                        class="button-image mr-3" />
                      <span
                        style="
                          text-transform: capitalize;
                          font-weight: 500;
                          color: #4f4f4fe5;
                        "
                        >Sign up with google</span
                      >
                      <!-- Optional text next to the image -->
                    </template>
                  </v-btn>
                </v-form>
                <v-form v-else-if="step == 2" fast-fail @submit.prevent>
                  <v-row dense>
                    <v-col cols="12">
                      <v-text-field
                        v-model="fullName"
                        label="Full Name"
                        variant="outlined"
                        density="compact">
                      </v-text-field>
                    </v-col>
                    <v-col cols="12">
                      <v-text-field
                        v-model="email"
                        width="100%"
                        label="Email"
                        disabled
                        :rules="emailRules"
                        append-inner-icon="mdi-at"
                        variant="outlined"
                        density="compact">
                      </v-text-field>
                    </v-col>
                  </v-row>
                  <v-btn
                    color="#FF8417"
                    height="40"
                    class="mt-2"
                    @click="handleStep()"
                    style="
                      color: white;
                      text-transform: capitalize;
                      letter-spacing: normal;
                    "
                    flat
                    type="submit"
                    block
                    >Next</v-btn
                  >
                </v-form>
              </div>
              <div>
                <p class="mb-8" style="color: #4f4f4fe5; font-size: 16px">
                  Already have an account?
                  <b style="color: #ff8417; cursor: pointer" @click="toSignIn()">Sign In</b>
                </p>
              </div>
            </div>
          </div>
          <div class="mobile-signin">
            <div class="form-login__container">
              <div style="width: 100%">
                <div style="width: 125px; margin-top: 20px; margin-left: 15px" @click="toHome()">
                  <v-img class="header-bar" src="assets/header.png" max-height="32" width="130"></v-img>
                </div>
                <div class="form-container">
                  <div
                    class="mt-6 mb-8 d-flex align-center justify-center flex-column">
                    <p class="title-form">Get Started!</p>
                    <p class="mt-2 desc-form">
                      Create your account now.
                    </p>
                  </div>
                  <v-form 
                  v-if="step == 1" 
                  fast-fail 
                  @submit.prevent>
                    <v-row dense>
                      <v-col cols="12">
                        <v-text-field
                          v-model="email"
                          label="Email"
                          :rules="emailRules"
                          append-inner-icon="mdi-at"
                          variant="outlined"
                          density="compact"></v-text-field>
                      </v-col>
                    </v-row>
                    <v-btn
                      color="#FF8417"
                      height="40"
                      class="mt-2"
                      @click="handleStep()"
                      style="
                        color: white;
                        text-transform: capitalize;
                        letter-spacing: normal;
                      "
                      flat
                      type="submit"
                      block
                      >Next</v-btn
                    >
                    <p class="text-divider mt-4">or</p>
                    <v-btn
                      variant="outlined"
                      class="mt-4"
                      @click="handleGoogleLogin()"
                      style="letter-spacing: normal"
                      block>
                      <template v-slot:default>
                        <img
                          src="images/icon/google.png"
                          alt="Button Image"
                          contain
                          height="20"
                          max-width="20"
                          class="button-image mr-3" />
                        <span
                          style="
                            text-transform: capitalize;
                            font-weight: 500;
                            color: #4f4f4fe5;
                          "
                          >Sign up with google</span
                        >
                        <!-- Optional text next to the image -->
                      </template>
                    </v-btn>
                  </v-form>
                  <v-form 
                  v-else-if="step == 2" 
                  fast-fail 
                  @submit.prevent>
                  <v-row dense>
                    <v-col cols="12">
                      <v-text-field
                        v-model="email"
                        label="Email"
                        :rules="emailRules"
                        append-inner-icon="mdi-at"
                        variant="outlined"
                        density="compact"></v-text-field>
                    </v-col>
                  </v-row>
                  <v-btn
                    color="#FF8417"
                    height="40"
                    class="mt-2"
                    @click="handleStep()"
                    style="
                      color: white;
                      text-transform: capitalize;
                      letter-spacing: normal;
                    "
                    flat
                    type="submit"
                    block
                    >Next</v-btn
                  >
                  </v-form>
                </div>
              </div>
              <div>
                <p class="mb-8" style="color: #4f4f4fe5; font-size: 16px">
                  Already have an account?
                  <b style="color: #ff8417; cursor: pointer" @click="toSignIn()">Sign In</b>
                </p>
              </div>
            </div>
          </div>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
  import { googleTokenLogin } from "vue3-google-login";
  export default {
    name: "SignUpComponent",
    data() {
      return {
        checkbox: false,
        step: 1,
        show: false,
        items: [
          {
            img: "/images/banner/banner-1.png",
            title: "Streamline Project Workflow",
            description:
              "Visualize project progress and manage tasks efficiently with intuitive tools.",
          },
          {
            img: "/images/banner/banner-2.png",
            title: "Unlock Insights with Real-Time Data",
            description:
              "Monitor metrics with live updates and detailed analytics to make informed decisions.",
          },
        ],
        colors: [
          "indigo",
          "warning",
          "pink darken-2",
          "red lighten-1",
          "deep-purple accent-4",
        ],
        slides: ["First", "Second", "Third", "Fourth", "Fifth"],
        email: "",
        password: "",
        fullName: "",
        emailRules: [
          v => !!v || 'Email is required',
          v => !v || /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'Email must be valid'
        ],
        passwordRules: [
          v => !!v || 'Password is required',
          v => (v && v.length >= 8) || 'Must be at least 8 characters long',
        ],
      };
    },
    methods: {
      handleStep() {
        this.step = 2
      },
      toSignIn() {
        this.$router.push({ path: '/signin' })
      },
      toHome() {
        this.$router.push({ path: '/' })
      },
      handleRemember() {
        this.checkbox = !this.checkbox
      },
      handleGoogleLogin() {
        googleTokenLogin().then((response) => {
          console.log("Handle the response", response);
        });
      },
    },
  };
</script>

<style lang="scss" scoped>
  @import "./style.scss";
</style>
