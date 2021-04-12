<template>
  <div id="scroll" class="bg-back">
    <div
      class="cursor w-5 h-5 border border-primary border-solid fixed transform -translate-x-1/2 -translate-y-1/2 z-50 rounded-full pointer-events-none"
    ></div>
    <Nav />
    <Nuxt />
  </div>
</template>

<script>
import Nav from "/components/nav";
import { cursor } from "~/mixins/mouse.js";
// import { scrollY } from "~/mixins/scroll.js";
export default {
  name: "App",
  components: {
    Nav,
  },
  mixins: [cursor],
  data() {
    return {
      lmS: null,
    };
  },
  mounted() {
    this.lmS = new this.locomotiveScroll({
      el: document.querySelector("#scroll"),
      smooth: true,
    });
  },
};
</script>
