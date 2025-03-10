<template>
  <div class="chat-container">
    <div class="chat-wrapper" v-if="variant == 'full'">
      <div 
        class="chat-box"
        :class="{'background-dark title-dark': themeState.isDarkMode,
                  'chat-box-color-dark': themeState.isDarkMode,
                  'chat-box-color-light': !themeState.isDarkMode
                }"
      >
        <div class="chat-topbar">
          <p style="font-weight: 500">Chat</p>
          <div class="d-flex">
            <div class="chat-btn" @click="handleFull()">
              <v-icon size="17">
                mdi-open-in-new
              </v-icon>
            </div>
            <div class="chat-btn" @click="handleClose()">
              <v-icon size="17">
                mdi-close
              </v-icon>
            </div>
          </div>
        </div>
        <div class="chat-box__content" :class="themeState.isDarkMode ? 'color-dark__content' : 'color-light__content'">
          <div class="chat-list" :class="themeState.isDarkMode ? 'color-dark' : 'color-light'">
            <div style="padding: 10px;">
              <div class="discover d-flex" style="width: 100%">
                <div :class="themeState.isDarkMode ? 'chat-list__box-content-color-dark' : 'chat-list__box-content-color-light'" class="chat-list__box-content justify-start" style="width: 100%; padding: 7px">
                  <v-icon size="18" class="mr-2">
                    mdi-account-plus-outline
                  </v-icon>
                  <p style="font-size: 13px; font-weight: 500">
                    Cari Teman Baru
                  </p>
                </div>
              </div>
              <div class="chat-list__box" v-for="(item, i) in chatList" :key="i" @click="setActiveChat(i)">
                <div :class="{'chat-list__box-content-active-dark': item.active && themeState.isDarkMode,
                              'chat-list__box-content-active-light': item.active && !themeState.isDarkMode,
                              'chat-list__box-content-color-dark': themeState.isDarkMode, 
                              'chat-list__box-content-color-light': !themeState.isDarkMode, }"  
                              class="chat-list__box-content" style="padding-top: 11px" v-if="item.type == 'personal'">
                  <v-avatar size="30" style="margin-bottom: 10px">
                    <v-img :src="item.photo"></v-img>
                  </v-avatar>
                  <div class="ml-2 list-separator" :class="themeState.isDarkMode ? 'separator-color-dark' : 'separator-color-light'">
                    <div class="d-flex justify-space-between" style="width: 100%">
                      <p style="font-size: 13px; font-weight: 500">
                        {{ item.name }}
                      </p>
                      <p style="font-size: 11px;">
                        {{ item.latestChat.time }}
                      </p>
                    </div>
                    <div>
                      <p v-if="item.latestChat.personChat == 'user'" style="font-size: 12px">{{item.latestChat.chat}}</p>
                      <p v-else style="font-size: 11px">Anda: {{item.latestChat.chat}}</p>
                    </div>
                  </div>
                </div>
                <div :class="{'chat-list__box-content-active-dark': item.active && themeState.isDarkMode,
                'chat-list__box-content-active-light': item.active && !themeState.isDarkMode,
                'chat-list__box-content-color-dark': themeState.isDarkMode, 
                'chat-list__box-content-color-light': !themeState.isDarkMode, }"   class="chat-list__box-content flex-column" v-if="item.type == 'guild' || item.type == 'team'">
                  <div class="mb-1 d-flex align-center justify-space-between" style="width: 100%; padding-top: 11px">
                    <p style="font-size: 11px">{{ item.game.gameName }} </p>
                  </div>
                  <div class="d-flex align-center justify-space-between" style="width: 100%">
                    <v-avatar size="30" style="margin-bottom: 10px">
                      <v-img :src="item.photo"></v-img>
                    </v-avatar>
                    <div class="ml-2 list-separator" style="width: 100%" :class="themeState.isDarkMode ? 'separator-color-dark' : 'separator-color-light'">
                      <div class="d-flex justify-space-between align-center" style="width: 100%">
                        <p style="font-size: 13px; font-weight: 500" v-if="item.type == 'guild'">
                          {{ item.guildName }}
                        </p>
                        <p style="font-size: 13px; font-weight: 500" v-else>
                          {{ item.teamName }}
                        </p>
                        <p style="font-size: 11px">{{ item.latestChat.time }}</p>
                      </div>
                      <div>
                        <p style="font-size: 11px">{{item.latestChat.username}}: {{item.latestChat.chat}}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="chat-list__content" :class="{'background-dark title-dark': themeState.isDarkMode}">
            <div v-if="isChatActive">
              <div :class="{'background-dark title-dark': themeState.isDarkMode}" class="chat-top__title">
                <p>Agus</p>
              </div>
              <div :class="themeState.isDarkMode ? 'separator-color-dark' : 'separator-color-light'"></div>
              <div class="chat-content__box">
                <div class="chat-data__box">
                  <div class="chat-bubbles" v-for="(item, i) in messages" :key="i" :class="themeState.isDarkMode ? 'chat-bubbles-dark' : 'chat-bubbles-light'">
                    <div v-if="!isSameUser(i)" class="d-flex" style="width: 100%;">
                      <div class="mr-5 ml-1">
                        <v-menu :disabled="item.position == 'user'" open-on-hover position="center" offset="14">
                          <template v-slot:activator="{ props }">
                            <v-avatar class="avatar-user" size="30" v-bind="props">
                              <v-img :src="item.image"></v-img>
                            </v-avatar>
                          </template>
                          <v-list>
                            <v-list-item
                              v-for="(item, index) in items"
                              :key="index"
                              :value="index"
                            >
                              <v-list-item-title>{{ item.title }}</v-list-item-title>
                            </v-list-item>
                          </v-list>
                        </v-menu>
                      </div>
                      <div style="width: 100%;">
                        <div class="d-flex align-start justify-space-between" style="width: 100%">
                          <div class="d-flex align-center"> 
                            <v-menu :disabled="item.position == 'user'" open-on-hover position="center" offset="14">
                              <template v-slot:activator="{ props }">
                                <p class="chat-user__name" v-bind="props"> {{ item.user }} </p>
                              </template>
                              <v-list>
                                <v-list-item
                                  v-for="(item, index) in items"
                                  :key="index"
                                  :value="index"
                                >
                                  <v-list-item-title>{{ item.title }}</v-list-item-title>
                                </v-list-item>
                              </v-list>
                            </v-menu>
                            <p style="font-size: 11px" class="ml-2"> {{ formatTime(item.time) }} </p>
                          </div>
                          <v-menu v-model="item.isMenuActive" location="start" :close-on-content-click="false" offset="10">
                            <template v-slot:activator="{ props }">
                              <div 
                                class="btn-action-hover__option" 
                                v-bind="props"
                                :style="props['aria-expanded'] == 'true' ? 'color: #4f4f4f' : 'color: transparent'"
                              >
                                <v-icon size="18" :class="{'title-dark': themeState.isDarkMode}" >
                                  mdi-dots-vertical
                                </v-icon>
                              </div>
                            </template>
                            <div class="d-flex action-hover">
                              <div class="btn-action-hover">
                                <v-img src="assets/arrow.png" contain height="22" max-width="22"></v-img>
                              </div>
  
                              <v-menu v-model="emoticonMenu" location="bottom" :close-on-content-click="menuCLoseOnContentClick" offset="10">
                                <template v-slot:activator="{ props }">
                                  <div class="btn-action-hover ml-1 mr-1" v-bind="props">
                                    <v-icon size="20" color="#4f4f4f">
                                      mdi-emoticon-outline
                                    </v-icon>
                                  </div>
                                </template>
                                <div v-if="!expandReaction" class="action-hover d-flex align-center justify-center" style="gap: 5px">
                                  <div v-for="(reaction, j) in reaction.slice(0, 6)" :key="j">
                                    <div style="cursor: pointer; font-size: 18px" @click="handleReaction(i, j)">
                                      {{ reaction.emoticon }}
                                    </div>
                                  </div>
                                  <div @click="handleExpandReaction()" class="btn-action-hover">
                                    <v-icon>
                                      mdi-plus
                                    </v-icon>
                                  </div>
                                </div>
                                <div v-else class="action-hover d-flex align-center justify-center" style="gap: 5px; max-width: 200px; flex-wrap: wrap">
                                  <div v-for="(reaction, j) in reaction" :key="j">
                                    <div style="cursor: pointer; font-size: 18px" @click="handleReaction(i, j)">
                                      {{ reaction.emoticon }}
                                    </div>
                                  </div>
                                </div>
                              </v-menu>
  
                              <div class="btn-action-hover">
                                <v-icon size="20" color="#4f4f4f">
                                  mdi-flag-outline
                                </v-icon>
                              </div>
                            </div>
                          </v-menu>
                        </div>
                        <p style="font-size: 13px; margin-top: 4px; max-width: 250px">
                          {{ item.message }}
                        </p>
                      </div>
                    </div>
                    <div v-else style="word-wrap: break-word; width: 100%">
                      <div class="chat-bubles_same-person">
                        <div class="d-flex justify-space-between align-start" style="width: 100%; height: 100%">
                          <p class="chat-time__same-user" style="margin-bottom: 1px"> {{ formatTime(item.time) }} </p>
                          <v-menu v-model="item.isMenuActive" location="start" :close-on-content-click="false" offset="10">
                            <template v-slot:activator="{ props }">
                              <div 
                                class="btn-action-hover__option" 
                                v-bind="props"
                                :style="props['aria-expanded'] == 'true' ? 'color: #4f4f4f' : 'color: transparent'"
                              >
                                <v-icon size="18" :class="{'title-dark': themeState.isDarkMode}" >
                                  mdi-dots-vertical
                                </v-icon>
                              </div>
                            </template>
                            <div class="d-flex action-hover">
                              <div class="btn-action-hover">
                                <v-img src="assets/arrow.png" contain height="22" max-width="22"></v-img>
                              </div>
    
                              <v-menu v-model="emoticonMenu" location="bottom" :close-on-content-click="menuCLoseOnContentClick" offset="10">
                                <template v-slot:activator="{ props }">
                                  <div class="btn-action-hover ml-1 mr-1" v-bind="props">
                                    <v-icon size="20" color="#4f4f4f">
                                      mdi-emoticon-outline
                                    </v-icon>
                                  </div>
                                </template>
                                <div v-if="!expandReaction" class="action-hover d-flex align-center justify-center" style="gap: 5px">
                                  <div v-for="(reaction, j) in reaction.slice(0, 6)" :key="j">
                                    <div style="cursor: pointer; font-size: 18px" @click="handleReaction(i, j)">
                                      {{ reaction.emoticon }}
                                    </div>
                                  </div>
                                  <div @click="handleExpandReaction()" class="btn-action-hover">
                                    <v-icon>
                                      mdi-plus
                                    </v-icon>
                                  </div>
                                </div>
                                <div v-else class="action-hover d-flex align-center justify-center" style="gap: 5px; max-width: 200px; flex-wrap: wrap">
                                  <div v-for="(reaction, j) in reaction" :key="j">
                                    <div style="cursor: pointer; font-size: 18px" @click="handleReaction(i, j)">
                                      {{ reaction.emoticon }}
                                    </div>
                                  </div>
                                </div>
                              </v-menu>
    
                              <div class="btn-action-hover">
                                <v-icon size="20" color="#4f4f4f">
                                  mdi-flag-outline
                                </v-icon>
                              </div>
                            </div>
                          </v-menu>
                        </div>
                        <p class="chat-same__user">
                          {{ item.message }} 
                        </p>
                      </div>
                      <div v-if="item.reaction.length > 0" class="d-flex align-center mt-2" style="margin-left: 54px; flex-wrap: wrap">
                        <div v-for="(reactionList, k) in item.reaction" :key="k">
                          <div class="d-flex align-center mr-2 mb-2" :class="{
                            'reaction-box__user' : reactionList.user,
                            'reaction-box' : !reactionList.user,
                            'reaction-box__user-dark' : reactionList.user && themeState.isDarkMode,
                            'reaction-box-dark' : !reactionList.user && themeState.isDarkMode,
                          }" @click="handleUpdateReaction(i, k)">
                            <p style="font-size: 15px" class="mr-1">{{reactionList.emoticon}}</p>
                            <p style="font-size: 12px; margin-top: 2px">{{reactionList.count}}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <!-- <div class="action-hover" v-if="item.position == 'other'">
                      <div class="d-flex">
                        <div class="btn-action-hover">
                          <v-img src="assets/arrow.png" contain height="22" max-width="22"></v-img>
                        </div>
                        <div class="btn-action-hover ml-1 mr-1">
                          <v-icon size="20" color="#4f4f4f">
                            mdi-emoticon-outline
                          </v-icon>
                        </div>
  
                        <div class="btn-action-hover">
                          <v-icon size="20" color="#4f4f4f">
                            mdi-flag-outline
                          </v-icon>
                        </div>
                      </div>
                    </div> -->
                  </div>
                </div>
                <div class="chat-text" :class="{'background-dark title-dark': themeState.isDarkMode,
                'chat-box-color-dark color-dark__content': themeState.isDarkMode,
              'chat-box-color-light': !themeState.isDarkMode,}">
                  <v-divider></v-divider>
                  <Input @send-message="addMessage"/>
                </div>
              </div>
            </div>
            <div v-else style="height: 100%;" class="d-flex align-center justify-center flex-column">
              
              <div style="margin-top: -60px">
                <v-img src="/images/icon/search-message.png" class="mb-5" max-height="70" min-width="70"></v-img>
              </div>
              
              <b><span style="color: #ff7800">Foxon</span> Chat</b>
              <div v-if="friendList.length > 1 && chatList.length == 0">
                <p class="mt-1" style="line-height: normal; text-align: center; max-width: 230px; font-size: 13px">
                  Chat dengan teman anda secara pribadi
                </p>
                <div class="d-flex justify-space-around mt-4" style="width: 100%">
                  <div v-for="(item, i) in friendList.slice(0, 3)" :key="i">
                    <div @click="handleChatFriendList(i)" class="d-flex align-center flex-column" style="cursor: pointer">
                      <v-avatar size="32">
                        <v-img :src="item.photo"></v-img>
                      </v-avatar>
                      <p class="mt-1 username__right-side">
                        {{ item.username }}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div v-else class="d-flex align-center flex-column justify-center">
                <p class="description-chat__right-side">
                  Cari teman baru atau tim mabar dari game yang kamu mainkan!
                </p>
                <v-btn 
                  class="mt-5" 
                  variant="flat" 
                  color="#ff7800"
                  height="35"
                  style="text-transform: capitalize; letter-spacing: normal"
                >
                  Cari
                </v-btn>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use './style.scss';
