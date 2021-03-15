<template>
  <div class=" bg-back">
    <Nav />
    <transition
      appear
      mode="out-in"
      @before-enter="beforeEnter"
      @enter="enter"
      @after-enter="afterEnter"
      @before-leave="beforeLeave"
      @leave="leave"
      @after-leave="afterLeave"
    >
      <Nuxt :class="[isActive ? 'dark-mode-on' : 'dark-mode-off']" />
    </transition>
    <Loader />
  </div>
</template>

<script>
import Loader from "/components/loader";
import Nav from "/components/nav";
import { gsap } from "gsap";
export default {
  name: "App",
  components: {
    Nav,
    Loader
  },
  data() {
    return {
      isActive: false
    };
  },
  mounted() {},

  methods: {
    beforeEnter: () => {
      console.log("beforeEnter");
    },
    enter: () => {
      console.log("Enter");
    },
    afterEnter: () => {
      console.log("afterEnter");
    },
    beforeLeave: () => {
      console.log("beforeLeave");
    },
    leave: (el, done) => {
      console.log("leave");
      let Loader = gsap.timeline({ duration: 4 });
      Loader.fromTo(
        ".loaderwrap",
        { xPercent: -100, width: 0 },
        {
          transformOrigin: "left",
          width: 100,
          xPercent: 0,
          duration: 1,
          ease: "Power1.easeOut"
        }
      )
        .from(".loader", { autoAlpha: 0 })
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
        .to(
          ".loaderwrap",
          {
            transformOrigin: "right",
            xPercent: 100,
            duration: 0.7,
            onComplete: done
          },
          "+=1"
        );
    },
    afterLeave: () => {
      console.log("afterLeave");
    }
  }
};
</script>
