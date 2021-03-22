<template>
  <transition
    appear
    mode="out-in"
    :css="false"
    :duration="1000"
    @leave="LeavePage"
  >
    <div class="h-screen w-full flex flex-col justify-center">
      <section class="bienvenue w-8/12 mx-auto">
        <h1 class="font-title flex flex-col line">
          <span class="font-text text-primary text-7xl font-light italic"
            >Directeur Artistique </span
          ><span class="font-title text-primary text-8xl font-extrabold mt-6"
            >&amp; Creative Designer
          </span>
        </h1>
        <p class="font-text text-main text-base mt-6 flex">
          Bonjour, je m’appelle Kellig, un peu comme Kellogg’s©,<br />
          votre bol complet pour la journée ;)
          <img
            src="@/assets/icons/cereal.svg"
            alt="bol de céreales "
            class="h-6 ml-3"
          />
        </p>
      </section>
      <section class="mt-20">
        <div class="pageswiper">
          <h3
            class=" w-8/12 mx-auto font-title text-primary text-2xl font-bold"
          >
            Que voulez-vous savoir ?
          </h3>
          <sliderHome />
        </div>
      </section>
      <Loader />
    </div>
  </transition>
</template>

<script>
import { gsap } from "gsap";
import sliderHome from "/components/sliderHome";
import Loader from "/components/loader";

export default {
  name: "Accueil",
  components: {
    sliderHome,
    Loader
  },
  data() {
    return {};
  },
  mounted() {},
  methods: {
    LeavePage: (el, done) => {
      console.log(el);
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
          { bottom: 0, height: "0vh" },
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
  }
};
</script>