</style>


<script>
import { themeState } from "../../theme";
import Input from './Input/index.vue'
export default {
  name: 'ChatComponents',
  data() {
    return {
      themeState,
      menuCLoseOnContentClick: true,
      emoticonMenu: false,
      expandReaction: false,
      isChatActive: false,
      friendList: [
        {
          name: 'Agus',
          id: '0000000122313123',
          username: '@agusiagus',
          photo: 'https://randomuser.me/api/portraits/men/81.jpg'
        },
        {
          name: 'Coki',
          id: '0000000122313124',
          username: '@cokicoki',
          photo: 'https://randomuser.me/api/portraits/men/83.jpg'
        },
        {
          name: 'Dita',
          id: '0000000122313125',
          username: '@ditabokin',
          photo: 'https://randomuser.me/api/portraits/women/82.jpg'
        },
        {
          name: 'Bagus',
          id: '0000000122313126',
          username: '@bagusbanget',
          photo: 'https://randomuser.me/api/portraits/men/88.jpg'
        },
      ],
      reaction: [
          { id: 1, emoticon: '👍' },
          { id: 2, emoticon: '😂' },
          { id: 3, emoticon: '😍' },
          { id: 4, emoticon: '😎' },
          { id: 5, emoticon: '💩' },
          { id: 6, emoticon: '😡' },
          { id: 7, emoticon: '❤️' },
          { id: 8, emoticon: '😜' },
          { id: 9, emoticon: '🤔' },
          { id: 10, emoticon: '😱' },
          { id: 11, emoticon: '😇' },
          { id: 12, emoticon: '😜' },
          { id: 13, emoticon: '🤗' },
          { id: 14, emoticon: '😌' },
          { id: 15, emoticon: '🥺' },
          { id: 16, emoticon: '😏' },
          { id: 17, emoticon: '😅' },
          { id: 18, emoticon: '🙄' },
          { id: 19, emoticon: '😑' },
          { id: 20, emoticon: '😷' },
          { id: 21, emoticon: '🥳' },
          { id: 22, emoticon: '🤩' },
          { id: 23, emoticon: '🧐' },
          { id: 24, emoticon: '🤪' },
          { id: 25, emoticon: '🤭' },
          { id: 26, emoticon: '😳' },
          { id: 27, emoticon: '😌' },
          { id: 28, emoticon: '🤐' },
          { id: 29, emoticon: '😢' },
          { id: 30, emoticon: '😝' },
          { id: 31, emoticon: '🤬' },
          { id: 32, emoticon: '🤧' },
          { id: 33, emoticon: '😬' },
          { id: 34, emoticon: '🙃' },
          { id: 35, emoticon: '🥴' },
          { id: 36, emoticon: '🥱' },
          { id: 37, emoticon: '🤠' },
          { id: 38, emoticon: '😀' },
          { id: 39, emoticon: '🦄' },
      ],
      items: [
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me 2' },
      ],
      messages: [
        {
          message: "Halo kawan! ",
          image: 'https://randomuser.me/api/portraits/men/82.jpg',
          isSending: false,
          user: "Farhan",
          position: 'other',
          isMenuActive: false,
          time: new Date(),
          reaction: []
        },
        {
          message: "bagaimana kabarmu",
          image: 'https://randomuser.me/api/portraits/men/82.jpg',
          isSending: false,
          user: "Farhan",
          position: 'other',
          isMenuActive: false,
          time: new Date(),
          reaction: [
            { id: 1, emoticon: '😀', count: 3, user: true },
            { id: 2, emoticon: '😂', count: 5, user: false },
          ]
        },
        {
          message: "Aku sedang di jakarta",
          image: 'https://randomuser.me/api/portraits/men/82.jpg',
          isSending: false,
          user: "Farhan",
          position: 'other',
          isMenuActive: false,
          time: new Date(),
          reaction: []
        },
      ],
      variant: null,
      chatList: [
        {
          teamName: 'Team Kucing',
          game: {
              gameImage: '',
              gameName: 'Zenless Zone Zero',
            },
          active: false,
            photo: 'https://randomuser.me/api/portraits/men/85.jpg',
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
            latestChat: {
              read: false,
              time: '08:40',
              chat: 'kocak',
              username: '@rigen',
            },
          type: 'team'
        },
        {
          name: 'Agus',
          active: false,
          photo: 'https://randomuser.me/api/portraits/men/85.jpg',
          latestChat: {
            read: true,
            time: '07:00',
            chat: 'hi',
            personChat: 'user'
          },
          type: 'personal'
        },
        {
          guildName: 'Guild Arancar',
          game: {
              gameImage: '',
              gameName: 'Zenless Zone Zero',
            },
          active: false,
            photo: 'https://randomuser.me/api/portraits/men/85.jpg',
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
          latestChat: {
            read: false,
            time: '08:40',
            chat: 'lol',
            username: '@dikad19',
          },
          type: 'guild'
        },
        {
          name: 'Mukti',
          active: false,
          photo: 'https://randomuser.me/api/portraits/men/85.jpg',
          latestChat: {
            read: true,
            time: '07:00',
            chat: 'hi',
            personChat: 'user'
          },
          type: 'personal'
        },
        {
          name: 'Rigen',
          active: false,
          photo: 'https://randomuser.me/api/portraits/men/85.jpg',
          latestChat: {
            read: false,
            time: '12:10',
            chat: 'hahaha',
            personChat: 'person'
          },
          type: 'personal'
        },
        {
          name: 'Hifdzi',
          active: false,
          photo: 'https://randomuser.me/api/portraits/men/85.jpg',
          latestChat: {
            read: false,
            time: '13:55',
            chat: 'wkwkwk',
            personChat: 'person'
          },
          type: 'personal'
        },
        {
          teamName: 'Team Kambing',
          game: {
              gameImage: '',
              gameName: 'Zenless Zone Zero',
            },
          active: false,
            photo: 'https://randomuser.me/api/portraits/men/85.jpg',
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
            latestChat: {
            read: false,
            time: '08:40',
            chat: 'XD',
            username: '@kintam',
          },
          type: 'team'
        },
      ],
    }
  },
  components: {
    Input
  },
  props: {
    handleCloseChat: {
      type: Function,
      required: true,
    },
  },
  methods: {
    // handleChatFriendList(i) {

    // },

    handleExpandReaction() {
      this.menuCLoseOnContentClick = false
      this.emoticonMenu = true
      this.expandReaction = true
    },

    handleReaction(i, j) {
      const selectedMessage = this.messages[i];
      const selectedReaction = this.reaction[j];
      const existingReaction = selectedMessage.reaction.find(
        (r) => r.id === selectedReaction.id && r.user
      );

      if (!existingReaction) {
        const reaction = selectedMessage.reaction.find(
          (r) => r.id === selectedReaction.id
        );

        if (reaction) {
          reaction.count++;
        } else {
          selectedMessage.reaction.push({
            id: selectedReaction.id,
            emoticon: selectedReaction.emoticon,
            count: 1,
            hasGiven: true,
            user: true,
          });
        }
      } 

      this.emoticonMenu = false
      setTimeout(() => {
        this.expandReaction = false
      }, 1000);
      this.messages[i].isMenuActive = false
    },

    handleUpdateReaction(i, k) {
      if (!this.messages[i].reaction[k].user) {
        this.messages[i].reaction[k].count++
        this.messages[i].reaction[k].user = true
      }
    },

    handleClose() {
      this.handleCloseChat()
    },

    isSameUser(index) {
      if (index === 0) return false;
      return this.messages[index].user === this.messages[index - 1].user;
    },

    formatTime(timestamp) {
      const now = new Date();
      const messageDate = new Date(timestamp);

      const isToday = now.toDateString() === messageDate.toDateString();
      const isYesterday = (now - messageDate) / (1000 * 3600 * 24) === 1;

      if (isToday) {
        // Show only time if message was sent today
        return messageDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      } else if (isYesterday) {
        // Show "Yesterday" if message was sent yesterday
        return 'Yesterday';
      } else {
        // Show the full date if message was sent more than a day ago
        return messageDate.toLocaleDateString();
      }
    },

    addMessage(message) {
      this.messages.push(message);
    },

    setActiveChat(index) {
      this.chatList.forEach((item) => {
        item.active = false;
      });
      this.chatList[index].active = true;
      this.isChatActive = true
    },
  },

  watch: {
    emoticonMenu() {
      setTimeout(() => {
        this.expandReaction = false
      }, 500);
    }
  },

  created() {
    const chatStatus = localStorage.getItem('variant')
    if (chatStatus) {
      this.variant = chatStatus
    }
  }
}
</script>