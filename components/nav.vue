<template>
  <div>
    <header class="relative z-40">
      <div
        class="logo absolute top-5 left-10 z-50 cursor-pointer"
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
        class="menu w-3/12 bg-white h-screen fixed p-12 flex flex-col justify-center z-30"
      >
        <nav class="mainNav">
          <ul class="font-title text-primary font-semibold text-xl">
            <li class="mb-2">
              <nuxt-link to="/">Accueil</nuxt-link>
            </li>
            <li class="mb-2">
              <nuxt-link to="accompagnement">Accompagnement</nuxt-link>
            </li>

            <li class="mb-2">
              <nuxt-link to="expertise">Expertise</nuxt-link>
            </li>
            <li class="mb-2">
              <nuxt-link to="projets">Projets</nuxt-link>
            </li>
            <li class="mb-2">
              <nuxt-link to="about">À propos</nuxt-link>
            </li>
          </ul>
        </nav>
        <div class="contactnav mt-10">
          <div>
            <a class="font-text text-md text-main">bonjour[a]kelligart.com</a>
          </div>
          <ul class="flex justify-items-center items-center mt-3  ">
            <li class=" mr-3 font-title font-bold text-xl text-main ">
              <a
                href="https://www.facebook.com/kelligart/"
                target="_blank"
                alt="facebook"
                >Fb</a
              >
            </li>
            <li class=" mr-3 font-title font-bold text-xl text-main ">
              <a
                href="https://www.linkedin.com/in/kelligart"
                target="_blank"
                alt="Linkedin"
                >In</a
              >
            </li>
            <li class=" mr-3 font-title font-bold text-xl text-main ">
              <a
                href="https://www.behance.net/kelligart"
                target="_blank"
                alt="Behance"
                >Be</a
              >
            </li>
            <li class=" mr-3 font-title font-bold text-xl text-main ">
              <a
                href="https://dribbble.com/Kelligart"
                target="_blank"
                alt="Dribbble"
                >Dr</a
              >
            </li>
            <li class=" mr-3 font-title font-bold text-xl text-main">
              <a
                href="https://codepen.io/kelligart"
                target="_blank"
                alt="Codepen"
                class="border border-transparent hover:outline-none hover:ring-2 hover:ring-purple-600 hover:border-transparent "
                >Co</a
              >
            </li>
          </ul>
        </div>
        <div class="setting mt-10 font-text text-md text-main ">
          <a
            class="toggledark"
            :class="[isOn ? 'dark-on' : 'dark-off']"
            @click="toggleClass()"
            >Thème</a
          >
        </div>
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
      isOn: false,
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
    var tween = gsap.timeline({});
    tween
      .from(".menu", {
        left: "-100%",
        duration: 1,
        ease: "Power3.easeOut"
      })
      .from(".mainNav ul li", {
        autoAlpha: 0,
        x: -20,
        stagger: 0.1
      })
      .from(
        ".contactnav ",
        {
          autoAlpha: 0,
          x: -20,
          stagger: 0.1
        },
        "<"
      )
      .from(
        ".setting ",
        {
          autoAlpha: 0,
          x: -20,
          stagger: 0.1
        },
        "<"
      );
    tween.reversed(true);

    document.querySelector(".logo").addEventListener("click", openNav);

    function openNav() {
      tween.reversed() ? tween.play() : tween.reverse();
    }
  },

  methods: {
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
