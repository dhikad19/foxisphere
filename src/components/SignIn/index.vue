<template>
  <div class="signin-container">
    <v-row dense>
      <v-col cols="6" class="desktop-bg">
        <div class="signin-bg d-flex align-center justify-center">
          <v-carousel
            cycle
            height="520"
            show-arrows="hover"
            hide-delimiter-background>
            <v-carousel-item v-for="(slide, i) in items" :key="i">
              <v-img :src="slide.img" contain height="300px"></v-img>
              <v-card
                class="pt-4 d-flex align-center justify-center flex-column"
                flat
                color="transparent">
                <p class="mb-2 mt-10 signin-title">{{ slide.title }}</p>
                <p class="mt-1 signin-desc">{{ slide.description }}</p>
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
                <div class="d-flex align-center justify-center">
                  <v-img class="header-bar" src="assets/header.png" max-height="32" width="130"></v-img>
                </div>
              </div>
              <div class="form-container">
                <div class="mb-8 d-flex align-center justify-center flex-column">
                <p class="title-form">Hello Again!</p>
                <p class="mt-2 desc-form">
                  Please log in to access your <span style="color: #ff8417">Sphere</span>.
                </p>
              </div>
                <v-form fast-fail @submit.prevent>
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
                    <v-col cols="12">
                      <v-text-field
                        v-model="password"
                        label="Password"
                        :rules="passwordRules"
                        @click:append-innner="show = !show"
                        :type="show ? 'text' : 'password'"
                        variant="outlined"
                        density="compact">
                        <template v-slot:append-inner>
                          <v-icon
                            class="password-toggle-icon"
                            @click="show = !show">
                            {{ show ? "mdi-eye-off" : "mdi-eye" }}
                          </v-icon>
                        </template>
                      </v-text-field>
                    </v-col>
                    <v-col
                      cols="12"
                      style="margin-top: -5px;"
                      class="d-flex align-center justify-space-between mb-4"
                    >
                      <div class="d-flex align-center" @click="handleRemember()" style="cursor: pointer">
                        <v-icon
                          style="margin-left: -3px"
                          class="mr-2"
                          size="20"
                          color="#4f4f4fe5"
                          v-if="!checkbox"
                        >
                          mdi-checkbox-blank-outline
                        </v-icon>
                        <v-icon 
                          v-else 
                          style="margin-left: -3px"
                          class="mr-2"
                          size="20"
                          color="#ff8417"
                        >
                          mdi-checkbox-marked
                        </v-icon>
                        <p style="color: #4f4f4fe5; user-select: none; font-size: 14px">
                          Remember Me
                        </p>
                      </div>
                      <div>
                        <p
                          style="
                            color: #ff8417;
                            font-size: 14px;
                            font-weight: 500;
                          ">
                          Forgot Password
                        </p>
                      </div>
                    </v-col>
                  </v-row>
                  <v-btn
                    @click="auth()"
                    color="#FF8417"
                    height="40"
                    class="mt-2"
                    style="
                      color: white;
                      text-transform: capitalize;
                      letter-spacing: normal;
                    "
                    flat
                    type="submit"
                    block
                    >Sign in</v-btn
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
                        >Sign in with google</span
                      >
                      <!-- Optional text next to the image -->
                    </template>
                  </v-btn>
                </v-form>
              </div>
              <div>
                <p class="mb-8" style="color: #4f4f4fe5; font-size: 16px">
                  Don't have an account yet?
                  <b style="color: #ff8417; cursor: pointer" @click="toSignUp()">Sign Up</b>
                </p>
              </div>
            </div>
          </div>
          <div class="mobile-signin">
            <div class="form-login__container">
              <div style="width: 100%">
                <div style="width: 125px; margin-top: 20px; margin-left: 15px">
                  <v-img class="header-bar" src="assets/header.png" max-height="32" width="130"></v-img>
                </div>
                <div class="form-container">
                  <div class="mb-8 d-flex align-center justify-center flex-column">
                  <p class="title-form">Hello Again!</p>
                  <p class="mt-2 desc-form">
                    Please log in to access your <span style="color: #ff8417">Sphere</span>.
                  </p>
                </div>
                  <v-form fast-fail @submit.prevent>
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
                      <v-col cols="12">
                        <v-text-field
                          v-model="password"
                          label="Password"
                          :rules="passwordRules"
                          @click:append-innner="show = !show"
                          :type="show ? 'text' : 'password'"
                          variant="outlined"
                          density="compact">
                          <template v-slot:append-inner>
                            <v-icon
                              class="password-toggle-icon"
                              @click="show = !show">
                              {{ show ? "mdi-eye-off" : "mdi-eye" }}
                            </v-icon>
                          </template>
                        </v-text-field>
                      </v-col>
                      <v-col
                        cols="12"
                        style="margin-top: -5px;"
                        class="d-flex align-center justify-space-between mb-4"
                      >
                        <div class="d-flex align-center" @click="handleRemember()" style="cursor: pointer">
                          <v-icon
                            style="margin-left: -3px"
                            class="mr-2"
                            size="20"
                            color="#4f4f4fe5"
                            v-if="!checkbox"
                          >
                            mdi-checkbox-blank-outline
                          </v-icon>
                          <v-icon 
                            v-else 
                            style="margin-left: -3px"
                            class="mr-2"
                            size="20"
                            color="#ff8417"
                          >
                            mdi-checkbox-marked
                          </v-icon>
                          <p style="color: #4f4f4fe5; user-select: none; font-size: 14px">
                            Remember Me
                          </p>
                        </div>
                        <div>
                          <p
                            style="
                              color: #ff8417;
                              font-size: 14px;
                              font-weight: 500;
                            ">
                            Forgot Password
                          </p>
                        </div>
                      </v-col>
                    </v-row>
                    <v-btn
                      @click="auth()"
                      color="#FF8417"
                      height="40"
                      class="mt-2"
                      style="
                        color: white;
                        text-transform: capitalize;
                        letter-spacing: normal;
                      "
                      flat
                      type="submit"
                      block
                      >Sign in</v-btn
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
                          >Sign in with google</span
                        >
                        <!-- Optional text next to the image -->
                      </template>
                    </v-btn>
                  </v-form>
                </div>
              </div>
              <div>
                <p class="mb-8" style="color: #4f4f4fe5; font-size: 16px">
                  Don't have an account yet?
                  <b style="color: #ff8417; cursor: pointer" @click="toSignUp()">Sign Up</b>
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
    name: "SignInComponent",
    data() {
      return {
        checkbox: false,
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
      auth() {
        localStorage.setItem('authToken', true)
      },
      toSignUp() {
        this.$router.push({ path: '/signup' })
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
