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
    <section class="service-footer">
      <p>Quelques exemples d'étude de cas pour comprendre mon approche et connaitre ma méthode</p>
      <nuxt-link to="projets" class="btnMain"
        ><span>Découvrez mes projets</span></nuxt-link
      >
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
            v-for="(poster, index) in graphisme3"
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
          path: require("@/assets/img/tiles/poster3.png")
        },
        {
          path: require("@/assets/img/tiles/poster2.jpg")
        },
        {
          path: require("@/assets/img/tiles/poster1.jpg")
        },
        {
          path: require("@/assets/img/tiles/poster4.jpg")
        }
      ],
      graphisme2: [
        {
          path: require("@/assets/img/tiles/poster7.png")
        },

        {
          path: require("@/assets/img/tiles/poster8.png")
        },

        {
          path: require("@/assets/img/tiles/poster5.png")
        },
        {
          path: require("@/assets/img/tiles/poster6.png")
        },
        {
          path: require("@/assets/img/tiles/mural1.jpeg")
        },
        {
          path: require("@/assets/img/tiles/poster9.png")
        }
      ],
      graphisme3: [
        {
          path: require("@/assets/img/tiles/poster1.jpg")
        },
        {
          path: require("@/assets/img/tiles/poster4.jpg")
        },
        {
          path: require("@/assets/img/tiles/mural2.jpeg")
        },
        {
          path: require("@/assets/img/tiles/poster6.png")
        }
      ],
      web: [
        {
          path: require("@/assets/img/tiles/web6.png")
        },
        {
          path: require("@/assets/img/tiles/web5.png")
        },
        {
          path: require("@/assets/img/tiles/web1.png")
        },
        {
          path: require("@/assets/img/tiles/web3.png")
        },
        {
          path: require("@/assets/img/tiles/web7.png")
        },
        {
          path: require("@/assets/img/tiles/web8.png")
        },
        {
          path: require("@/assets/img/tiles/web9.png")
        },
        {
          path: require("@/assets/img/tiles/web10.png")
        },
        {
          path: require("@/assets/img/tiles/web11.png")
        },
        {
          path: require("@/assets/img/tiles/web12.png")
        },
        {
          path: require("@/assets/img/tiles/web13.jpg")
        }
      ],
      web2: [
        {
          path: require("@/assets/img/tiles/web2.jpg")
        },
        {
          path: require("@/assets/img/tiles/web4.png")
        },
        {
          path: require("@/assets/img/tiles/web1.png")
        },
        {
          path: require("@/assets/img/tiles/web14.jpg")
        },
        {
          path: require("@/assets/img/tiles/web15.jpg")
        },
        {
          path: require("@/assets/img/tiles/web16.png")
        }
      ],

      expertise: [
        {
          name: "Direction Artistique",
          span:
            "Branding - Charte graphique - Logo - Identité de marque - Campagne marketing - Lancement de produit",
          class: "DA",
          // picture: require("@/assets/img/tiles/kellig.jpg"),
          description:
            "Prendre des idées afin de les matérialiser en véritable positionnement de marque, une image désirable avec un message mémorable"
        },
        {
          name: "Expérience Utilisateur",
          span:
            "Design thinking - Ateliers de coconception - Design sprint - Interview - Ergonomie Web - Persona",
          class: "UX",
          // picture: require("@/assets/img/tiles/kellig.jpg"),
          description:
            "L’intelligence collective pour comprendre & optimiser l’expérience de vos utilisateurs à travers des ateliers, selon des methodes et process choisis"
        },
        {
          name: "Design d'Interfaces",
          span:
            "Catalogue - Ecommerce - Logiciel - Application - Site évènementiel - Webdesign - Maquettes - Prototypes intéractifs",
          class: "UI",
          // picture: require("@/assets/img/tiles/kellig.jpg"),
          description:
            "Concevoir & décliner des interfaces digitales cohérentes selon des codes graphiques & des règles fonctionnelles définies"
        },
        {
          name: "Communication Visuelle",
          span:
            "Graphisme - Illustration - Stationnary - Pao - Réseaux sociaux - Motion Design",
          class: "CV",
          // picture: require("@/assets/img/tiles/kellig.jpg"),
          description:
            "Valoriser et communiquer votre identité de marque sur différentes plateformes et supports"
        },

        {
          name: "Développement Front",
          span:
            "Framework - Animation - Intéraction - Site Vitrine - Responsive",
          class: "DF",
          // picture: require("@/assets/img/tiles/kellig.jpg"),
          description:
            "Développer les interfaces de votre projet, créer une expérience intéractive et immersive, tout en veillant à sa performance technique"
        }
      ]
    };
  },

  methods: {
  },
  mounted() {
    gsap
      .timeline({ repeat: -1, yoyo: true })
      .to(".backlist .graphisme", {
        y: "30%",
        duration: 20
      })
      .to(
        ".backlist .web",
        {
          y: "-10%",
          duration: 20
        },
        "<"
      );

    gsap
      .timeline({})
      .set("h1 span", { y: 100 })
      .to(".One", {
        autoAlpha: 1,
        y: 0,
        duration: 0.6,
        color: "#F0EFEC",
        ease: "power3.out"
      })
      .to(".One", { y: -100, color: "transparent", autoAlpha: 0 }, "+=0.5")
      .to(".Two", {
        autoAlpha: 1,
        y: 0,
        duration: 0.6,
        color: "#F0EFEC",
        ease: "power3.out"
      })
      .to(".Two", { y: -100, color: "transparent", autoAlpha: 0 }, "+=0.5")
      .to(".Three", {
        autoAlpha: 1,
        y: 0,
        duration: 0.6,
        color: "#F0EFEC",
        ease: "power3.out"
      })
      .to(".Three", { y: -100, color: "transparent", autoAlpha: 0 }, "+=0.5")
      .to(".intro h1", { display: "none" })
      .to(".intro p", { autoAlpha: 0, y: -10 }, "-=1")
      .to(".intro", { height: "0%", ease: "power4.out", duration: 1 }, "-=0.5")
      .to(".about-link", { color: " #FFF " });

  gsap
      .timeline({
        scrollTrigger: {
          trigger: ".expertise .DF",
          start: "bottom bottom",
          toggleActions: "restart none none reset"
        }
      })
      .to(".expertise", { y: "-400px", duration: 1.5, ease: "power4.out" });
  }
};
</script>
