<template>
  <div id="laforet">
    <nuxt-link
      class="fixed top-10 left-28 md:left-40 md:top-16 z-30 flex justify-center text-primary"
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
      href="https://www.laforet.com/"
      target="_blank"
      class="fixed left-5 bottom-5 md:bottom-10 md:left-10 z-30 w-20 h-20 p-4 cursor-pointer bg-primary rounded-full flex justify-center text-base text-white"
      ><img src="@/assets/icons/laptop.svg" alt="site internet"
    /></a>
    <div class="container-scroll h-screen flex flex-col flex-wrap">
      <section class="panel intro w-full h-full flex">
        <div
          class="content-wrapper w-2/3 flex flex-col justify-center items-center p-5 md:p-0"
        >
          <div class="content flex flex-col justify-center items-start">
            <h2 class="font-title text-primary text-6xl font-bold">Laforêt</h2>
            <h1 class="font-text text-primary uppercase italic text-xl mt-3">
              Refonte du site immobilier Laforêt
            </h1>
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
        <div class="w-1/3">
          <img
            src="@/assets/img/projet/laforet/laforet.png"
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
            Un enjeux digital important
          </h2>
          <p class="font-text text-white text-base mt-3">
            Dans un marché immobilier saturé et compétitif, il est vital d'avoir
            une bonne présence digitale et d'optimiser l'expérience
            utilisateur.<br /><br />
            L'essort des agences 100% en ligne et des marketplaces peturbe les
            agences traditionnelles qui doivent rivaliser et s'adapter aux
            nouvelles utilisations.
          </p>
        </div>
      </section>

      <section
        class="panel methode h-full w-100 md:w-auto p-20 flex flex-row items-center flex-nowrap md:grid md:grid-cols-2"
      >
        <div class="probleme w-full md:w-auto">
          <img
            src="@/assets/img/projet/laforet/old-laforet.png"
            alt="old laforet"
            class="h-80 w-full object-cover object-top mb-10"
          />
          <h2 class="font-title text-primary text-2xl font-bold w-5/6">
            Un site pas à la hauteur de leur renommée
          </h2>
          <ul class="mt-5 md:mt-10">
            <li class="font-text text-main text-base mt-3 flex justif-start">
              <img src="@/assets/icons/sad.svg" alt="sad" class="h-6 mr-5" />Une
              navigation peu intuitive et osbolète
            </li>
            <li class="font-text text-main text-base mt-3 flex justif-start">
              <img src="@/assets/icons/sad.svg" alt="sad" class="h-6 mr-5" />Une
              image de marque pas assez affirmée
            </li>
            <li class="font-text text-main text-base mt-3 flex justif-start">
              <img src="@/assets/icons/sad.svg" alt="sad" class="h-6 mr-5" />Une
              expérience un peu terne
            </li>
          </ul>
        </div>
        <div class="solution w-full md:w-auto ml-10 md:ml-20">
          <img
            src="@/assets/img/projet/laforet/laforet-home.png"
            alt="old laforet"
            class="h-80 w-full object-cover object-top mb-10"
          />
          <h2 class="font-title text-primary text-2xl font-bold w-5/6">
            Un site type avec certains codes de webapp
          </h2>
          <ul class="mt-5 md:mt-10">
            <li class="font-text text-main text-base mt-3 flex justif-start">
              <img
                src="@/assets/icons/happy.svg"
                alt="happy"
                class="h-6 mr-5"
              />Un site fluide et performant : SPA, navigation adaptée...
            </li>
            <li class="font-text text-main text-base mt-3 flex justif-start">
              <img
                src="@/assets/icons/happy.svg"
                alt="happy"
                class="h-6 mr-5"
              />Une image de marque valorisée : visuels immersifs, espace
              blanc...
            </li>
            <li class="font-text text-main text-base mt-3 flex justif-start">
              <img
                src="@/assets/icons/happy.svg"
                alt="happy"
                class="h-6 mr-5"
              />Un experience personnalisée : fonctionnalités de partage, de
              visualisation...
            </li>
          </ul>
        </div>
      </section>
      <section
        class="panel feeback h-full w-full md:w-1/3 flex justify-center items-center p-6 bg-white"
      >
        <h2 class="font-title text-primary text-8xl font-bold uppercase">
          le diable est dans le détail
        </h2>
      </section>

      <section
        class="panel screen h-full w-auto md:w-full flex flex-row items-center flex-wrap p-10"
      >
        <div
          class="ui w-auto md:w-80 h-72 bg-white rounded overflow-hidden pb-20 mr-4 md:mr-8 flex-initial"
        >
          <img
            src="@/assets/img/projet/laforet/search.png"
            alt="filtre"
            class="w-full h-40 object-cover object-center"
          />
          <p class="font-text text-main text-base mt-3 p-3">
            Un module de recherche simple, juste l'essentiel
          </p>
        </div>
        <div
          class="ui w-auto md:w-80 h-72 bg-white rounded overflow-hidden pb-20 mr-4 md:mr-8 flex-initial"
        >
          <img
            src="@/assets/img/projet/laforet/list.png"
            alt="filtre"
            class="w-full h-40 object-cover object-center"
          />
          <p class="font-text text-main text-base mt-3 p-3">
            Un listing à cartes hiérarchisé et personnalisé
          </p>
        </div>
        <div
          class="ui w-auto md:w-80 h-72 bg-white rounded overflow-hidden pb-20 mr-4 md:mr-8 flex-initial"
        >
          <img
            src="@/assets/img/projet/laforet/filter.png"
            alt="filtre"
            class="w-full h-40 object-cover object-left"
          />
          <p class="font-text text-main text-base mt-3 p-3">
            Un module de filtres catégorisés selon leur pertinences
          </p>
        </div>
        <div
          class="ui w-auto md:w-80 h-72 bg-white rounded overflow-hidden pb-20 mr-4 md:mr-8 flex-initial"
        >
          <img
            src="@/assets/img/projet/laforet/glance.png"
            alt="filtre"
            class="w-full h-40 object-cover object-top"
          />
          <p class="font-text text-main text-base mt-3 p-3">
            Des options de visualisation plus rapide
          </p>
        </div>
        <div
          class="ui w-auto md:w-80 h-72 bg-white rounded overflow-hidden pb-20 mr-4 md:mr-8 flex-initial"
        >
          <img
            src="@/assets/img/projet/laforet/product.png"
            alt="filtre"
            class="w-full h-40 object-cover object-center"
          />
          <p class="font-text text-main text-base mt-3 p-3">
            Une page produit claire et immersive
          </p>
        </div>
      </section>

      <section class="panel next w-full bg-white">
        <nuxt-link to="/projets/spall">
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
