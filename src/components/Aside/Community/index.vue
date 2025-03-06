<template>
  <div class="community-container">
    <div class="title mb-4">
      <p>Saran Komunitas</p>
    </div>

    <div 
      class="d-flex mb-3 justify-space-between" 
      style="width: 100%" 
      v-for="(item, i) in communityList" 
      :key="i"
    >
      <v-avatar size="35" class="mr-3">
        <div class="community-background-image">
          <v-img :src="item.image"></v-img>
        </div>
      </v-avatar>
      <div class="mr-4">
        <p class="community-title">{{item.name}}</p>
        <p class="community-description">{{item.description}}</p>
      </div>
      <div @click="follow(i)" :class="item.followed ? 'following' : 'follow'">
        <p>{{item.followed ? 'Mengikuti' : 'Ikuti'}}</p>
      </div>
    </div>

    <p 
      :class="{'title-dark': themeState.isDarkMode}" 
      class="see-more"
    >
      Lihat komunitas lainnya
    </p>
  </div>
</template>

<style lang="scss" scoped>
@use '../style.scss';
</style>

<script>
import { themeState } from "../../../theme";
export default {
  name: 'CommunityComponent',
  data() {
    return {
      themeState,
      communityList: [
        {
          name: 'Honkai Leak',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, autem. Minima, possimus.',
          id: '1',
          image: 'https://res.cloudinary.com/dqaylwrrx/image/upload/v1739259649/Games/star-rail_esjixp.png',
          game: {
            image: 'https://res.cloudinary.com/dqaylwrrx/image/upload/v1739259649/Games/star-rail_esjixp.png',
            name: 'Honkai: Star Rails'
          },
          followed: false
        },
        {
          name: 'Genshin Impact Leak',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, autem. Minima, possimus.',
          id: '2',
          image: 'https://res.cloudinary.com/dqaylwrrx/image/upload/v1739259649/Games/star-rail_esjixp.png',
          game: {
            image: 'https://res.cloudinary.com/dqaylwrrx/image/upload/v1739259648/Games/genhin-impact_tvqxbi.png',
            name: 'Genshin Impact'
          },
          followed: false
        },
        {
          name: 'Genshin Impact Leak',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, autem. Minima, possimus.',
          id: '2',
          image: 'https://res.cloudinary.com/dqaylwrrx/image/upload/v1739259649/Games/star-rail_esjixp.png',
          game: {
            image: 'https://res.cloudinary.com/dqaylwrrx/image/upload/v1739259648/Games/genhin-impact_tvqxbi.png',
            name: 'Genshin Impact'
          },
          followed: false
        },
      ]
    }
  },
  methods: {
    follow(i) {
      this.communityList[i].followed = !this.communityList[i].followed
    }
  }
}
</script>