<template>
  <div class="search-container">
    <div class="search-btn" @click="overlaySearch()">
      <v-icon style="font-size: 20px" class="mr-4 ml-2"> mdi-magnify </v-icon>
      <p class="search-text">Search...</p>
    </div>
    <v-overlay
      style="width: 100%"
      v-model="overlay"
      :opacity="0.7"
      class="d-flex justify-center">
      <v-card class="search-card" variant="text" color="white">
        <div style="width: 100%">
          <v-text-field
            variant="solo"
            autofocus
            v-model="search"
            density="compact"
            prepend-inner-icon="mdi-magnify"
            placeholder="Search..."
            @input="filterResources"
            style="background-color: white"
            hide-details
            clearable>
          </v-text-field>
          <v-card
            v-if="search != ''"
            class="pt-3 pb-3"
            variant="text"
            style="background-color: white; width: 100%; margin-top: 1px">

            <div class="search-item__container">
              <div class="pl-3 pr-3" v-if="filteredResources[0]?.filteredData.length != 0">
                <p style="color: grey; font-size: 16px">Keyword</p>
                <div class="mt-3 mb-3">
                  <div
                    style="color: black"
                    v-for="(item, i) in filteredResources[0]?.filteredData"
                    :key="i">
                    <div class="search-item">
                      <p
                        class="search-item__title"
                        v-html="highlightMatch(item.name)"></p>
                      <p class="search-item__desc">{{ item.description }}</p>
                    </div>
                  </div>
                </div>
                <div
                  class="mt-3 mb-4"
                  style="border-bottom: 0.5px solid #bdc0d68a; height: 1px"></div>
              </div>
  
              <div class="pl-3 pr-3" v-if="filteredResources[1]?.filteredData.length != 0">
                <p style="color: grey; font-size: 16px">Resource</p>
                <div class="mt-3 mb-3">
                  <div
                    style="color: black"
                    v-for="(item, i) in filteredResources[1]?.filteredData"
                    :key="i">
                    <div class="search-item">
                      <p
                        class="search-item__title"
                        v-html="highlightMatch(item.name)"></p>
                      <p class="search-item__desc">{{ item.description }}</p>
                    </div>
                  </div>
                </div>
                <div
                  class="mt-3 mb-4"
                  style="border-bottom: 0.5px solid #bdc0d68a; height: 1px"></div>
              </div>
            </div>

            <div class="d-flex align-center justify-center pl-3 pr-3" style="width: 100%">
              <v-btn
                variant="flat"
                height="40"
                class="mb-2 mt-1"
                style="text-transform: capitalize"
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
    name: "SearchComponent",
    data() {
      return {
        resources: [
          {
            name: "resource",
            data: [
              {
                name: "how car make",
                description:
                  "test data test test data test test data test test data test test data test",
              },
              {
                name: "how carss make",
                description:
                  "test data test test data test test data test test data test test data test",
              },
              {
                name: "how bicycle make",
                description:
                  "test data test test data test test data test test data test test data test",
              },
              {
                name: "how bicycle make",
                description:
                  "test data test test data test test data test test data test test data test",
              },
              {
                name: "how bicycle make",
                description:
                  "test data test test data test test data test test data test test data test",
              },
              {
                name: "how bicycle make",
                description:
                  "test data test test data test test data test test data test test data test",
              },
            ],
          },
          {
            name: "keyword",
            data: [
              {
                name: "how much mobil in jakarta",
                description:
                  "test data test test data test test data test test data test test data test",
              },
              {
                name: "how bicycle works",
                description:
                  "test data test test data test test data test test data test test data test",
              },
              {
                name: "how bicycle works",
                description:
                  "test data test test data test test data test test data test test data test",
              },
              {
                name: "how bicycle works",
                description:
                  "test data test test data test test data test test data test test data test",
              },
            ],
          },
        ],
        filteredResources: [],
        overlay: false,
        btn: null,
        search: "",
      };
    },
    methods: {
      overlaySearch() {
        this.overlay = true;
      },
      filterResources() {
        const searchText = this.search.toLowerCase();
        this.filteredResources = this.resources.map((group) => ({
          name: group.name,
          filteredData: group.data.filter((entry) =>
            entry.name.toLowerCase().includes(searchText)
          ),
        }));
      },

      highlightMatch(text) {
        if (!this.search) return text;
        const regex = new RegExp(`(${this.search})`, "gi");
        return text.replace(regex, "<b>$1</b>");
      },
    },
  };
</script>

<style lang="scss" scoped>
  @import "./style.scss";
</style>
