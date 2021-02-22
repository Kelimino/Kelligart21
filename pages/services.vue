<template>
  <div id="service">
    <section class="intro panel">
      <div class="back"></div>
      <p>L'esprit</p>
      <h1>
        <span class="One">Collectif</span>
        <span class="Two">Analytique</span>
        <span class="Three">Créatif</span>
      </h1>
      <p>est l'outil le plus puissant d'un Designer</p>
    </section>
    <section class="expertise">
      <ul>
        <li
          v-for="(domain, index) in expertise"
          :key="index"
          :class="domain.class"
        >
          <h2>{{ domain.name }}</h2>
          <h3>{{ domain.span }}</h3>
          <p>{{ domain.description }}</p>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default {
  head() {
    return {
      title: "Mes services",
      meta: [{ name: "description", content: "Cest ma page de services" }]
    };
  },
  data() {
    return {
      expertise: [
        {
          name: "Art direction",
          span:
            "Art Direction - Art Direction - Art Direction - Art Direction - Art Direction - Art Direction - Art Direction - Art Direction - Art Direction - Art Direction - Art Direction - Art Direction - Art Direction - Art Direction - Art Direction - Art Direction ",
          class: "DA",
          picture: require("@/assets/img/kellig.jpg"),
          description:
            "Prendre une idée & des valeurs pour les matérialiser en véritable positionnement de marque, une image désirable avec un message mémorable"
        },
        {
          name: "Expérience utilisateur",
          span: "Expérience Utilisateur - Expérience Utilisateur - Expérience Utilisateur - Expérience Utilisateur",
          class: "UX",
          picture: require("@/assets/img/kellig.jpg"),
          description:
            "L’intelligence collaborative pour comprendre & optimiser l’expérience de vos utilisateurs"
        },
        {
          name: "Design d'interfaces",
          span: "Design d'interfaces - Design d'interfaces - Design d'interfaces - Design d'interfaces - Design d'interfaces - Design d'interfaces - Design d'interfaces - Design d'interfaces - Design d'interfaces - Design d'interfaces ",
          class: "UI",
          picture: require("@/assets/img/kellig.jpg"),
          description:
            "Concevoir & décliner des interfaces digitale cohérentes selon des codes graphiques & des règles fonctionnelles définies"
        },
        {
          name: "Communication visuelle",
          span: "Communication visuelle - Communication visuelle - Communication visuelle - Communication visuelle - Communication visuelle - Communication visuelle - Communication visuelle - Communication visuelle - Communication visuelle - Communication visuelle ",
          class: "CV",
          picture: require("@/assets/img/kellig.jpg"),
          description:
            "Valoriser et communiquer votre image et message de marque"
        }
      ]
    };
  },

  methods: {},
  mounted() {
    // let expertises = document.querySelectorAll(".expertise ul li");
    // console.log(expertises)

    // expertises.forEach(expertise => {
    //   let titleSpan = expertise.querySelector("h3");
    //   let title = expertise.querySelector("h2");
    //   let description = expertise.querySelector("p");
    //   let animText = gsap
    //     .timeline({paused: true})
    //     animText

    //     .to(title, {
    //       y: -20, autoAlpha:0, duration: 0.6, ease: "power2.inOut"
    //     })
    //     .to(description, {
    //       display:"block"
    //     })
    //     .fromTo(titleSpan ,{x:-500}, {
    //       x: 500, repeat: -1, duration: 10, autoAlpha:1
    //     }, "<")


    //   expertise.addEventListener("mouseenter", function() {
    //     animText.play();
    //     console.log('hey')
    //   });
    //   expertise.addEventListener("mouseleave", function() {
    //     animText.reverse();
    //     console.log('bye')
    //   });
    // });

    this.tlSvc = gsap
      .timeline({ delay: 0.5 })
      .set("h1 span", { y: 100 })
      .to(".One", { autoAlpha: 1, y: 0, duration: 0.6, ease: "power3.out" })
      .to(".One", { y: -100, autoAlpha: 0 }, "+=0.5")
      .to(".Two", { autoAlpha: 1, y: 0, duration: 0.6, ease: "power3.out" })
      .to(".Two", { y: -100, autoAlpha: 0 }, "+=0.5")
      .to(".Three", { autoAlpha: 1, y: 0, duration: 0.6, ease: "power3.out" })
      .to(".Three", { y: -100, autoAlpha: 0 }, "+=0.5")
      .to(".intro h1", { display: "none" })
      .to(".intro p", { autoAlpha: 0, y: -10 }, "-=1")
      .to(
        ".intro",
        { height: "0%", ease: "power4.out", duration: 1 },
        "-=0.5"
      )
      .to(".about-link", { color: " #FFF " });
  }
};
</script>
