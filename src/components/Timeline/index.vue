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
    <div v-for="(item, index) in blogData" :key="index" class="timeline-wrapper">
      <Card 
        @updateFollowed="updateFollowed(index, $event)"
        @updateVote="updateVote(index, $event)"
        :title="item.title"
        :contents="item.contents"
        :image="item.image"
        :like="item.like"
        :game="item.game"
        :date="item.date"
        :comments="item.comments"
        :vote="item.vote"
        :community="item.community"
        :followStatus="item.follow.status"
        :followHidden="item.follow.hidden"
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
          title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, voluptas!',
          contents: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis veritatis repellat deleniti, placeat incidunt totam accusamus nam quidem fugiat omnis reprehenderit.',
          image: 'https://res.cloudinary.com/dqaylwrrx/image/upload/v1740551999/Blog/b3b9bdbfaeb26f92f623877fe468a560_2438076161137763439_vbbxj9.webp',
          like: 30,
          follow: {
            status: true,
            hidden: false
          },
          vote: {
            upvote: false,
            downvote: false,
            vote: 20
          },
          community: {
            name: 'Honkai Leaks',
            image: 'https://res.cloudinary.com/dqaylwrrx/image/upload/v1739259649/Games/star-rail_esjixp.png',
            id: '@honkaileaks'  
          },
          game: {
            image: 'https://res.cloudinary.com/dqaylwrrx/image/upload/v1739259649/Games/star-rail_esjixp.png',
            name: 'Honkai: Star Rails'
          },
          date: '10-10-2024',
          comments: 8,
        },
        {
          title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, voluptas!',
          contents: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis veritatis repellat deleniti, placeat incidunt totam accusamus nam quidem fugiat omnis reprehenderit.',
          image: 'https://res.cloudinary.com/dqaylwrrx/image/upload/v1740551999/Blog/b3b9bdbfaeb26f92f623877fe468a560_2438076161137763439_vbbxj9.webp',
          like: 40,
          follow: {
            status: true,
            hidden: false
          },
          vote: {
            upvote: false,
            downvote: false,
            vote: 20
          },
          community: {
            name: 'Honkai Leaks',
            image: 'https://res.cloudinary.com/dqaylwrrx/image/upload/v1739259649/Games/star-rail_esjixp.png',
            id: '@honkaileaks'  
          },
          game: {
            image: 'https://res.cloudinary.com/dqaylwrrx/image/upload/v1739259649/Games/star-rail_esjixp.png',
            name: 'Honkai: Star Rails'
          },
          date: '11-10-2024',
          comments: 12,
        },
        {
          title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, voluptas!',
          contents: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis veritatis repellat deleniti, placeat incidunt totam accusamus nam quidem fugiat omnis reprehenderit.',
          image: 'https://res.cloudinary.com/dqaylwrrx/image/upload/v1740551999/Blog/b3b9bdbfaeb26f92f623877fe468a560_2438076161137763439_vbbxj9.webp',
          like: 25,
          follow: {
            status: true,
            hidden: false
          },
          vote: {
            upvote: false,
            downvote: false,
            vote: 20
          },
          community: {
            name: 'Honkai Leaks',
            image: 'https://res.cloudinary.com/dqaylwrrx/image/upload/v1739259649/Games/star-rail_esjixp.png',
            id: '@honkaileaks'  
          },
          game: {
            image: 'https://res.cloudinary.com/dqaylwrrx/image/upload/v1739259649/Games/star-rail_esjixp.png',
            name: 'Honkai: Star Rails'
          },
          date: '12-10-2024',
          comments: 10,
        },
        {
          title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, voluptas!',
          contents: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis veritatis repellat deleniti, placeat incidunt totam accusamus nam quidem fugiat omnis reprehenderit.',
          image: 'https://res.cloudinary.com/dqaylwrrx/image/upload/v1740551999/Blog/b3b9bdbfaeb26f92f623877fe468a560_2438076161137763439_vbbxj9.webp',
          like: 35,
          follow: {
            status: true,
            hidden: false
          },
          vote: {
            upvote: false,
            downvote: false,
            vote: 20
          },
          community: {
            name: 'Honkai Leaks',
            image: 'https://res.cloudinary.com/dqaylwrrx/image/upload/v1739259649/Games/star-rail_esjixp.png',
            id: '@honkaileaks'  
          },
          game: {
            image: 'https://res.cloudinary.com/dqaylwrrx/image/upload/v1739259649/Games/star-rail_esjixp.png',
            name: 'Honkai: Star Rails'
          },
          date: '13-4-2024',
          comments: 15,
        },
      ],
    };
  },

  methods: {
    updateFollowed(index, newFollowStatus) {
      this.blogData[index].follow.status = newFollowStatus; // Update the status
    },

    updateVote(index, newVoteData) {
      this.blogData[index].vote = newVoteData;
    },

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
