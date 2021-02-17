<template>
  <div id="accompagnement">
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
      <div class="back-intro"></div>
      <h5>Chapitre 1</h5>
      <h4>Synopsis</h4>
      <h3>
        Tout commence par une histoire où l’utilisateur en est le principal
        protagoniste, dans un univers où son expérience est le fil conducteur de
        votre scénario
      </h3>
    </section>
    <section class="univers panel">
      <div class="back-intro"></div>
      <h5>Chapitre 2</h5>
      <h4>Univers</h4>
      <h3>Dans votre univers, il va découvrir un nouveau monde,</h3>
    </section>
    <section class="declenchement panel">
      <div class="back-intro"></div>
      <h5>Chapitre 3</h5>
      <h4>Déclenchement</h4>
      <h3>
        Dans cette univers, le héro va devoir accomplir sa quête, combattre des
        vilains, réussir ses actions, se sentir bien
      </h3>
    </section>
    <section class="aventure panel">
      <div class="back-intro"></div>
      <h5>Chapitre 4</h5>
      <h4>Aventure</h4>
      <h3>
        Son aventure séquentielle, va le mener sur différentes étapes. Un
        parcours itératif qu'il va surmonter ses obstacles, réussir ses actions,
        être orienté
      </h3>
    </section>
    <section class="denouement panel">
      <div class="back-intro"></div>
      <h5>Chapitre 5</h5>
      <h4>Dénouement</h4>
      <h3>
        Dans cette univers, le héro va devoir accomplir sa quête, combattre des
        vilains, réussir ses actions, se sentir bien
      </h3>
    </section>
    <section class="end panel">
      <div class="back"></div>
      <h5>Prochaine étape</h5>
      <h4>Services</h4>
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
      }
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
            start: "top center",
            end: "80% center",
            toggleActions: "restart none none none"
          }
        })
        .from(el, { autoAlpha: 0, scale: 0.95 })
        .from(".panel h3", { autoAlpha: 0, y: 50 }, "<= 0.5")
        .to(".panel h3", { autoAlpha: 1, y: 0 });
    });

    this.titleEffect = gsap
      .timeline({delay:0.5})
      .from(".intro h1 span ", { y: "2em" })
      .from(".intro h2 span ", { y: "2em" }, "<")
      .from(".intro p ", { autoAlpha: 0 })

    this.tl2 = gsap
      .timeline({
        scrollTrigger: {
          trigger: ".synopsis",
          start: "top center",
          end: "80% center",
          toggleActions: "restart reset resume reset"
        }
      })
      .to("#accompagnement", { background: "#000", duration: 2 })
      .to(".synopsis h4", { color: " #FFF " }, "-= 1")
      .to(".synopsis h3", { color: " #FFF " }, "-= 1")
      .to(".about-link", { color: " #FFF " }, "-= 1");

    this.endTl = gsap
      .timeline({
        scrollTrigger: {
          trigger: ".end",
          start: "top center",
          toggleActions: "restart reset resume reset",
          markers: true
        }
      })
      .set(".end .back", { autoAlpha: 0 })
      .to(".end .back", { autoAlpha: 1, scale: 10, duration: 0.2 })
      .to(".end h4", { color: " #FFF " }, "-= 1");
  }
};
</script>
