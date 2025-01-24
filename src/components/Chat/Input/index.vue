<template>
  <v-container>
    <v-row dense>
      <v-col cols="10">
        <!-- v-textarea with auto-grow -->
        <v-textarea
            v-model="message"
            placeholder="Pesan"
            hide-details
            variant="solo"
            auto-grow
            outlined
            density="compact"
            :disabled="isSending"
            rows="1"
            @input="onInputChange"
          >
            <template #append-inner>
              <v-img src="assets/gif.png" max-height="25" min-width="25">
              </v-img>
            </template>
          </v-textarea>
      </v-col>
      <v-col cols="2">
        <!-- Send Button -->
        <div class="send-btn" @click="onSendMessage">
          <v-img src="assets/send.png" max-height="15" min-width="15">
          </v-img>
        </div>
      </v-col>
    </v-row>
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
    };
  },
  methods: {
    onSendMessage() {
      if (this.message.trim() === "") return;

      // Create a timestamp when the message is sent
      const timestamp = new Date(); // Raw Date object

      // Emit the message with user, message, and timestamp
      this.$emit('send-message', {
        image: this.image,
        user: this.user,
        message: this.message,
        time: timestamp, // Send raw timestamp
      });

      // Reset the input
      this.message = "";
      this.isSending = false;
    },
  },
};
</script>