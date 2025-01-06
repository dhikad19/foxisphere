<template>
  <div class="timeline-container">
    <div class="timeline-wrapper">
      <v-row dense>
        <v-col md="8" cols="12" class="left-container">
          <div class="scroller-container">
            <v-icon v-if="left >= 100" icon variant="plain" class="arrow left-arrow" @click="scrollLeft">
              mdi-chevron-left
            </v-icon>
            <v-icon v-else icon variant="plain" class="arrow left-arrow" @click="scrollLeft">
              mdi-plus
            </v-icon>
            <div class="scroller" ref="scroller">
              <div :class="active == i + 1 ? 'scroller-item__active' : 'scroller-item'" @click="handleSelect(i)" v-for="(item, i) in items" :key="i">
                {{ item.name }}
              </div>
            </div>
            <v-icon icon variant="plain" class="arrow right-arrow" @click="scrollRight">
              mdi-chevron-right
            </v-icon>
          </div>
          <v-divider class="mt-5"></v-divider>
          <div class="mt-12 mb-10">
            <div v-for="(item, i) in blogData" :key="i">
              <Card 
                :title="item.title" 
                :subTitle="item.subTitle" 
                :image="item.image" 
                :like="item.like" 
                :categories="item.categories"
                :writters="item.writters"
                :writtersImage="item.writtersImage"
                :read="item.read" 
                :date="item.date" 
                :comments="item.comments" 
              />
            </div>
          </div>
          <v-pagination
            density="compact"
            v-model="page"
            :length="15"
            :total-visible="7"
          ></v-pagination>
        </v-col>
        <v-col md="4" cols="12" class="right-container">
          <div style="height: 100%">
            <div class="right-content__flat mt-1">
              <h1 style="font-size: 18px; color: #4f4f4f">Popular Categories</h1>
              <div class="mt-4" style="display: flex; align-items: center; flex-wrap: wrap">
                <div class="scroller-item mb-2" v-for="(item, i) in items.slice(0, 7)" :key="i">
                  {{ item.name }}
                </div>
              </div>
              <p class="mt-3" style="font-size: 13px; color: #ff7800; text-align: center; font-weight: 500">
                More categories...
              </p>
            </div>

            <div class="right-content mt-12">
              <h1 style="font-size: 18px; color: #4f4f4f">Recent Post</h1>
              <v-row dense class="mt-4 mb-2">
                <v-col cols="12" v-for="(item, i) in blogData.slice(0, 4)" :key="i">
                  <div class="d-flex">
                    <v-icon color="#ff7800">mdi-circle-small</v-icon>
                    <div>
                      <p style="font-size: 15px; font-weight: 500;">
                        {{ item.title }}
                      </p>
                      <p style="font-size: 14px; color: #4f4f4f; line-height: normal">
                        {{ item.subTitle }}
                      </p>
                    </div>
                  </div>
                </v-col>
                <v-col cols="12" class="mt-3" style="width: 100%">
                  <p style="font-size: 13px; color: #ff7800; text-align: center; font-weight: 500">
                    More list...
                  </p>
                </v-col>
              </v-row>
            </div>

            <div class="right-content__flat mt-12">
              <h1 style="font-size: 18px; color: #4f4f4f">Top Community</h1>

              <v-row dense class="mt-4 mb-2">
                <v-col cols="12" v-for="(item, i) in community" :key="i">
                  <p class="mb-2" style="font-weight: 500; color: #FF8417;">{{item.name}}</p>
                  <div v-for="(list, j) in item.sub" :key="j">
                    <div class="d-flex mb-2">
                      <p class="mb-0 mr-3">
                        {{ list.emoji }}
                      </p>
                      <div>
                        <p style="font-size: 15px; font-weight: 500" class="mb-1">{{list.name}}</p>
                        <p style="font-size: 14px; line-height: normal; color: grey" v-html="list.description"></p>
                      </div>
                    </div>
                  </div>
                </v-col>
              </v-row>
            </div>
          </div>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
