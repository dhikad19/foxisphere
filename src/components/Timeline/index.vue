<template>
  <div class="timeline-container">
    <h1 class="timeline-title">
      Timeline
    </h1>
    <p class="timeline-subtitle">Editor's Picks</p>
    <div class="timeline-wrapper mt-8">
      <v-row dense>
        <v-col cols="8" class="pr-10">
          <v-tabs
          show-arrows
            >
            <template v-slot:prev="{ disabled, onClick }">
              <v-btn
                :disabled="disabled"
                @click="onClick"
                color="primary"
                outlined
                class="mr-2"
              >
                <v-icon left>
                  mdi-arrow-left
                </v-icon>
                Prev
              </v-btn>
            </template>
              <v-tab
                style="text-transform: capitalize; letter-spacing: normal"
                v-for="(item, i) in tags"
                :key="i"
                :text="item.name"
                :value="item.value"
              ></v-tab>
          </v-tabs>
        </v-col>
        <v-col cols="4">

        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'timelineComponent',
  data() {
    return {
      itemSelect: 0,
      tags: [
        {
          name: 'For you',
          id: '',
          value: 'foryou'
        },
        {
          name: 'Following',
          id: '',
          value: 'following'
        },
        {
          name: 'All',
          id: '',
          value: 'all'
        },
        {
          name: 'Games',
          id: '',
          value: 'games'
        },
        {
          name: 'Programing',
          id: '',
          value: 'programming'
        },
        {
          name: 'Technology',
          id: '',
          value: 'technology'
        },
        {
          name: 'Travel',
          id: '',
          value: 'travel'
        },
        {
          name: 'Food',
          id: '',
          value: 'food'
        },
        {
          name: 'Addiction',
          id: '',
          value: 'addiction'
        },
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import './style.scss'
</style>