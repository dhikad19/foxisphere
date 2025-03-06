<template>
  <div class="navigation-container">
    <v-app-bar
      elevation="0"
      :color="themeState.isDarkMode ? '#222223' : 'white'"
      :class="{
        'drawer-active': windowWidth < 768 && drawer,
        'drawer-active-dark': windowWidth < 768 && drawer && themeState.isDarkMode,
        'app-bar-container': !windowWidth < 768 && drawer && !themeState.isDarkMode,
        'app-bar-container-dark': themeState.isDarkMode
      }"
      :height="windowWidth >= '768' ? 65 : 55"
      class="app-bar-container">
        
      <div class="app-bar-content">
        <v-row dense>
          <v-col :cols="windowWidth <= '1080' ? '6' : '3'">
            <div class="mobile-left-navigation">
              <div @click="handleDrawer()" class="btn-drawer">
                <v-icon 
                  :color="themeState.isDarkMode ? '#e4e1da' : '#4f4f4f'" 
                  v-if="!drawer"> 
                  mdi-menu 
                </v-icon>
                <v-icon 
                  :color="themeState.isDarkMode ? '#e4e1da' : '#4f4f4f'" 
                  v-else> 
                  mdi-close 
                </v-icon>
              </div>
                
              <v-img
                @click="handleHome()"
                src="assets/header-new.png"
                style="margin-bottom: 5px"
                class="app-bar-logo">
              </v-img>
            </div>
            <v-img
              @click="handleHome()"
              src="assets/header-new.png"
              style="margin-bottom: 2px"
              class="app-bar-logo dekstop-left-navigation">
            </v-img>
          </v-col>
          <v-col cols="6" class="search-component">
            <SearchComponent />
          </v-col>
          <v-col :cols="windowWidth <= '1080' ? '6' : '3'">
            <div v-if="hasLoggedIn" class="d-flex align-center justify-end">

              <div :class="{'background-dark title-dark': themeState.isDarkMode}" class="btn-header__create ml-6" v-if="windowWidth > '768'">
                <v-icon size="24" :color="themeState.isDarkMode ? '#e4e1da' : '#4f4f4f'">mdi-plus</v-icon>
                <p class="ml-2">Posting</p>
              </div>
              <div
                v-if="windowWidth <= '1080'"
                class="btn-header btn-search ml-2"
                @click="handleChat()">
                <v-icon 
                  size="24" 
                  :color="themeState.isDarkMode ? '#e4e1da' : '#4f4f4f'">
                  mdi-magnify
                </v-icon>
              </div>

                <div v-if="windowWidth > '1080'" ref="dropdownContainer">
                  <div 
                    class="btn-header__notification-desktop ml-2" 
                    @click="toggleNotificationDropdown()"
                  >
                    <v-badge
                      color="#ff7800"
                      :content="notificationCounter"
                      v-if="notificationCounter > 0">
                      <v-icon 
                        size="24" 
                        :color="themeState.isDarkMode ? '#e4e1da' : '#4f4f4f'">
                        mdi-bell-outline
                      </v-icon
                      >
                    </v-badge>
                    <v-icon 
                      v-else 
                      size="24" 
                      :color="themeState.isDarkMode ? '#e4e1da' : '#4f4f4f'">
                      mdi-bell-outline
                    </v-icon>
                  </div>

                  <NotificationComponent 
                    v-if="isDropdownNotificationOpen" 
                    class="dropdown-notification" 
                  />
                </div>

                <div
                  class="btn-header btn-search ml-2"
                  @click="handleNotification()"
                  v-else-if="windowWidth <= '1080'">
                  <v-badge
                    color="#ff7800"
                    :content="notificationCounter"
                    v-if="notificationCounter > 0">
                    <v-icon size="24" :color="themeState.isDarkMode ? '#e4e1da' : '#4f4f4f'">mdi-bell-outline</v-icon>
                  </v-badge>
                  <v-icon v-else size="24" :color="themeState.isDarkMode ? '#e4e1da' : '#4f4f4f'"
                    >mdi-bell-outline</v-icon
                  >
                </div>

                <div v-if="windowWidth <= '768'" class="mt-1 mr-4">
                  <div
                    @click="handleNotification()"
                    class="d-flex"
                    style="margin-right: -8px"
                    v-if="notificationCounter > 0">
                    <v-icon size="24" :color="themeState.isDarkMode ? '#e4e1da' : '#4f4f4f'" style="margin-right: -4px"
                      >mdi-bell-outline</v-icon
                    >
                    <div class="badge-container"></div>
                  </div>
                  <v-icon
                    @click="handleNotification()"
                    v-else
                    size="24"
                    :color="themeState.isDarkMode ? '#e4e1da' : '#4f4f4f'"
                    style="margin-right: -16px"
                    >mdi-bell-outline</v-icon
                  >
                </div>

                <div
                  v-if="windowWidth > '768'"
                  class="btn-header ml-2"
                  @click="handleChat()">
                  <v-badge
                    color="#ff7800"
                    :content="messageCounter"
                    v-if="messageCounter > 0">
                    <v-icon size="24" :color="themeState.isDarkMode ? '#e4e1da' : '#4f4f4f'"
                      >mdi-chat-processing-outline</v-icon
                    >
                  </v-badge>
                  <v-icon v-else size="24" :color="themeState.isDarkMode ? '#e4e1da' : '#4f4f4f'"
                    >mdi-chat-processing-outline</v-icon
                  >
                </div>

                <div
                  class="btn-header ml-2"
                  v-if="windowWidth > '768'"
                  @click="toggleDropdown()"
                  ref="dropdownButton">
                  <v-avatar size="30">
                    <v-img src="https://randomuser.me/api/portraits/men/82.jpg">
                    </v-img>
                  </v-avatar>
                </div>

                <div
                  class="btn-header ml-1"
                  v-else
                  style="margin-right: -4px"
                  @click="profileSheet = true"
                  ref="dropdownButton">
                  <v-avatar size="27">
                    <v-img src="https://randomuser.me/api/portraits/men/82.jpg">
                    </v-img>
                  </v-avatar>
                </div>

                <v-bottom-sheet v-model="profileSheet">
                  <UserComponent />
                </v-bottom-sheet>

                <div v-if="isDropdownOpen" class="dropdown" ref="dropdown">
                  <UserComponent />
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
      <v-navigation-drawer
        app
        :fixed="windowWidth <= '1080' ? false : true"
        v-model="drawer"
        :color="themeState.isDarkMode ? '#222223' : 'white'"
        :rail="rail"
        :style="themeState.isDarkMode ? 'border-right: 1px solid #5e5e5e;' : 'border-right: 1px solid #e4e4e4;'"
        :class="{
          'navigation-drawer-content': themeState.isDarkMode,
          'navigation-drawer-content-dark': !themeState.isDarkMode,
        }"
        width="270"
        :temporary="windowWidth <= '1080' ? true : false"
        @click="rail = false">
        <div style="margin-top: 0px">
          <v-list density="compact" nav>
            <v-list-item
              prepend-icon="mdi-account-group-outline"
              title="Users"
              value="users">
            </v-list-item>
            <v-list-item
              prepend-icon="mdi-home-city"
              title="Home"
              value="home">
            </v-list-item>
            <v-list-item
              prepend-icon="mdi-account"
              title="My Account"
              value="account">
            </v-list-item>
            <v-list-item
              prepend-icon="mdi-account-group-outline"
              title="Users"
              value="users">
            </v-list-item>
            <v-list-item
              prepend-icon="mdi-home-city"
              title="Home"
              value="home">
            </v-list-item>
            <v-list-item
              prepend-icon="mdi-account"
              title="My Account"
              value="account">
            </v-list-item>
            <v-list-item
              prepend-icon="mdi-account-group-outline"
              title="Users"
              value="users">
            </v-list-item>
            <v-list-item
              prepend-icon="mdi-home-city"
              title="Home"
              value="home">
            </v-list-item>
            <v-list-item
              prepend-icon="mdi-account"
              title="My Account"
              value="account">
            </v-list-item>
            <v-list-item
              prepend-icon="mdi-account-group-outline"
              title="Users"
              value="users">
            </v-list-item>
            <v-list-item
              prepend-icon="mdi-home-city"
              title="Home"
              value="home">
            </v-list-item>
            <v-list-item
              prepend-icon="mdi-account"
              title="My Account"
              value="account">
            </v-list-item>
            <v-list-item
              prepend-icon="mdi-account-group-outline"
              title="Users"
              value="users">
            </v-list-item>
            <v-list-item
              prepend-icon="mdi-home-city"
              title="Home"
              value="home">
            </v-list-item>
            <v-list-item
              prepend-icon="mdi-account"
              title="My Account"
              value="account">
            </v-list-item>
            <v-list-item
              prepend-icon="mdi-account-group-outline"
              title="Users"
              value="users">
            </v-list-item>
          </v-list>
        </div>
      </v-navigation-drawer>
    <ChatComponent :handle-close-chat="handleChat" v-if="chatActive" />
  </div>
