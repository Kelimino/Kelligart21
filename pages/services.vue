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
      <ul class="backlist">
        <li>
          <img
            v-for="(poster, index) in graphisme"
            class="graphisme"
            :key="index"
            :src="poster.path"
            alt="poster"
          />
        </li>
        <li>
          <img
            v-for="(poster, index) in web"
            class="web"
            :key="index"
            :src="poster.path"
            alt="poster"
          />
        </li>
         <li>
          <img
            v-for="(poster, index) in graphisme2"
            class="graphisme"
            :key="index"
            :src="poster.path"
            alt="poster"
          />
        </li>
        <li>
          <img
            v-for="(poster, index) in web2"
            class="web"
            :key="index"
            :src="poster.path"
            alt="poster"
          />
        </li>
        <li>
          <img
            v-for="(poster, index) in graphisme"
            class="graphisme"
            :key="index"
            :src="poster.path"
            alt="poster"
          />
        </li>
      </ul>

      <ul class="list-expertise">
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
      graphisme: [
        {
          path: require("@/assets/img/poster1.jpg")
        },
        {
          path: require("@/assets/img/poster2.jpg")
        },
        {
          path: require("@/assets/img/poster3.png")
        },
        {
          path: require("@/assets/img/poster4.jpg")
        }
      ],
      graphisme2: [

        {
          path: require("@/assets/img/poster5.png")
        },
        {
          path: require("@/assets/img/poster6.png")
        },
                {
          path: require("@/assets/img/poster4.jpg")
        },
        {
          path: require("@/assets/img/poster3.png")
        },
      ],
      web: [
        {
          path: require("@/assets/img/web1.png")
        },
        {
          path: require("@/assets/img/web2.jpg")
        }
      ],
      web2: [
        {
          path: require("@/assets/img/web3.png")
        },
        {
          path: require("@/assets/img/web4.png")
        }
      ],

      expertise: [
        {
          name: "Direction artistique",
          span:
            "Branding - Charte graphique - Logo - Motion design - lancement de produit - Art Direction - Art Direction",
          class: "DA",
          picture: require("@/assets/img/kellig.jpg"),
          description:
            "Prendre une idée & des valeurs pour les matérialiser en véritable positionnement de marque, une image désirable avec un message mémorable"
        },
        {
          name: "Expérience utilisateur",
          span:
            "Design thinking - Ateliers de conception - Design sprint - Interview - Ergonomie Web - Persona",
          class: "UX",
          picture: require("@/assets/img/kellig.jpg"),
          description:
            "L’intelligence collaborative pour comprendre & optimiser l’expérience de vos utilisateurs"
        },
        {
          name: "Design d'interfaces",
          span:
            "Catalogue - Ecommerce - Logiciel - Application - Site évènementiel - Webdesign - Maquettes - Prototypes intéractifs",
          class: "UI",
          picture: require("@/assets/img/kellig.jpg"),
          description:
            "Concevoir & décliner des interfaces digitale cohérentes selon des codes graphiques & des règles fonctionnelles définies"
        },
        {
          name: "Communication visuelle",
          span:
            "Graphisme - Illustration - Stationnary - Pao - Réseaux sociaux",
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
    this.backList = gsap
      .timeline({
        scrollTrigger: {
          trigger: ".list-expertise",
          start: "top top",
          toggleActions: "play none none none"
        }
      })
      .to(".backlist .graphisme", {
        y: "30%", duration:10
      })
      .to(".backlist .web", {
        y: "-30%", duration:10
      }, "<")

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
      .to(".intro", { height: "0%", ease: "power4.out", duration: 1 }, "-=0.5")
      .to(".about-link", { color: " #FFF " });
  }
};
</script>
