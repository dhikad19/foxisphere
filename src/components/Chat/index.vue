<template>
  <div class="chat-container">
    <div class="chat-wrapper" v-if="variant == 'full'">
      <div 
        class="chat-box"
      >
        <div class="chat-topbar">
          <p style="font-weight: 500">Chat</p>
          <div class="d-flex">
            <div class="chat-btn" @click="handleFull()">
              <v-icon size="17">
                mdi-open-in-new
              </v-icon>
            </div>
            <div class="chat-btn" @click="handleMinimize()">
              <v-icon size="17">
                mdi-minus
              </v-icon>
            </div>
            <div class="chat-btn" @click="handleClose()">
              <v-icon size="17">
                mdi-close
              </v-icon>
            </div>
          </div>
        </div>
        <div class="chat-box__content">
          <div class="chat-list">
            <div style="padding: 10px;">
              <div class="chat-list__friend" v-for="(item, i) in  friendList" :key="i">
                <div class="chat-list__friend-content">
                  <v-avatar size="30">
                    <v-img :src="item.photo"></v-img>
                  </v-avatar>
                  <div class="ml-2" style="width: 100%">
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
              </div>
            </div>
            <v-divider></v-divider>
            <p class="title-chat-list">Tim / Grup</p>
            <div style="padding: 10px;">
              <div class="chat-list__friend" v-for="(item, i) in teamList" :key="i">
                <div class="chat-list__team-content">
                  <p style="font-size: 13px" class="mb-1">{{ item.game.gameName }}</p>
                  <div>
                    <div v-if="item.team.length > 4" class="d-flex" style="margin-left: 16px">
                      <div v-for="(teams, j) in item.team.slice(0, 3)" :key="j" class="d-flex">
                        <v-avatar size="30" style="margin-top: 2px; margin-left: -16px; z-index: 9;">
                          <v-img 
                            :src="teams.image" 
                          >
                          </v-img>
                        </v-avatar>
                      </div>
                      <div 
                        class="d-flex align-center justify-center" 
                        style="margin-left: -16px; z-index: 99;  margin-top: 2px; height: 32px; width: 32px; background-color: #ff7800; border-radius: 50%; color: white">
                        <p style="font-size: 13px; font-weight: 500">
                          +{{ item.team.length - 4 }}
                        </p>
                      </div>
                    </div>
                    <div v-else class="d-flex" style="margin-left: 16px">
                      <div v-for="(teams, j) in item.team.slice(0, 3)" :key="j" class="d-flex">
                        <v-avatar size="30" style="margin-top: 2px; margin-left: -16px;z-index: 9;">
                          <v-img 
                            :src="teams.image" 
                          >
                          </v-img>
                        </v-avatar>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- <div class="ml-2" style="width: 100%">
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
                </div> -->
              </div>
            </div>
            <v-divider></v-divider>
            <p class="title-chat-list">Guild / Clan</p>
            <div style="padding: 10px;">
              <div class="chat-list__friend" v-for="(item, i) in guildList" :key="i">
                <div class="chat-list__team-content">
                  <p style="font-size: 13px" class="mb-1">{{ item.game.gameName }}</p>
                  <div>
                    <div v-if="item.team.length > 4" class="d-flex" style="margin-left: 16px">
                      <div v-for="(teams, j) in item.team.slice(0, 3)" :key="j" class="d-flex">
                        <v-avatar size="30" style="margin-top: 2px; margin-left: -16px; z-index: 9;">
                          <v-img 
                            :src="teams.image" 
                          >
                          </v-img>
                        </v-avatar>
                      </div>
                      <div 
                        class="d-flex align-center justify-center" 
                        style="margin-left: -16px; z-index: 99;  margin-top: 2px; height: 32px; width: 32px; background-color: #ff7800; border-radius: 50%; color: white">
                        <p style="font-size: 13px; font-weight: 500">
                          +{{ item.team.length - 4 }}
                        </p>
                      </div>
                    </div>
                    <div v-else class="d-flex" style="margin-left: 16px">
                      <div v-for="(teams, j) in item.team.slice(0, 3)" :key="j" class="d-flex">
                        <v-avatar size="30" style="margin-top: 2px; margin-left: -16px;z-index: 9;">
                          <v-img 
                            :src="teams.image" 
                          >
                          </v-img>
                        </v-avatar>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- <div class="ml-2" style="width: 100%">
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
                </div> -->
              </div>
            </div>
          </div>
          <div class="chat-list__content">
            <div class="chat-top__title">
              <p>
                Agus
              </p>
            </div>
            <v-divider></v-divider>
            <div class="chat-content__box">
              <div class="chat-data__box">
                <div class="chat-bubbles" v-for="(item, i) in messages" :key="i">
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
                      <div class="d-flex align-center justify-space-between" style="width: 100%">
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
                              <v-icon size="18" >
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
                              <div class="action-hover d-flex align-center justify-center" style="gap: 5px">
                                <div v-for="(reaction, j) in reaction" :key="j">
                                  <div 
                                    style="cursor: pointer; font-size: 18px; user-select: none" 
                                    @click="handleReaction(i, j)"
                                  >
                                    {{ reaction.emoticon }}
                                  </div>
                                </div>
                                <div @click="handleExpandReaction()" class="btn-action-hover">
                                  <v-icon>
                                    mdi-plus
                                  </v-icon>
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
                      <p class="chat-time__same-user" style="margin-bottom: 1px"> {{ formatTime(item.time) }} </p>
                      <div class="d-flex justify-space-between align-center" style="width: 100%">
                        <p class="chat-same__user">
                          {{ item.message }} 
                        </p>
                        <v-menu v-model="item.isMenuActive" location="start" :close-on-content-click="false" offset="10">
                          <template v-slot:activator="{ props }">
                            <div 
                              class="btn-action-hover__option" 
                              v-bind="props"
                              :style="props['aria-expanded'] == 'true' ? 'color: #4f4f4f' : 'color: transparent'"
                            >
                              <v-icon size="18" >
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
                              <div class="action-hover d-flex align-center justify-center" style="gap: 5px">
                                <div v-for="(reaction, j) in reaction" :key="j">
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
                            </v-menu>
  
                            <div class="btn-action-hover">
                              <v-icon size="20" color="#4f4f4f">
                                mdi-flag-outline
                              </v-icon>
                            </div>
                          </div>
                        </v-menu>
                      </div>
                    </div>
                    <div v-if="item.reaction.length > 0" class="d-flex align-center mt-2" style="margin-left: 54px; flex-wrap: wrap">
                      <div v-for="(reactionList, k) in item.reaction" :key="k">
                        <div class="d-flex align-center mr-2 mb-2" :class="reactionList.user ? 'reaction-box__user' : 'reaction-box'" @click="handleUpdateReaction(i, k)">
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
              <div class="chat-text">
                <v-divider></v-divider>
                <Input @send-message="addMessage"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="chat-wrapper__variant" v-else-if="variant == 'minimize'">
      <div 
        @click="handleMaximize()"
        class="chat-box__variant"
      >
        <p>Chat</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use './style.scss';
