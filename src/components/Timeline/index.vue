<template>
  <div class="timeline-container">
    <div class="d-flex justify-space-between align-end mb-3">
      <h1 class="timeline-title" :class="{'title-dark': themeState.isDarkMode}">
        Timeline
      </h1>
      <div class="d-flex align-center arrow-more">
        <p class="see-all">Lihat semua</p>
        <v-icon class="ml-2" color="#ff7800" size="18">mdi-arrow-right</v-icon>
      </div>
    </div>
    <div v-for="(item, i) in blogData.slice(0, 4)" :key="i">
      <Card 
        :title="item.title" 
        :subTitle="item.subTitle" 
        :image="item.image" 
        :like="item.like" 
        :game="item.game.name"
        :gameImage="item.game.image"
        :writters="item.writters"
        :writtersImage="item.writtersImage"
        :read="item.read" 
        :date="item.date" 
        :comments="item.comments" 
      />
    </div>
  </div>
</template>

<script>
import { themeState } from "../../theme";
import Card from '@/components/Card/index.vue'
export default {
  name: 'TimelineComponents',
  
  components: {
    Card
  },

  data() {
    return {
      themeState,
      blogData: [
        {
          title: 'Masa Depan Teknologi AI',
          subTitle: 'Bagaimana Kecerdasan Buatan Mengubah Dunia',
          writtersImage: '/images/male/variant-1.png',
          image: 'https://res.cloudinary.com/dqaylwrrx/image/upload/v1740551999/Blog/b3b9bdbfaeb26f92f623877fe468a560_2438076161137763439_vbbxj9.webp',
          like: 30,
          read: '5 Menit baca',
          writters: 'Dwi Andika',
          game: {
            image: 'https://res.cloudinary.com/dqaylwrrx/image/upload/v1739259649/Games/star-rail_esjixp.png',
            name: 'Honkai: Star Rails'
          },
          date: '10-10-2024',
          comments: 8,
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla condimentum orci non felis tincidunt, at dapibus orci tempor. Vivamus maximus interdum tincidunt. Aenean in nisi a arcu hendrerit dapibus. Quisque fringilla feugiat risus at volutpat. Integer tempor, sapien at fermentum cursus, magna urna interdum lorem, nec vestibulum urna neque et felis. Sed ultricies sapien ac velit facilisis, in dignissim leo volutpat.'
        },
        {
          title: 'Kebangkitan Komputasi Kuantum',
          subTitle: 'Apa yang akan datang di Dunia Teknologi Kuantum?',
          writtersImage: '/images/male/variant-1.png',
          image: 'https://res.cloudinary.com/dqaylwrrx/image/upload/v1740551999/Blog/b3b9bdbfaeb26f92f623877fe468a560_2438076161137763439_vbbxj9.webp',
          like: 40,
          read: '4 Menit baca',
          writters: 'Dwi Andika',
          game: {
            image: 'https://res.cloudinary.com/dqaylwrrx/image/upload/v1739259649/Games/star-rail_esjixp.png',
            name: 'Honkai: Star Rails'
          },
          date: '11-10-2024',
          comments: 12,
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus maximus interdum tincidunt. Nulla condimentum orci non felis tincidunt, at dapibus orci tempor. Aenean in nisi a arcu hendrerit dapibus. Quisque fringilla feugiat risus at volutpat. Integer tempor, sapien at fermentum cursus, magna urna interdum lorem, nec vestibulum urna neque et felis. Sed ultricies sapien ac velit facilisis, in dignissim leo volutpat.'
        },
        {
          title: 'Blockchain di Luar Cryptocurrency',
          subTitle: 'Menelusuri Penggunaan Lain dari Teknologi Blockchain',
          writtersImage: '/images/male/variant-1.png',
          image: 'https://res.cloudinary.com/dqaylwrrx/image/upload/v1740551999/Blog/b3b9bdbfaeb26f92f623877fe468a560_2438076161137763439_vbbxj9.webp',
          like: 25,
          read: '3 Menit baca',
          writters: 'Dwi Andika',
          game: {
            image: 'https://res.cloudinary.com/dqaylwrrx/image/upload/v1739259649/Games/star-rail_esjixp.png',
            name: 'Honkai: Star Rails'
          },
          date: '12-10-2024',
          comments: 10,
          content: 'Sed ultricies sapien ac velit facilisis, in dignissim leo volutpat. Integer tempor, sapien at fermentum cursus, magna urna interdum lorem, nec vestibulum urna neque et felis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus maximus interdum tincidunt. Nulla condimentum orci non felis tincidunt, at dapibus orci tempor. Quisque fringilla feugiat risus at volutpat.'
        },
        {
          title: 'Inovasi Teknologi 5G',
          subTitle: 'Bagaimana 5G akan Merevolusi Dunia Digital?',
          writtersImage: '/images/male/variant-1.png',
          image: 'https://res.cloudinary.com/dqaylwrrx/image/upload/v1740551999/Blog/b3b9bdbfaeb26f92f623877fe468a560_2438076161137763439_vbbxj9.webp',
          like: 35,
          read: '6 Menit baca',
          writters: 'Dwi Andika',
          game: {
            image: 'https://res.cloudinary.com/dqaylwrrx/image/upload/v1739259649/Games/star-rail_esjixp.png',
            name: 'Honkai: Star Rails'
          },
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
          game: {
            image: 'https://res.cloudinary.com/dqaylwrrx/image/upload/v1739259649/Games/star-rail_esjixp.png',
            name: 'Honkai: Star Rails'
          },
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
          game: {
            image: 'https://res.cloudinary.com/dqaylwrrx/image/upload/v1739259649/Games/star-rail_esjixp.png',
            name: 'Honkai: Star Rails'
          },
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
          game: {
            image: 'https://res.cloudinary.com/dqaylwrrx/image/upload/v1739259649/Games/star-rail_esjixp.png',
            name: 'Honkai: Star Rails'
          },
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
          game: {
            image: 'https://res.cloudinary.com/dqaylwrrx/image/upload/v1739259649/Games/star-rail_esjixp.png',
            name: 'Honkai: Star Rails'
          },
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
          game: {
            image: 'https://res.cloudinary.com/dqaylwrrx/image/upload/v1739259649/Games/star-rail_esjixp.png',
            name: 'Honkai: Star Rails'
          },
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
          game: {
            image: 'https://res.cloudinary.com/dqaylwrrx/image/upload/v1739259649/Games/star-rail_esjixp.png',
            name: 'Honkai: Star Rails'
          },
          date: '14-6-2024',
          comments: 20,
          content: 'Nulla condimentum orci non felis tincidunt, at dapibus orci tempor. Aenean in nisi a arcu hendrerit dapibus. Quisque fringilla feugiat risus at volutpat. Integer tempor, sapien at fermentum cursus, magna urna interdum lorem, nec vestibulum urna neque et felis. Sed ultricies sapien ac velit facilisis, in dignissim leo volutpat.'
        }
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
  },
};
</script>

<style scoped lang="scss">
@import './style.scss'
</style>
