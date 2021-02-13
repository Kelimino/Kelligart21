<template>
  <div>
    <h1 class="title">Services</h1>
    <p>This a page on services</p>
  </div>
</template>

<script>
import { gsap, TimelineMax, Power2 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default {
  head() {
    return {
      title: "Mes services",
      meta: [{ name: "description", content: "Cest ma page de services" }]
    };
  },
  mounted() {
    let Overlay = document.querySelector(".title");
    this.tl = new TimelineMax({}).fromTo(
      Overlay,
      1,
      {
        y: 20,
        color: "#FF0000",
        autoAlpha: 0,
        ease: Power2.easeinOut
      },
      {
        y: 0,
        color: "#000",
        autoAlpha: 1,
        ease: Power2.easeinOut
      }
    );
  }
};
</script>