</style>


<script>
import Input from './Input/index.vue'
export default {
  name: 'ChatComponents',
  data() {
    return {
      menuCLoseOnContentClick: true,
      emoticonMenu: false,
      reaction: [
        { id: 1, emoticon: '😀' },
        { id: 2, emoticon: '😂' },
        { id: 3, emoticon: '😍' },
        { id: 4, emoticon: '😎' },
        { id: 5, emoticon: '😢' },
        { id: 6, emoticon: '😡' },
        { id: 7, emoticon: '❤️' }
      ],
      items: [
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me 2' },
      ],
      messages: [
        {
          message: "Halo kawan!",
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
      friendList: [
        {
          name: 'Agus',
          photo: 'https://randomuser.me/api/portraits/men/85.jpg',
          latestChat: {
            read: false,
            time: '08:40',
            chat: 'lol',
            personChat: 'user'
          }
        },
        {
          name: 'Mukti',
          photo: 'https://randomuser.me/api/portraits/men/85.jpg',
          latestChat: {
            read: true,
            time: '07:00',
            chat: 'hi',
            personChat: 'user'
          }
        },
        {
          name: 'Rigen',
          photo: 'https://randomuser.me/api/portraits/men/85.jpg',
          latestChat: {
            read: false,
            time: '12:10',
            chat: 'hahaha',
            personChat: 'person'
          }
        },
        {
          name: 'Hifdzi',
          photo: 'https://randomuser.me/api/portraits/men/85.jpg',
          latestChat: {
            read: false,
            time: '13:55',
            chat: 'wkwkwk',
            personChat: 'person'
          }
        },
      ],
      teamList: [
        {
          teamName: 'Team Kambing',
          game: {
              gameImage: '',
              gameName: 'Zenless Zone Zero',
            },
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
            personChat: 'user'
          }
        },
        {
          teamName: 'Team Kambing',
          game: {
              gameImage: '',
              gameName: 'Zenless Zone Zero',
            },
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
            personChat: 'user'
          }
        },
        {
          teamName: 'Team Kambing',
          game: {
              gameImage: '',
              gameName: 'Zenless Zone Zero',
            },
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
            personChat: 'user'
          }
        },
        {
          teamName: 'Team Kambing',
          game: {
              gameImage: '',
              gameName: 'Zenless Zone Zero',
            },
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
            personChat: 'user'
          }
        },
        {
          teamName: 'Team Kambing',
          game: {
              gameImage: '',
              gameName: 'Zenless Zone Zero',
            },
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
            personChat: 'user'
          }
        },
      ],
      guildList: [
        {
          teamName: 'Team Kambing',
          game: {
              gameImage: '',
              gameName: 'Zenless Zone Zero',
            },
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
            personChat: 'user'
          }
        },
        {
          teamName: 'Team Kambing',
          game: {
              gameImage: '',
              gameName: 'Zenless Zone Zero',
            },
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
            personChat: 'user'
          }
        },
        {
          teamName: 'Team Kambing',
          game: {
              gameImage: '',
              gameName: 'Zenless Zone Zero',
            },
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
            personChat: 'user'
          }
        },
      ]
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
    handleExpandReaction() {
      this.menuCLoseOnContentClick = false
      this.emoticonMenu = true
    },
    handleReaction(i, j) {
      const selectedMessage = this.messages[i]; // Get the selected message
      const selectedReaction = this.reaction[j]; // Get the selected reaction (from availableReactions)

      // Check if the user has already reacted to this emoji
      const existingReaction = selectedMessage.reaction.find(
        (r) => r.id === selectedReaction.id && r.user // Assuming "Farhan" is the current user
      );

      if (!existingReaction) {
        // If the user has not reacted with this emoji yet, add the reaction
        const reaction = selectedMessage.reaction.find(
          (r) => r.id === selectedReaction.id
        );

        if (reaction) {
          // If the emoji already exists, just increment the count
          reaction.count++;
        } else {
          // Otherwise, add the emoji with a count of 1
          selectedMessage.reaction.push({
            id: selectedReaction.id,
            emoticon: selectedReaction.emoticon,
            count: 1,
            hasGiven: true,
            user: true, // Store the user who reacted
          });
        }
      } 
      this.emoticonMenu = false
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
    handleMaximize() {
    this.variant = 'full'
    localStorage.setItem('variant', 'full')
    },
    handleMinimize() {
      this.variant = 'minimize'
      localStorage.setItem('variant', 'minimize')
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