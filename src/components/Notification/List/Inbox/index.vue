<template>
  <div class="list-container">
    <div :class="read ? 'list-wrapper' : 'list-wrapper__no-read'" class=" pa-3">
      <div class="list-content d-flex">
        <v-avatar size="32" style="margin-top: 2px">
          <v-img 
            :src="image" 
          >
          </v-img>
        </v-avatar>
        <div class="ml-4 d-flex">
          <div>
            <p class="title-content">
              <span class="user">
                {{ user }}
              </span>
              membalas komentar anda pada
              <span class="community">
                {{ community }}
              </span>
            </p>
            <p class="description-content">
              {{ description }}
            </p>
          </div>
          <div style="margin-left: 10px" :class="read ? 'dot-noactive' : 'dot-active'"></div>
        </div>
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