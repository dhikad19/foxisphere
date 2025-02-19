<template>
  <div class="search-container">
    <div class="search-container__mobile">
      <div class="search-wrapper d-flex">
        <v-icon 
          @click="goBack()" 
          size="20" 
          style="margin-top: 11px; margin-left: 9px" 
          class="mr-2" 
          color="#6f6f6f"
        >
          mdi-arrow-left
        </v-icon>
        <div class="text-field-container">
          <v-text-field
            variant="solo"
            autofocus
            v-model="search"
            density="compact"
            placeholder="Cari..."
            @input="filterResources"
            hide-details
            clearable
          >
          </v-text-field>
        </div>
      </div>
      <v-card
        v-if="search != '' && search != null"
        class="card-search"
        variant="text"
      >
        <div class="search-item__container">
          <div v-if="filteredResources[0]?.filteredData.length != 0">
            <p style="color: grey; font-weight: 500; font-size: 16px">Keyword</p>
            <div class="mb-3">
              <div
                style="color: black"
                v-for="(item, i) in filteredResources[0]?.filteredData"
                :key="i">
                <div class="search-item">
                  <p
                    class="search-item__title"
                    v-html="highlightMatch(item.name)">
                  </p>
                  <p class="search-item__desc">
                    {{ item.description }}
                  </p>
                  
                </div>
              </div>
            </div>
            <div
              class="mt-3 mb-4">
            </div>
          </div>
          <div v-if="filteredResources[1]?.filteredData.length != 0"> 
            <p style="color: grey; font-weight: 500; font-size: 16px">Resource</p>
            <div class="mb-3">
              <div
                style="color: black"
                v-for="(item, i) in filteredResources[1]?.filteredData"
                :key="i">
                <div class="search-item">
                  <p
                    class="search-item__title"
                    v-html="highlightMatch(item.name)">
                  </p>
                  <p class="search-item__desc">{{ item.description }}</p>
                </div>
              </div>
            </div>
            <div class="mt-3"></div>
          </div>
        </div>
      </v-card>
    </div>
    <div class="search-container__desktop">
      <div class="text-field-container">
        <v-text-field
          variant="solo"
          autofocus
          v-model="search"
          density="compact"
          prepend-inner-icon="mdi-magnify"
          placeholder="Cari..."
          @input="filterResources"
          hide-details
          clearable
        >
        </v-text-field>
      </div>
    </div>
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
        windowWidth: window.innerWidth,
        btn: null,
        search: "",
      };
    },

    watch: {
      search(val) {
        console.log(val)
      }
    },

    created() {
      window.addEventListener('resize', this.updateWindowWidth);
    },

    beforeUnmount() {
      window.removeEventListener('resize', this.updateWindowWidth);
    },

    methods: {
      updateWindowWidth() {
        this.windowWidth = window.innerWidth;
      },

      goBack() {
        this.$router.go(-1)
      },

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

        // Escape special regex characters using a function that only escapes necessary characters
        // eslint-disable-next-line no-useless-escape
        const escapedSearch = this.search.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, '\\$1');
        const regex = new RegExp(`(${escapedSearch})`, "gi");
        return text.replace(regex, "<b>$1</b>");
      }
    },
  };
</script>

<style lang="scss" scoped>
  @use "./style.scss";
</style>
