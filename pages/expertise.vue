<template>
  <div id="expertise">
    <div
      class="back-expertise fixed h-screen top-0 right-0 w-2/6 col-span-1 overflow-hidden opacity-50 md:opacity-100"
    >
      <div class="back-wrapper">
        <ul class="backlist flex row">
          <li class="w-1/2 mr-2">
            <div
              class="graphisme w-full mb-2 block transform origin-top -translate-y-3/4"
            >
              <img
                v-for="(poster, index) in graphisme"
                :key="index"
                class="w-full mb-2 block"
                :src="poster.path"
                alt="poster"
              />
            </div>
          </li>
          <li class="w-1/2 mr-2">
            <div class="web w-full mb-2 block">
              <img
                v-for="(poster, index) in web"
                :key="index"
                class="w-full h-auto mb-2 block"
                :src="poster.path"
                alt="poster"
              />
            </div>
          </li>
        </ul>
      </div>
    </div>
    <section class="expertise grid grid-cols-3">
      <div class="list-expertise col-span-2 pb-20">
        <div class="list-wrapper flex flex-col items-end">
          <section
            class="introexpertise w-full md:w-5/6 pl-5 md:pl-0 min-h-full h-screen flex flex-col items-start justify-center"
          >
            <p class="p-first font-text text-main text-base">L'esprit</p>
            <h1
              class="font-title text-primary text-6xl font-bold flex flex-col my-6"
            >
              <span class="mb-3">Collectif</span>
              <span class="mb-3">Analytique</span>
              <span class="mb-3">Créatif</span>
            </h1>
            <p class="p-second outil font-text text-main text-base flex">
              est l'outil le plus puissant d'un Designer
              <img
                src="@/assets/icons/brain.svg"
                alt="bol de céreales "
                class="h-6 ml-3"
              />
            </p>
          </section>
          <section
            v-for="(domain, index) in expertise"
            :key="index"
            :class="domain.class"
            class="skill relative w-full pl-5 md:pl-0 md:w-5/6 min-h-60% mb-20 py-36 border-b border-solid border-primary border-opacity-30 overflow-hidden"
          >
            <h2 class="font-title text-primary text-4xl md:text-6xl font-bold">
              {{ domain.name }}
            </h2>

            <h3 class="font-text text-main text-base mt-3 w-5/6 md:w-3/5">
              {{ domain.description }}
            </h3>
            <p
              class="font-text text-primary transform uppercase text-2xl md:text-6xl font-light italic absolute bottom-5 inline-flex whitespace-nowrap"
            >
              {{ domain.span }}
            </p>
          </section>
        </div>
      </div>
    </section>
    <section class="h-footer z-40 box-border overflow-hidden">
      <nuxt-link
        to="/projets"
        class="projets-link link h-1/2 mt-28 mx-0 relative flex flex-col justify-center box-border"
      >
        <h2 class="text-primary text-6xl font-title text-center mb-5">
          Découvrez mes projets
        </h2>
        <h3
          class="text-primary text-3xl inline-flex font-text mt-10 uppercase italic whitespace-nowrap"
        >
          Webdesign - Graphisme - UX Design - Branding - Set Design - Logos -
          Peinture - Poster
        </h3>
      </nuxt-link>
    </section>
    <div class="lotties">
      <div v-for="(lottie, index) in lotties" :key="index">
        {{ index }}
        <lottie
          :class="lottie.class"
          :options="lottie.animationData"
          @:animCreated="handleAnimation"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import lottie from "vue-lottie/src/lottie.vue";
import * as ux from "assets/animation/UX.json";
import * as ui from "assets/animation/Ui.json";

