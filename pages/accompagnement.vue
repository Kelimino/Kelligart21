<template>
  <div id="accompagnement">
    <!-- <svg class="filter-effect">
  <filter id="turbulence" x="0" y="0">
    <feTurbulence id="sea-filter" numOctaves="3" seed="2" baseFrequency="0.02 0.05"></feTurbulence>
    <feDisplacementMap scale="20" in="SourceGraphic"></feDisplacementMap>
  </filter>
</svg> -->
    <div class="titlePin">Nous sommes tous <span>Designers</span></div>

    <section class="intro panel">
      <h1><span>nous sommes tous</span></h1>
      <h2><span>Designers</span></h2>
      <p>Je vous accompagne dans cette aventure collective et créative</p>
      <div class="earth-anim">
        <lottie
          :options="animationsOptions.earth"
          v-on:animCreated="handleAnimation"
        />
      </div>
    </section>

    <section class="synopsis panel">
      <div class="img-wrap">
        <img src="~/assets/img/story1.jpg" alt="img " />
      </div>
      <h5>01</h5>
      <h4>Synopsis</h4>
      <h3>
        Tout commence par une histoire où l’utilisateur en est le principal
        protagoniste, dans un univers où son expérience est le fil conducteur de
        votre scénario
      </h3>
      <p>Qui est votre héros ?</p>
    </section>
    <section class="univers panel">
      <div class="img-wrap">
        <img src="~/assets/img/story2.jpg" alt="img " />
      </div>
      <h5>02</h5>
      <h4>Univers</h4>
      <h3>
        Dans votre univers, il va découvrir un nouveau monde à appréhender, qu'il se familiarise en lui donnant envie 
      </h3>
      <p>Pourquoi votre univers existe t-il ?</p>
    </section>
    <section class="declenchement panel">
      <div class="img-wrap">
        <img src="~/assets/img/story3.jpg" alt="img " />
      </div>
      <h5>03</h5>
      <h4>Déclenchement</h4>
      <h3>
        Le héros à attéri dans votre monde pour suivre sa quête
      </h3>
      <p>Comment le héros rencontre t-il votre monde ?</p>
    </section>
    <section class="aventure panel">
      <div class="img-wrap">
        <img src="~/assets/img/story5.jpg" alt="img " />
      </div>
      <h5>04</h5>
      <h4>Aventure</h4>
      <h3>
        Son aventure séquentielle, va le mener sur différentes étapes. Un
        parcours itératif qu'il va surmonter. Avec obstacles et opportuntiés
        pour s'orienter et réussir son but
      </h3>
      <p>Quel sera son parcours, qu'est ce qu'il recherche ?</p>
    </section>
    <section class="denouement panel">
      <div class="img-wrap">
        <img src="~/assets/img/story4.jpg" alt="img " />
      </div>
      <h5>05</h5>
      <h4>Dénouement</h4>
      <h3>
        Une fois la mission accomplie ou même en cas d'échec, le héros en
        sortira grandit, reviendra t-il ?
      </h3>
      <p>Quelle est son expérience finale ?</p>
    </section>
    <section class="end panel">
      <p>On peut adopter une même approche de pensée et réaliser ces histoires, grâce à l'intélligence collective,  </p>
      <!-- <div v-for="(post, index) in postit" :key="index" class="postit">
        {{post.phase}}
      </div> -->

      <nuxt-link to="services">Découvrez l'envers du décor</nuxt-link>
    </section>
  </div>
</template>

<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import lottie from "vue-lottie/src/lottie.vue";
import * as earth from "@/assets/animation/earth.json";

export default {
  components: {
    lottie
  },
  data() {
    return {
      animationsOptions: {
        earth: {
          animationData: earth.default,
          autoplay: true,
          loop: true
        }
      },

      // postit: [
      //   {
      //     phase: " Comprendre"
      //   },
      //   {
      //     phase: " Analyser"
      //   },
      //   {
      //     phase: " Définir"
      //   },
      //   {
      //     phase: " Rechercher"
      //   },
      //   {
      //     phase: " Concevoir"
      //   },
      //   {
      //     phase: " Lancer"
      //   },
      //   {
      //     phase: " Tester"
      //   }
      // ]
    };
  },
  methods: {
    handleAnimation: function(anim) {
      this.anim = anim;
    }
  },
  mounted() {
    gsap.utils.toArray(".panel").forEach(function(el) {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: el,
            start: "20% center",
            end: "bottom center",
            toggleActions: "restart none none reset",
            scrub: true
          }
        })
        .set(".panel p", { autoAlpha: 0 })
        .from(el, { autoAlpha: 0, scale: 0.8 })
        .from(".panel h3", { autoAlpha: 0, y: 50, duration: 0.6 })
        .to(".panel h3", { autoAlpha: 1, y: 0, duration: 3 })
        .fromTo(
          ".img-wrap",
          { y: 50 },
          { y: -50, duration: 5, autoAlpha: 1, ease: "power4.inOut" },
          "<"
        )
        .fromTo(
          ".img-wrap img",
          { y: 70 },
          { y: -70, duration: 5, autoAlpha: 0.5, ease: "power4.inOut" },
          "<"
        )

        .to(".panel h3", {
          autoAlpha: 0,
          y: 0,
          duration: 3,
          ease: "power4.inOut"
        })
        .to(
          ".img-wrap",
          { autoAlpha: 0, duration: 3, ease: "power4.inOut" },
          "<"
        )
        .fromTo(
          ".panel p",
          { autoAlpha: 0, y: 20 },
          { autoAlpha: 1, y: 20, ease: "power4.inOut" },
          "<"
        );
    });

    this.titleEffect = gsap
      .timeline({ delay: 0.5 })
      .to(".about-link ", { color: "#0D1317" })
      .from(".intro h1 span ", { y: "2em" })
      .from(".intro h2 span ", { y: "2em" }, "<")
      .fromTo(".intro p ", { autoAlpha: 0 }, { autoAlpha: 1 });

    this.tl2 = gsap
      .timeline({
        scrollTrigger: {
          trigger: ".synopsis",
          start: "top bottom",
          toggleActions: "restart none none reset",
          scrub: true
        }
      })
      .to("#accompagnement", {
        background: "#0D1317",
        duration: 0.4,
        ease: "power4.inOut"
      })
      .to(".about-link ", { color: "#FFF" }, "<");

    this.endTl = gsap
      .timeline({
        scrollTrigger: {
          trigger: ".end",
          start: "top center",
          toggleActions: "restart reset resume reset"
        }
      })
      .to(".end", { autoAlpha: 1, duration: 0.2 });
  }
};
</script>
