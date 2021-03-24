<template>
  <div class="bg-back ">
    <Nav />
    <transition
      appear
      mode="out-in"
      :css="false"
      @before-enter="beforeEnter"
      @enter="Enter"
      @before-leave="beforeLeave"
      @leave="Leave"
    >
      <router-view :key="$route.path" />
    </transition>
    <Loader />
  </div>
</template>

<script>
import Nav from "/components/nav";
import Loader from "/components/loader";
// import { gsap } from "gsap";
export default {
  name: "App",
  components: {
    Nav,
    Loader
  },
  data() {
    return {};
  },
  mounted() {},
  methods: {
    beforeEnter: function(el) {
      el.style.transform = "translateY(20px)";
      el.style.opacity = 0.5;
      el.style.transition = "all 0.5s";
    },
    Enter: function(el, done) {
      el.style.opacity = 1;
      el.style.transform = "translateY(0px)";
      done();
    },
    beforeLeave: function(el) {
      el.style.opacity = 0;
      el.style.transition = "all 0.5s";
    }
    // Leave: (el, done) => {
    //   let Transition = gsap.timeline({
    //     delay: 0.2,
    //     repeat: 0,
    //     yoyo: true,
    //     onComplete: Done
    //   });
    //   Transition.progress(0)
    //     .play()
    //     .fromTo(
    //       ".loader",
    //       { bottom: 0, height: "0vh" },
    //       {
    //         transformOrigin: "bottom",
    //         top: 0,
    //         height: "100vh"
    //       }
    //     )
    //     .fromTo(
    //       ".content-wrap",
    //       { bottom: 0, height: "0vh" },
    //       {
    //         transformOrigin: "bottom",
    //         top: 0,
    //         height: "100vh"
    //       }
    //     )
    //     .fromTo(
    //       ".count",
    //       {
    //         stagger: {
    //           each: 0.05
    //         },

    //         y: 5,
    //         autoAlpha: 0
    //       },
    //       {
    //         stagger: {
    //           each: 0.1
    //         },
    //         y: 0,
    //         autoAlpha: 1
    //       }
    //     )
    //     .to(".count", {
    //       stagger: {
    //         each: 0.05
    //       },
    //       y: -20,
    //       autoAlpha: 0
    //     })
    //     .to(".content-wrap", {
    //       transformOrigin: "top",
    //       height: "0vh",
    //       top: -100,
    //       autoAlpha: 0
    //     })
    //     .to(".loader", {
    //       transformOrigin: "top",
    //       height: "0vh",
    //       top: -100,
    //       autoAlpha: 0,
    //       onComplete: done
    //     });

    //   function Done() {
    //     Transition.pause();
    //     Transition.progress(0);
    //   }
    // }
  }
};
</script>
