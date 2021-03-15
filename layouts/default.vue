<template>
  <div class="bg-back">
    <Nav />
    <transition mode="out-in" appear :css="false" @leave="leave">
      <router-view :key="$route.path" />
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
    return {};
  },
  mounted() {},
  methods: {
    leave: (el, done) => {
      console.log("leave");
      let Transition = gsap.timeline({
        repeat: 0,
        yoyo: true,
        onComplete: Done
      });
      Transition.progress(0)
        .play()
        .fromTo(
          ".loader",
          { bottom: 0, height: "0vh" },
          {
            transformOrigin: "bottom",
            top: 0,
            height: "100vh"
          }
        )
        .fromTo(
          ".content-wrap",
          { bottom: 0, height: "0vh" },
          {
            transformOrigin: "bottom",
            top: 0,
            height: "100vh"
          }
        )
        .fromTo(
          ".count",
          {
            stagger: {
              each: 0.1
            },

            y: 5,
            autoAlpha: 0
          },
          {
            stagger: {
              each: 0.1
            },
            y: 0,
            autoAlpha: 1
          }
        )
        .to(".count", {
          stagger: {
            each: 0.1
          },
          y: -20,
          autoAlpha: 0
        })
        .to(".content-wrap", {
          transformOrigin: "top",
          height: "0vh",
          top: -100
        })
        .to(".loader", {
          transformOrigin: "top",
          height: "0vh",
          top: -100,
          onComplete: done
        });

      function Done() {
        Transition.pause();
        Transition.progress(0);
      }
    }
  }
};
</script>
