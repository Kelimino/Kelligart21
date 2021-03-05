<template>
  <div id="projets">
    <h1>Projets</h1>
    <p>Une sélection de travaux</p>
    <slider />
  </div>
</template>

<script>
import slider from "/components/slider";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default {
  components: {
    slider,
  },
};
</script>
