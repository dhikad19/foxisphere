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

              <!-- <div class="social-list">
                <div class="profile-social-icon">
                  <v-icon color="#4f4f4f" size="19">mdi-instagram</v-icon>
                </div>
                <div class="profile-social-icon">
                  <v-icon color="#4f4f4f" size="19">mdi-facebook</v-icon>
                </div>
                <div class="profile-social-icon">
                  <v-icon color="#4f4f4f" size="19">mdi-discord</v-icon>
                </div>
                <div class="profile-social-icon">
                  <v-icon color="#4f4f4f" size="19">mdi-youtube</v-icon>
                </div>
                <div class="profile-social-icon">
                  <v-icon color="#4f4f4f" size="19">mdi-twitter</v-icon>
                </div>
              </div> -->

              <!-- <div class="pr-3">
                <div 
                  @click="expandMenu = !expandMenu" 
                  class="profile-details-btn pt-3 pb-3"
                  :style="expandMenu ? 'border-bottom-left-radius: 0px; border-bottom-right-radius: 0px;' : 'border-bottom-left-radius: 6px; border-bottom-right-radius: 6px;'"
                >
                  <p class="pl-3">
                    Detail Profil
                  </p>
                  <v-icon class="pr-4" v-if="expandMenu">mdi-chevron-up</v-icon>
                  <v-icon class="pr-4" v-else>mdi-chevron-down</v-icon>
                </div>

                <v-expand-transition>
                  
                </v-expand-transition>
              </div> -->

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
                  <div class="d-flex align-center mt-1">
                    <p class="profile-username">@dikad19</p>
                    <v-img style="margin-bottom: 2px" src='/images/icon/check.png' max-height="16px" max-width="16px" min-width="16px"></v-img>
                  </div>
                </div>
                <div class="profile-edit-button mr-3">
                  <v-img class="mr-2" src="/images/icon/edit.png" max-height="18px" min-width="18px"></v-img>
                  Edit Profil
                </div>
              </div>
            </div>

            <div class="profile-badge mt-3">
              Foxon Legends
            </div>

            <div class="social-list">
              <div class="profile-social-icon">
                <v-icon color="#4f4f4f" size="19">mdi-instagram</v-icon>
              </div>
              <div class="profile-social-icon">
                <v-icon color="#4f4f4f" size="19">mdi-facebook</v-icon>
              </div>
              <div class="profile-social-icon">
                <v-icon color="#4f4f4f" size="19">mdi-discord</v-icon>
              </div>
              <div class="profile-social-icon">
                <v-icon color="#4f4f4f" size="19">mdi-youtube</v-icon>
              </div>
              <div class="profile-social-icon">
                <v-icon color="#4f4f4f" size="19">mdi-twitter</v-icon>
              </div>
            </div>
            <div 
              @click="expandMenu = !expandMenu" 
              class="profile-details-btn pt-3 pb-3"
              :style="expandMenu ? 'border-bottom-left-radius: 0px; border-bottom-right-radius: 0px;' : 'border-bottom-left-radius: 6px; border-bottom-right-radius: 6px;'"
            >
              <p class="pl-3">
                Detail Profil
              </p>
              <v-icon class="pr-4" v-if="expandMenu">mdi-chevron-up</v-icon>
              <v-icon class="pr-4" v-else>mdi-chevron-down</v-icon>
            </div>

            <v-expand-transition>
              <v-card flat v-show="expandMenu" style="width: 100%; background-color: #4f4f4f0a; 'border-bottom-left-radius: 6px; border-bottom-right-radius: 6px;'">
                <v-divider class="mb-3"></v-divider>
                <div style="width: 100%">
                  <p class="game-list-title ml-3">Memainkan atau mengikuti group:</p>
                  <div class="d-flex align-center justify-space-between mt-1">
                    <div class="profile-game-list d-flex ml-3">
                      <div class="profile-game-icon" v-for="(item, i) in gameList.slice(0, 5)" :key="i">
                        <v-img :src='item.gameIcon' height max-height="25px" min-width="25px"></v-img>
                      </div>
                      <div class="profile-game-plus" v-if="gameList.length > 5">
                        <p class="plus-game-list" style="font-weight: 500">
                          +{{gameList.length - 5}}
                        </p>
                      </div>
                    </div>
                    <div class="bookmark-icon mr-3">
                      <v-img src="/images/icon/bookmark.png" max-height="20px" min-height="20px" max-width="20px" min-width="20px"></v-img>
                    </div>
                  </div>
                </div>
                
                <div class="mt-5 pl-3 pr-3 pb-3" style="width: 100%">
                  <div class="profile-info pt-2 pb-2 pl-8 pr-8 mb-2" style="text-align: center">
                    <div>
                      <p><b>{{accountInfo.post}}</b></p>
                      Postingan
                    </div>
                    <v-divider vertical></v-divider>
                    <div>
                      <p><b>{{accountInfo.folowers}}</b></p>
                      Pengikut
                    </div>
                    <v-divider vertical></v-divider>
                    <div>
                      <p><b>{{accountInfo.folowing}}</b></p>
                      Diikuti
                    </div>
                    <v-divider vertical></v-divider>
                    <div>
                      <p><b>{{accountInfo.upvote}}</b></p>
                      Suka
                    </div>
                  </div>
                </div>
              </v-card>
            </v-expand-transition>
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
              <div v-if="item.tabValue == 'overview'">
                
              </div>
            </v-tabs-window-item>
          </v-tabs-window>
        </div>
      </v-col>
      <v-col md="4" sm="12" class="right-profile">
        <v-card class="bottom-details-content" flat>
          <div class="pa-3">
            <div class="d-flex align-center justify-space-between mb-3" style="width: 100%">
              <b style="font-size: 14px">Motto</b>
              <div class="bookmark-icon">
                <v-img src="/images/icon/edit.png" max-height="18px" max-width="18px" min-width="18px"></v-img>
              </div>
            </div>
            <div class="bio-message">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Accusantium vero maiores recusandae eveniet quos assumenda odit nobis, 
              illo impedit neque, modi libero totam, 
              adipisci quas eligendi consectetur sit. Officiis, ipsum.
            </div>
          </div>
          <div class="pl-3 pr-3">
            <v-divider></v-divider>
          </div>

          <div class="mt-4 pl-3 pr-3 pb-3" style="width: 100%">
            <div class="profile-info pt-2 pb-2 pl-4 pr-4 mb-1" style="text-align: center">
              <v-row dense>
                <v-col cols="3">
                  <p><b>{{accountInfo.post}}</b></p>
                  Postingan
                </v-col>
                <v-col cols="3">
                  <p><b>{{accountInfo.folowers}}</b></p>
                  Pengikut
                </v-col>
                <v-col cols="3">
                  <p><b>{{accountInfo.folowing}}</b></p>
                  Diikuti
                </v-col>
                <v-col cols="3">
                  <p><b>{{accountInfo.upvote}}</b></p>
                  Suka
                </v-col>
              </v-row>
            </div>
          </div>
          <div class="pl-3 pr-3">
            <v-divider></v-divider>
          </div>
          <div style="width: 100%" class="mt-3 mb-4">
            <b class="ml-3" style="font-size: 14px">Memainkan</b>
            <div class="d-flex align-center justify-space-between mt-3">
              <div class="profile-game-list d-flex ml-3">
                <div class="profile-game-icon" v-for="(item, i) in gameList.slice(0, 5)" :key="i">
                  <v-img :src='item.gameIcon' height max-height="25px" min-width="25px"></v-img>
                </div>
                <div class="profile-game-plus" v-if="gameList.length > 5">
                  <p class="plus-game-list" style="font-weight: 500">
                    +{{gameList.length - 5}}
                  </p>
                </div>
              </div>
              <!-- <div class="bookmark-icon mr-3">
                <v-img src="/images/icon/bookmark.png" max-height="20px" min-height="20px" max-width="20px" min-width="20px"></v-img>
              </div> -->
            </div>
          </div>

          <div class="pl-3 pr-3">
            <v-divider></v-divider>
          </div>
          
        </v-card>

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
      expandMenu: false,
      accountInfo: {
        post: 85,
        folowing: 100,
        folowers: 500,
        upvote: 1050
      },
      tab: 'overview',
      tabList: [
        {
          tabName: 'Postingan',
          tabValue: 'overview'
        },
        {
          tabName: 'Komentar',
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