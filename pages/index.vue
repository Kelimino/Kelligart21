<template>
  <div class="h-screen  flex flex-col justify-center relative ">
    <section
      class="bienvenue w-8/12 h-full mx-auto flex flex-col justify-center items-center z-10 "
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
      <nuxt-link
        to="/accompagnement"
        class="accompagnement-link bg-white p-6 rounded text-base font-semibold text-main mt-10 shadow hover:bg-primary hover:text-white transition-all duration-200"
        >Commencer l'expérience</nuxt-link
      >
    </section>

    <section
      class="absolute bottom-0 left-0 w-full flex justify-center items-center "
    >
      <ul class="flex justify-center items-center ">
        <li class="list-none mr-3 w-48 h-64 overflow-hidden">
          <img
            src="@/assets/img/tiles/web1.png"
            alt="poster"
            class="w-full object-cover object-top"
          />
        </li>
        <li class="list-none mr-3 w-48 h-64 overflow-hidden">
          <img
            src="@/assets/img/tiles/poster1.jpg"
            alt="poster"
            class="w-full object-cover object-top"
          />
        </li>
        <li class="list-none mr-3 w-48 h-64 overflow-hidden">
          <img
            src="@/assets/img/tiles/web14.jpg"
            alt="poster"
            class="w-full object-cover object-top"
          />
        </li>
        <li class="list-none mr-3 w-48 h-64 overflow-hidden">
          <img
            src="@/assets/img/tiles/poster8.png"
            alt="poster"
            class="w-full object-cover object-top"
          />
        </li>
        <li class="list-none mr-3 w-48 h-64 overflow-hidden">
          <img
            src="@/assets/img/tiles/web12.png"
            alt="poster"
            class="w-full object-cover object-top"
          />
        </li>
        <li class="list-none mr-3 w-48 h-64 overflow-hidden">
          <img
            src="@/assets/img/tiles/poster2.jpg"
            alt="poster"
            class="w-full object-cover object-top"
          />
        </li>
        <li class="list-none w-48 h-64 overflow-hidden">
          <img
            src="@/assets/img/tiles/web13.jpg"
            alt="poster"
            class="w-full object-cover object-top"
          />
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
import { gsap } from "gsap";
export default {
  name: "Accueil",
  data() {
    return {};
  },
  mounted() {
    let introIndex = gsap.timeline({ repeat: 0 });
    introIndex
      .from(".bienvenue h1", { y: 20, autoAlpha: 0 })
      .from(".bienvenue p", { y: 20, autoAlpha: 0 })
      .from(".accompagnement-link", { y: 20, autoAlpha: 0 });
  }
};
</script>
