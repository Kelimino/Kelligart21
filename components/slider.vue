<template>
  <div class="swiper-container">
      <!-- Additional required wrapper -->
      <div class="swiper-wrapper">
          <!-- Slides -->
          <div class="swiper-slide" v-for="(projet, index) in projets" :key="index" :href="projet.href" >
              <h2>{{projet.nom}}</h2>
              <p>{{projet.description}}</p>
              <nuxt-link :to="projet.href">Voir l'étude</nuxt-link>
          </div>
      </div>
      <!-- If we need pagination -->
      <div class="swiper-pagination"></div>

      <!-- If we need navigation buttons -->
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>

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
            "Prendre des idées afin de les matérialiser en véritable positionnement de marque, une image désirable avec un message mémorable",
          href: "projets/laforet",
          path: require("@/assets/img/tiles/web16.png")
        }
      ]


    }
},




  mounted() {
    new Swiper('.swiper-container', {
      loop: true,
      slidesPerView: 1,
      spaceBetween: 30,
      pagination: {
        el: '.swiper-pagination',
        type: 'progressbar',
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      scrollbar: {
        el: '.swiper-scrollbar',
      },
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
