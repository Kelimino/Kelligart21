<template>
  <div class="h-screen flex flex-col justify-center relative">
    <section
      class="bienvenue relative w-full p-5 md:p-0 h-screen mx-auto flex flex-col justify-center items-center z-10"
    >
      <div class="back-board absolute w-4/6 h-4/6 py-36 bg-white rounded"></div>
      <h1
        class="font-title flex flex-col justify-center items-center text-center"
      >
        <span
          class="font-text text-primary text-4xl md:text-7xl font-light italic"
          >Directeur Artistique </span
        ><span class="font-title text-primary text-8xl font-extrabold mt-6"
          >&amp; Creative Designer
        </span>
      </h1>
      <p class="font-text text-main text-base mt-6 text-center">
        Bonjour, je m’appelle Kellig, un peu comme Kellogg’s ©, un bol complet
        ;)
      </p>

      <nuxt-link
        to="/accompagnement"
        class="accompagnement-link link relative w-full md:w-auto text-base text-center font-bold text-main uppercase mt-16"
        ><svg
          viewBox="0 0 401.72 177"
          class="z-10 w-44 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        >
          <path
            class="path"
            fill="none"
            stroke="#3451be"
            stroke-width="2"
            d="M254.3,17.38a517.45,517.45,0,0,0-59.85,9.7C84.45,51.42-7.61,90.71,1.64,132.5s105.93,55.93,215.93,31.58S409.25,86.12,400,44.33C394.19,18.09,353.9,2.75,297.49,1"
          /></svg
        >Commencer l'expérience</nuxt-link
      >
    </section>
    <Loader />
  </div>
</template>

<script>
import { gsap } from "gsap";
import Loader from "/components/loader";

export default {
  name: "Accueil",
  components: {
    Loader
  },
  transition: {
    mode: "out-in",
    css: false,
    appear: true,
    beforeEnter() {},
    enter(el, done) {
      let introIndex = gsap.timeline({ repeat: 0 });
      introIndex
        .from(".back-board", { clipPath: "inset(0 50% 0 50%)" })
        .to(".back-board", { clipPath: "inset(0 0 0 0)", duration: 1.5 })
        .from(
          ".bienvenue h1 span",
          {
            y: 20,
            autoAlpha: 0,
            duration: 1,
            stagger: {
              each: 0.1
            },
            clipPath: "inset(100% 0 0 0)"
          },
          "-=1"
        )
        .to(".bienvenue h1 span", {
          y: 0,
          autoAlpha: 1,
          duration: 1,
          stagger: {
            each: 0.1
          },
          clipPath: "inset(0 0 0 0)"
        })
        .from(".bienvenue p", { y: 20, autoAlpha: 0 }, "-=1.5")
        .from(".accompagnement-link", { y: 20, autoAlpha: 0 }, "<=0.5");
      done();
    },
    leave(el, done) {
      let Transition = gsap.timeline({
        delay: 0.2,
        repeat: 0,
        yoyo: true,
        onComplete: Done
      });
      Transition.progress(0)
        .play()
        .fromTo(
          ".loader",
          { bottom: 0, height: "0vh", display: "block" },
          {
            transformOrigin: "bottom",
            top: 0,
            height: "100vh"
          }
        )
        .fromTo(
          ".content-wrap",
          { bottom: 0, height: "0vh" },
          {
            transformOrigin: "bottom",
            top: 0,
            height: "100vh"
          }
        )
        .fromTo(
          ".count",
          {
            stagger: {
              each: 0.05
            },
            y: 5,
            autoAlpha: 0
          },
          {
            stagger: {
              each: 0.1
            },
            y: 0,
            autoAlpha: 1
          }
        )
        .to(".count", {
          stagger: {
            each: 0.05
          },
          y: -20,
          autoAlpha: 0
        })
        .to(".content-wrap", {
          transformOrigin: "top",
          height: "0vh",
          top: -100,
          autoAlpha: 0
        })
        .to(
          el,
          {
            autoAlpha: 0
          },
          "<"
        )
        .to(".loader", {
          transformOrigin: "top",
          height: "0vh",
          top: -100,
          autoAlpha: 0,
          onComplete: done
        });

      function Done() {
        Transition.pause();
        Transition.progress(0);
      }
    }
  },

  head() {
    return {
      titleTemplate: " %s - Accueil",
      meta: [
        {
          name: "Directeur Artistique & Creative Designer",
          content: "Portfolio de Kellig jourdren, designer basé à Rennes"
        }
      ]
    };
  },
  methods: {
    linkSvg: function() {
      console.log("hey");
      const path = document.querySelector(".accompagnement-link svg path ");
      path.classlist.toggle(".pathAnim");
    }
  }
};
</script>
