<template>
  <div class="game-comtainer">
    <div class="title mb-3">
      <p>Game Populer</p>
    </div>
    
    <div v-for="(item, i) in gameList.slice(0, 5)" :key="i">
      <p :class="themeState.isDarkMode ? 'list-dark' : 'list'">
        <span style="color: #ff7800">#{{i + 1}}</span> 
        {{item.name}}
      </p>
    </div>
  </div>
</template>

<script>
import { themeState } from "../../../theme";
export default {
  name: 'GameComponent',
  data() {
    return {
      themeState,
      gameList: [
        {
          id: '1',
          image: 'https://res.cloudinary.com/dqaylwrrx/image/upload/v1740473419/Games/reverse-1999_voa7td.png',
          name: 'Reverse: 1999'
        },
        {
          id: '2',
          image: 'https://res.cloudinary.com/dqaylwrrx/image/upload/v1740469634/Games/arknights_oz6wzl.png',
          name: 'Arknights'
        },
        {
          id: '3',
          image: 'https://res.cloudinary.com/dqaylwrrx/image/upload/v1740469629/Games/epic-seven_psohrd.png',
          name: 'Epic Seven'
        },
        {
          id: '4',
          image: 'https://res.cloudinary.com/dqaylwrrx/image/upload/v1740466847/Games/wuthering-waves_gpltcq.png',
          name: 'Wuthering Waves'
        },
        {
          id: '5',
          image: 'https://res.cloudinary.com/dqaylwrrx/image/upload/v1740469635/Games/honkai-impact_tgn56j.png',
          name: 'Honkai Impact'
        },
        {
          id: '6',
          image: 'https://res.cloudinary.com/dqaylwrrx/image/upload/v1739259775/Games/zzz_rceyrv.png',
          name: 'Zenless Zone Zero'
        },
        {
          id: '7',
          image: 'https://res.cloudinary.com/dqaylwrrx/image/upload/v1739259648/Games/genhin-impact_tvqxbi.png',
          name: 'Genshin Impact'
        },
        {
          id: '8',
          image: 'https://res.cloudinary.com/dqaylwrrx/image/upload/v1739259649/Games/star-rail_esjixp.png',
          name: 'Honkai: Star Rail'
        },
        {
          id: '9',
          image: 'https://res.cloudinary.com/dqaylwrrx/image/upload/v1740469629/Games/summoners-war_f5u2md.png',
          name: 'Summoners War'
        },
        {
          id: '10',
          image: 'https://res.cloudinary.com/dqaylwrrx/image/upload/v1740469636/Games/Group_63_whjhdt.png',
          name: 'Guardian Tales'
        },
        {
          id: '11',
          image: 'https://res.cloudinary.com/dqaylwrrx/image/upload/v1740469634/Games/brown-dust2_aceotn.png',
          name: 'Brown Dust 2'
        },
        {
          id: '12',
          image: 'https://res.cloudinary.com/dqaylwrrx/image/upload/v1740473418/Games/afk-journey_pivr1a.png',
          name: 'AFK Journey'
        },
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@use '../style.scss'
</style>