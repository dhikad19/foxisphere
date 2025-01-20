<template>
  <div class="list-container">
    <div :class="read ? 'list-wrapper' : 'list-wrapper__no-read'" class=" pa-3">
      <div class="d-flex justify-space-between mb-2" style="width: 100%">
        <p style="line-height: normal; font-size: 13px; font-weight: 500">{{game.gameName}}</p>
        <div :class="read ? 'dot-noactive' : 'dot-active'"></div>
      </div>
      <div class="list-content d-flex">
        <div style="margin-left: 16px; min-width: 60px" class="d-flex">
          
          <div v-if="team.length > 4" class="d-flex">
            <div v-for="item in team.slice(0, 3)" :key="item" class="d-flex">
              <v-avatar size="32" style="margin-top: 2px; margin-left: -16px;z-index: 9;">
                <v-img 
                  :src="item.image" 
                >
                </v-img>
              </v-avatar>
            </div>
            <div 
            class="d-flex align-center justify-center" 
            style="margin-left: -16px; z-index: 99;  margin-top: 2px; height: 32px; width: 32px; background-color: #ff7800; border-radius: 50%; color: white">
              <p style="font-size: 13px; font-weight: 500">
                +{{ team.length - 4 }}
              </p>
            </div>
          </div>
          <div v-else class="d-flex">
            <div v-for="item in team.slice(0, 4)" :key="item" class="d-flex">
              <v-avatar size="32" style="margin-top: 2px; margin-left: -16px;z-index: 9;">
                <v-img 
                  :src="item.image" 
                >
                </v-img>
              </v-avatar>
            </div>
          </div>
        </div>
        <div class="ml-4 d-flex justify-space-between" style="width: 100%">
          <div>
            <p class="title-content">
              <span class="user">
                {{ teamName }}
              </span>
              <!-- membalas komentar anda pada
              <span class="community">
                {{ community }}
              </span> -->
            </p>
            <div class="d-flex">
              <p style="font-size: 13px; color: grey">
                {{ formattedNames }}
              </p>
            </div>
          </div>
          
        </div>
      </div>
      <div class="d-flex mt-3" v-if="type == 'join'">
        <p class="description-content mr-4">
          {{ description }}
        </p>
        <v-btn color="green" class="mr-1" style="text-transform: capitalize; font-size: 13px; letter-spacing: normal" variant="flat">
          Terima
        </v-btn>
        <v-btn color="red" style="text-transform: capitalize; font-size: 13px; letter-spacing: normal" variant="flat">
          Tolak
        </v-btn>
      </div>
      <div class="d-flex mt-3" v-else-if="type == 'leave'">
        <p class="description-content mr-4">
          <b style="color: black">{{ user }}</b> {{ description }}
        </p>
        <!-- <v-btn color="green" class="mr-1" style="text-transform: capitalize; font-size: 13px; letter-spacing: normal" variant="flat">
          Terima
        </v-btn>
        <v-btn color="red" style="text-transform: capitalize; font-size: 13px; letter-spacing: normal" variant="flat">
          Tolak
        </v-btn> -->
      </div>
      <div class="d-flex mt-3" v-else-if="type == 'invite'">
        <p class="description-content mr-4">
          <b style="color: black">{{ user }}</b> {{ description }}
        </p>
        <!-- <v-btn color="green" class="mr-1" style="text-transform: capitalize; font-size: 13px; letter-spacing: normal" variant="flat">
          Terima
        </v-btn>
        <v-btn color="red" style="text-transform: capitalize; font-size: 13px; letter-spacing: normal" variant="flat">
          Tolak
        </v-btn> -->
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
    team: {
      type: Array,
      required: true
    },
    image: {
      type: String,
      required: true
    },
    game: {
      type: Object,
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
    teamName: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
  },
  computed: {
    // Join the first 4 names with commas, and ensure no comma on the last name
    formattedNames() {
      return this.team
        .slice(0, 4)  // Take the first 4 people
        .map((person, index, array) => {
          // Add a comma after each name except the last one
          return index < array.length - 1 ? person.name + ', ' : person.name;
        })
        .join('');
    }
  }
}
</script>