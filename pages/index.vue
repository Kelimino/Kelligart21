<template>
  <div class="container">
    <div>
      <Logo />
      <h1 class="title">
        kellig21
      </h1>
      <lottie-animation path="icons/arrow.json" />

      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          rel="noopener noreferrer"
          class="button--green"
        >
          Documentation
        </a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          rel="noopener noreferrer"
          class="button--grey"
        >
          GitHub
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import LottieAnimation from "lottie-vuejs/src/LottieAnimation.vue";

export default {
  components: {
    LottieAnimation
  },
  data() {
    return {};
  },
  methods: {},
  mounted() {}
};
</script>
