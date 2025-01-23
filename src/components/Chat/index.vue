<template>
  <div class="chat-container">
    <div class="chat-wrapper" v-if="variant == 'full'">
      <div 
        class="chat-box"
      >
        <div class="chat-topbar">
          <p>Chat</p>
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
            <p>team</p>
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
                      <v-menu open-on-hover position-x="center" offset="14">
                        <template v-slot:activator="{ props }">
                          <v-avatar size="30" v-bind="props">
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
                        <p style="font-weight: 500"> {{ item.user }} </p>
                        <p style="font-size: 12px"> {{ formatTime(item.time) }} </p>
                      </div>
                      <p style="font-size: 13px; margin-top: 4px; max-width: 250px">
                        {{ item.message }}
                      </p>
                    </div>
                  </div>
                  <div v-else style="word-wrap: break-word; width: 100%">
                    <div class="chat-bubles_same-person">
                      <p class="chat-time__same-user"> {{ formatTime(item.time) }} </p>
                      <p style="font-size: 13px; word-wrap: break-word; width: 100%; max-width: 250px"> {{ item.message }} </p>
                    </div>
                  </div>
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
      items: [
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me 2' },
      ],
      messages: [],
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
          latestChat: {
            read: true,
            time: '07:00',
            chat: 'hi',
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
                name: 'Sugiono',
                image: 'https://randomuser.me/api/portraits/men/85.jpg'
              },
              {
                name: 'Suparman',
                image: 'https://randomuser.me/api/portraits/men/85.jpg'
              },
              
            ],
          latestChat: {
            read: false,
            time: '12:10',
            chat: 'hahaha',
            personChat: 'person'
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
          latestChat: {
            read: false,
            time: '13:55',
            chat: 'wkwkwk',
            personChat: 'person'
          }
        },
      ]
    }
  },
  components: {
    Input
  },
  methods: {
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