<template>
  <div class="blog-container">
    <h1 class="blog-title">
      Blog
    </h1>
    <v-row dense>
      <v-col cols="12">
        <div class="blog-card">
          <v-img class="blog-image" :src="blogList[0].image" style="border-radius: 6px"></v-img>
          <div class="blog-description">
            <div class="d-flex align-center">
              <div class="d-flex align-center">
                <v-img :src="blogList[0].game.image" class="mr-2" max-height="30" width="30"></v-img>
                <p>{{blogList[0].game.name}}</p>
              </div>
              <!-- <p>{{blogList[0].date}}</p> -->
            </div>
            <p class="content-title">{{blogList[0].title}}</p>
            <p class="content-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, commodi quo? Voluptatibus quaerat repellat ea in, labore reiciendis quia quae qui!</p>
            <div class="d-flex align-center justify-space-between mt-2">
              <div class="d-flex align-center">
                <p class="author-name">{{blogList[0].author.name}}</p>
                <v-img src='/images/icon/check.png' max-height="16px" max-width="16px" min-width="16px"></v-img>
              </div>
              <p>{{blogList[0].date}}</p>
            </div>
          </div>
        </div>
      </v-col>
      <v-col cols="12" md="6" v-for="(item, i) in blogList.slice(1, 3)" :key="i">
        <div class="blog-card">
          <v-img :src="item.image" class="blog-image" style="border-radius: 6px"></v-img>
          <div class="blog-description">
            <div class="d-flex align-center">
              <div class="d-flex align-center">
                <v-img :src="item.game.image" class="mr-2" max-height="30" width="30"></v-img>
                <p>{{item.game.name}}</p>
              </div>
              <!-- <p>{{item.date}}</p> -->
            </div>
            <p class="content-title">{{item.title}}</p>
            <p class="content-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, commodi quo? Voluptatibus quaerat repellat ea in, labore reiciendis quia quae qui!</p>
            <div class="d-flex align-center justify-space-between mt-2">
              <div class="d-flex align-center">
                <p class="author-name">{{item.author.name}}</p>
                <v-img src='/images/icon/check.png' max-height="16px" max-width="16px" min-width="16px"></v-img>
              </div>
              <p>{{item.date}}</p>
            </div>
          </div>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'BlogComponent',
  data() {
    return {
      blogList: [
        {
          id: '1',
          image: 'https://res.cloudinary.com/dqaylwrrx/image/upload/v1740551999/Blog/b3b9bdbfaeb26f92f623877fe468a560_2438076161137763439_vbbxj9.webp',
          title: 'Mengenal Castorice: Karakter Baru yang Memikat di Honkai: Star Rail',
          game: {
            image: 'https://res.cloudinary.com/dqaylwrrx/image/upload/v1739259649/Games/star-rail_esjixp.png',
            name: 'Honkai: Star Rails'
          },
          author: {
            name: 'D3ppt',
            isVerified: true
          },
          date: '12 Januari 2025',
        },
        {
          id: '2',
          image: 'https://res.cloudinary.com/dqaylwrrx/image/upload/v1740553333/Blog/ff50f6c7ec85bad0a931a0fd83043683_8243668829800240142_j8q5n0.webp',
          title: 'Mengenal Yumemizuki Mizuki: Karakter Unik di Honkai: Star Rail yang Siap Menghentak Dunia!',
          game: {
            image: 'https://res.cloudinary.com/dqaylwrrx/image/upload/v1739259648/Games/genhin-impact_tvqxbi.png',
            name: 'Genshin Impact'
          },
          author: {
            name: 'D3ppt',
            isVerified: true
          },
          date: '12 Januari 2025',
        },
        {
          id: '2',
          image: 'https://res.cloudinary.com/dqaylwrrx/image/upload/v1740551999/Blog/79909b5d02103ed8599f1e09724cd30b_1851722458512168042_ssghjw.webp',
          title: 'Mengenal Tribbie: Karakter Unik di Honkai: Star Rail yang Siap Menghentak Dunia!',
          game: {
            image: 'https://res.cloudinary.com/dqaylwrrx/image/upload/v1739259649/Games/star-rail_esjixp.png',
            name: 'Honkai: Star Rails'
          },
          author: {
            name: 'D3ppt',
            isVerified: true
          },
          date: '12 Januari 2025',
        },
        {
          id: '3',
          image: 'https://res.cloudinary.com/dqaylwrrx/image/upload/v1740551999/Blog/8130e1fb3900d911f15b7895b22d0b6a_6568959363374213835_bvt7aw.webp',
          title: 'Mengenal Mydei: Karakter Baru yang Menawan di Honkai: Star Rail',
          game: {
            image: 'https://res.cloudinary.com/dqaylwrrx/image/upload/v1739259649/Games/star-rail_esjixp.png',
            name: 'Honkai: Star Rails'
          },
          author: {
            name: 'D3ppt',
            isVerified: true
          },
          date: '12 Januari 2025',
        },
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  @use './style.scss';
</style>w