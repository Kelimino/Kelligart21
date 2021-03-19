<template>
  <div id="laforet" class="work relative h-screen p-0 m-0">
    <nuxt-link class="fixed top-16 left-32 z-50" to="/projets"
      >Projets</nuxt-link
    >
    <div class="horizontal h-full flex flex-wrap flex-col">
      <section class="intro h-full w-1/2 flex bg-pink-500">
        <h1>Laforêt</h1>
        <p>Site immobilier</p>
      </section>
      <section class="scope h-full w-1/2 flex bg-gray-800">
        <div class="context">
          <ul>
            <li><span>Client</span>Groupe Laforêt</li>
            <li><span>Rôle</span> UX &amp; UI Designer</li>
            <li><span>Date</span> 2019</li>
          </ul>
        </div>
        <div class="enjeux">
          <h2>Un enjeux digital important</h2>
          <p>Description de l'enjeux du projet</p>
        </div>
      </section>

      <section class="methode h-full w-1/2 flex bg-red-800">
        <div class="problème">
          <h2>Un site viellisant</h2>
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
      <section class="feeback h-full w-1/2 flex bg-yellow-700">
        <h2>Un projet d'équipe passionant</h2>
        <p>Retour sur le projet</p>
      </section>

      <section class="screen h-full w-1/2 flex bg-red-200">
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

      <section class="next w-full">
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
  mounted() {
    let sections = gsap.utils.toArray("section");

    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: ".horizontal",
        pin: true,
        scrub: 1,
        snap: 1 / (sections.length - 1),
        end: () => "+=" + document.querySelector(".horizontal").offsetWidth
      }
    });
  }
};
</script>
