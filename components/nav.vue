<template>
  <div>
    <header class="relative z-20">
      <div
        class="logo link fixed top-2 left-5 md:top-5 md:left-10 z-50 cursor-pointer"
        @mouseover="animLogo"
        @mouseleave="endLogo"
      >
        <lottie
          class="logo"
          :width="100"
          :height="100"
          :options="animationsOptions.logo"
          @animCreated="handleAnimation"
        />
      </div>
      <div
        class="contact fixed top-7 z-50 right-5 md:top-10 md:right-10 cursor-pointer bg-primary rounded-full w-10 h-10 md:w-14 md:h-14 flex justify-center"
        @click="openContact"
      >
        <svg
          v-if="open"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="#FFF"
          class="w-6"
        >
          <path
            d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"
          />
        </svg>
        <svg
          v-else
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          stroke="#FFF"
          fill="none"
          class="w-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </div>
      <div class="menu w-screen h-32 fixed">
        <nav class="mainNav h-full flex justify-start items-center px-40">
          <ul class="navlinks h-full flex flex-row justify-center items-center">
            <li class="closeNav navitem h-full mr-4 flex items-center">
              <nuxt-link
                to="/accompagnement"
                class="h-full text-main text-xs font-bold flex items-center"
                >Accompagnement
              </nuxt-link>
            </li>
            <li class="closeNav navitem h-full mr-4">
              <nuxt-link
                to="/expertise"
                class="h-full text-main text-xs font-bold flex items-center"
                >Expertise
              </nuxt-link>
            </li>
            <li class="closeNav navitem h-full mr-4">
              <nuxt-link
                to="/projets"
                class="h-full text-main text-xs font-bold flex items-center"
                >Projets
              </nuxt-link>
            </li>
            <li class="closeNav navitem h-full mr-4">
              <nuxt-link
                to="/about"
                class="h-full text-main text-xs font-bold flex items-center"
                >À propos
              </nuxt-link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  </div>
</template>

<script>
import lottie from "vue-lottie/src/lottie.vue";
import * as logo from "@/assets/animation/logo.json";
import { gsap } from "gsap";

export default {
  components: {
    lottie
  },
  data() {
    return {
      open: true,
      animationsOptions: {
        logo: {
          animationData: logo.default,
          autoplay: false,
          loop: false
        }
      }
    };
  },

  mounted() {
    //TOGGLE MENU----------
    var tween = gsap.timeline({});
    tween.from(".navitem ", {
      autoAlpha: 0,
      y: -20,
      skewY: "-6deg",
      stagger: 0.2
    }),
      "-=0.5";
    tween.reversed(true);

    document.querySelector(".logo").addEventListener("click", openNav);

    function openNav() {
      if (!tween.reversed()) {
        tween
          .play()
          .timeScale(1.5)
          .reverse();
      } else {
        tween.reverse().timeScale(0.8);
      }
    }

    //CLOSEMENU----------
    let Close = document.querySelectorAll(".closeNav");
    Close.forEach(function(el) {
      el.addEventListener("click", function() {
        if (!tween.reversed()) {
          tween
            .play()
            .timeScale(1.5)
            .reverse();
        } else {
          tween.reverse().timeScale(0.8);
        }
      });
    });
  },

  methods: {
    openContact: function() {
      this.open = !this.open;
    },
    handleAnimation: function(anim) {
      this.anim = anim;
    },
    animLogo: function() {
      this.anim.setSpeed(1);
      this.anim.setDirection(1);
      this.anim.play();
    },
    endLogo: function() {
      this.anim.setSpeed(1.3);
      this.anim.setDirection(-1);
      this.anim.play();
    }
  }
};
</script>
