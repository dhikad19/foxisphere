<template>
  <div class="tierlist-container">
    <div class="tierlist-wrapper">
      <div class="tierlist-filter">

      </div>
      <div class="tierlist-content" >
        <div>
          <v-row dense class="mb-6 mt-6" style="margin-left: 74px; margin-right: 0px">
            <v-col
              v-for="(item, i) in categoriesList"
              :key="i"
              cols="3"
              class="text-center"
            >
              <v-card :color="item.backgroundColor" height="50" flat outlined style="border-radius: 0px;" class="d-flex align-center justify-center">
                <v-icon :color="item.color" size="20" class="mr-2">{{item.icon}}</v-icon>
                <span :style="{'color': item.color}" class="categories-title">{{ item.name }}</span>
              </v-card>
            </v-col>
          </v-row>

          <div v-for="(tier, index) in tiers" :key="index" class="d-flex" style="height: 100%">
            <div style="width: 100%" class="d-flex align-center justify-center mb-4">
              <v-card 
                :color="tier.color" 
                class="d-flex align-center justify-center mr-6" 
                flat
                style="border-radius: 0px;"
                height="100%"
                min-width="50"
              >
                <p class="tier-ranks">{{tier.name}}</p>
              </v-card>

              <div
                v-for="(item, i) in categoriesList"
                :key="i"
                class="text-center"
                style="width: calc(25% - 17px); height: 100%"
              >
                <v-card :color="item.backgroundColor" height="100%" flat class="pa-3" style="border-radius: 0px;">
                  <v-row dense>
                    <v-col
                      v-for="character in filteredCharacters(tier.name, item.name)"
                      :key="character.id"
                      cols="6"
                    >
                      <v-menu 
                        transition="slide-x-transition" 
                        open-on-hover 
                        offset="10" 
                        open-delay="0" 
                        close-delay="0" 
                        location="top center"
                      >
                        <template v-slot:activator="{ props }">
                          <v-card flat class="pa-1" color="transparent" v-bind="props" style="cursor: pointer">
                            <div style="background: linear-gradient(180deg, #885550,#c9a36a 53%);">
                              <v-img :src="character.image" />
                            </div>
                          </v-card>
                        </template>
                        <v-card color="#000" class="pa-3" width="100%">
                          <v-row dense>
                            <v-col cols="6">
                              <div class="d-flex align-center justify-center flex-column pa-2">
                                <v-img height="30" min-width="30" :src="character.combatType.image"></v-img>
                                <p>{{character.combatType.name}}</p>
                              </div>
                            </v-col>
                            <v-col cols="6">
                              <div class="d-flex align-center justify-center flex-column pa-2">
                                <v-img height="30" min-width="30" :src="character.path.image"></v-img>
                                <p>{{character.path.name}}</p>
                              </div>
                            </v-col>
                          </v-row>
                        </v-card>
                      </v-menu>
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
          combatType: {
            name: 'imaginary',
            image: 'https://i.ibb.co.com/Swk1ZXzq/Type-Imaginary-2.png'
          },
          categories: 'dps',
          rarity: '5',
          path: {
            name: 'destruction',
            image: 'https://i.ibb.co.com/xtFZ6gxX/Path-Destruction-1.png'
          },
          image: 'https://res.cloudinary.com/dqaylwrrx/image/upload/v1742193370/Games/Characters/mydei_qxxylj.png',
          games: 'honkai-star-rail',
          id: '1',
          tier: 'SSS'
        },
        {
          name: 'tribbie',
          new: true,
          combatType: {
            name: 'imaginary',
            image: 'https://i.ibb.co.com/Swk1ZXzq/Type-Imaginary-2.png'
          },
          categories: 'support',
          rarity: '5',
          path: {
            name: 'destruction',
            image: 'https://i.ibb.co.com/xtFZ6gxX/Path-Destruction-1.png'
          },
          image: 'https://res.cloudinary.com/dqaylwrrx/image/upload/v1742193370/Games/Characters/mydei_qxxylj.png',
          games: 'honkai-star-rail',
          id: '2',
          tier: 'SS'
        },
        {
          name: 'mydei',
          new: false,
          combatType: {
            name: 'imaginary',
            image: 'https://i.ibb.co.com/Swk1ZXzq/Type-Imaginary-2.png'
          },
          categories: 'dps',
          rarity: '5',
          path: {
            name: 'destruction',
            image: 'https://i.ibb.co.com/xtFZ6gxX/Path-Destruction-1.png'
          },
          image: 'https://res.cloudinary.com/dqaylwrrx/image/upload/v1742193370/Games/Characters/mydei_qxxylj.png',
          games: 'honkai-star-rail',
          id: '3',
          tier: 'S'
        },
        {
          name: 'mydei',
          new: false,
          combatType: {
            name: 'imaginary',
            image: 'https://i.ibb.co.com/Swk1ZXzq/Type-Imaginary-2.png'
          },
          categories: 'dps',
          rarity: '5',
          path: {
            name: 'destruction',
            image: 'https://i.ibb.co.com/xtFZ6gxX/Path-Destruction-1.png'
          },
          image: 'https://res.cloudinary.com/dqaylwrrx/image/upload/v1742193370/Games/Characters/mydei_qxxylj.png',
          games: 'honkai-star-rail',
          id: '3',
          tier: 'S'
        },
        {
          name: 'lingsha',
          new: false,
          combatType: {
            name: 'imaginary',
            image: 'https://i.ibb.co.com/Swk1ZXzq/Type-Imaginary-2.png'
          },
          categories: 'healer',
          rarity: '5',
          path: {
            name: 'destruction',
            image: 'https://i.ibb.co.com/xtFZ6gxX/Path-Destruction-1.png'
          },
          image: 'https://res.cloudinary.com/dqaylwrrx/image/upload/v1742193370/Games/Characters/mydei_qxxylj.png',
          games: 'honkai-star-rail',
          id: '4',
          tier: 'A'
        },
        {
          name: 'lingsha',
          new: false,
          combatType: {
            name: 'imaginary',
            image: 'https://i.ibb.co.com/Swk1ZXzq/Type-Imaginary-2.png'
          },
          categories: 'shielder',
          rarity: '5',
          path: {
            name: 'destruction',
            image: 'https://i.ibb.co.com/xtFZ6gxX/Path-Destruction-1.png'
          },
          image: 'https://res.cloudinary.com/dqaylwrrx/image/upload/v1742193370/Games/Characters/mydei_qxxylj.png',
          games: 'honkai-star-rail',
          id: '4',
          tier: 'A'
        },
        {
          name: 'lingsha',
          new: false,
          combatType: {
            name: 'imaginary',
            image: 'https://i.ibb.co.com/Swk1ZXzq/Type-Imaginary-2.png'
          },
          categories: 'healer',
          rarity: '5',
          path: {
            name: 'destruction',
            image: 'https://i.ibb.co.com/xtFZ6gxX/Path-Destruction-1.png'
          },
          image: 'https://res.cloudinary.com/dqaylwrrx/image/upload/v1742193370/Games/Characters/mydei_qxxylj.png',
          games: 'honkai-star-rail',
          id: '4',
          tier: 'B'
        },
        {
          name: 'lingsha',
          new: false,
          combatType: {
            name: 'imaginary',
            image: 'https://i.ibb.co.com/Swk1ZXzq/Type-Imaginary-2.png'
          },
          categories: 'healer',
          rarity: '5',
          path: {
            name: 'destruction',
            image: 'https://i.ibb.co.com/xtFZ6gxX/Path-Destruction-1.png'
          },
          image: 'https://res.cloudinary.com/dqaylwrrx/image/upload/v1742193370/Games/Characters/mydei_qxxylj.png',
          games: 'honkai-star-rail',
          id: '4',
          tier: 'C'
        },
      ],
      tiers: [
        {name: 'SSS', color: '#ef5350'}, 
        {name: 'SS', color: '#ffc300'},
        {name: 'S', color: '#FFDF7F'},
        {name: 'A', color: '#FFFF7F'}, 
        {name: 'B', color: '#009E60'},
        {name: 'C', color: '#6495ED'}
      ],
      categories: ['dps', 'support', 'healer', 'shielder'],
      categoriesList: [
        {
          name: 'dps',
          icon: 'mdi-sword-cross',
          color: '#ef5350',
          backgroundColor: '#000000'
        },
        {
          name: 'support',
          icon: 'mdi-chevron-double-up',
          color: '#ffc300',
          backgroundColor: '#4f4f4f'
        },
        {
          name: 'healer',
          icon: 'mdi-medical-bag',
          color: '#009E60',
          backgroundColor: '#000000'
        },
        {
          name: 'shielder',
          icon: 'mdi-shield',
          color: '#6495ED',
          backgroundColor: '#4f4f4f'
        },
      ],
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
@import '../../../style.scss';

.v-row--dense > [class*="v-col-"] {
  padding: 0px !important;
}
</style>