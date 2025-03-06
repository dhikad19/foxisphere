<template>
<div>
  <v-card flat width="380" style="border-radius: 6px">
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
      </div>
      <v-divider></v-divider>
      <div>
        <div v-if="tabActive == 'inbox'">
          <div  class="pa-3">
            <div class="list-container" v-for="(item, i) in listInbox.slice(0, 5)" :key="i">
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
          <div v-if="listInbox.length > 5">
            <v-divider></v-divider>
            <div class="pa-3">
              <v-btn 
                color="#ff7800" 
                block 
                variant="flat" 
                style="text-transform: capitalize; letter-spacing: normal"
              >
                Lihat Semua
              </v-btn>
            </div>
          </div>
        </div>
        <div v-else>
          <div  class="pa-3">
            <div class="list-container" v-for="(item, i) in listTeam.slice(0, 5)" :key="i">
              <TeamList 
                :team="item.team"
                :date="item.date" 
                :description="item.description" 
                :image="item.image" 
                :read="item.read"
                :game="item.game"
                :team-name="item.teamName"
                :type="item.type"
                :user="item.user"
                :community="item.community"
              />
            </div>
          </div>
          <div v-if="listTeam.length > 5">
            <v-divider></v-divider>
            <div class="pa-3">
              <v-btn 
                color="#ff7800" 
                block 
                variant="flat" 
                style="text-transform: capitalize; letter-spacing: normal"
              >
                Lihat Semua
              </v-btn>
            </div>
          </div>
        </div>
      </div>
    </div>
  </v-card>
</div>
</template>

<script>
import InboxList from './List/Inbox/index.vue'
import TeamList from './List/Team/index.vue'
export default {
  data() {
    return {
      tabActive: 'inbox',
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
    }
  },
  methods: {
    handleTab(index) {
        this.tabContent.forEach((tab, i) => {
        tab.active = i === index;
      });
      this.tabActive = this.tabContent[index].value
      }
  },
  name: 'NotificationComponent',
  components: {
    InboxList, 
    TeamList
  }
}
</script>

<style lang="scss" scoped>
@use './style.scss'
</style>