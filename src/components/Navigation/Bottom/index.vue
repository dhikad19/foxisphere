<template>
<div class="bottom-navigation-container">
  <div class="bottom-navigation-wrapper" :class="{'background-dark': themeState.isDarkMode}">
    <div class="bottom-navigation-content" @click="toHome()">
      <v-icon v-if="active == 'home'" color="#ff7800">
        mdi-home
      </v-icon>
      <v-icon v-else :color="themeState.isDarkMode ? '#e4e1da' : '#4f4f4f'">
        mdi-home-outline
      </v-icon>
      <p :class="{'title-dark': themeState.isDarkMode}" :style="active == 'home' ? 'color: #ff7800' : 'color: #4f4f4f'">
        Beranda
      </p>
      <!-- <v-img v-if="active == 'home'" src="/images/icon/home-filled.png" height="20" max-width="20">
      </v-img>
      <v-img v-else src="/images/icon/home.png" height="20" max-width="20">
      </v-img> -->
    </div>
    <div class="bottom-navigation-content" @click="toSearch()">
      <v-icon :color="themeState.isDarkMode ? '#e4e1da' : '#4f4f4f'">
        mdi-magnify
      </v-icon>
      <p :class="{'title-dark': themeState.isDarkMode}" :style="active == 'search' ? 'color: #ff7800' : 'color: #4f4f4f'">
        Cari
      </p>
      <!-- <v-img v-if="active == 'search'" src="/images/icon/magnify-filled.png" height="20" max-width="20">
      </v-img>
      <v-img v-else src="/images/icon/magnify.png" height="20" max-width="20">
      </v-img> -->
    </div>
    <div class="bottom-navigation-content">
      <div class="plus-btn">
        <v-icon :color="themeState.isDarkMode ? '#e4e1da' : '#4f4f4f'">
          mdi-plus
        </v-icon>
      </div>
    </div>
    <div class="bottom-navigation-content" @click="toChat()">
      <!-- <v-img  src="/images/icon/chat.png" height="20" max-width="20">
      </v-img> -->
      <v-icon v-if="active == 'chat'" color="#ff7800'">
        mdi-chat-processing
      </v-icon>
      <v-icon v-else :color="themeState.isDarkMode ? '#e4e1da' : '#4f4f4f'">
        mdi-chat-processing-outline
      </v-icon>
      <p :class="{'title-dark': themeState.isDarkMode}" :style="active == 'chat' ? 'color: #ff7800' : 'color: #4f4f4f'">
        Chat
      </p>
    </div>
    <div class="bottom-navigation-content" @click="toProfile()">
      <v-avatar size="22">
        <v-img src="https://randomuser.me/api/portraits/men/82.jpg" >
        </v-img>
      </v-avatar>
      <p :class="{'title-dark': themeState.isDarkMode}" :style="active == 'profile' ? 'color: #ff7800' : 'color: #4f4f4f'">
        Anda
      </p>
    </div>
  </div>
</div>
</template>

<script>
import { themeState } from "../../../theme";
export default {
  name: 'BottomNavigationComponent',
  props: {
    active: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      themeState
    }
  },
  methods: {
    toProfile() {
      this.$router.push('/profile')
    },
    toChat() {
      this.$router.push('/chat')
    },
    toSearch() {
      this.$router.push('/search')
    },
    toHome() {
      this.$router.push('/')
    }
  }
}
</script>

<style lang="scss" scoped>
.plus-btn {
  padding: 6px;
  border-radius: 50%;
  background-color: #e0e0e041;
  display: flex;
  align-items: center;
  justify-content: center;
}
.bottom-navigation-wrapper {
  background-color: #fff;
  border-top: #4f4f4f solid 1px;
  height: 55px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.bottom-navigation-content {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  p {
    font-size: 10px;
    margin-top: 1px;
  }
}

.bottom-navigation-container {
  position: fixed;
  width: 100vw;
  bottom: 0;
}
</style>