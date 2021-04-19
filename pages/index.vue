<template>
  <div class="h-screen flex flex-col justify-center relative">
    <section
      class="bienvenue relative w-full p-5 md:p-0 h-screen mx-auto flex flex-col justify-center items-center z-10"
    >
      <Three />
      <div
        class="back-board absolute w-4/6 h-4/6 py-36 bg-white bg-opacity-0 rounded"
      ></div>
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
        class="accompagnement-link link w-full md:w-auto bg-white p-6 rounded text-base text-center font-semibold text-main mt-10 shadow hover:bg-primary hover:text-white transition-all duration-200"
        >Commencer l'expérience</nuxt-link
      >
    </section>
    <Loader />
  </div>
</template>

<script>
import { gsap } from "gsap";
import Loader from "/components/loader";
import Three from "/components/three";
export default {
  name: "Accueil",

  components: {
    Loader,
    Three
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
        .to(".back-board", { clipPath: "inset(0 0 0 0)", duration: 1 })
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
        .from(".accompagnement-link", { y: 20, autoAlpha: 0 });
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
  }
};
</script>
