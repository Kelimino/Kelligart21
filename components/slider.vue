<template>
  <div id="projets">
    <!-- <div class="changeDirection">Click</div> -->
    <div
      ref="swipCont"
      class="swiper-container swiper-projet h-screen flex flex-col justify-center"
    >
      <div class="swiper-wrapper h-1/2">
        <div
          v-for="(projet, index) in projets"
          :key="index"
          ref="projet"
          class="swiper-slide h-full flex flex-col justify-center items-center"
          :class="projet.class"
        >
          <nuxt-link
            :to="projet.href"
            class="link h-full flex flex-col items-start"
          >
            <div class="img-wrapper h-2/3 w-full overflow-hidden">
              <img
                :src="projet.path"
                alt="projet image"
                class="object-cover h-full w-full"
              />
              <video
                ref="videos"
                loop
                muted="muted"
                onmouseover="this.play()"
                onmouseout="this.pause();this.currentTime=0;"
                class="w-full min-h-full min-w-full h-full object-cover object-center"
              >
                <source :src="projet.path" type="video/mp4" />
              </video>
            </div>

            <div
              class="content p-5 h-1/3"
              data-swiper-parallax-opacity="0.7"
              data-swiper-parallax-x="-70"
            >
              <span class="font-text text-primary text-xs">{{
                projet.nb
              }}</span>

              <h2 class="font-title text-primary text-6xl font-bold my-5">
                {{ projet.nom }}
              </h2>

              <p class="font-text text-main text-base mt-3 w-4/6">
                {{ projet.description }}
              </p>
            </div>
          </nuxt-link>
        </div>
      </div>
    </div>
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
          class: "laforet video",
          description: "Refonte du site Immobilier",
          href: "/projets/laforet",
          path: require("@/assets/video/laforet.mp4")
        },
        {
          nb: "PERSO",
          nom: "Spall",
          class: "projet",
          description:
            "Design concept pour une plateforme de streaming de sports",
          href: "/projets/spall",
          path: require("@/assets/img/slider/laforet.png")
        },
        {
          nb: "PERSO",
          nom: "Robodico",
          class: "robodico video",
          description:
            "Petit site pour tous les robots fictifs de notre enfance",
          href: "/projets/robodico",
          path: require("@/assets/video/robodico.mp4")
        },
        {
          nb: "PERSO",
          nom: "Stars",
          class: "projet",
          description:
            "Redesign concept pour l'application de transport de la ville de Rennes",
          href: "/projets/stars",
          path: require("@/assets/img/slider/laforet.png")
        },
        {
          nb: "PRO & PERSO",
          nom: "Graphisme",
          class: "projet",
          description: "Une sélection de réalisations graphiques",
          href: "/projets/graphisme",
          path: require("@/assets/img/slider/laforet.png")
        },
        {
          nb: "PRO & PERSO",
          nom: "Webdesign",
          class: "projet",
          description: "Une sélection de webdesign préférés",
          href: "/projets/webdesign",
          path: require("@/assets/img/slider/laforet.png")
        },
        {
          nb: "PRO",
          nom: "Théâtre",
          class: "projet",
          description: "D.A & scénographie @Pistarckle Theater  ",
          href: "/projets/theatre",
          path: require("@/assets/img/slider/laforet.png")
        },
        {
          nb: "PRO & PERSO",
          nom: "Logos",
          class: "projet",
          description: "Collections de logos",
          href: "/projets/logo",
          path: require("@/assets/img/slider/laforet.png")
        }
      ]
    };
  },

  mounted() {
    // let isVertical = false,
    //   direction = "horizontal";
    // let swiper = initSwiper(direction);

    // function initSwiper(direction) {
    //   return new Swiper(".swiper-container", {
    //     spaceBetween: 50,
    //     pagination: {
    //       el: ".swiper-pagination",
    //       clickable: true
    //     },
    //     direction: direction
    //   });
    // }

    // let Change = document.querySelector(".changeDirection");

    // Change.addEventListener("click", () => {
    //   isVertical = !isVertical;
    //   direction = isVertical ? "vertical" : "horizontal";
    //   let slideIndex = swiper.activeIndex;
    //   swiper.destroy(true, true);
    //   swiper = initSwiper(direction);
    //   swiper.slideTo(slideIndex, 0);
    // });

    this.swiper = new Swiper(".swiper-projet", {
      direction: "horizontal",
      loop: true,
      speed: 1000,
      parallax: true,
      mousewheel: {
        enable: true
      },
      breakpoints: {
        640: {
          slidesPerView: "1",
          spaceBetween: 20
        },
        768: {
          slidesPerView: "3",
          spaceBetween: 10,
          centeredSlides: true
        }
      }
    });

    this.swiper.on("touchMove", function() {
      gsap.to(".swiper-slide", { scale: 0.8 });
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
  }
};
</script>
