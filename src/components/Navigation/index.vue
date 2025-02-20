<template>
  <div class="navigation-container">
    <v-app>
      <v-app-bar elevation="0" :height="windowWidth >= '768' ? 65 : 55" class="app-bar-container">
        <div class="app-bar-content">
          <v-row dense>
            <v-col :cols="windowWidth <= '1080' ? '6' : '3'">
              <div class="mobile-left-navigation">
                <div @click="handleDrawer()" class="btn-drawer">
                  <v-icon color="#4f4f4f" v-if="!drawer">
                    mdi-menu
                  </v-icon>
                  <v-icon color="#4f4f4f" v-else>
                    mdi-close
                  </v-icon>
                  
                </div>
                <v-img
                  @click="handleHome()"
                  src="assets/header-new.png"
                  style="margin-bottom: 5px;"
                  class="app-bar-logo"
                  >
                </v-img>
              </div>
              <v-img
                @click="handleHome()"
                src="assets/header-new.png"
                style="margin-bottom: 2px;"
                class="app-bar-logo dekstop-left-navigation"
              >
              </v-img>
            </v-col>
            <v-col cols="6" class="search-component">
              <SearchComponent />
            </v-col>
            <v-col :cols="windowWidth <= '1080' ? '6' : '3'">
              <div v-if="hasLoggedIn" class="d-flex align-center justify-end">
                <!-- <div class="btn-header__create" v-if="windowWidth > '768'">
                  <v-icon size="24" color="#4f4f4f">mdi-magnify</v-icon>
                </div> -->
                
                <div class="btn-header__create ml-6" v-if="windowWidth > '768'">
                  <v-icon size="24" color="#4f4f4f">mdi-plus</v-icon>
                  <p class="ml-2">
                    Posting
                  </p>
                </div>
                <div v-if="windowWidth <= '1080'" class="btn-header btn-search ml-2" @click="handleChat()">
                  <v-icon size="24" color="#4f4f4f">mdi-magnify</v-icon>
                </div>
                <div class="btn-header__notification ml-2" @click="handleNotification()">
                  <v-badge color="#ff7800" :content="notificationCounter" v-if="notificationCounter > 0">
                    <v-icon size="24" color="#4f4f4f">mdi-bell-outline</v-icon>
                  </v-badge>
                  <v-icon v-else size="24" color="#4f4f4f">mdi-bell-outline</v-icon>
                </div>
                <v-menu v-if="windowWidth >= '768'" offset="14" :close-on-content-click="false">
                  <template v-slot:activator="{ props }">
                    <div class="btn-header__notification-desktop ml-2" v-bind="props">
                      <v-badge color="#ff7800" :content="notificationCounter" v-if="notificationCounter > 0">
                        <v-icon size="24" color="#4f4f4f">mdi-bell-outline</v-icon>
                      </v-badge>
                      <v-icon v-else size="24" color="#4f4f4f">mdi-bell-outline</v-icon>
                    </div>
                  </template>
                  <NotificationComponent />
                </v-menu>
                <div v-else class="btn-header ml-1 mt-1">
                  <div @click="handleNotification()" class="d-flex" style="margin-right: -8px" v-if="notificationCounter > 0">
                    <v-icon size="24" color="#4f4f4f" style="margin-right: -4px">mdi-bell-outline</v-icon>
                    <div class="badge-container"></div>
                  </div>
                  <v-icon @click="handleNotification()" v-else size="24" color="#4f4f4f" style="margin-right: -16px">mdi-bell-outline</v-icon>
                </div>
                <div v-if="windowWidth >= '768'" class="btn-header ml-2" @click="handleChat()">
                  <v-badge color="#ff7800" :content="messageCounter" v-if="messageCounter > 0">
                    <v-icon size="24" color="#4f4f4f">mdi-chat-processing-outline</v-icon>
                  </v-badge>
                  <v-icon v-else size="24" color="#4f4f4f">mdi-chat-processing-outline</v-icon>
                </div>
                <v-menu offset="14" v-if="windowWidth >= '768'" :close-on-content-click="false">
                  <template v-slot:activator="{ props }">
                    <div class="btn-header ml-2" v-bind="props">
                      <v-avatar size="30">
                        <v-img src="https://randomuser.me/api/portraits/men/82.jpg" >
                        </v-img>
                      </v-avatar>
                    </div>
                  </template>
                  <v-card width="300" style="border-radius: 6px">
                    <div class="profile-container pa-3" >
                      <div class="profile-list__user mb-3" @click="handleProfile()">
                        <v-avatar size="35" class="mr-2">
                          <v-img src="https://randomuser.me/api/portraits/men/82.jpg" >
                        </v-img>
                        </v-avatar>
                        <div>
                          <p class="username">@dikad19</p>
                          <p class="email">dwiandika01@gmail.com</p>
                        </div>
                      </div>
                      
                      <div class="profile-list">
                        <v-icon size="23" color="#4f4f4f">
                          mdi-trophy-outline
                        </v-icon>
                        <p>Pencapaian</p>
                      </div>
                      <div class="profile-list__dark-mode">
                        <v-icon size="23" color="#4f4f4f">
                          mdi-weather-night
                        </v-icon>
                        <div style="width: 100%" class="d-flex align-center justify-space-between">
                          <p>Mode Gelap</p>
                          <v-switch
                            v-model="darkMode"
                            color="#ff7800"
                            hide-details
                            inset
                          ></v-switch>
                        </div>
                      </div>
                      <div class="profile-list">
                        <v-icon size="23" color="#4f4f4f">
                          mdi-cog-outline
                        </v-icon>
                        <p>Pengaturan</p>
                      </div>
                      <div class="profile-list">
                        <v-icon size="23" color="#4f4f4f">
                          mdi-cursor-default-click-outline
                        </v-icon>
                        <p>Beriklan di <b style="color: #ff7800"> Foxon</b></p>
                      </div>
                      <v-divider class="mt-3 mb-3"></v-divider>
                      <div class="profile-list">
                        <v-icon size="23" color="#4f4f4f">
                          mdi-headset
                        </v-icon>
                        <p>Dukungan</p>
                      </div>
                      <div class="profile-list">
                        <v-icon size="23" color="#4f4f4f">
                          mdi-help-circle-outline
                        </v-icon>
                        <p>Pusat Bantuan</p>
                      </div>
                      <v-divider class="mt-3 mb-3"></v-divider>
                      <div class="profile-list">
                        <v-icon size="23" color="#4f4f4f">
                          mdi-logout
                        </v-icon>
                        <p>Keluar</p>
                      </div>
                    </div>
                  </v-card>
                </v-menu>
              </div>
              <div v-else>
                <v-btn
                  variant="outlined"
                  style="text-transform: capitalize; letter-spacing: normal"
                  color="#FF7800"
                  class="ml-2"
                  @click="signIn()"
                  >Masuk</v-btn
                >
                <template v-if="$vuetify.display.mdAndUp">
                  <v-btn
                    @click="signUp()"
                    variant="flat"
                    style="text-transform: capitalize; letter-spacing: normal"
                    color="#FF7800"
                    >Daftar</v-btn
                  >
                </template>
              </div>
            </v-col>
          </v-row>
        </div>
      </v-app-bar>
      <v-layout>
        <v-navigation-drawer
          app
          :fixed="windowWidth <= '1080' ? false : true"
          v-model="drawer"
          :rail="rail"
          class="navigation-drawer-content"
          width="270"
          :permanent="windowWidth <= '1080' ? false : true"
          :temporary="windowWidth <= '1080' ? true : false"
          @click="rail = false"
        >
        <div style="margin-top: 0px;">
          <!-- <v-list-item
            prepend-avatar="https://randomuser.me/api/portraits/men/85.jpg"
            title="John Leider"
            nav
          >
            <template v-slot:append>
              <v-btn
                icon="mdi-chevron-left"
                variant="text"
                @click.stop="rail = !rail"
              ></v-btn>
            </template>
          </v-list-item> -->
  
          <v-list density="compact" nav>
            <v-list-item prepend-icon="mdi-home-city" title="Home" value="home"></v-list-item>
            <v-list-item prepend-icon="mdi-account" title="My Account" value="account"></v-list-item>
            <v-list-item prepend-icon="mdi-account-group-outline" title="Users" value="users"></v-list-item>
            <v-list-item prepend-icon="mdi-home-city" title="Home" value="home"></v-list-item>
            <v-list-item prepend-icon="mdi-account" title="My Account" value="account"></v-list-item>
            <v-list-item prepend-icon="mdi-account-group-outline" title="Users" value="users"></v-list-item>
            <v-list-item prepend-icon="mdi-home-city" title="Home" value="home"></v-list-item>
            <v-list-item prepend-icon="mdi-account" title="My Account" value="account"></v-list-item>
            <v-list-item prepend-icon="mdi-account-group-outline" title="Users" value="users"></v-list-item>
            <v-list-item prepend-icon="mdi-home-city" title="Home" value="home"></v-list-item>
            <v-list-item prepend-icon="mdi-account" title="My Account" value="account"></v-list-item>
            <v-list-item prepend-icon="mdi-account-group-outline" title="Users" value="users"></v-list-item>
            <v-list-item prepend-icon="mdi-home-city" title="Home" value="home"></v-list-item>
            <v-list-item prepend-icon="mdi-account" title="My Account" value="account"></v-list-item>
            <v-list-item prepend-icon="mdi-account-group-outline" title="Users" value="users"></v-list-item>
            <v-list-item prepend-icon="mdi-home-city" title="Home" value="home"></v-list-item>
            <v-list-item prepend-icon="mdi-account" title="My Account" value="account"></v-list-item>
            <v-list-item prepend-icon="mdi-account-group-outline" title="Users" value="users"></v-list-item>
            <v-list-item prepend-icon="mdi-home-city" title="Home" value="home"></v-list-item>
            <v-list-item prepend-icon="mdi-account" title="My Account" value="account"></v-list-item>
            <v-list-item prepend-icon="mdi-account-group-outline" title="Users" value="users"></v-list-item>
            <v-list-item prepend-icon="mdi-home-city" title="Home" value="home"></v-list-item>
            <v-list-item prepend-icon="mdi-account" title="My Account" value="account"></v-list-item>
            <v-list-item prepend-icon="mdi-account-group-outline" title="Users" value="users"></v-list-item>
            <v-list-item prepend-icon="mdi-home-city" title="Home" value="home"></v-list-item>
            <v-list-item prepend-icon="mdi-account" title="My Account" value="account"></v-list-item>
            <v-list-item prepend-icon="mdi-account-group-outline" title="Users" value="users"></v-list-item>
            <v-list-item prepend-icon="mdi-home-city" title="Home" value="home"></v-list-item>
            <v-list-item prepend-icon="mdi-account" title="My Account" value="account"></v-list-item>
            <v-list-item prepend-icon="mdi-account-group-outline" title="Users" value="users"></v-list-item>
            <v-list-item prepend-icon="mdi-home-city" title="Home" value="home"></v-list-item>
            <v-list-item prepend-icon="mdi-account" title="My Account" value="account"></v-list-item>
            <v-list-item prepend-icon="mdi-account-group-outline" title="Users" value="users"></v-list-item>
            <v-list-item prepend-icon="mdi-home-city" title="Home" value="home"></v-list-item>
            <v-list-item prepend-icon="mdi-account" title="My Account" value="account"></v-list-item>
            <v-list-item prepend-icon="mdi-account-group-outline" title="Users" value="users"></v-list-item>
            <v-list-item prepend-icon="mdi-home-city" title="Home" value="home"></v-list-item>
            <v-list-item prepend-icon="mdi-account" title="My Account" value="account"></v-list-item>
            <v-list-item prepend-icon="mdi-account-group-outline" title="Users" value="users"></v-list-item>
            <v-list-item prepend-icon="mdi-home-city" title="Home" value="home"></v-list-item>
            <v-list-item prepend-icon="mdi-account" title="My Account" value="account"></v-list-item>
            <v-list-item prepend-icon="mdi-account-group-outline" title="Users" value="users"></v-list-item>
            <v-list-item prepend-icon="mdi-home-city" title="Home" value="home"></v-list-item>
            <v-list-item prepend-icon="mdi-account" title="My Account" value="account"></v-list-item>
            <v-list-item prepend-icon="mdi-account-group-outline" title="Users" value="users"></v-list-item>
            <v-list-item prepend-icon="mdi-home-city" title="Home" value="home"></v-list-item>
            <v-list-item prepend-icon="mdi-account" title="My Account" value="account"></v-list-item>
            <v-list-item prepend-icon="mdi-account-group-outline" title="Users" value="users"></v-list-item>
            <v-list-item prepend-icon="mdi-home-city" title="Home" value="home"></v-list-item>
            <v-list-item prepend-icon="mdi-account" title="My Account" value="account"></v-list-item>
            <v-list-item prepend-icon="mdi-account-group-outline" title="Users" value="users"></v-list-item>
            <v-list-item prepend-icon="mdi-home-city" title="Home" value="home"></v-list-item>
            <v-list-item prepend-icon="mdi-account" title="My Account" value="account"></v-list-item>
            <v-list-item prepend-icon="mdi-account-group-outline" title="Users" value="users"></v-list-item>
            <v-list-item prepend-icon="mdi-home-city" title="Home" value="home"></v-list-item>
            <v-list-item prepend-icon="mdi-account" title="My Account" value="account"></v-list-item>
            <v-list-item prepend-icon="mdi-account-group-outline" title="Users" value="users"></v-list-item>
            <v-list-item prepend-icon="mdi-home-city" title="Home" value="home"></v-list-item>
            <v-list-item prepend-icon="mdi-account" title="My Account" value="account"></v-list-item>
            <v-list-item prepend-icon="mdi-account-group-outline" title="Users" value="users"></v-list-item>
            <v-list-item prepend-icon="mdi-home-city" title="Home" value="home"></v-list-item>
            <v-list-item prepend-icon="mdi-account" title="My Account" value="account"></v-list-item>
            <v-list-item prepend-icon="mdi-account-group-outline" title="Users" value="users"></v-list-item>
            <v-list-item prepend-icon="mdi-home-city" title="Home" value="home"></v-list-item>
            <v-list-item prepend-icon="mdi-account" title="My Account" value="account"></v-list-item>
            <v-list-item prepend-icon="mdi-account-group-outline" title="Users" value="users"></v-list-item>
            <v-list-item prepend-icon="mdi-home-city" title="Home" value="home"></v-list-item>
            <v-list-item prepend-icon="mdi-account" title="My Account" value="account"></v-list-item>
            <v-list-item prepend-icon="mdi-account-group-outline" title="Users" value="users"></v-list-item>
            <v-list-item prepend-icon="mdi-home-city" title="Home" value="home"></v-list-item>
            <v-list-item prepend-icon="mdi-account" title="My Account" value="account"></v-list-item>
            <v-list-item prepend-icon="mdi-account-group-outline" title="Users" value="users"></v-list-item>
            <v-list-item prepend-icon="mdi-home-city" title="Home" value="home"></v-list-item>
            <v-list-item prepend-icon="mdi-account" title="My Account" value="account"></v-list-item>
            <v-list-item prepend-icon="mdi-account-group-outline" title="Users" value="users"></v-list-item>
            <v-list-item prepend-icon="mdi-home-city" title="Home" value="home"></v-list-item>
            <v-list-item prepend-icon="mdi-account" title="My Account" value="account"></v-list-item>
            <v-list-item prepend-icon="mdi-account-group-outline" title="Users" value="users"></v-list-item>
            <v-list-item prepend-icon="mdi-home-city" title="Home" value="home"></v-list-item>
            <v-list-item prepend-icon="mdi-account" title="My Account" value="account"></v-list-item>
            <v-list-item prepend-icon="mdi-account-group-outline" title="Users" value="users"></v-list-item>
            <v-list-item prepend-icon="mdi-home-city" title="Home" value="home"></v-list-item>
            <v-list-item prepend-icon="mdi-account" title="My Account" value="account"></v-list-item>
            <v-list-item prepend-icon="mdi-account-group-outline" title="Users" value="users"></v-list-item>
            <v-list-item prepend-icon="mdi-home-city" title="Home" value="home"></v-list-item>
            <v-list-item prepend-icon="mdi-account" title="My Account" value="account"></v-list-item>
            <v-list-item prepend-icon="mdi-account-group-outline" title="Users" value="users"></v-list-item>
            <v-list-item prepend-icon="mdi-home-city" title="Home" value="home"></v-list-item>
            <v-list-item prepend-icon="mdi-account" title="My Account" value="account"></v-list-item>
            <v-list-item prepend-icon="mdi-account-group-outline" title="Users" value="users"></v-list-item>
            <v-list-item prepend-icon="mdi-home-city" title="Home" value="home"></v-list-item>
            <v-list-item prepend-icon="mdi-account" title="My Account" value="account"></v-list-item>
            <v-list-item prepend-icon="mdi-account-group-outline" title="Users" value="users"></v-list-item>
          </v-list>
        </div>
        </v-navigation-drawer>
        <v-main></v-main>
      </v-layout>
    </v-app>
    <ChatComponent :handle-close-chat="handleChat" v-if="chatActive" />
  </div>
