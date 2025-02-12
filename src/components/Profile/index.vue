<template>
  <div class="profile-container">
    <v-row dense>
      <v-col md="8" sm="12" class="left-profile">
        <div class="profile-content">
          <div class="profile-top-content">
            <div class="profile-banner"></div>
          </div>
          <div class="profile-bottom-content">
            <div class="profile-avatar">
              <v-avatar size="100">
                <v-img src="https://randomuser.me/api/portraits/men/82.jpg" >
                </v-img>
              </v-avatar>
            </div>
            <div class="profile-description">
              <div style="width: 100%" class="d-flex align-start justify-space-between">
                <p class="profile-name">Dwi Andika</p>
                <div class="profile-edit-button mr-3">
                  <v-img class="mr-2" src="/images/icon/edit.png" max-height="18px" min-width="18px"></v-img>
                  Edit Profil
                </div>
              </div>
              <p class="profile-username">@dikad19</p>

              <div class="profile-badge mt-3">
                Foxon Legends
              </div>

              <p class="game-list-title mt-3">Memainkan atau mengikuti group:</p>
              <div class="d-flex align-center justify-space-between mt-1">
                <div class="profile-game-list d-flex">
                  <div class="profile-game-icon" v-for="(item, i) in gameList" :key="i">
                    <v-img :src='item.gameIcon' height max-height="25px" min-width="25px"></v-img>
                  </div>
                </div>
                <div class="bookmark-icon mr-3">
                  <v-icon color="#4f4f4f">
                    mdi-bookmark-outline
                  </v-icon>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="profile-content-mobile">
          <div class="profile-top-content">
            <div class="profile-banner"></div>
          </div>
          <div class="profile-bottom-content-mobile">
            <div class="profile-avatar">
              <v-avatar size="80">
                <v-img src="https://randomuser.me/api/portraits/men/82.jpg" >
                </v-img>
              </v-avatar>
            </div>

            <div class="profile-description">
              <div style="width: 100%" class="d-flex align-start justify-space-between">
                <div class="ml-3">
                  <p class="profile-name">Dwi Andika</p>
                  <p class="profile-username mt-1">@dikad19</p>
                </div>
                <div class="profile-edit-button mr-3">
                  <v-img class="mr-2" src="/images/icon/edit.png" max-height="18px" min-width="18px"></v-img>
                  Edit Profil
                </div>
              </div>
            </div>

            <div style="width: 100%" class="ml-6 mt-2">
              <p class="game-list-title mt-3">Memainkan atau mengikuti group:</p>
              <div class="d-flex align-center justify-space-between mt-1">
                <div class="profile-game-list d-flex">
                  <div class="profile-game-icon" v-for="(item, i) in gameList.slice(0, 5)" :key="i">
                    <v-img :src='item.gameIcon' height max-height="25px" min-width="25px"></v-img>
                  </div>
                  <div class="profile-game-plus" v-if="gameList.length > 5">
                    <p class="plus-game-list">
                      +{{gameList.length - 5}}
                    </p>
                  </div>
                </div>
                <div class="bookmark-icon mr-6">
                  <v-icon color="#4f4f4f">
                    mdi-bookmark-outline
                  </v-icon>
                </div>
              </div>
            </div>
            
            <div class="mt-10" style="width: 100%">
              <v-divider class="mb-2"></v-divider>
              <div class="profile-info pl-8 pr-8 mb-2" style="text-align: center">
                <div>
                  <p><b>{{accountInfo.post}}</b></p>
                  Postingan
                </div>
                
                <div>
                  <p><b>{{accountInfo.folowers}}</b></p>
                  Pengikut
                </div>
                
                <div>
                  <p><b>{{accountInfo.folowing}}</b></p>
                  Diikuti
                </div>
                
                <div>
                  <p><b>{{accountInfo.upvote}}</b></p>
                  Upvote
                </div>
              </div>
              <v-divider></v-divider>
            </div>

          </div>
        </div>

        <div class="profile-tab">
          <v-tabs
            v-model="tab"
            bg-color="transparent"
          >
            <v-tab
              style="text-transform: capitalize; letter-spacing: normal"
              v-for="item in tabList"
              :key="item"
              :text="item.tabName"
              :value="item.tabValue"
            >
            </v-tab>
          </v-tabs>
          <v-tabs-window v-model="tab" class="mt-4">
            <v-tabs-window-item
              v-for="item in tabList"
              :key="item"
              :value="item.tabValue"
            >
              <div>
                {{ item.tabName }}
              </div>
            </v-tabs-window-item>
          </v-tabs-window>
        </div>
      </v-col>
      <v-col md="4" sm="12" class="right-profile">
        <div class="right-profile-content">
          <div class="profile-info">
            <v-row dense>
              <v-col cols="6">
                <div>
                  <p class="mb-1">
                    <b>{{accountInfo.post}}</b> 
                  </p>
                  Postingan
                </div>
                <div class="pt-4">
                  <p class="mb-1">
                    <b>{{accountInfo.folowers}}</b>
                  </p>
                  Pengikut
                </div>
              </v-col>
              <v-col cols="6">
                <div>
                  <p class="mb-1">
                    <b>{{accountInfo.folowing}}</b>
                  </p>
                  Diikuti
                </div>
                <div class="pt-4">
                  <p class="mb-1">
                    <b>{{accountInfo.upvote}}</b>
                  </p>
                  Upvote
                </div>
              </v-col>
            </v-row>
          </div>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'ProfileComponents',
  data() {
    return {
      gameList: [
        {
          gameName: 'Honkai Star Rail',
          gameIcon: 'https://res.cloudinary.com/dqaylwrrx/image/upload/v1739259649/Games/star-rail_esjixp.png',
          gameId: ''
        },
        {
          gameName: 'Genshin Impact',
          gameIcon: 'https://res.cloudinary.com/dqaylwrrx/image/upload/v1739259648/Games/genhin-impact_tvqxbi.png',
          gameId: ''
        },
        {
          gameName: 'Zenless Zone Zero',
          gameIcon: 'https://res.cloudinary.com/dqaylwrrx/image/upload/v1739259775/Games/zzz_rceyrv.png',
          gameId: ''
        },
        {
          gameName: 'Mobile Legends',
          gameIcon: 'https://res.cloudinary.com/dqaylwrrx/image/upload/v1739259648/Games/mobile-legends_rd88fx.png',
          gameId: ''
        },
        {
          gameName: 'League of Legends : Wild Rift',
          gameIcon: 'https://res.cloudinary.com/dqaylwrrx/image/upload/v1739259648/Games/wild-rift_gptk3p.png',
          gameId: ''
        },
        {
          gameName: 'Point Blank',
          gameIcon: 'https://res.cloudinary.com/dqaylwrrx/image/upload/v1739259648/Games/point-blank_iazpzk.png',
          gameId: ''
        },
      ],
      accountInfo: {
        post: 85,
        folowing: 100,
        folowers: 500,
        upvote: 1050
      },
      tab: 'overview',
      tabList: [
        {
          tabName: 'Tinjauan',
          tabValue: 'overview'
        },
        {
          tabName: 'Grup',
          tabValue: 'group'
        },
        {
          tabName: 'Postingan',
          tabValue: 'post'
        },
        {
          tabName: 'Game',
          tabValue: 'game'
        },
        {
          tabName: 'Event',
          tabValue: 'event'
        },
        {
          tabName: 'Lainnya',
          tabValue: 'more'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@use 'style.scss';
</style>