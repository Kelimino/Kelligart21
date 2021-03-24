<template>
  <div class="h-screen  flex flex-col justify-center relative ">
    <section
      class="bienvenue w-8/12 h-full mx-auto flex flex-col justify-center items-center "
    >
      <h1 class="font-title flex flex-col justify-center items-center">
        <span class="font-text text-primary text-7xl font-light italic"
          >Directeur Artistique </span
        ><span class="font-title text-primary text-8xl font-extrabold mt-6"
          >&amp; Creative Designer
        </span>
      </h1>
      <p
        class="font-text text-main text-base mt-6 flex justify-end flex-col items-center text-center"
      >
        Bonjour, je m’appelle Kellig, un peu comme Kellogg’s©,<br />
        votre bol complet pour la journée ;)
        <img
          src="@/assets/icons/cereal.svg"
          alt="bol de céreales "
          class="h-6 mt-3"
        />
      </p>
    </section>
    <section
      class="sliderHome h-2/3 w-full overflow-x-hidden absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
    >
      <div class="pageswiper h-full w-full ">
        <sliderHome />
      </div>
    </section>
  </div>
</template>

<script>
import sliderHome from "/components/sliderHome";
import { gsap } from "gsap";
export default {
  name: "Accueil",
  components: {
    sliderHome
  },
  data() {
    return {};
  },
  mounted() {
    let introIndex = gsap.timeline({ repeat: 0 });
    introIndex
      .set(".sliderHome", { scale: 0.9, autoAlpha: 0 })
      .from(".bienvenue h1", { y: 20, autoAlpha: 0 })
      .from(".bienvenue p", { y: 20, autoAlpha: 0 })
      .to(".bienvenue p", { y: -20, autoAlpha: 0, display: "none" }, "+=2")
      .to(".bienvenue h1", {
        scale: 0.8,
        opacity: 0.5,
        ease: "none"
      })
      .to(
        ".sliderHome",
        {
          scale: 1,
          autoAlpha: 1,
          ease: "Power2.easeIn",
          duration: 1
        },
        "<"
      );
  }
};
</script>
