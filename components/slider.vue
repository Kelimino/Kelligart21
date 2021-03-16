<template>
  <div ref="swipCont" class="swiper-container swiper-projet h-screen ">
    <!-- Additional required wrapper -->
    <div class="swiper-wrapper h-1/2 my-auto ">
      <!-- Slides -->
      <div
        v-for="(projet, index) in projets"
        :key="index"
        class="swiper-slide h-full flex flex-col justify-center items-center"
      >
        <!-- border-r border-primary border-solid border-opacity-30 -->
        <nuxt-link :to="projet.href" class="flex flex-col items-start">
          <div class="img-wrapper h-2/5 w-full overflow-hidden">
            <img
              :src="projet.path"
              alt="projet image"
              class="object-cover h-full w-full"
            />
          </div>

          <div
            class="content p-5"
            data-swiper-parallax-opacity="0.7"
            data-swiper-parallax="-70"
            data-swiper-parallay="50"
          >
            <span class="font-text text-primary text-xs">{{ projet.nb }}</span>
            <h2 class="font-title text-primary text-6xl font-bold my-5">
              {{ projet.nom }}
            </h2>
            <p class="font-text text-main text-base mt-3 w-2/3">
              {{ projet.description }}
            </p>
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
          nb: "PRO",
          nom: "Laforet",
          class: "projet",
          description: "Refonte du site Immobilier",
          href: "/laforet",
          path: require("@/assets/img/slider/laforet.png")
        },
        {
          nb: "PERSO",
          nom: "Spotr",
          class: "projet",
          description:
            "Design concept pour une plateforme de streaming de football",
          href: "/goall",
          path: require("@/assets/img/slider/robodico.png")
        },
        {
          nb: "PERSO",
          nom: "Star",
          class: "projet",
          description: "Redesign concept pour une application de transport",
          href: "/star",
          path: require("@/assets/img/slider/robodico.png")
        },
        {
          nb: "PERSO",
          nom: "Robodico",
          class: "projet",
          description: "Le dictionnaire de tous les robots",
          href: "/robodico",
          path: require("@/assets/img/slider/robodico.png")
        }
      ]
    };
  },

  mounted() {
    this.swiper = new Swiper(".swiper-projet", {
      direction: "horizontal",
      loop: true,
      slidesPerView: "3",
      centeredSlides: true,
      spaceBetween: 10,
      speed: 1000,
      parallax: true,
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
    this.swiper.on("slideNextTransitionStart", function() {
      gsap.fromTo(
        ".swiper-slide",
        { skewX: 5, ease: "Power2.easeOut" },
        { skewX: 0 }
      );
    });
    this.swiper.on("slidePrevTransitionStart", function() {
      gsap.fromTo(
        ".swiper-slide",
        { skewX: -5, ease: "Power2.easeOut" },
        { skewX: 0 }
      );
    });
    // this.swiper.on("slideChangeTransitionEnd ", function() {
    //   gsap.to(".swiper-slide", { autoAlpha: 0.5 });
    // });
    // this.swiper.on("slideChangeTransitionStart ", function() {
    //   gsap.to(".swiper-slide", { autoAlpha: 1 });
    // });
  },

  methods: {}
};
</script>
