<template>
  <div class="card-container">
    <div class="card-content mb-4" >
      <v-row 
        dense 
        style="height: 100%;" 
        class="desktop"
      >
        <v-col cols="8" class="pr-6">
          <div class="left-content">
            <div>
              <div class="d-flex align-center">
                <v-img style="margin-top: -10px" class="mr-2" height="35" max-width="35" :src="game.image"></v-img>
                <p :class="{'background-dark': themeState.isDarkMode}" 
                  class="categories-content">
                  {{game.name}}
                </p>
              </div>
              <h1 
                :class="{'title-dark': themeState.isDarkMode}" 
                class="blog-title"
              >
                {{title}}
              </h1>
              <p 
                :class="{'subtitle-dark': themeState.isDarkMode}" 
                class="blog-subtitle"
              >
                {{contents}}
              </p>
            </div>
            <div class="d-flex justify-space-between" style="width: 100%">
              <div>
                <div class="d-flex align-center mt-3">
                  <p :class="{'title-dark': themeState.isDarkMode}" class="card-categories mr-1">Ditulis oleh</p>
                  <p :class="{'title-dark': themeState.isDarkMode}" class="card-categories mr-1"><b style="color: black">{{writters}}</b></p>
                </div>
                <div>
                  <p style="font-size: 13px; color: gray">{{formatDate(date)}}</p>
                </div>
              </div>
              <div>
                <div class="d-flex flex-row-reverse align-center mt-7">
                  <div class="d-flex align-center mr-3">
                    <v-icon color="grey" size="18" class="mr-1">mdi-comment-outline</v-icon>
                    <p style="font-size: 14px; margin-top: 0px; color: gray">{{comments}}</p>
                  </div>
                  <div class="d-flex align-center mr-3">
                    <v-icon color="grey" size="18" class="mr-1">mdi-thumb-up-outline</v-icon>
                    <p style="font-size: 14px; margin-top: 0px; color: gray">{{like}}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </v-col>
        <v-col cols="4">
          <v-img :src="image"></v-img>
        </v-col>
      </v-row>
      <v-row dense style="height: 100%;" class="mobile">
        <v-col cols="12">
          <div class="left-content">
            <div>
              <div class="d-flex align-center justify-space-between mb-1">
                <div class="d-flex align-center">
                  <v-avatar size="30" class="mr-2">
                    <v-img :src="community.image"></v-img>
                  </v-avatar>
                  <p class="card-community__name" :class="{'title-dark': themeState.isDarkMode}" >{{community.name}}</p>
                  <div :class="{'background-light': themeState.isDarkMode}" class="dot"></div>
                  <div :class="{'subtitle-dark': themeState.isDarkMode}" class="card-post-date">
                    {{date}}
                  </div>
                </div>
                <div @click="toggleFollow()" :class="followStatus ? 'following' : 'follow'">
                  <p>{{followStatus ? 'Mengikuti' : 'Ikuti'}}</p>
                </div>
              </div>
              <h1 
                :class="{'title-dark': themeState.isDarkMode}" 
                class="blog-title"
              >
                {{title}}
              </h1>
              <p 
                :class="{'subtitle-dark': themeState.isDarkMode}" 
                class="blog-subtitle"
              >
                {{contents}}
              </p>
              <v-img class="card-community__image" :src="image"></v-img>
            </div>
          </div>
        </v-col>
        <v-col col="12" class="d-flex align-center mt-1">
          <div class="card-action d-inline-block mr-2">
            <div 
              class="d-flex align-center card-action-btn" 
              :class="{
                'card-action-btn-upvote': vote.upvote,
                'card-action-btn-downvote': vote.downvote,
                'card-action-btn-dark': themeState.isDarkMode && !vote.downvote && !vote.upvote,
                'card-action-btn-light': !themeState.isDarkMode && !vote.downvote && !vote.upvote,
              }"
            >
              <v-icon 
                size="18" 
                class="mr-2" 
                @click="handleVote('up')" 
                v-if="vote.upvote">
                mdi-heart
              </v-icon>
              <v-icon 
                size="18" 
                class="mr-2"
                @click="handleVote('up')"  
                v-else>mdi-heart-outline
              </v-icon>
              <p class="vote-count">{{ vote.vote }}</p>
              <v-icon 
                size="18" 
                class="ml-2" 
                @click="handleVote('down')" 
                v-if="vote.downvote">
                mdi-heart-broken
              </v-icon>
              <v-icon 
                size="18" 
                class="ml-2" 
                @click="handleVote('down')"  
                v-else>mdi-heart-broken-outline
              </v-icon>
            </div>
          </div>
          <div class="card-action d-inline-block">
            <div 
              class="d-flex align-center card-action-btn-cmt"
              :class="{
                'card-action-btn-dark': themeState.isDarkMode,
                'card-action-btn-light': !themeState.isDarkMode,
              }">
              <v-icon size="18" class="mr-2" :color="themeState.isDarkMode ? '#ffffff' : '#4f4f4f'" >
                mdi-comment-outline
              </v-icon>
              <p class="vote-count">112</p>
            </div>
          </div>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
import { themeState } from "../../theme";
export default {
  name: 'CardComponents',
  data() {
    return {
      themeState
    }
  },
  methods: {
    toggleFollow() {
      const newFollowStatus = !this.followStatus;
      this.$emit('updateFollowed', newFollowStatus); // Emit updated followStatus to the parent
    },

    handleVote(voteType) {
      let newVoteData = { ...this.vote }; // Create a new vote data object to avoid direct mutation

      if (voteType === 'up') {
        newVoteData.upvote = !newVoteData.upvote
        if (!newVoteData.upvote) {
          newVoteData.vote = this.vote.vote - 1;
        } else {
          newVoteData.vote = this.vote.vote + 1;
          if (newVoteData.downvote) {
            newVoteData.vote = this.vote.vote + 2;
          }
          newVoteData.downvote = false;
        }

      } else if (voteType === 'down') {
        newVoteData.downvote = !newVoteData.downvote
        if (!newVoteData.downvote) {
          newVoteData.vote = this.vote.vote + 1;
        } else {
          newVoteData.vote = this.vote.vote - 1;
          if (newVoteData.upvote) {
            newVoteData.vote = this.vote.vote - 2;
          }
          newVoteData.upvote = false
        }

      }

      // Emit updated vote data back to the parent component
      this.$emit('updateVote', newVoteData);
    },

    formatDate(date) {
      const parsedDate = new Date(date);

      // Check if the parsed date is valid
      if (isNaN(parsedDate)) {
        console.error("Invalid date format:", date);
        return "Invalid Date";  // or any other fallback message
      }

      const options = { year: 'numeric', month: 'short', day: 'numeric' };
      return parsedDate.toLocaleDateString('id', options);
    }
  },
  props: {
    title: {
      type: String,
      required: true
    },
    contents: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: true
    },
    game: {
      type: Object,
      required: true
    },
    like: {
      type: Number,
      required: true
    },
    date: {
      type: String,
      required: true
    },
    comments: {
      type: Number,
      required: true
    },
    community: {
      type: Object,
      required: true
    },
    vote: {
      type: Object,
      required: true
    },
    followStatus: {
      type: Boolean,
      required: true
    },
    followHidden: {
      type: Boolean,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
@import './style.scss'
</style>