<template>
  <div id="laforet">
    <nuxt-link
      class="fixed top-16 left-40 z-50 flex justify-center text-primary"
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
          class="content-wrapper w-2/3 flex flex-col justify-center items-center"
        >
          <div class="content flex flex-col justify-center items-start">
            <h1 class="font-title text-primary text-6xl font-bold">Laforêt</h1>
            <h2 class="font-text text-primary uppercase italic text-xl mt-3">
              Refonte du site immobilier Laforêt
            </h2>
            <p class="font-text text-main text-base mt-10 w-2/3">
              Un beau projet d'équipe réalisé à temps en 14 sprints
            </p>

            <ul class="mt-10">
              <li class="text-primary text-md font-title font-bold mb-2">
                <span class="mr-2 text-xs font-text uppercase">Client</span
                >Groupe Laforêt
              </li>
              <li class="text-primary text-md font-title font-bold mb-2">
                <span class="mr-2 text-xs font-text uppercase">Rôle</span>UX
                &amp; UI Designer
              </li>
              <li class="text-primary text-md font-title font-bold mb-2">
                <span class="mr-2 text-xs font-text uppercase">Date</span>2019
              </li>
            </ul>
          </div>
        </div>
        <img
          src="@/assets/img/projet/Laforêt.png"
          alt="laforet"
          class="w-1/3 h-auto object-cover object-top"
        />
      </section>
      <section
        class="panel scope h-full w-2/3 flex justify-center items-center"
      >
        <div class="enjeux w-2/3  flex flex-col justify-start">
          <h2 class="font-title text-primary text-2xl font-bold">
            Un enjeux digital important
          </h2>
          <p class="font-text text-main text-base mt-3">
            Dans un marché immobilier saturé et compétitif, il ezt vital d'avoir
            une présence digitale et appliquer l'expérience utilisateur
          </p>
        </div>
      </section>

      <section class="panel methode h-full w-1/2 flex bg-red-800">
        <div class="problème">
          <h2 class="font-title text-primary text-8xl font-bold">
            Un site WebApp
          </h2>
          <ul>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
        <div class="solution">
          <h2>Un site type webapp</h2>
          <ul>
            <li><span>Client</span>Groupe Laforêt</li>
            <li><span>Rôle</span> UX &amp; UI Designer</li>
            <li><span>Date</span> 2019</li>
          </ul>
        </div>
      </section>
      <section class="panel feeback h-full w-1/2 flex bg-yellow-700">
        <h2>Un projet d'équipe passionant</h2>
        <p>Retour sur le projet</p>
      </section>

      <section class=" panel screen h-full w-1/2 flex bg-red-200">
        <div>
          <img src="" alt="" />
          <p>Description du rendu</p>
        </div>
        <div>
          <img src="" alt="" />
          <p>Description du rendu</p>
        </div>
        <div>
          <img src="" alt="" />
          <p>Description du rendu</p>
        </div>
      </section>

      <section class=" panel next w-full">
        <nuxt-link to="goall">
          <h3>Goall</h3>
          <p>Design concept sur une plateforme de streaming</p></nuxt-link
        >
      </section>
    </div>
  </div>
</template>

<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default {
  name: "Laforet",
  mounted() {
    this.$nextTick(() => {
      let container = document.querySelector(".container-scroll");
      // let sections = gsap.utils.toArray(".panel");
      gsap.to(container, {
        x: () =>
          -(container.scrollWidth - document.documentElement.clientWidth) +
          "px",
        ease: "none",
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
    });
  }
};
</script>
