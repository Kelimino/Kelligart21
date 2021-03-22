<template>
  <div class="bg-back ">
    <Nav />
    <router-view :key="$route.path" />
  </div>
</template>

<script>
import Nav from "/components/nav";
export default {
  name: "App",
  components: {
    Nav
  },
  data() {
    return {};
  },
  mounted() {}
};
</script>
