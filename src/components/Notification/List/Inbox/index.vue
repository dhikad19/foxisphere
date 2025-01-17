<template>
  <div class="list-container">
    <div class="list-wrapper d-flex">
      <v-img 
        :src="image" 
        height="30" 
        max-width="30" 
        style="border-radius: 50%;"
      >
      </v-img>
      <div>
        <p>
          {{ user }}
        </p>
        <p>
          membalas komentar anda pada {{ community }}
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '../../style.scss';
</style>

<script>
export default {
  name: 'ListComponent',
  props: {
    image: {
      type: String,
      required: true
    },
    user: {
      type: String,
      required: true
    },
    community: {
      type: String,
      required: true
    },
    type: {
      type: String,
      required: true
    },
    read: {
      type: Boolean,
      required: true
    },
    date: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
  }
}
</script>