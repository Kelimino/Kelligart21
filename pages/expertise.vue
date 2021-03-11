<template>
  <div id="expertise">
    <section class="expertise grid grid-cols-3">
      <div class=" relative list-expertise  col-span-2">
        <div
          class="expertise-wrapper absolute overflow-auto top-0 left-0 h-full flex flex-col items-end   "
        >
          <section
            class="introexpertise w-5/6 h-5/6 flex flex-col items-start justify-center"
          >
            <p class="font-text text-main text-base">L'esprit</p>
            <h1
              class="font-title text-primary text-6xl font-bold flex flex-col my-6"
            >
              <span class="mb-3">Collectif,</span>
              <span class="mb-3">Analytique,</span>
              <span class="mb-3">Créatif,</span>
            </h1>
            <p class="font-text text-main text-base">
              est l'outil le plus puissant d'un Designer
            </p>
          </section>
          <section
            v-for="(domain, index) in expertise"
            :key="index"
            :class="domain.class"
            class="skill relative w-5/6 mb-40 py-36 border-b border-solid border-primary border-opacity-30 overflow-hidden  "
          >
            <h2 class="font-title text-primary text-6xl font-bold">
              {{ domain.name }}
            </h2>

            <h3 class="font-text text-main text-base mt-3 w-4/5">
              {{ domain.description }}
            </h3>
            <p
              class="font-text text-primary transform uppercase text-6xl italic absolute bottom-5 inline-flex whitespace-nowrap"
            >
              {{ domain.span }}
            </p>
          </section>
        </div>
      </div>
      <div class="back-expertise col-span-1 h-full overflow-hidden">
        <ul class="backlist flex row relative h-screen">
          <li class="w-1/2 mr-2 ">
            <div class="graphisme w-full mb-2 block transform -translate-y-1/4">
              <img
                v-for="(poster, index) in graphisme"
                :key="index"
                class=" w-full mb-2 block"
                :src="poster.path"
                alt="poster"
              />
            </div>
          </li>
          <li class="w-1/2 mr-2 ">
            <div class="web w-full mb-2 block transform -translate-y-2/4">
              <img
                v-for="(poster, index) in web"
                :key="index"
                class=" w-full h-auto mb-2 block"
                :src="poster.path"
                alt="poster"
              />
            </div>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
// import locomotive from "~/mixins/locomotive.js";

export default {
  scrollToTop: true,
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
        },
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
            "L’intelligence collective pour comprendre & optimiser l’expérience de vos utilisateurs à travers des ateliers, selon des methodes et des process adaptés"
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
  // mixins: [locomotive],
  head() {
    return {
      title: "Mes services",
      meta: [{ name: "description", content: "Cest ma page de services" }]
    };
  },
  mounted() {
    gsap
      .timeline({ repeat: -1, yoyo: true })
      .to(".backlist .graphisme", {
        y: -50,
        duration: 30,
        ease: "Power2.easeOut"
      })
      .to(
        ".backlist .web",
        {
          y: 50,
          duration: 30,
          ease: "Power2.easeOut"
        },
        "<"
      );
  }
};
</script>
