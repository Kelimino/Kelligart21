<template>
  <div ref="swipCont" class="swiper-home swiper-container">
    <div class="swiper-wrapper">
      <div v-for="(page, index) in pages" :key="index" class="swiper-slide">
        <nuxt-link :to="page.href">
          <div class="content-page">
            <h2>{{ page.nom }}</h2>
            <p>{{ page.description }}</p>
          </div>
          <img :src="page.path" alt="page image" />
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";
import "swiper/swiper-bundle.css";

import SwiperCore, { Mousewheel, Parallax, EffectFlip } from "swiper/core";
SwiperCore.use([Mousewheel, Parallax, EffectFlip]);

export default {
  data() {
    return {
      pages: [
        {
          nom: "Accompagnement",
          description: "Méthode et process de travail",
          href: "/accompagenement"
          //   path: require("@/assets/img.png")
        },
        {
          nom: "Expertise",
          description: "Domaines & outils de prédilections",
          href: "/expertise"
          //   path: require("@/assets/img.png")
        },
        {
          nom: "Projets",
          description: "Étude de cas & réalisations",
          href: "/projets"
          //   path: require("@/assets/img.png")
        },
        {
          nom: "A propos",
          description: "Parcours & expériences",
          href: "/about"
          //   path: require("@/assets/img.png")
        }
      ]
    };
  },

  mounted() {
    this.swiper = new Swiper(".swiper-home", {
      loop: true,
      slidesPerView: "3",
      centeredSlides: true,
      spaceBetween: 20,
      resistanceRatio: 0.5,
      longSwipes: true,
      longSwipesRatio: 0.5,
      touchRatio: 5,
      speed: 1000,
      parallax: true,
      direction: "horizontal",
      mousewheel: {
        enable: true
      }
    });
  },

  methods: {}
};
</script>
