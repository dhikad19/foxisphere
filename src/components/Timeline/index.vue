<template>
  <div class="timeline-container">
    <h1 class="timeline-title">
      Timeline
    </h1>
    <p class="timeline-subtitle">Editor's Picks</p>

    <div class="timeline-wrapper mt-8">
      <v-row dense>
        <v-col cols="5">
          <v-card class="category-0" height="548" flat>
            <div style="height: 100%" class="d-flex align-end">
              <div class="d-flex flex-column pa-4">
                <div>
                  <p class="text-category__inner mt-2"><b>Category .</b> Music</p>
                </div>
                <div>
                  <p class="text-category__date mt-4">16 DEC</p>
                </div>
                <div>
                  <p class="text-category__title mt-0" style="text-transform: uppercase">10 Types of Guitars for Beginners: A Guide to Choosing Your First Guitar</p>
                </div>
              </div>
            </div>
          </v-card>
        </v-col>
        <v-col cols="7">
          <v-row dense>
            <v-col cols="12">
              <v-row dense>
                <v-col cols="9">
                  <v-card height="320" class="category-1" flat>
                    <div class="pa-4">
                      <p class="text-category__inner mt-2"><b>Category .</b> Tech</p>
                      <p class="text-category__date mt-4">16 DEC</p>
                      <p class="text-category__title mt-0" style="text-transform: uppercase; max-width: 430px; line-height: normal">Top 10 Programming Languages You Should Learn in 2024</p>
                      <p class="text-category__description">With the tech landscape constantly evolving, it can be hard to decide which programming languages to focus on. This post highlights the top 10 languages you should learn in 2024, with a focus on relevance, demand in the job market, and versatility.</p>
                      <div class="mt-3 mb-3" style="height: 1.5px; background-color: black; width: 100%"></div>
                      <p class="text-category__title mt-0" style="text-transform: uppercase; max-width: 430px; font-size: 13px; line-height: normal">
                        Understanding APIs: How to Work with APIs in Your Projects
                      </p>
                      <div class="mt-3 mb-3" style="height: 1px; background-color: black; width: 100%"></div>
                      <p class="text-category__title mt-0" style="text-transform: uppercase; max-width: 430px; font-size: 13px; line-height: normal">
                        Version Control Essentials: Why Git is a Developer's Best Friend
                      </p>
                    </div>
                  </v-card>
                </v-col>
                <v-col cols="3">
                  <v-card class="category-2" height="320" flat>
                    <div class="pa-4">
                      <p class="text-category__inner mt-2"><b>Category .</b> Games</p>
                      <p class="text-category__date mt-4">12 FEB</p>
                      <p class="text-category__title mt-0">GAMING NEWS AND UPDATE</p>
                    </div>
                  </v-card>
                </v-col>
              </v-row>
            </v-col>
            <v-col cols="12">
              <v-row dense>
                <v-col cols="7">
                  <v-card class="category-3" height="220" flat>
                    <div class="pa-4 d-flex flex-column justify-space-between" style="height: 100%">
                      <p class="text-category__inner mt-2"><b>Category .</b> Sport</p>
                      <div class="mb-3">
                        <p class="text-category__date">21 MAR</p>
                        <p class="text-category__title mt-0">TOP 10 GREATEST NBA PLAYERS OF ALL TIME</p>
                      </div>
                    </div>
                  </v-card>
                </v-col>
                <v-col cols="5">
                  <v-card flat class="category-4 pa-4 d-flex flex-column justify-space-between" height="220">
                    <div class="d-flex align-center mt-2 flex-wrap">
                      <div v-for="(item, i) in tags" :key="i">
                        <div class="chip">
                          <p>{{item.name}}</p>
                        </div>
                      </div>
                    </div>
                    <div class="d-flex align-center mb-2 justify-space-between">
                      <p style="font-weight: 500">View All Categories</p>
                      <div class="d-flex align-center justify-center" style="height: 35px; width: 35px; border-radius: 50%; background-color: white">
                        <v-img height="25" max-width="25" src="/assets/banner/arrow.png"></v-img>
                      </div>
                    </div>
                  </v-card>
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
          name: 'Viral',
          id: '',
          value: 'viral'
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