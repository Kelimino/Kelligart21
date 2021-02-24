<template>
  <div class="swiper-container">
      <!-- Additional required wrapper -->
      <div class="swiper-wrapper">
          <!-- Slides -->
          <div class="swiper-slide" v-for="(projet, index) in projets" :key="index" :href="projet.href" >
              <img :src="projet.path" alt="">
              <div class="content"><h2>{{projet.nom}}</h2>
              <p>{{projet.description}}</p>
              <nuxt-link :to="projet.href">Voir l'étude</nuxt-link></div>
              
              
          </div>
      </div>
      <!-- If we need pagination -->
      <div class="swiper-pagination"></div>

      <!-- If we need navigation buttons -->
      <!-- <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div> -->

      <!-- If we need scrollbar -->
      <div class="swiper-scrollbar"></div>
  </div>
</template>

<script>
import Swiper, { Navigation, Pagination } from 'swiper'
import 'swiper/swiper-bundle.css'

Swiper.use([ Navigation, Pagination ])

export default {

data(){

    return{

      projets: [
        {
          nom: "Laforet",
          class:"projet",
          description:
            "Refont du site Immobilier",
          href: "/laforet",
          path: require("@/assets/img/tiles/web16.png")
        },
                {
          nom: "Goall",
          class:"projet",
          description:
            "Design concept sur une plateforme de streaming de football",
          href: "/goall",
          path: require("@/assets/img/tiles/web16.png")
        },
         {
          nom: "Star",
          class:"projet",
          description:
            "Design concept sur une application de transport",
          href: "/star",
          path: require("@/assets/img/tiles/web16.png")
        },
        {
          nom: "Design",
          class:"projet",
          description:
            "Article sur le design digital",
          href: "/design",
          path: require("@/assets/img/tiles/web16.png")
        },
      ]


    }
},




  mounted() {
    new Swiper('.swiper-container', {
      loop: true,
      slidesPerView: 4,
      pagination: {
        el: '.swiper-pagination',
        type: 'progressbar',
      }
    })
  }
}
</script>

<style scoped>
.swiper-container {
  width: 600px;
  height: 300px;
}
</style>
