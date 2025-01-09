<template>
  <div class="comment-container">
    <div class="comment-wrapper">
      <div class="comment-content" @click="active = !active">
        <p style="" v-if="!active">
          Tambahkan Komentar
        </p>
        <v-expand-transition>
          <v-card v-show="active" variant="flat">
            <p>aktif</p>
            <p>aktif</p>
            <p>aktif</p>
            <p>aktif</p>
            <p>aktif</p>
            <p>aktif</p>
            <p>aktif</p>
            <p>aktif</p>
            <p>aktif</p>
          </v-card>
        </v-expand-transition>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CommentComponent',
  data() {
    return {
      active: false
    }
  }
}
</script>

<style lang="scss" scoped>
@use './style.scss'
</style>