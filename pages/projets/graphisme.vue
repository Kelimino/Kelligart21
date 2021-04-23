<template>
  <div id="laforet">
    <nuxt-link
      class="link fixed top-10 left-28 md:left-40 md:top-16 z-30 flex justify-center text-primary"
      to="/projets"
      ><svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        class="mr-2 w-5"
      >
        <path
          stroke="#3451be"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M10 19l-7-7m0 0l7-7m-7 7h18"
        /></svg
      >Projets</nuxt-link
    >
    <div class="container-scroll h-screen flex flex-col flex-wrap">
      <section class="panel intro w-full h-full flex">
        <div
          class="content-wrapper w-2/3 flex flex-col justify-center items-center p-5 md:p-0"
        >
          <div class="content flex flex-col justify-center items-start">
            <h2 class="font-title text-primary text-6xl font-bold">
              Graphisme
            </h2>
            <h1 class="font-text text-primary uppercase italic text-xl mt-3">
              Une sélection de projets graphiques
            </h1>
            <p class="font-text text-main text-base mt-10 w-2/3">
              Citation a inclure
            </p>
          </div>
        </div>
        <div class="w-1/3">
          <img
            src="@/assets/img/graphisme.png"
            alt="laforet"
            class="imgMain w-full h-full md:h-auto object-cover object-top"
          />
        </div>
      </section>
      <section
        class="panel w-4/6 h-4/5 px-20 my-auto flex flex-row justify-center items-center overflow-hidden"
      >
        <p class="text-main text-sm mr-20">
          Affiche commissionnée pour les 70 ans du Bagad Kemper
        </p>
        <img
          src="@/assets/img/tiles/poster1.jpg"
          alt="Bagad Kemper affiche"
          class="w-auto h-full object-cover"
        />
      </section>
      <section
        class="panel w-4/6 h-4/5 px-20 my-auto flex flex-row justify-center items-center"
      >
        <p class="text-main text-sm mr-20">
          Projet d'affiche pour mon ancien club de football américain
        </p>
        <img
          src="@/assets/img/tiles/poster2.jpg"
          alt="Ankou affiche"
          class="w-auto h-full object-cover"
        />
      </section>
      <section
        class="panel w-4/6 h-4/5 px-20 my-auto flex flex-row justify-center items-center"
      >
        <p class="text-main text-sm mr-20">
          Affiche réalisée pour le club de billard de Douarnenez pour la Coupe
          d'Europe
        </p>
        <img
          src="@/assets/img/tiles/poster8.png"
          alt="Ankou affiche"
          class="w-auto h-full object-cover"
        />
      </section>
      <section
        class="panel w-4/6 h-4/5 px-20 my-auto flex flex-row justify-center items-center"
      >
        <p class="text-main text-sm mr-20">
          Poster pour mon ancien club de football amériacin, les Kelted de
          Quimper
        </p>
        <img
          src="@/assets/img/tiles/poster5.png"
          alt="Ankou affiche"
          class="w-auto h-full object-cover"
        />
      </section>
    </div>
  </div>
</template>

<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default {
  name: "Graphisme",
  mounted() {
    this.$nextTick(() => {
      let container = document.querySelector(".container-scroll");
      // let sections = gsap.utils.toArray(".panel");
      let Scroll = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          invalidateOnRefresh: true,
          pin: true,
          // pinSpacing: false,
          scrub: 1,
          // snap: 1 / (sections.length - 1),
          end: () => "+=" + container.offsetWidth
        }
      });
      Scroll.to(container, {
        x: () =>
          -(container.scrollWidth - document.documentElement.clientWidth) +
          "px",
        ease: "none"
      }).to(".imgMain", { yPercent: -50 }, "<");
    });
  }
};
</script>
