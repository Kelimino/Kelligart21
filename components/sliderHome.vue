<template>
  <div ref="swipCont" class="swiper-home swiper-container mt-5 h-full w-full">
    <div class="swiper-wrapper">
      <div
        v-for="(page, index) in pages"
        :key="index"
        class="swiper-slide relative overflow-hidden  h-full bg-main "
      >
        <nuxt-link
          :to="page.href"
          class="h-full flex flex-col justify-end items-center"
        >
          <img
            :src="page.path"
            alt="page image"
            class="absolute object-cover w-full h-full top-0 left-0 opacity-0"
          />
          <div
            class="content-page w-full h-full pb-10 z-10 relative text-center flex flex-col justify-end items-center bg-gradient-to-t from-back "
          >
            <h2 class="font-title text-primary text-5xl font-bold">
              {{ page.nom }}
            </h2>
            <p class="font-text text-main text-base mt-3 ">
              {{ page.description }}
            </p>
          </div>
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
          href: "/accompagnement",
          path: require("@/assets/img/acomp-back.png")
        },
        {
          nom: "Expertise",
          description: "Domaines & prestations",
          href: "/expertise",
          path: require("@/assets/img/projet-back.png")
        },
        {
          nom: "Projets",
          description: "Étude de cas & réalisations",
          href: "/projets",
          path: require("@/assets/img/acomp-back.png")
        },
        {
          nom: "A propos",
          description: "Personnalité & expériences",
          href: "/about",
          path: require("@/assets/img/acomp-back.png")
        }
      ]
    };
  },

  mounted() {
    this.swiper = new Swiper(".swiper-home", {
      loop: true,
      slidesPerView: "3",
      spaceBetween: 100,
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
