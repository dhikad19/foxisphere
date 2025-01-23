<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <!-- v-textarea with auto-grow -->
        <v-textarea
          v-model="message"
          placeholder="Pesan"
          hide-details
          variant="plain"
          auto-grow
          outlined
          :disabled="isSending"
          rows="1"
          @input="onInputChange"
        />
      </v-col>
      <v-col cols="auto">
        <!-- Send Button -->
        <v-btn @click="onSendMessage" :disabled="isSending" color="primary">Send</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      message: "",
      image: 'https://randomuser.me/api/portraits/men/85.jpg',
      isSending: false,
      user: "Mak Nori", 
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

<style scoped>
/* You can add custom styles here if needed */
</style>
