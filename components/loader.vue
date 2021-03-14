<template>
  <div
    class="loaderwrap absolute top-0 left-0 w-full h-full p-0 m-0 z-50 bg-primary"
  >
    <div>
      <img src="" alt="" class="logo" />
      <div>
        <lottie
          class="loader absolute top-5 left-5 "
          :width="50"
          :height="50"
          :options="animationsOptions.loader"
        />

        <div
          class="countdown absolute top-10 left-24 flex justify-center items-center"
        >
          <div class="count text-white mr-2 font-text">1</div>
          <div class="count text-white mr-2 font-text">2</div>
          <div class="count text-white mr-2 font-text">3</div>
          <div class="count text-white mr-2 font-text">Soleil</div>
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
    let Loader = gsap.timeline({ duration: 4 });
    Loader.fromTo(
      ".loaderwrap",
      { width: "0%" },
      { width: "100%", duration: 1.4, ease: "Power1.easeOut" }
    )
      .from(
        ".count",
        {
          x: -5,
          autoAlpha: 0,
          stagger: {
            each: 0.3,
            ease: "power2.inOut"
          }
        },
        "+=0.5"
      )
      .to(".loaderwrap", { width: "0%", transformOrigin: "right" }, "+=1");
  }
};
</script>
