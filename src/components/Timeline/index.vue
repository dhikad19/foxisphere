<template>
  <div class="timeline-container">
    <h1 class="timeline-title">
      Timeline
    </h1>
    <p class="timeline-subtitle">Editor's Picks</p>
    <div class="timeline-wrapper mt-8">
      <v-item-group selected-class="bg-primary" v-model="itemSelect" :mandatory="true">
        <div class="d-flex align-center flex-wrap">
          <div
            v-for="(item, i) in tags"
            :key="i"
          >
            <v-item v-slot="{ isSelected, selectedClass, toggle }">
              <!-- <v-card
                :class="['d-flex align-center', selectedClass]"
                height="200"
                dark
                @click="toggle"
              >
                <div
                  class="text-h3 flex-grow-1 text-center"
                >
                  {{ isSelected ? 'Selected' : 'Click Me!' }}
                </div>
              </v-card> -->
              <div @click="toggle">
                <div :class="isSelected ? 'chip-active' : 'chip-notactive'">
                  <span>{{ item.name }}</span>
                </div>
              </div>
              
            </v-item>
          </div>
        </div>
      </v-item-group>
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
          name: 'All',
          id: '',
          value: ''
        },
        {
          name: 'Games',
          id: '',
          value: ''
        },
        {
          name: 'Programing',
          id: '',
          value: ''
        },
        {
          name: 'Technology',
          id: '',
          value: ''
        },
        {
          name: 'Travel',
          id: '',
          value: ''
        },
        {
          name: 'Food',
          id: '',
          value: ''
        },
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import './style.scss'
</style>