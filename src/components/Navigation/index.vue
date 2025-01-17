<template>
  <div>
    <v-app>
      <v-app-bar elevation="0" class="app-bar-container">
        <div class="app-bar-content">
          <v-row dense>
            <v-col cols="3">
              <v-img
                src="assets/header-new.png"
                style="margin-bottom: 2px;"
                class="app-bar-logo"
                :class="isActive || scrollPosition >= heightBarAnchor ? 'img-active' : 'img-nonactive'">
              </v-img>
            </v-col>
            <v-col cols="6" class="d-flex justify-center align-center">
              <SearchComponent class="search" />
            </v-col>
            <v-col cols="3" class="d-flex flex-row-reverse align-center">
              <div v-if="hasLoggedIn" class="d-flex align-center">
                <div class="btn-header__create">
                  <v-icon size="30">mdi-plus</v-icon>
                  <p class="ml-2">
                    Posting
                  </p>
                  <v-tooltip
                    activator="parent"
                    location="bottom"
                  >
                    Buat Postingan
                  </v-tooltip>
                </div>
                <v-menu offset="14" :close-on-content-click="false">
                  <template v-slot:activator="{ props }">
                    <div class="btn-header ml-2" v-bind="props">
                      <v-badge color="#ff7800" :content="notificationCounter" v-if="notificationCounter > 0">
                        <v-icon size="24">mdi-bell-outline</v-icon>
                      </v-badge>
                      <v-icon size="24" v-else>mdi-bell-outline</v-icon>
                      <v-tooltip
                        activator="parent"
                        location="bottom"
                      >
                        Notifikasi
                      </v-tooltip>
                    </div>
                  </template>
                  <v-card width="380" style="border-radius: 6px">
                    <div class="notification-container">
                      <div class="notification-content__top pa-3 mt-1 d-flex align-center justify-space-between" style="width: 100%">
                        <p style="font-size: 15px; color: #4f4f4f; font-weight: 500">Notifikasi</p>
                        <div class="d-flex align-center" style="cursor: pointer">
                          <v-icon class="mr-2" color="#ff7800" size="18">
                            mdi-check-all
                          </v-icon>
                          <p style="font-size: 14px; color: #ff7800; font-weight: 500">Tandai semua sebagai dibaca</p>
                        </div>
                      </div>
                      <v-divider></v-divider>
                      <div style="margin-bottom: 0px" class="notification-content align-center d-flex justify-space-between pl-3 pr-3 pt-3 mt-1">
                        <div class="notification-content__tab d-flex">
                          <div class="tab-content" v-for="(item, i) in tabContent" :key="i">
                            <div class="tab-toolbar d-flex align-center" @click="handleTab(i)" :class="item.active ? 'tab-active' : 'tab'">
                              <p 
                              style="user-select: none"
                                :class="item.active ? 'tab-title__active' : 'tab-title'" 
                                class="mb-3"
                              >
                                {{ item.name }}
                              </p>
                              <div class="mb-3" v-if="item.content.length > 0" :class="item.active ? 'tab-box__active' : 'tab-box'">
                                <p style="user-select: none">
                                  {{ item.content.length }}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <v-icon size="18" class="mb-4" color="#585858" style="cursor: pointer">
                          mdi-cog-outline
                        </v-icon>
                      </div>
                      <v-divider></v-divider>
                      <div class="pa-3 mt-1 mb-1">
                        <div v-if="tabActive == 'inbox'">
                          <div class="list-container" v-for="(item, i) in listInbox" :key="i">
                            <InboxList 
                              :date="item.date" 
                              :description="item.description" 
                              :image="item.image" 
                              :read="item.read"
                              :title="item.title"
                              :type="item.type"
                              :user="item.user"
                              :community="item.community"
                            />
                          </div>
                        </div>
                        <div v-else>

                        </div>
                      </div>
                    </div>
                  </v-card>
                  <!-- <v-list>
                    <v-list-item
                      v-for="(item, index) in items"
                      :key="index"
                      :value="index"
                    >
                      <v-list-item-title>{{ item.title }}</v-list-item-title>
                    </v-list-item>
                  </v-list> -->
                </v-menu>
                <div class="btn-header ml-2">
                  <v-badge color="#ff7800" :content="messageCounter" v-if="messageCounter > 0">
                    <v-icon size="24">mdi-chat-processing-outline</v-icon>
                  </v-badge>
                  <v-icon v-else size="24">mdi-chat-processing-outline</v-icon>
                  <v-tooltip
                    activator="parent"
                    location="bottom"
                  >
                    Pesan
                  </v-tooltip>
                </div>
                
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
          fixed
          v-model="drawer"
          :rail="rail"
          width="270"
          permanent
          @click="rail = false"
      >
        <div style="margin-top: 0px;">
          <v-list-item
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
          </v-list-item>
  
          <v-divider></v-divider>
  
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
import InboxList from '../Notification/List/Inbox/index.vue'
export default {
  name: 'BarComponents',
  data() {
      return {
        tabActive: 'inbox',
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
        hasLoggedIn: true,
        notificationCounter: 1,
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
        ],
        listTeam: [
          { title: 'Click Me' },
          { title: 'Click Me' },
          { title: 'Click Me' },
          { title: 'Click Me 2' },
        ],
      }
    },
    components: {
      SearchComponent,
      InboxList
    },
    methods: {
      handleTab(index) {
        this.tabContent.forEach((tab, i) => {
        tab.active = i === index;
      });
      this.tabActive = this.tabContent[0].value
      }
    }
}
</script>