</template>

<style>
  .dropdown {
    position: fixed;
    z-index: 999 !important;
    top: 66px; 
    right: 20px;
    border-radius: 6px;
    box-shadow: 0px 1px 1px rgba(3, 7, 18, 0.02),
    0px 5px 4px rgba(3, 7, 18, 0.03),
    0px 12px 9px rgba(3, 7, 18, 0.05),
    0px 20px 15px rgba(3, 7, 18, 0.06),
    0px 32px 24px rgba(3, 7, 18, 0.08);
    }

  .dropdown-notification {
    position: fixed;
    z-index: 999 !important;
    top: 66px;
    right: 118px;
    border-radius: 6px;
    box-shadow: 0px 1px 1px rgba(3, 7, 18, 0.02),
    0px 5px 4px rgba(3, 7, 18, 0.03),
    0px 12px 9px rgba(3, 7, 18, 0.05),
    0px 20px 15px rgba(3, 7, 18, 0.06),
    0px 32px 24px rgba(3, 7, 18, 0.08);
  }

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
  @use "./style.scss";
</style>

<script>
  import SearchComponent from "../Search/index.vue";
  import ChatComponent from "../Chat/index.vue";
  import NotificationComponent from "../Notification/index.vue";
  import UserComponent from "../Notification/User/index.vue";
  import { themeState } from "../../theme";
  
  export default {
    name: "BarComponents",
    data() {
      return {
        themeState,
        profileSheet: false,
        isDropdownOpen: false,
        isDropdownNotificationOpen: false,
        tabActive: "inbox",
        chatActive: null,
        tabContent: [
          {
            name: "Inbox",
            id: "",
            value: "inbox",
            active: true,
            content: [
              { title: "Click Me" },
              { title: "Click Me" },
              { title: "Click Me" },
              { title: "Click Me 2" },
            ],
          },
          {
            name: "Team",
            id: "",
            value: "team",
            active: false,
            content: [{ title: "Click Me" }],
          },
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
            date: "7 Jan",
            description:
              "only test purpose only test purpose only test purpose only test purpose",
            image: "https://randomuser.me/api/portraits/men/85.jpg",
            read: false,
            title: "only test purpose only test purpose only",
            user: "Test only",
            type: "comment",
            community: "Kucing",
          },
          {
            date: "12 Jan",
            description:
              "only test purpose only test purpose only test purpose only test purpose",
            image: "https://randomuser.me/api/portraits/men/85.jpg",
            read: false,
            title: "only test purpose only test purpose only",
            user: "Test only",
            type: "comment",
            community: "Kucing",
          },
          {
            date: "12 Jan",
            description:
              "only test purpose only test purpose only test purpose only test purpose",
            image: "https://randomuser.me/api/portraits/men/85.jpg",
            read: false,
            title: "only test purpose only test purpose only",
            user: "Test only",
            type: "comment",
            community: "Kucing",
          },
          {
            date: "1 Feb",
            description:
              "only test purpose only test purpose only test purpose only test purpose",
            image: "https://randomuser.me/api/portraits/men/85.jpg",
            read: true,
            title: "only test purpose only test purpose only",
            user: "Test only",
            type: "comment",
            community: "Kucing",
          },
          {
            date: "12 Feb",
            description:
              "only test purpose only test purpose only test purpose only test purpose",
            image: "https://randomuser.me/api/portraits/men/85.jpg",
            read: true,
            title: "only test purpose only test purpose only",
            user: "Test only",
            type: "comment",
            community: "Kucing",
          },
          {
            date: "12 Feb",
            description:
              "only test purpose only test purpose only test purpose only test purpose",
            image: "https://randomuser.me/api/portraits/men/85.jpg",
            read: true,
            title: "only test purpose only test purpose only",
            user: "Test only",
            type: "comment",
            community: "Kucing",
          },
        ],
        listTeam: [
          {
            date: "7 Jan",
            description: "Keluar dari tim anda",
            image: "https://randomuser.me/api/portraits/men/85.jpg",
            read: false,
            teamName: "Team Anjing",
            game: {
              gameImage: "",
              gameName: "Mobile Legends",
            },
            user: "Agus",
            team: [
              {
                name: "Agus",
                image: "https://randomuser.me/api/portraits/men/85.jpg",
              },
              {
                name: "Firman",
                image: "https://randomuser.me/api/portraits/men/85.jpg",
              },
              {
                name: "Nugie",
                image: "https://randomuser.me/api/portraits/men/85.jpg",
              },
              {
                name: "Budi",
                image: "https://randomuser.me/api/portraits/men/85.jpg",
              },
              {
                name: "Agil",
                image: "https://randomuser.me/api/portraits/men/85.jpg",
              },
              {
                name: "Mio",
                image: "https://randomuser.me/api/portraits/men/85.jpg",
              },
            ],
            type: "leave",
            community: "Kucing",
          },
          {
            date: "12 Jan",
            description: "player ingin bergabung dengan tim anda",
            image: "https://randomuser.me/api/portraits/men/85.jpg",
            read: false,
            teamName: "Team Kucing",
            game: {
              gameImage: "",
              gameName: "Wild Rift",
            },
            user: "Test only",
            team: [
              {
                name: "Yono",
                image: "https://randomuser.me/api/portraits/men/85.jpg",
              },
              {
                name: "Pandji",
                image: "https://randomuser.me/api/portraits/men/85.jpg",
              },
              {
                name: "Radit",
                image: "https://randomuser.me/api/portraits/men/85.jpg",
              },
              {
                name: "Praz",
                image: "https://randomuser.me/api/portraits/men/85.jpg",
              },
            ],
            type: "join",
            community: "Kucing",
          },
          {
            date: "12 Jan",
            description: "Mengajak anda bermain bersama",
            image: "https://randomuser.me/api/portraits/men/85.jpg",
            read: false,
            teamName: "Team Cicak",
            game: {
              gameImage: "",
              gameName: "Genshin Impact",
            },
            user: "Bambang",
            team: [
              {
                name: "Sugiono",
                image: "https://randomuser.me/api/portraits/men/85.jpg",
              },
              {
                name: "Suparman",
                image: "https://randomuser.me/api/portraits/men/85.jpg",
              },
            ],
            type: "invite",
            community: "Kucing",
          },
          {
            date: "1 Feb",
            description:
              "only test purpose only test purpose only test purpose only test purpose",
            image: "https://randomuser.me/api/portraits/men/85.jpg",
            read: true,
            teamName: "Team Kambing",
            game: {
              gameImage: "",
              gameName: "Zenless Zone Zero",
            },
            user: "Test only",
            team: [
              {
                name: "Gigi",
                image: "https://randomuser.me/api/portraits/men/85.jpg",
              },
              {
                name: "Nidji",
                image: "https://randomuser.me/api/portraits/men/85.jpg",
              },
              {
                name: "Sheila",
                image: "https://randomuser.me/api/portraits/men/85.jpg",
              },
              {
                name: "Dewa",
                image: "https://randomuser.me/api/portraits/men/85.jpg",
              },
              {
                name: "test name",
                image: "https://randomuser.me/api/portraits/men/85.jpg",
              },
            ],
            type: "comment",
            community: "Kucing",
          },
          {
            date: "12 Feb",
            description:
              "only test purpose only test purpose only test purpose only test purpose",
            image: "https://randomuser.me/api/portraits/men/85.jpg",
            read: true,
            teamName: "Team Tikus",
            game: {
              gameImage: "",
              gameName: "PUBG",
            },
            user: "Test only",
            team: [
              {
                name: "Dika",
                image: "https://randomuser.me/api/portraits/men/85.jpg",
              },
              {
                name: "Surya",
                image: "https://randomuser.me/api/portraits/men/85.jpg",
              },
              {
                name: "Agus",
                image: "https://randomuser.me/api/portraits/men/85.jpg",
              },
              {
                name: "Adit",
                image: "https://randomuser.me/api/portraits/men/85.jpg",
              },
            ],
            type: "leave",
            community: "Kucing",
          },
          {
            date: "12 Feb",
            description:
              "only test purpose only test purpose only test purpose only test purpose",
            image: "https://randomuser.me/api/portraits/men/85.jpg",
            read: true,
            teamName: "only test purpose only test purpose only",
            user: "Test only",
            team: [
              {
                name: "test name",
                image: "https://randomuser.me/api/portraits/men/85.jpg",
              },
              {
                name: "test name",
                image: "https://randomuser.me/api/portraits/men/85.jpg",
              },
              {
                name: "test name",
                image: "https://randomuser.me/api/portraits/men/85.jpg",
              },
              {
                name: "test name",
                image: "https://randomuser.me/api/portraits/men/85.jpg",
              },
            ],
            type: "join",
            community: "Kucing",
          },
        ],
      };
    },
    components: {
      SearchComponent,
      ChatComponent,
      NotificationComponent,
      UserComponent
      // DropdownTrigger
    },
    computed: {
      // Computed property to determine if the screen is a desktop
      isDesktop() {
        return this.windowWidth >= 1024; // Adjust the threshold as needed
      },
    },
    methods: {
      toggleDropdown() {
        this.isDropdownOpen = !this.isDropdownOpen;
      },

      toggleNotificationDropdown() {
        this.isDropdownNotificationOpen = !this.isDropdownNotificationOpen
      },

      closeDropdownIfClickedOutside(event) {
        const dropdown = this.$refs.dropdown
        const dropdownButton = this.$refs.dropdownButton

        // Check if the click is outside of both the dropdown and the button
        if (
          dropdown &&
          !dropdown.contains(event.target) &&
          dropdownButton &&
          !dropdownButton.contains(event.target)
        ) {
          this.isDropdownOpen = false
        }
      },

      handleClickOutside(event) {
      // Check if the click happened outside the dropdown
        const dropdownContainer = this.$refs.dropdownContainer;
        if (dropdownContainer && !dropdownContainer.contains(event.target)) {
          this.isDropdownNotificationOpen = false // Close the dropdown
        }
      },

      toggleTheme() {
        this.themeState.toggleTheme();
      },

      handleProfile() {
        this.$router.push("/profile");
      },

      handleHome() {
        this.$router.push("/");
      },

      handleChatMobile() {
        this.$router.push("/chat");
      },

      handleNotification() {
        this.$router.push("/notification");
      },

      handleDrawer() {
        this.drawer = !this.drawer;
      },

      updateWindowWidth() {
        this.windowWidth = window.innerWidth;
      },

      handleChat() {
        if (this.windowWidth <= 1080) {
          this.handleChatMobile();
        } else {
          this.chatActive = !this.chatActive;
          if (this.chatActive) {
            localStorage.setItem("chatActive", true);
            localStorage.setItem("variant", "full");
          } else {
            localStorage.setItem("chatActive", false);
            localStorage.setItem("variant", "null");
          }
        }
      },

      handleTab(index) {
        this.tabContent.forEach((tab, i) => {
          tab.active = i === index;
        });
        this.tabActive = this.tabContent[index].value;
      },
    },
    beforeUnmount() {
      // Remove the event listener when the component is destroyed
      window.removeEventListener("resize", this.updateWindowWidth);
      document.removeEventListener("click", this.closeDropdownIfClickedOutside);
      document.removeEventListener('click', this.handleClickOutside);
    },
    created() {
      document.addEventListener("click", this.closeDropdownIfClickedOutside);
      document.addEventListener('click', this.handleClickOutside);
      if (this.themeState.isDarkMode) {
        this.darkMode = true;
      } else {
        this.darkMode = false;
      }
      window.addEventListener("resize", this.updateWindowWidth);
      const chatStatus = localStorage.getItem("chatActive");
      if (chatStatus) {
        if (chatStatus == "true") {
          this.chatActive = true;
        } else if (chatStatus == "false") {
          this.chatActive = false;
        }
      } else {
        this.chatActive = false;
      }

      if (this.windowWidth <= "1080") {
        this.drawer = false;
      }
    },
  };
</script>
