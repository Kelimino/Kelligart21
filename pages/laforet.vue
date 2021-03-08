<template>
  <div id="laforet" class="work">
    <nav><nuxt-link to="projets">Projets</nuxt-link></nav>
    <div class="horizontal">
      <section class="intro">
        <h1>Laforêt</h1>
        <p>Site immobilier</p>
      </section>
      <section class="scope">
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

      <section class="methode">
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
      <section class="feeback">
        <h2>Un projet d'équipe passionant</h2>
        <p>Retour sur le projet</p>
      </section>

      <section class="screen">
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

      <section class="next">
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
    let container = document.querySelector(".horizontal");
    gsap.to(container, {
      x: () => -(container.offsetWidth - innerWidth),
      ease: "none",
      scrollTrigger: {
        trigger: "#laforet",
        start: "top top",
        pin: true,
        invalidateOnRefresh: true,
        scrub: 1,
        end: () => "+=" + (container.offsetWidth - innerWidth)
      }
    });
  }
};
</script>
