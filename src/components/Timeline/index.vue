<template>
  <div class="timeline-container">
    <div class="timeline-wrapper">
      <v-row dense>
        <v-col md="7" cols="12">
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
          <div class="mt-10">
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
        </v-col>
        <v-col md="5" cols="12"></v-col>
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
      active: 1,
      left: 0,
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
