<template>
  <div class="timeline-container">
    <div class="timeline-wrapper">
      <v-row dense>
        <v-col cols="7">
          <div class="scroller-container">
            <v-icon v-if="left >= 100" icon variant="plain" class="arrow left-arrow" @click="scrollLeft">
              mdi-chevron-left
            </v-icon>
            <v-icon v-else icon variant="plain" class="arrow left-arrow" @click="scrollLeft">
              mdi-plus
            </v-icon>
            <div class="scroller" ref="scroller">
              <div :class="active == i + 1 ? 'scroller-item__active' : 'scroller-item'" @click="handleSelect(i)" v-for="(item, i) in items" :key="i">
                {{ item.name }}
              </div>
            </div>
            <v-icon icon variant="plain" class="arrow right-arrow" @click="scrollRight">
              mdi-chevron-right
            </v-icon>
          </div>
          <!-- <v-divider></v-divider> -->
        </v-col>
        <v-col cols="5"></v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TimelineContainer',
  data() {
    return {
      active: 1,
      left: 0,
      items: [
        { id: 1, name: 'For You' },
        { id: 2, name: 'Technology' },
        { id: 3, name: 'Sport' },
        { id: 4, name: 'Life' },
        { id: 5, name: 'Food' },
        { id: 6, name: 'Writing' },
        { id: 7, name: 'Data Science' },
        { id: 8, name: 'Programming' },
        { id: 9, name: 'Self Improvement' },
        { id: 10, name: 'Philosophy' },
        { id: 11, name: 'Addiction' },
        { id: 12, name: 'Space' }
      ],
    };
  },
  methods: {
    logScrollPosition() {
      const scroller = this.$refs.scroller;
      this.left = scroller.scrollLeft
      if (scroller.scrollLeft == 100) {
        this.left = 0
      }
    },
    handleSelect(i) {
      this.active = this.items[i].id
    },
    scrollLeft() {
      const scroller = this.$refs.scroller;
      scroller.scrollBy({
        left: -100,
        behavior: 'smooth',
      });
      this.logScrollPosition()
    },
    scrollRight() {
      const scroller = this.$refs.scroller;
      scroller.scrollBy({
        left: 100,
        behavior: 'smooth',
      });
      this.logScrollPosition()
      this.left = 100
    },
  },
};
</script>

<style scoped lang="scss">
@import './style.scss'
</style>
