<template>
  <div class="bg-back">
    <div class="cursor"></div>
    <Nav />
    <Nuxt />
  </div>
</template>

<script>
import Nav from "/components/nav";
import { cursor } from "~/mixins/mouse.js";
export default {
  name: "App",
  components: {
    Nav
  },
  mixins: [cursor]
};
</script>