</template>

<style>
.v-navigation-drawer {
  position: fixed !important;
  top: 65px !important;
  height: calc(100vh - 65px) !important;
  scrollbar-color: transparent transparent;
}

.v-navigation-drawer:hover {
  scrollbar-color: rgba(0, 0, 0, 0.3) rgba(0, 0, 0, 0.1);
}

.v-navigation-drawer__content {
  scrollbar-width: thin !important;
}
</style>

<style lang="scss" scoped>
@use './style.scss';
</style>

<script>
import SearchComponent from '../Search/index.vue'
import ChatComponent from '../Chat/index.vue'
import NotificationComponent from '../Notification/index.vue'
export default {
  name: 'BarComponents',
  data() {
      return {
        tabActive: 'inbox',
        chatActive: null,
        tabContent: [
          {
            name: 'Inbox',
            id: '',
            value: 'inbox',
            active: true,
            content: [
              { title: 'Click Me' },
              { title: 'Click Me' },
              { title: 'Click Me' },
              { title: 'Click Me 2' },
            ]
          },
          {
            name: 'Team',
            id: '',
            value: 'team',
            active: false,
            content: [
              { title: 'Click Me' },
            ]
          }
        ],
        windowWidth: window.innerWidth,
        hasLoggedIn: true,
        notificationCounter: 0,
        darkMode: false,
        messageCounter: 0,
        drawer: true,
        rail: false,
        listInbox: [
          {
            date: '7 Jan',
            description: 'only test purpose only test purpose only test purpose only test purpose',
            image: 'https://randomuser.me/api/portraits/men/85.jpg',
            read: false,
            title: 'only test purpose only test purpose only',
            user: 'Test only',
            type: 'comment',
            community: 'Kucing'
          },
          {
            date: '12 Jan',
            description: 'only test purpose only test purpose only test purpose only test purpose',
            image: 'https://randomuser.me/api/portraits/men/85.jpg',
            read: false,
            title: 'only test purpose only test purpose only',
            user: 'Test only',
            type: 'comment',
            community: 'Kucing'
          },
          {
            date: '12 Jan',
            description: 'only test purpose only test purpose only test purpose only test purpose',
            image: 'https://randomuser.me/api/portraits/men/85.jpg',
            read: false,
            title: 'only test purpose only test purpose only',
            user: 'Test only',
            type: 'comment',
            community: 'Kucing'
          },
          {
            date: '1 Feb',
            description: 'only test purpose only test purpose only test purpose only test purpose',
            image: 'https://randomuser.me/api/portraits/men/85.jpg',
            read: true,
            title: 'only test purpose only test purpose only',
            user: 'Test only',
            type: 'comment',
            community: 'Kucing'
          },
          {
            date: '12 Feb',
            description: 'only test purpose only test purpose only test purpose only test purpose',
            image: 'https://randomuser.me/api/portraits/men/85.jpg',
            read: true,
            title: 'only test purpose only test purpose only',
            user: 'Test only',
            type: 'comment',
            community: 'Kucing'
          },
          {
            date: '12 Feb',
            description: 'only test purpose only test purpose only test purpose only test purpose',
            image: 'https://randomuser.me/api/portraits/men/85.jpg',
            read: true,
            title: 'only test purpose only test purpose only',
            user: 'Test only',
            type: 'comment',
            community: 'Kucing'
          },
        ],
        listTeam: [
          {
            date: '7 Jan',
            description: 'Keluar dari tim anda',
            image: 'https://randomuser.me/api/portraits/men/85.jpg',
            read: false,
            teamName: 'Team Anjing',
            game: {
              gameImage: '',
              gameName: 'Mobile Legends',
            },
            user: 'Agus',
            team: [
              {
                name: 'Agus',
                image: 'https://randomuser.me/api/portraits/men/85.jpg'
              },
              {
                name: 'Firman',
                image: 'https://randomuser.me/api/portraits/men/85.jpg'
              },
              {
                name: 'Nugie',
                image: 'https://randomuser.me/api/portraits/men/85.jpg'
              },
              {
                name: 'Budi',
                image: 'https://randomuser.me/api/portraits/men/85.jpg'
              },
              {
                name: 'Agil',
                image: 'https://randomuser.me/api/portraits/men/85.jpg'
              },
              {
                name: 'Mio',
                image: 'https://randomuser.me/api/portraits/men/85.jpg'
              },
            ],
            type: 'leave',
            community: 'Kucing'
          },
          {
            date: '12 Jan',
            description: 'player ingin bergabung dengan tim anda',
            image: 'https://randomuser.me/api/portraits/men/85.jpg',
            read: false,
            teamName: 'Team Kucing',
            game: {
              gameImage: '',
              gameName: 'Wild Rift',
            },
            user: 'Test only',
            team: [
              {
                name: 'Yono',
                image: 'https://randomuser.me/api/portraits/men/85.jpg'
              },
              {
                name: 'Pandji',
                image: 'https://randomuser.me/api/portraits/men/85.jpg'
              },
              {
                name: 'Radit',
                image: 'https://randomuser.me/api/portraits/men/85.jpg'
              },
              {
                name: 'Praz',
                image: 'https://randomuser.me/api/portraits/men/85.jpg'
              },
            ],
            type: 'join',
            community: 'Kucing'
          },
          {
            date: '12 Jan',
            description: 'Mengajak anda bermain bersama',
            image: 'https://randomuser.me/api/portraits/men/85.jpg',
            read: false,
            teamName: 'Team Cicak',
            game: {
              gameImage: '',
              gameName: 'Genshin Impact',
            },
            user: 'Bambang',
            team: [
              {
                name: 'Sugiono',
                image: 'https://randomuser.me/api/portraits/men/85.jpg'
              },
              {
                name: 'Suparman',
                image: 'https://randomuser.me/api/portraits/men/85.jpg'
              },
              
            ],
            type: 'invite',
            community: 'Kucing'
          },
          {
            date: '1 Feb',
            description: 'only test purpose only test purpose only test purpose only test purpose',
            image: 'https://randomuser.me/api/portraits/men/85.jpg',
            read: true,
            teamName: 'Team Kambing',
            game: {
              gameImage: '',
              gameName: 'Zenless Zone Zero',
            },
            user: 'Test only',
            team: [
              {
                name: 'Gigi',
                image: 'https://randomuser.me/api/portraits/men/85.jpg'
              },
              {
                name: 'Nidji',
                image: 'https://randomuser.me/api/portraits/men/85.jpg'
              },
              {
                name: 'Sheila',
                image: 'https://randomuser.me/api/portraits/men/85.jpg'
              },
              {
                name: 'Dewa',
                image: 'https://randomuser.me/api/portraits/men/85.jpg'
              },
              {
                name: 'test name',
                image: 'https://randomuser.me/api/portraits/men/85.jpg'
              },
            ],
            type: 'comment',
            community: 'Kucing'
          },
          {
            date: '12 Feb',
            description: 'only test purpose only test purpose only test purpose only test purpose',
            image: 'https://randomuser.me/api/portraits/men/85.jpg',
            read: true,
            teamName: 'Team Tikus',
            game: {
              gameImage: '',
              gameName: 'PUBG',
            },
            user: 'Test only',
            team: [
              {
                name: 'Dika',
                image: 'https://randomuser.me/api/portraits/men/85.jpg'
              },
              {
                name: 'Surya',
                image: 'https://randomuser.me/api/portraits/men/85.jpg'
              },
              {
                name: 'Agus',
                image: 'https://randomuser.me/api/portraits/men/85.jpg'
              },
              {
                name: 'Adit',
                image: 'https://randomuser.me/api/portraits/men/85.jpg'
              },
            ],
            type: 'leave',
            community: 'Kucing'
          },
          {
            date: '12 Feb',
            description: 'only test purpose only test purpose only test purpose only test purpose',
            image: 'https://randomuser.me/api/portraits/men/85.jpg',
            read: true,
            teamName: 'only test purpose only test purpose only',
            user: 'Test only',
            team: [
              {
                name: 'test name',
                image: 'https://randomuser.me/api/portraits/men/85.jpg'
              },
              {
                name: 'test name',
                image: 'https://randomuser.me/api/portraits/men/85.jpg'
              },
              {
                name: 'test name',
                image: 'https://randomuser.me/api/portraits/men/85.jpg'
              },
              {
                name: 'test name',
                image: 'https://randomuser.me/api/portraits/men/85.jpg'
              },
            ],
            type: 'join',
            community: 'Kucing'
          },
        ],
      }
    },
    components: {
      SearchComponent,
      ChatComponent,
      NotificationComponent
    },
    computed: {
    // Computed property to determine if the screen is a desktop
      isDesktop() {
        return this.windowWidth >= 1024;  // Adjust the threshold as needed
      },
    },
    methods: {
      handleProfile() {
        this.$router.push('/profile')
      },

      handleHome() {
        this.$router.push('/')
      },

      handleChatMobile() {
        this.$router.push('/chat')
      },

      handleNotification() {
        this.$router.push('/notification')
      },

      handleDrawer() {
        this.drawer = !this.drawer
      },

      updateWindowWidth() {
        this.windowWidth = window.innerWidth;
      },

      handleChat() {
        if (this.windowWidth <= 1080) {
          this.handleChatMobile()
        } else {
          this.chatActive = !this.chatActive
        if (this.chatActive) {
          localStorage.setItem('chatActive', true)
          localStorage.setItem('variant', 'full')
        } else {
          localStorage.setItem('chatActive', false)
          localStorage.setItem('variant', 'null')
        }
        }
      },

      handleTab(index) {
        this.tabContent.forEach((tab, i) => {
        tab.active = i === index;
      });
      this.tabActive = this.tabContent[index].value
      }
    },
    beforeUnmount() {
      // Remove the event listener when the component is destroyed
      window.removeEventListener('resize', this.updateWindowWidth);
    },
    created() {
      window.addEventListener('resize', this.updateWindowWidth);
      const chatStatus = localStorage.getItem('chatActive')
      if (chatStatus) {
        if (chatStatus == 'true') {
          this.chatActive = true
        } else if (chatStatus == 'false') {
          this.chatActive = false
        }
      } else {
        this.chatActive = false
      }
      if (this.windowWidth <= '1080') {
        this.drawer = false
      }
    }
}
</script>