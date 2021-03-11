<template>
  <div>
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
