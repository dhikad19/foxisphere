<template>
  <v-container>
    <div class="d-flex" style="width: 100%;">
      <v-textarea
        v-model="message"
        placeholder="Pesan"
        hide-details
        variant="solo"
        auto-grow
        outlined
        density="compact"
        max-rows="2"
        :disabled="isSending"
        rows="1"
        @input="onInputChange"
      >
        <template #append-inner>
          <v-img src="assets/gif.png" max-height="25" min-width="25">
          </v-img>
        </template>
      </v-textarea>
      <div class="send-btn ml-2" @click="onSendMessage">
        <v-img src="assets/send.png" max-height="15" min-width="15">
        </v-img>
      </div>
    </div>
  </v-container>
</template>

<style>
.v-field__overlay {
  background-color: rgba(128, 128, 128, 0.185) !important;
}
.v-field--variant-solo, .v-field--variant-solo-filled {
  border-radius: 30px !important;
  box-shadow: none !important;
}
</style>

<style lang="scss" scoped>
@use '../style.scss';
</style>

<script>
export default {
  name: 'InputComponents',
  data() {
    return {
      message: "",
      image: 'https://randomuser.me/api/portraits/men/85.jpg',
      isSending: false,
      user: "Agus",
      position: 'user'
    };
  },
  methods: {
    onSendMessage() {
      if (this.message.trim() === "") return;
      const timestamp = new Date();

      // Emit the message with user, message, and timestamp
      this.$emit('send-message', {
        image: this.image,
        user: this.user,
        message: this.message,
        position: this.position,
        time: timestamp,
        reaction: [],
        isMenuActive: false
      });
      this.message = "";
      this.isSending = false;
    },
  },
};
</script>