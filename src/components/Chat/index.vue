<template>
  <div class="chat-container">
    <div class="chat-wrapper">
      <div class="chat-box">
        <div class="top-bar">
          <p>Chat</p>
          <div @click="handleMinimize()">
            <p>minimize</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use './style.scss';
</style>

<script>
export default {
  name: 'ChatComponents',
  methods: {
    handleMinimize() {
      
    }
  },
  created() {

  }
}
</script>