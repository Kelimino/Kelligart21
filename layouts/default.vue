<template>
  <div class=" bg-back">
    <Nav />
    <Nuxt :class="[isActive ? 'dark-mode-on' : 'dark-mode-off']" />
    <Loader v-if="loading" />
    <div
      class="brain fixed top-0 left-0 flex justify-center w-full h-full overflow-hidden pointer-events-none"
    >
      <img
        src="@/assets/img/brain/b1.png"
        alt="brain"
        class="brainAnim absolute"
      />
      <img
        src="@/assets/img/brain/b2.png"
        alt="brain"
        class="brainAnim absolute"
      />
    </div>
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
