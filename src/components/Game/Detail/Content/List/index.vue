<template>
  <div class="list-container">
    <div class="list-wrapper">
      <v-row dense class="mt-4">
        <v-col cols="12">
          <p :class="{'title-dark': themeState.isDarkMode}" class="redeem-title">
            Kode Redeem
          </p>
          <v-row dense class="mt-3 mb-3">
            <v-col cols="4" v-for="(redeem, h) in redeemList" :key="h" style="height: 100%">
              <div class="redeem-card" :class="{'background-dark': themeState.isDarkMode}">
                <div class="d-flex align-center justify-space-between mb-1">
                  <span 
                    class="redeem-code">
                    {{ redeem.redeemCode }}
                  </span>
                  <v-icon v-if="!redeem.copied" @click="copyToClipboard(h)" :class="{'title-dark': themeState.isDarkMode}">
                    mdi-clipboard-multiple-outline
                  </v-icon>
                  <v-icon v-else @click="copyToClipboard(h)" :class="{'title-dark': themeState.isDarkMode}">
                    mdi-clipboard-check-multiple-outline
                  </v-icon>
                </div>
                <span 
                  class="redeem-prize" 
                  :class="{'title-dark': themeState.isDarkMode}">
                  {{ redeem.prize }}
                </span>
                <div class="d-flex align-center mt-1">
                  <v-icon class="mr-1" size="14" :class="{'title-dark': themeState.isDarkMode}">
                    mdi-clock-outline
                  </v-icon>
                  <span 
                    class="redeem-date"
                    :class="{'title-dark': themeState.isDarkMode}">
                    {{ redeem.active }}
                  </span>
                </div>
              </div>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="3" v-for="(item, i) in listContent" :key="i">
          <div :class="{'background-dark': themeState.isDarkMode}" class="pa-4">
            <p :class="{'title-dark': themeState.isDarkMode}">{{ item.name }}</p>
          </div>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
import { themeState } from "../../../../../theme";
export default {
  name: 'ListComponent',
  data() {
    return {
      themeState,
      redeemList: [
        {
          redeemCode: 'ABCTEST123456',
          active: '26-05-2023',
          copied: false,
          prize: '50 Stelar Jade, 1000 Gold, 90000 Crystal 50 Stelar Jade, 1000 Gold, 90000 Crystal'
        },
        {
          redeemCode: 'ABCTEST123456',
          active: '26-05-2023',
          copied: false,
          prize: '50 Stelar Jade, 1000 Gold, 90000 Crystal'
        },
        {
          redeemCode: 'ABCTEST123456',
          active: '26-05-2023',
          copied: false,
          prize: '50 Stelar Jade, 1000 Gold, 90000 Crystal'
        },
      ],
      listContent: [
        {
          name: 'test',
          description: 'test',
          image: '',
        },
        {
          name: 'test',
          description: 'test',
          image: '',
        },
        {
          name: 'test',
          description: 'test',
          image: '',
        },
        {
          name: 'test',
          description: 'test',
          image: '',
        },
        {
          name: 'test',
          description: 'test',
          image: '',
        },
        {
          name: 'test',
          description: 'test',
          image: '',
        },
        {
          name: 'test',
          description: 'test',
          image: '',
        },
        {
          name: 'test',
          description: 'test',
          image: '',
        },
      ],
      copySuccess: false
    }
  },
  methods: {
      async copyToClipboard(index) {
        try {
          const textToCopy = this.redeemList[index].redeemCode;
          await navigator.clipboard.writeText(textToCopy);
          this.redeemList[index].copied = true;

          setTimeout(() => {
            this.redeemList[index].copied = false;
          }, 3000);
        } catch (err) {
          console.error('Failed to copy text: ', err);
        }
      }
    }
}
</script>

<style lang="scss" scoped>
@import './style.scss';

.v-row--dense > [class*="v-col-"] {
  padding: 4px !important;
}
</style>
