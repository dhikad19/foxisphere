<template>
  <div class="search-container">
    <div class="search-btn" @click="overlaySearch()">
      <v-icon style="font-size: 20px" class="mr-4 ml-2">
        mdi-magnify
      </v-icon>
      <p class="search-text">Search...</p>
    </div>
    <v-overlay style="width: 100%" v-model="overlay" :opacity="0.7" class="d-flex justify-center">
      <v-card class="search-card" variant="text" color="white">
        <div style="width: 100%">
          <v-text-field 
            variant="solo" 
            autofocus
            v-model="searchVal"
            prepend-inner-icon="mdi-magnify"
            placeholder="Search..."
            style="background-color: white;"
            hide-details
            clearable>
          </v-text-field>
          <v-card v-if="searchVal.length != 0" class="pa-3" variant="text" style="background-color: white; width: 100%; margin-top: 1px">
            <p 
              style="color: grey; font-size: 15px;">
              Keyword
            </p>
            <div 
              class="mt-3 mb-4" 
              style="border-bottom: 0.5px solid #bdc0d68a; height: 1px">
            </div>
            <p 
              style="color: grey; font-size: 15px;">
              Resource
            </p>
            <div 
              class="mt-3 mb-4" 
              style="border-bottom: 0.5px solid #bdc0d68a; height: 1px">
            </div>
            <div 
              class="d-flex align-center justify-center" 
              style="width: 100%"
            >
              <v-btn 
                variant="flat" 
                height="40"
                class="mb-2 mt-1"
                style="text-transform: capitalize;"
                color="#ff0000">
                <p style="font-weight: 500; letter-spacing: normal">
                  Show All Result
                </p>
              </v-btn>
            </div>
          </v-card>
        </div>
      </v-card>
    </v-overlay>
  </div>
</template>

<script>
export default {
  name: 'SeachComponent',
  data() {
    return {
      overlay: false,
      btn: null,
      searchVal: '',
    }
  },
  methods: {
    overlaySearch() {
      this.overlay = true
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "./style.scss";
</style>
