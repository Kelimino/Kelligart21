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
    <a
      href="http://robodico.fr/"
      target="_blank"
      class="link fixed left-5 bottom-5 md:bottom-10 md:left-10 z-30 w-20 h-20 p-4 cursor-pointer bg-primary rounded-full flex justify-center text-base text-white"
      ><img src="@/assets/icons/laptop.svg" alt="site internet"
    /></a>
    <div class="container-scroll h-screen flex flex-col flex-wrap">
      <section class="panel intro w-full h-full flex">
        <div
          class="content-wrapper w-2/3 flex flex-col justify-center items-center p-5 md:p-0"
        >
          <div class="content flex flex-col justify-center items-start w-1/2">
            <h2 class="font-title text-primary text-6xl font-bold">Robodico</h2>
            <h1 class="font-text text-primary uppercase italic text-xl mt-3">
              Un dictionnaire alphabétique des robots
            </h1>
            <p class="font-text text-main text-base mt-10 w-2/3">
              Un grand pouvoir implique de grandes responsabilités
            </p>
          </div>
        </div>
        <div class="w-1/3">
          <img
            src="@/assets/img/robodico.png"
            alt="laforet"
            class="imgMain w-full h-full md:h-auto object-cover object-top"
          />
        </div>
      </section>
      <section
        class="panel scope h-full w-full md:w-1/3 flex justify-center items-center bg-primary"
      >
        <div class="enjeux w-2/3 flex flex-col justify-start">
          <h2 class="font-title text-white text-2xl font-bold">
            Un dictionnaire pour les robots.
          </h2>
          <p class="font-text text-white text-base mt-3">
            Mon fils et moi même aimons les robots<br />
            Il n'y avait pas de site pour répertorier tous les robots, donc
            pourquoi pas en créer un de toutes pièces.
          </p>
        </div>
      </section>
      <section
        class="panel w-full h-4/5 px-20 my-auto flex flex-row justify-center items-center overflow-hidden"
      >
        <p class="text-main text-sm mr-20">
          Un site avec une navigation simple, en slider ou en thumbnails
          classées par ordre alphabétique. Chaque slide peut contenir plusieurs
          robots ayant la même première lettre. Chacune regroupe les
          caractéristiques du robots, quelques images et son histoire.
        </p>
        <video
          ref="videos"
          loop
          muted="muted"
          onmouseover="this.play()"
          onmouseout="this.pause();this.currentTime=0;"
          class="w-1/2 h-3/5 object-cover object-center"
        >
          <source src="@/assets/video/robodico.mp4" type="video/mp4" />
        </video>
      </section>
    </div>
  </div>
</template>

<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default {
  name: "Robodico",
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
