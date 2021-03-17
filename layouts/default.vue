<template>
  <div class="bg-back ">
    <Nav />
    <transition
      mode="out-in"
      :css="false"
      @before-enter="beforeEnter"
      @enter="enter"
      @before-leave="beforeLeave"
    >
      <router-view :key="$route.path" />
    </transition>
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
  mounted() {},
  methods: {
    beforeEnter: el => {
      el.style.transform = "translateY(3%)";
      el.style.opacity = "0";
      el.style.transition = "all 0.6s ease-out";
    },
    enter: el => {
      el.style.transform = "translateY(0%)";
      el.style.opacity = "1";
      el.style.transition = "all 0.6s ease-out";
    },
    beforeLeave: el => {
      el.style.opacity = "0";
      el.style.transition = "all 0.3s ease-in";
    }
  }
};
</script>
