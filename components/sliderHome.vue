<template>
  <div ref="swipCont" class="swiper-home swiper-container mt-5">
    <div class="swiper-wrapper">
      <div
        v-for="(page, index) in pages"
        :key="index"
        class="swiper-slide relative "
      >
        <nuxt-link :to="page.href" class="p-20">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            stroke="currentColor"
            class="absolute top-5 right-5 transform rotate-45"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              stroke="#3451be"
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
          <div class="content-page">
            <h2 class="font-title text-primary text-xl font-bold">
              {{ page.nom }}
            </h2>
            <p class="font-text text-main text-base mt-3 ">
              {{ page.description }}
            </p>
          </div>
          <img
            :src="page.path"
            alt="page image"
            class="absolute object-cover hidden "
          />
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
