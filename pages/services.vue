<template>
  <div id="service"> 
    <section class="intro panel">
      <div class="back"></div>
      <p>L'esprit</p>
      <h1><span class="One" >Collectif</span>
      <span class="Two">Analytique</span>
      <span class="Three" >Créatif</span></h1>
      <p>est l'outil le plus puissant d'un Designer</p>
      
    </section>
  </div>
</template>

<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default {
  head() {
    return {
      title: "Mes services",
      meta: [{ name: "description", content: "Cest ma page de services" }]
    };
  },


  methods: {



  },
  mounted() {
    this.tlSvc = gsap.timeline({delay:0.5
    })
    .set("h1 span", { y:100})
    .to(".One", { autoAlpha:1, y:0, duration: 0.6, ease: "power3.out"})
    .to(".One", { y:-100, autoAlpha:0}, "+=0.5")
    .to(".Two", { autoAlpha:1, y:0, duration: 0.6, ease: "power3.out"})
    .to(".Two", { y:-100, autoAlpha:0}, "+=0.5")
    .to(".Three", { autoAlpha:1, y:0, duration: 0.6, ease: "power3.out"})
    .to(".Three", { y:-100, autoAlpha:0}, "+=0.5")
    .to(".intro h1", { display:"none"})
    .to(".intro p", { autoAlpha:0, y:-10}, "-=1")
    .to(".intro .back", { height:"100%", ease: "power4.out", duration:1},"-=0.5")
    .to(".about-link", { color: " #FFF " });

  }
};
</script>
