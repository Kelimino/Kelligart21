<template>
  <div
    class="loaderwrap fixed top-0 w-0 left-0 h-full p-0 m-0 z-50 bg-primary overflow-hidden"
  >
    <div>
      <img src="" alt="" class="logo" />
      <div>
        <lottie
          class="loader absolute top-5 left-5"
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

  mounted() {}
};
</script>
