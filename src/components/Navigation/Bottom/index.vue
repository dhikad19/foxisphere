<template>
<div class="bottom-navigation-container">
  <div class="bottom-navigation-wrapper">
    <div class="bottom-navigation-content" @click="toHome()">
      <v-img v-if="active == 'home'" src="/images/icon/home-filled.png" height="20" max-width="20">
      </v-img>
      <v-img v-else src="/images/icon/home.png" height="20" max-width="20">
      </v-img>
    </div>
    <div class="bottom-navigation-content" @click="toSearch()">
      <v-img v-if="active == 'search'" src="/images/icon/magnify-filled.png" height="20" max-width="20">
      </v-img>
      <v-img v-else src="/images/icon/magnify.png" height="20" max-width="20">
      </v-img>
    </div>
    <div class="bottom-navigation-content">
      <v-img src="/images/icon/plus.png" height="20" max-width="20">
      </v-img>
    </div>
    <div class="bottom-navigation-content" @click="toChat()">
      <v-img src="/images/icon/chat.png" height="20" max-width="20">
      </v-img>
    </div>
    <div class="bottom-navigation-content" @click="toProfile()">
      <v-avatar size="23">
        <v-img src="https://randomuser.me/api/portraits/men/82.jpg" >
        </v-img>
      </v-avatar>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'BottomNavigationComponent',
  props: {
    active: {
      type: String,
      required: true
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
.bottom-navigation-wrapper {
  background-color: #fff;
  border-top: #e0e0e0 solid 1px;
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
}

.bottom-navigation-container {
  position: fixed;
  width: 100vw;
  bottom: 0;
}
</style>