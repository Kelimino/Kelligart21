<template>
  <div class="swiper-container" ref="swipCont">
    <!-- Additional required wrapper -->
    <div class="swiper-wrapper">
      <!-- Slides -->
      <div class="swiper-slide" v-for="(projet, index) in projets" :key="index" >
        <nuxt-link :to="projet.href">
          <img :src="projet.path" alt="projet image" />
          <div class="content">
            <h2 data-swiper-parallax-y="-10">{{ projet.nom }}</h2>
            <p data-swiper-parallax-y="-10">{{ projet.description }}</p>
          </div>
        </nuxt-link>
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
import Swiper from "swiper";
import "swiper/swiper-bundle.css";
import { gsap } from "gsap";

import SwiperCore, { Mousewheel, Parallax, EffectFlip } from "swiper/core";
SwiperCore.use([Mousewheel, Parallax, EffectFlip]);

export default {
  data() {
    return {
      projets: [
        {
          nom: "Laforet",
          class: "projet",
          description: "Refont du site Immobilier",
          href: "/laforet",
          path: require("@/assets/img/tiles/web16.png")
        },
        {
          nom: "Goall",
          class: "projet",
          description:
            "Design concept sur une plateforme de streaming de football",
          href: "/goall",
          path: require("@/assets/img/tiles/web16.png")
        },
        {
          nom: "Star",
          class: "projet",
          description: "Design concept sur une application de transport",
          href: "/star",
          path: require("@/assets/img/tiles/web16.png")
        },
        {
          nom: "Design",
          class: "projet",
          description: "Article sur le design digital",
          href: "/design",
          path: require("@/assets/img/tiles/web16.png")
        }
      ]
    };
  },

  methods: {
  },

  mounted() {
    this.swiper = new Swiper(".swiper-container", {
      effect: "EffectFlip",
      flipEffect: {
        slideShadows: false
      },

      loop: true,
      slidesPerView: "auto",
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

    this.swiper.on("touchMove", function() {
      gsap.to(".swiper-slide", { scale: 0.9 });
    });
    this.swiper.on("touchEnd ", function() {
      gsap.to(".swiper-slide", { scale: 1 });
    });
  }
};
</script>
