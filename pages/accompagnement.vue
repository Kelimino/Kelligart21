<template>
  <div id="accompagnement">

      <section class="intro panel">
        <div class="back-intro"></div>
       
       <h4>Introduction</h4>
       <h1>Nous sommes tous <em><br/> Designers</em></h1>
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
       
       <h4>Synopsis</h4>
       <h2>Tout commence par une histoire où l’utilisateur en est le principal protagoniste, dans un univers où son expérience est le fil conducteur de votre scénario</h2>


      </section>
      <section class="univers panel">
        <div class="back-intro"></div>
       
       <h4>Univers</h4>
       <h2>Dans cette univers, le héro va devoir accomplir sa quête, combattre des vilains, réussir ses actions, se sentir bien </h2>


      </section>

  </div>
</template>

<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import lottie from "vue-lottie/src/lottie.vue";
import * as arrow from "@/assets/animation/earth.json";

export default {
  components: {
    lottie
  },
  data() {
    return {
      animationsOptions: {
        earth: {
          animationData: arrow.default,
          autoplay: true,
          loop: true
        }
      }
    }
  },
  methods: {

      handleAnimation: function(anim) {
      this.anim = anim;
    }
  },
  mounted(){

    this.tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".synopsis",
    start: "top center",
    end: "80% center",
    toggleActions: 'restart reset resume reset',
    markers: true
  }
})
.to("#accompagnement", {background: "#000", duration: 2 })
.to(".synopsis h4", {color: " #FFF "}, "-= 1")
.to(".synopsis h2", {color: " #FFF "}, "-= 1")
.to(".about-link", {color: " #FFF "}, "-= 1");


  }


};
</script>
