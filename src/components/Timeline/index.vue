<template>
  <div class="timeline-container">
    <h1 class="timeline-title">
      Timeline
    </h1>
    <p class="timeline-subtitle">Editor's Picks</p>
    <div class="timeline-wrapper">
      <v-item-group selected-class="bg-primary">
        <div class="d-flex align-center flex-wrap">
          <div
            v-for="n in 100"
            :key="n"
          >
            <v-item v-slot="{ isSelected, selectedClass, toggle }">
              <v-card
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
              </v-card>
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
}
</script>

<style lang="scss" scoped>
@import './style.scss'
</style>