import Card from '@/components/Card/index.vue'
export default {
  name: 'TimelineComponents',
  components: {
    Card
  },
  data() {
    return {
      page: 1,
      active: 1,
      left: 0,
      community: [
        {
          name: 'Hobi',
          sub: [
            {
              name: 'Buku',
              description: 'Jelajahi setiap halaman untuk merasakan perspektif baru.',
              emoji: '📕'
            },
            {
              name: 'Film',
              description: 'Menghadirkan berbagai cerita dan emosi, memberikan pengalaman seru yang bisa dinikmati.',
              emoji: '🎞️'
            },
          ]
        },
        {
          name: 'Kuliner',
          sub: [
            {
              name: 'Resep',
              description: 'Buat momen istimewa dengan hidangan penuh rasa.',
              emoji: '🥗'
            },
            {
              name: 'Viral',
              description: 'Makanan yang sedang banyak dibicarakan di media sosial.',
              emoji: '🍛'
            },
          ]
        },
        {
          name: 'Game',
          sub: [
            {
              name: 'Genshin Impact',
              description: 'Gabungkan elemen untuk kalahkan musuh dan temukan rahasia dunia Teyvat yang penuh misteri.',
              emoji: '🗡️'
            },
            {
              name: 'Balatro',
              description: 'Permainan poker di gadget yang menawarkan pengalaman bermain poker yang realistis dan seru.',
              emoji: '🃏'
            },
            {
              name: 'Mobile Legends',
              description: ' Aksi cepat dan strategi cerdas dalam pertempuran 5v5.',
              emoji: '🎮'
            },
          ]
        },
        {
          name: 'Anime',
          sub: [
            {
              name: 'Jujutsu Kaisen',
              description: '<span style="color: #ff7700;">Yuji Itadori</span>, seorang remaja dengan kekuatan luar biasa yang terlibat dalam pertempuran melawan roh jahat setelah menelan benda terkutuk.',
              emoji: '👊'
            },
            {
              name: 'Chainsawman',
              description: '<span style="color: #ff7700;">Denji</span>, seorang pemuda miskin yang menjadi pemburu iblis dengan kekuatan unik—tubuhnya bisa berubah menjadi mesin chainsaw.',
              emoji: '🪚'
            },
          ]
        },
      ],
      blogData: [
        {
          title: 'Masa Depan Teknologi AI',
          subTitle: 'Bagaimana Kecerdasan Buatan Mengubah Dunia',
          writtersImage: '/images/male/variant-1.png',
          image: 'https://via.placeholder.com/800x400.png?text=AI+Technology',
          like: 30,
          read: '5 Menit baca',
          writters: 'Dwi Andika',
          categories: 'Teknologi',
          date: '10-10-2024',
          comments: 8,
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla condimentum orci non felis tincidunt, at dapibus orci tempor. Vivamus maximus interdum tincidunt. Aenean in nisi a arcu hendrerit dapibus. Quisque fringilla feugiat risus at volutpat. Integer tempor, sapien at fermentum cursus, magna urna interdum lorem, nec vestibulum urna neque et felis. Sed ultricies sapien ac velit facilisis, in dignissim leo volutpat.'
        },
        {
          title: 'Kebangkitan Komputasi Kuantum',
          subTitle: 'Apa yang akan datang di Dunia Teknologi Kuantum?',
          writtersImage: '/images/male/variant-1.png',
          image: 'https://via.placeholder.com/800x400.png?text=Quantum+Computing',
          like: 40,
          read: '4 Menit baca',
          writters: 'Dwi Andika',
          categories: 'Teknologi',
          date: '11-10-2024',
          comments: 12,
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus maximus interdum tincidunt. Nulla condimentum orci non felis tincidunt, at dapibus orci tempor. Aenean in nisi a arcu hendrerit dapibus. Quisque fringilla feugiat risus at volutpat. Integer tempor, sapien at fermentum cursus, magna urna interdum lorem, nec vestibulum urna neque et felis. Sed ultricies sapien ac velit facilisis, in dignissim leo volutpat.'
        },
        {
          title: 'Blockchain di Luar Cryptocurrency',
          subTitle: 'Menelusuri Penggunaan Lain dari Teknologi Blockchain',
          writtersImage: '/images/male/variant-1.png',
          image: 'https://via.placeholder.com/800x400.png?text=Blockchain+Technology',
          like: 25,
          read: '3 Menit baca',
          writters: 'Dwi Andika',
          categories: 'Teknologi',
          date: '12-10-2024',
          comments: 10,
          content: 'Sed ultricies sapien ac velit facilisis, in dignissim leo volutpat. Integer tempor, sapien at fermentum cursus, magna urna interdum lorem, nec vestibulum urna neque et felis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus maximus interdum tincidunt. Nulla condimentum orci non felis tincidunt, at dapibus orci tempor. Quisque fringilla feugiat risus at volutpat.'
        },
        {
          title: 'Inovasi Teknologi 5G',
          subTitle: 'Bagaimana 5G akan Merevolusi Dunia Digital?',
          writtersImage: '/images/male/variant-1.png',
          image: 'https://via.placeholder.com/800x400.png?text=5G+Technology',
          like: 35,
          read: '6 Menit baca',
          writters: 'Dwi Andika',
          categories: 'Teknologi',
          date: '13-4-2024',
          comments: 15,
          content: 'Quisque fringilla feugiat risus at volutpat. Integer tempor, sapien at fermentum cursus, magna urna interdum lorem, nec vestibulum urna neque et felis. Sed ultricies sapien ac velit facilisis, in dignissim leo volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus maximus interdum tincidunt. Nulla condimentum orci non felis tincidunt, at dapibus orci tempor.'
        },
        {
          title: 'Blockchain di Luar Cryptocurrency',
          subTitle: 'Menelusuri Penggunaan Lain dari Teknologi Blockchain',
          writtersImage: '/images/male/variant-1.png',
          image: 'https://via.placeholder.com/800x400.png?text=Blockchain+Technology',
          like: 25,
          read: '3 Menit baca',
          writters: 'Dwi Andika',
          categories: 'Teknologi',
          date: '12-10-2024',
          comments: 10,
          content: 'Sed ultricies sapien ac velit facilisis, in dignissim leo volutpat. Integer tempor, sapien at fermentum cursus, magna urna interdum lorem, nec vestibulum urna neque et felis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus maximus interdum tincidunt. Nulla condimentum orci non felis tincidunt, at dapibus orci tempor. Quisque fringilla feugiat risus at volutpat.'
        },
        {
          title: 'Inovasi Teknologi 5G',
          subTitle: 'Bagaimana 5G akan Merevolusi Dunia Digital?',
          writtersImage: '/images/male/variant-1.png',
          image: 'https://via.placeholder.com/800x400.png?text=5G+Technology',
          like: 35,
          read: '6 Menit baca',
          writters: 'Dwi Andika',
          categories: 'Teknologi',
          date: '13-4-2024',
          comments: 15,
          content: 'Quisque fringilla feugiat risus at volutpat. Integer tempor, sapien at fermentum cursus, magna urna interdum lorem, nec vestibulum urna neque et felis. Sed ultricies sapien ac velit facilisis, in dignissim leo volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus maximus interdum tincidunt. Nulla condimentum orci non felis tincidunt, at dapibus orci tempor.'
        },
        {
          title: 'Revolusi Dunia Game dengan VR',
          subTitle: 'Pengalaman Bermain Game yang Tidak Terbatas dengan Virtual Reality',
          writtersImage: '/images/male/variant-1.png',
          image: 'https://via.placeholder.com/800x400.png?text=VR+Gaming',
          like: 50,
          read: '4 Menit baca',
          writters: 'Dwi Andika',
          categories: 'Teknologi',
          date: '14-6-2024',
          comments: 20,
          content: 'Nulla condimentum orci non felis tincidunt, at dapibus orci tempor. Aenean in nisi a arcu hendrerit dapibus. Quisque fringilla feugiat risus at volutpat. Integer tempor, sapien at fermentum cursus, magna urna interdum lorem, nec vestibulum urna neque et felis. Sed ultricies sapien ac velit facilisis, in dignissim leo volutpat.'
        },
        {
          title: 'Blockchain di Luar Cryptocurrency',
          subTitle: 'Menelusuri Penggunaan Lain dari Teknologi Blockchain',
          writtersImage: '/images/male/variant-1.png',
          image: 'https://via.placeholder.com/800x400.png?text=Blockchain+Technology',
          like: 25,
          read: '3 Menit baca',
          writters: 'Dwi Andika',
          categories: 'Teknologi',
          date: '12-10-2024',
          comments: 10,
          content: 'Sed ultricies sapien ac velit facilisis, in dignissim leo volutpat. Integer tempor, sapien at fermentum cursus, magna urna interdum lorem, nec vestibulum urna neque et felis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus maximus interdum tincidunt. Nulla condimentum orci non felis tincidunt, at dapibus orci tempor. Quisque fringilla feugiat risus at volutpat.'
        },
        {
          title: 'Inovasi Teknologi 5G',
          subTitle: 'Bagaimana 5G akan Merevolusi Dunia Digital?',
          writtersImage: '/images/male/variant-1.png',
          image: 'https://via.placeholder.com/800x400.png?text=5G+Technology',
          like: 35,
          read: '6 Menit baca',
          writters: 'Dwi Andika',
          categories: 'Teknologi',
          date: '13-4-2024',
          comments: 15,
          content: 'Quisque fringilla feugiat risus at volutpat. Integer tempor, sapien at fermentum cursus, magna urna interdum lorem, nec vestibulum urna neque et felis. Sed ultricies sapien ac velit facilisis, in dignissim leo volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus maximus interdum tincidunt. Nulla condimentum orci non felis tincidunt, at dapibus orci tempor.'
        },
        {
          title: 'Revolusi Dunia Game dengan VR',
          subTitle: 'Pengalaman Bermain Game yang Tidak Terbatas dengan Virtual Reality',
          writtersImage: '/images/male/variant-1.png',
          image: 'https://via.placeholder.com/800x400.png?text=VR+Gaming',
          like: 50,
          read: '4 Menit baca',
          writters: 'Dwi Andika',
          categories: 'Teknologi',
          date: '14-6-2024',
          comments: 20,
          content: 'Nulla condimentum orci non felis tincidunt, at dapibus orci tempor. Aenean in nisi a arcu hendrerit dapibus. Quisque fringilla feugiat risus at volutpat. Integer tempor, sapien at fermentum cursus, magna urna interdum lorem, nec vestibulum urna neque et felis. Sed ultricies sapien ac velit facilisis, in dignissim leo volutpat.'
        }
      ],
      accounts: [
        {
          name: 'Agus',
          images: 'images/male/variant-2.png',
          job: 'Acounting',
          descriptions: '',
          topTreads: ''
        },
        {
          name: 'Dita',
          images: 'images/female/variant-2.png',
          job: 'Programmer',
          descriptions: '',
          topTreads: ''
        },
        {
          name: 'Kinan',
          images: 'images/female/variant-4.png',
          job: 'Enterpreneur',
          descriptions: '',
          topTreads: ''
        },
        {
          name: 'Dika',
          images: 'images/male/variant-1.png',
          job: 'Programmer',
          descriptions: '',
          topTreads: ''
        },
      ],
      items: [
        { id: 1, name: 'For You' },
        { id: 2, name: 'Technology' },
        { id: 3, name: 'Sport' },
        { id: 4, name: 'Life' },
        { id: 5, name: 'Food' },
        { id: 6, name: 'Writing' },
        { id: 7, name: 'Data Science' },
        { id: 8, name: 'Programming' },
        { id: 9, name: 'Self Improvement' },
        { id: 10, name: 'Philosophy' },
        { id: 11, name: 'Addiction' },
        { id: 12, name: 'Space' }
      ],
    };
  },
  methods: {
    calculateReadingTime(text) {
      const numChars = text.length;
      const avgCharsPerWord = 5;
      const wordsPerMinute = 200;
      const numWords = numChars / avgCharsPerWord;
      const readingTimeMinutes = numWords / wordsPerMinute;
      return Math.ceil(readingTimeMinutes)
    },
    logScrollPosition() {
      const scroller = this.$refs.scroller;
      this.left = scroller.scrollLeft
      if (scroller.scrollLeft == 100) {
        this.left = 0
      }
    },
    handleSelect(i) {
      this.active = this.items[i].id
    },
    scrollLeft() {
      const scroller = this.$refs.scroller;
      scroller.scrollBy({
        left: -100,
        behavior: 'smooth',
      });
      this.logScrollPosition()
    },
    scrollRight() {
      const scroller = this.$refs.scroller;
      scroller.scrollBy({
        left: 100,
        behavior: 'smooth',
      });
      this.logScrollPosition()
      this.left = 100
    },
  },
};
</script>

<style scoped lang="scss">
@import './style.scss'
</style>
