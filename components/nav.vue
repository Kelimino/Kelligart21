<template>
  <div>
    <header class="relative z-40">
      <div
        class="logo fixed top-2 left-5 md:top-5 md:left-10 z-50 cursor-pointer"
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
        class="contact fixed top-7 right-5 md:top-10 md:right-10 z-50 cursor-pointer bg-primary rounded-full w-10 h-10 md:w-14 md:h-14 flex justify-center"
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
      <div
        class="legal fixed bottom-5 left-1/2 md:bottom-10 md:right-0 z-50 font-text text-primary font-semibold text-xs transform -translate-x-1/2 -translate-y-1/2"
      >
        <nuxt-link to="/legal">Folio'21 © Kelligart</nuxt-link>
      </div>
      <div
        class="menu w-screen bg-back h-screen fixed flex flex-col justify-center z-30 p-10"
      >
        <nav class="mainNav h-full flex justify-center items-center">
          <div class="navlinks h-2/3 grid grid-cols-4 gap-4">
            <div
              class="navitem closeNav h-full bg-white rounded overflow-hidden"
            >
              <nuxt-link
                to="/accompagnement"
                class="h-full flex flex-col justify-between"
              >
                <img
                  src="~@/assets/animation/synopsis.png"
                  alt="accompagnement"
                  class="h-2/3 w-full object-cover object-top"
                />
                <div
                  class="link-content h-1/3 p-5 flex flex-col justify-start items-start"
                >
                  <h2 class="font-title text-primary text-2xl font-bold">
                    Accompagnement
                  </h2>
                  <p class="font-text text-main text-base mt-3">
                    Méthode et process de travail
                  </p>
                </div>
              </nuxt-link>
            </div>
            <div
              class="navitem closeNav h-full bg-white rounded overflow-hidden"
            >
              <nuxt-link
                to="/expertise"
                class="h-full flex flex-col justify-between"
              >
                <img
                  src="~@/assets/animation/synopsis.png"
                  alt="expertise"
                  class="h-2/3 w-full object-cover object-top"
                />
                <div
                  class="link-content h-1/3 p-5 flex flex-col justify-start items-start"
                >
                  <h2 class="font-title text-primary text-2xl font-bold">
                    Expertise
                  </h2>
                  <p class="font-text text-main text-base mt-3">
                    Domaines &amp; prestations
                  </p>
                </div>
              </nuxt-link>
            </div>
            <div
              class="navitem closeNav h-full bg-white rounded overflow-hidden"
            >
              <nuxt-link
                to="/projets"
                class="h-full flex flex-col justify-between"
              >
                <img
                  src="~@/assets/animation/synopsis.png"
                  alt="projets"
                  class="h-2/3 w-full object-cover object-top"
                />
                <div
                  class="link-content h-1/3 p-5 flex flex-col justify-start items-start"
                >
                  <h2 class="font-title text-primary text-2xl font-bold">
                    Projets
                  </h2>
                  <p class="font-text text-main text-base mt-3">
                    Étude de cas &amp; réalisations
                  </p>
                </div>
              </nuxt-link>
            </div>
            <div
              class="navitem closeNav h-full bg-white rounded overflow-hidden"
            >
              <nuxt-link
                to="/about"
                class="h-full flex flex-col justify-between"
              >
                <img
                  src="~@/assets/animation/synopsis.png"
                  alt="about"
                  class="h-2/3 w-full object-cover object-top"
                />
                <div
                  class="link-content h-1/3 p-5 flex flex-col justify-start items-start"
                >
                  <h2 class="font-title text-primary text-2xl font-bold">
                    A propos
                  </h2>
                  <p class="font-text text-main text-base mt-3">
                    Personnalité &amp; expériences
                  </p>
                </div>
              </nuxt-link>
            </div>
          </div>
        </nav>
        <!-- <div class="contactnav mt-10 flex flex-row justify-center">
          <div>
            <a class="font-text text-md text-main">bonjour[a]kelligart.com</a>
          </div>
          <ul class="flex justify-items-center items-center mt-3  ">
            <li class="closeNav  mr-3 font-title font-bold text-xl text-main">
              <a
                href="https://www.facebook.com/kelligart/"
                target="_blank"
                alt="facebook"
                >Fb</a
              >
            </li>
            <li class="closeNav  mr-3 font-title font-bold text-xl text-main ">
              <a
                href="https://www.linkedin.com/in/kelligart"
                target="_blank"
                alt="Linkedin"
                >In</a
              >
            </li>
            <li class="closeNav  mr-3 font-title font-bold text-xl text-main ">
              <a
                href="https://www.behance.net/kelligart"
                target="_blank"
                alt="Behance"
                >Be</a
              >
            </li>
            <li class="closeNav  mr-3 font-title font-bold text-xl text-main ">
              <a
                href="https://dribbble.com/Kelligart"
                target="_blank"
                alt="Dribbble"
                >Dr</a
              >
            </li>
            <li class="closeNav  mr-3 font-title font-bold text-xl text-main">
              <a
                href="https://codepen.io/kelligart"
                target="_blank"
                alt="Codepen"
                class="border border-transparent hover:outline-none hover:ring-2 hover:ring-purple-600 hover:border-transparent "
                >Co</a
              >
            </li>
          </ul>
        </div> -->
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
    tween
      .from(".menu", {
        left: "-100%",
        duration: 1,
        ease: "Power3.easeOut"
      })
      .from(".navitem ", {
        autoAlpha: 0,
        y: 20,
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
