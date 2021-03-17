<template>
  <div class="h-screen w-full flex flex-col justify-center">
    <section class="bienvenue w-8/12 mx-auto">
      <h1 class="font-title flex flex-col line">
        <span class="font-text text-primary text-7xl font-light italic"
          >Directeur Artistique </span
        ><span class="font-title text-primary text-8xl font-extrabold mt-6"
          >&amp; Creative Designer
        </span>
      </h1>
      <p class="font-text text-main text-base mt-6">
        Bonjour, je m’appelle Kellig, un peu comme Kellogg’s©,<br />
        votre bol complet pour la journée ;)
      </p>
    </section>
    <section class="mt-20">
      <div class="pageswiper">
        <h3 class=" w-8/12 mx-auto font-title text-primary text-2xl font-bold">
          Que voulez-vous savoir ?
        </h3>
        <sliderHome />
      </div>
    </section>
    <Loader />
  </div>
</template>

<script>
import sliderHome from "/components/sliderHome";
import Loader from "/components/loader";
// import { gsap } from "gsap";

export default {
  components: {
    sliderHome,
    Loader
  },
  data() {
    return {};
  },
  mounted() {}
  // methods: {
  //   leave: (el, done) => {
  //     let Transition = gsap.timeline({
  //       repeat: 0,
  //       yoyo: true,
  //       onComplete: Done
  //     });
  //     Transition.progress(0)
  //       .play()
  //       .fromTo(
  //         ".loader",
  //         { bottom: 0, height: "0vh" },
  //         {
  //           transformOrigin: "bottom",
  //           top: 0,
  //           height: "100vh"
  //         }
  //       )
  //       .fromTo(
  //         ".content-wrap",
  //         { bottom: 0, height: "0vh" },
  //         {
  //           transformOrigin: "bottom",
  //           top: 0,
  //           height: "100vh"
  //         }
  //       )
  //       .fromTo(
  //         ".count",
  //         {
  //           stagger: {
  //             each: 0.05
  //           },

  //           y: 5,
  //           autoAlpha: 0
  //         },
  //         {
  //           stagger: {
  //             each: 0.1
  //           },
  //           y: 0,
  //           autoAlpha: 1
  //         }
  //       )
  //       .to(".count", {
  //         stagger: {
  //           each: 0.05
  //         },
  //         y: -20,
  //         autoAlpha: 0
  //       })
  //       .to(".content-wrap", {
  //         transformOrigin: "top",
  //         height: "0vh",
  //         top: -100,
  //         autoAlpha: 0
  //       })
  //       .to(".loader", {
  //         transformOrigin: "top",
  //         height: "0vh",
  //         top: -100,
  //         autoAlpha: 0,
  //         onComplete: done
  //       });

  //     function Done() {
  //       Transition.pause();
  //       Transition.progress(0);
  //     }
  //   }
  // }
};
</script>
