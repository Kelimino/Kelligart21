<template>
  <div class="loader">
    <div>
      <img src="" alt="" class="logo" />
      <div>
        <lottie
          class="loader"
          :width="50"
          :height="50"
          :options="animationsOptions.loader"
        />

        <div class="countdown">
          <div class="count numb1">1</div>
          <div class="count numb2">2</div>
          <div class="count numb3">3</div>
          <div class="count soleil">Soleil</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import lottie from "vue-lottie/src/lottie.vue";
import * as loader from "@/assets/animation/loader.json";
import { gsap } from "gsap";

export default {
  name: "Loader",
  components: {
    lottie
  },

  data() {
    return {
      animationsOptions: {
        loader: {
          animationData: loader.default,
          autoplay: true,
          loop: true
        }
      }
    };
  },

  mounted() {
    gsap
      .timeline({ repeat: -1 })
      .set(".count", { autoAlpha: 0, y: 20 })
      .fromTo(
        ".count",
        { autoAlpha: 1, stagger: 0.4 },
        { autoAlpha: 0, y: -20, stagger: 0.4, duration: 1 }
      );
  }
};
</script>
<style scoped>
.loader {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 10000;
  background: #0d1317;
  display: flex;
  align-items: center;
  justify-content: center;

  color: #fff;
}

.loader {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.countdown {
  position: relative;
  font-family: "Nunito", sans-serif;
  color: #f0efec;
  margin-top: 5em;
  overflow: hidden;
  width: 5em;
  height: 2em;
}

.count {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;
}
</style>
