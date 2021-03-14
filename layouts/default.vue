<template>
  <div class=" bg-back">
    <!-- <div
      class="brain fixed z-0 top-0 left-0 flex justify-center w-full h-full overflow-hidden pointer-events-none"
    >
      <img
        src="@/assets/img/brain/b1.png"
        alt="brain"
        class="brainAnim w-2/4 absolute transform -translate-x-1/2 -translate-y-1/2 origin-center  "
      />
      <img
        src="@/assets/img/brain/b2.png"
        alt="brain"
        class="brainAnim w-2/4 absolute transform -translate-x-1/2 -translate-y-1/2 origin-center "
      />
    </div> -->
    <Nav />
    <Nuxt :class="[isActive ? 'dark-mode-on' : 'dark-mode-off']" />
    <Loader v-if="loading" />
  </div>
</template>

<script>
import Loader from "/components/loader";
import Nav from "/components/nav";
export default {
  name: "App",
  components: {
    Nav,
    Loader
  },
  data() {
    return {
      loading: true,
      isActive: false
    };
  },
  mounted() {
    setTimeout(() => {
      this.loading = false;
    }, 3000);
  }
};
</script>
