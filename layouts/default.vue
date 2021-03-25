<template>
  <div class=" bg-back">
    <Nav />
    <Nuxt />
  </div>
</template>

<script>
import Nav from "/components/nav";

export default {
  name: "App",
  components: {
    Nav
  }
};
</script>
