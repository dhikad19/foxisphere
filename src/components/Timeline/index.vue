<template>
  <div class="timeline-container">
    <h1 class="timeline-title">
      Timeline
    </h1>
    <p class="timeline-subtitle">Editor's Picks</p>

    <div class="timeline-wrapper mt-8">
      <v-row dense>
        <v-col cols="5">
          <v-card height="548" flat>
            <v-img contain src="assets/banner/games.jpg"></v-img>
          </v-card>
        </v-col>
        <v-col cols="7">
          <v-row dense>
            <v-col cols="12">
              <v-row dense>
                <v-col cols="9">
                  <v-card color="green" height="270"></v-card>
                </v-col>
                <v-col cols="3">
                  <v-card color="green" height="270"></v-card>
                </v-col>
              </v-row>
            </v-col>
            <v-col cols="12">
              <v-row dense>
                <v-col cols="7">
                  <v-card height="270" flat>
                    <v-img style="border-radius: 15px" height="270" width="100%" src="assets/banner/games.jpg"></v-img>
                  </v-card>
                </v-col>
                <v-col cols="5">
                  <v-card color="green" height="270"></v-card>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
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
      tabModel: '',
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

<style>
.v-slide-group__prev--disabled {
  color: transparent !important;
  
}
</style>

<style lang="scss" scoped>
@import './style.scss'
</style>