export default {
  name: "Expertise",
  components: {
    lottie
  },
  scrollToTop: true,
  transition: {
    mode: "out-in",
    css: false,
    beforeEnter() {
      console.log("beforeEnterExpertise");
    },
    enter(el, done) {
      //TITLE INTRO ANIMATION
      console.log("enterexpertise");
      let inT = gsap.timeline({ delay: 0.5 });
      inT
        .from(".p-first", {
          y: -20,
          autoAlpha: 0,
          ease: "Power3.easeOut"
        })
        .from(".introexpertise h1 span", {
          autoAlpha: 0,
          y: -20,
          skewX: -10,
          stagger: {
            each: 1
          }
        })
        .from(".p-second", {
          autoAlpha: 0,
          scale: 0.9,
          duration: 1,
          ease: "Power3.easeOut",
          onComplete: done
        });
      done();
    },
    leave(el, done) {
      done();
    }
  },
  data() {
    return {
      lotties: {
        ux: {
          class: "ux",
          animationData: ux.default,
          loop: true,
          autoplay: false
        },
        ui: {
          class: "ui",
          animationData: ui.default,
          loop: true,
          autoplay: false
        }
      },
      graphisme: [
        {
          path: require("@/assets/img/tiles/poster3.png")
        },
        {
          path: require("@/assets/img/tiles/web14.jpg")
        },
        {
          path: require("@/assets/img/tiles/web1.png")
        },
        {
          path: require("@/assets/img/tiles/poster2.jpg")
        },
        {
          path: require("@/assets/img/tiles/web2.jpg")
        },
        {
          path: require("@/assets/img/tiles/poster1.jpg")
        },

        {
          path: require("@/assets/img/tiles/web3.png")
        },

        {
          path: require("@/assets/img/tiles/poster4.jpg")
        },
        {
          path: require("@/assets/img/tiles/web12.png")
        },
        {
          path: require("@/assets/img/tiles/mural1.jpeg")
        },
        {
          path: require("@/assets/img/tiles/web5.png")
        },
        {
          path: require("@/assets/img/tiles/web6.png")
        },
        {
          path: require("@/assets/img/tiles/poster5.png")
        }
      ],
      web: [
        {
          path: require("@/assets/img/tiles/web7.png")
        },
        {
          path: require("@/assets/img/tiles/poster6.png")
        },
        {
          path: require("@/assets/img/tiles/web8.png")
        },
        {
          path: require("@/assets/img/tiles/poster7.png")
        },
        {
          path: require("@/assets/img/tiles/web9.png")
        },
        {
          path: require("@/assets/img/tiles/poster8.png")
        },
        {
          path: require("@/assets/img/tiles/web10.png")
        },
        {
          path: require("@/assets/img/tiles/poster9.png")
        },
        {
          path: require("@/assets/img/tiles/web11.png")
        },
        {
          path: require("@/assets/img/tiles/mural2.jpeg")
        },
        {
          path: require("@/assets/img/tiles/web4.png")
        },
        {
          path: require("@/assets/img/tiles/web13.jpg")
        }
      ],

      expertise: [
        {
          name: "Direction Artistique",
          span:
            "Branding - Charte graphique - Logo - Identité de marque - Campagne marketing - Lancement de produit",
          class: "DA",
          description:
            "Prendre des idées afin de les matérialiser en véritable positionnement de marque, une image désirable avec un message mémorable"
        },
        {
          name: "Expérience Utilisateur",
          span:
            "Design thinking - Ateliers de coconception - Design sprint - Interview - Ergonomie Web - Persona",
          class: "UX",
          description:
            "L’intelligence collective pour comprendre & optimiser l’expérience de vos utilisateurs à travers des ateliers, selon des methodes et des process adaptés"
        },
        {
          name: "Design d'Interfaces",
          span:
            "Catalogue - Ecommerce - Logiciel - Application - Site évènementiel - Webdesign - Maquettes - Prototypes intéractifs",
          class: "UI",
          description:
            "Concevoir & décliner des interfaces digitales cohérentes selon des codes graphiques & des règles fonctionnelles définies"
        },
        {
          name: "Communication Visuelle",
          span:
            "Graphisme - Illustration - Supports marketing - Publicité - Pao - Réseaux sociaux - Motion Design",
          class: "CV",
          description:
            "Valoriser et communiquer votre identité de marque sur différentes plateformes et supports"
        },

        {
          name: "Développement Front",
          span:
            "Framework - Animation - Intéraction - Site Vitrine - Responsive",
          class: "DF",
          description:
            "Développer les interfaces de votre projet, créer une expérience intéractive et immersive, tout en veillant à sa performance technique"
        }
      ]
    };
  },
  head() {
    return {
      titleTemplate: "%s - Expertise",
      meta: [
        {
          name: "Expertise",
          content:
            "Direction Artistique, Expérience utilisateur, Design d'interfaces, Communication Visuelle, Développement Front "
        }
      ]
    };
  },
  mounted() {
    //BACK TILE ANIMATION
    let backTile = gsap.timeline({
      repeat: -1,
      yoyo: true,
      onComplete: Done,
      ScrollTrigger: {
        trigger: ".introexpertise",
        start: "top top"
      }
    });
    backTile
      .progress(0)
      .play()
      .to(
        ".graphisme",
        {
          yPercent: 50,
          duration: 120,
          ease: "none"
        },
        "<"
      )
      .to(
        ".web",
        {
          yPercent: -50,
          duration: 120,
          ease: "none"
        },
        "<"
      );
    function Done() {
      backTile.progress(0).pause();
    }
    //LISTE EACH EXPERTISE ILLUSTRATIONS ANIMATION

    gsap.utils.toArray(".skill").forEach(el => {
      let SkillAnim = gsap.timeline({
        scrollTrigger: {
          trigger: el
        }
      });
      SkillAnim.to(el, { autoAlpha: 1 }).add(function() {
        console.log("hey");
      });
    });
  },
  methods: {
    handleAnimation: function(anim) {
      this.anim = anim;
    }
  }
};
</script>
