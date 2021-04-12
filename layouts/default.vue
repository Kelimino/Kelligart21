<template>
  <div class="bg-back" data-scroll-container>
    <div class="cursor"></div>
    <Nav />
    <Nuxt />
  </div>
</template>

<script>
import Nav from "/components/nav";
import { cursor } from "~/mixins/mouse.js";
import { scroll } from "~/mixins/scroll.js";
export default {
  name: "App",
  components: {
    Nav
  },
  mixins: [cursor, scroll]
};
</script>
