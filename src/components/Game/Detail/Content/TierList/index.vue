<template>
  <div class="tierlist-container">
    <div class="tierlist-wrapper">
      <div class="tierlist-filter">

      </div>
      <div class="tierlist-content" >
        <div>
          <v-row dense class="mb-6 mt-6" style="margin-left: 72px">
            <v-col
              v-for="category in categories"
              :key="category"
              cols="4"
              class="text-center"
            >
              <v-card outlined>
                <v-card-title>{{ category }}</v-card-title>
              </v-card>
            </v-col>
          </v-row>

          <div v-for="(tier, index) in tiers" :key="index" class="d-flex" style="height: 100%">
            <div style="width: 100%" class="d-flex align-center justify-center">
              <v-card 
                :color="tier.color" 
                class="d-flex align-center justify-center mr-6" 
                flat
                height="100%"
                width="55"
              >
              {{ tier.name }}
              </v-card>

              <div
                v-for="category in categories" :key="category"
                class="text-center"
                style="width: 33%"
              >
                <v-card>
                  <v-card-title> <!-- Place the filtered characters here --> </v-card-title>
                  <v-row dense>
                    <v-col
                      v-for="character in filteredCharacters(tier.name, category)"
                      :key="character.id"
                      cols="6"
                    >
                      <v-card>
                        <div style="background: linear-gradient(180deg, #885550,#c9a36a 53%);">
                          <v-img :src="character.image" />
                        </div>
                      </v-card>
                      <v-card-title>{{ character.name }}</v-card-title>
                      <v-card-subtitle>{{ character.combatType }}</v-card-subtitle>
                    </v-col>
                  </v-row>
                </v-card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TierListComponent',
  data() {
    return {
      tierList: [
        {
          name: 'mydei',
          new: true,
          combatType: 'imaginary',
          categories: 'dps',
          rarity: '5',
          path: 'destruction',
          image: 'https://res.cloudinary.com/dqaylwrrx/image/upload/v1742193370/Games/Characters/mydei_qxxylj.png',
          games: 'honkai-star-rail',
          id: '1',
          tier: 'SSS'
        },
        {
          name: 'tribbie',
          new: true,
          combatType: 'imaginary',
          categories: 'support',
          rarity: '5',
          path: 'destruction',
          image: 'https://res.cloudinary.com/dqaylwrrx/image/upload/v1742193370/Games/Characters/mydei_qxxylj.png',
          games: 'honkai-star-rail',
          id: '2',
          tier: 'SS'
        },
        {
          name: 'mydei',
          new: false,
          combatType: 'imaginary',
          categories: 'dps',
          rarity: '5',
          path: 'destruction',
          image: 'https://res.cloudinary.com/dqaylwrrx/image/upload/v1742193370/Games/Characters/mydei_qxxylj.png',
          games: 'honkai-star-rail',
          id: '3',
          tier: 'S'
        },
        {
          name: 'mydei',
          new: false,
          combatType: 'imaginary',
          categories: 'dps',
          rarity: '5',
          path: 'destruction',
          image: 'https://res.cloudinary.com/dqaylwrrx/image/upload/v1742193370/Games/Characters/mydei_qxxylj.png',
          games: 'honkai-star-rail',
          id: '3',
          tier: 'S'
        },
        {
          name: 'lingsha',
          new: false,
          combatType: 'imaginary',
          categories: 'sustain',
          rarity: '5',
          path: 'destruction',
          image: 'https://res.cloudinary.com/dqaylwrrx/image/upload/v1742193370/Games/Characters/mydei_qxxylj.png',
          games: 'honkai-star-rail',
          id: '4',
          tier: 'A'
        },
        {
          name: 'lingsha',
          new: false,
          combatType: 'imaginary',
          categories: 'sustain',
          rarity: '5',
          path: 'destruction',
          image: 'https://res.cloudinary.com/dqaylwrrx/image/upload/v1742193370/Games/Characters/mydei_qxxylj.png',
          games: 'honkai-star-rail',
          id: '4',
          tier: 'A'
        },
        {
          name: 'lingsha',
          new: false,
          combatType: 'imaginary',
          categories: 'sustain',
          rarity: '5',
          path: 'destruction',
          image: 'https://res.cloudinary.com/dqaylwrrx/image/upload/v1742193370/Games/Characters/mydei_qxxylj.png',
          games: 'honkai-star-rail',
          id: '4',
          tier: 'A'
        },
      ],
      tiers: [
        {name: 'SSS', color: 'red'}, 
        {name: 'SS', color: 'green'},
        {name: 'S', color: 'yellow'},
        {name: 'A', color: 'blue'}, 
        {name: 'B', color: 'orange'},
        {name: 'C', color: 'grey'}
      ],
      categories: ['dps', 'support', 'sustain'],
    }
  },
  methods: {
    filteredCharacters(tier, category) {
      return this.tierList.filter(character => character.tier === tier && character.categories === category);
    },
  }
}
</script>

<style lang="scss" scoped>
.v-row--dense > [class*="v-col-"] {
  padding: 0px !important;
}
</style>