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
          class="swiper-slide h-full flex flex-col justify-center items-center"
          :class="projet.class"
        >
          <!-- border-r border-primary border-solid border-opacity-30 -->
          <nuxt-link :to="projet.href" class="h-full flex flex-col items-start">
            <div class="img-wrapper h-2/3 w-full overflow-hidden">
              <img
                :src="projet.path"
                alt="projet image"
                class="object-cover h-full w-full"
              />
              <video ref="video" width="500px" height="auto" loop>
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
              <transition appear mode="out-in" @leave="leave">
                <h2 class="font-title text-primary text-6xl font-bold my-5">
                  {{ projet.nom }}
                </h2>
              </transition>
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
          class: "projet",
          description: "Refonte du site Immobilier",
          href: "/laforet",
          path: require("@/assets/img/slider/laforet.png")
        },
        {
          nb: "PERSO",
          nom: "Spall",
          class: "projet",
          description:
            "Design concept pour une plateforme de streaming de sports",
          href: "/goall",
          path: require("@/assets/img/slider/laforet.png")
        },
        {
          nb: "PERSO",
          nom: "Robodico",
          class: "robodico",
          description:
            "Petit site pour tous les robots fictifs de notre enfance",
          href: "/robodico",
          path: require("@/assets/video/robodico.mp4")
        },
        {
          nb: "PERSO",
          nom: "Stars",
          class: "projet",
          description:
            "Redesign concept pour l'application de transport de la ville de Rennes",
          href: "/stars",
          path: require("@/assets/img/slider/laforet.png")
        },
        {
          nb: "PRO & PERSO",
          nom: "Graphisme",
          class: "projet",
          description: "Une sélection de réalisations graphiques",
          href: "/graphisme",
          path: require("@/assets/img/slider/laforet.png")
        },
        {
          nb: "PRO & PERSO",
          nom: "Webdesign",
          class: "projet",
          description: "Une sélection de webdesign préférés",
          href: "/webdesign",
          path: require("@/assets/img/slider/laforet.png")
        },
        {
          nb: "PRO",
          nom: "Théâtre",
          class: "projet",
          description: "D.A & scénographie @Pistarckle Theater  ",
          href: "/theatre",
          path: require("@/assets/img/slider/laforet.png")
        },
        {
          nb: "PRO & PERSO",
          nom: "Logos",
          class: "projet",
          description: "Collections de logos",
          href: "/logo",
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

    let robodico = document.querySelector(".robodico");
    let video = document.querySelector(".robodico video");

    robodico.addEventListener("mouseenter", () => {
      video.play();
    });
    robodico.addEventListener("mouseleave", () => {
      video.pause();
    });

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
  },

  methods: {
    leave(el, done) {
      console.log(el + "leave");
      alert("heyyey");
      gsap.timeline().to(
        ".content h2",
        {
          color: "red",
          ease: "expo.inOut",
          duration: 1,
          onComplete: done
        },
        0
      );
    },
    playVideo: function() {
      this.$refs.video.play();
      alert("play");
    },
    stopVideo: function() {
      this.$refs.video.pause();
      console.log(this.$refs.video + "out");
    }
  }
};
</script>
