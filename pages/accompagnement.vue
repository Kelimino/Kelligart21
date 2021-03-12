<template>
  <div id="accompagnement" class="h-screen">
    <section
      class="couverture w-8/12 mx-auto h-full flex flex-col text-center justify-center items-center"
    >
      <transition appear mode="out-in" @enter="enterTitle()">
        <h1 class="font-title flex flex-col">
          <span class="Nst font-text text-primary text-7xl font-light italic"
            >Nous sommes tous</span
          ><span
            class="Dsg transform translate-y-0 font-title text-primary text-12xl font-extrabold mt-6 uppercase"
            >Designers
          </span>
        </h1>
      </transition>
      <transition appear mode="out-in" @enter="enterText()">
        <p class="font-text text-main text-base mt-6">
          Je vous accompagne dans cette aventure collective et créative
        </p>
      </transition>
    </section>

    <div class="story h-full">
      <section
        v-for="(story, index) in stories"
        :key="index"
        class="h-full"
        :class="story.class"
      >
        <div class="page-wrapper grid grid-cols-2 h-5/6">
          <div
            class="page illustration border border-solid border-primary border-opacity-30 flex justify-center items-center relative"
          >
            <div class="imgwrap w-1/2 h-2/3 mx-auto relative">
              <img
                :src="story.path"
                alt="illustration"
                class="absolute  top-0 left-0 object-cover w-full h-full"
              />
            </div>
          </div>
          <div
            class="page chapitre border border-solid border-primary border-opacity-30 flex flex-col justify-center items-start relative p-40 text-left"
          >
            <h2 class="font-title text-primary text-2xl font-bold">
              {{ story.titre }}
            </h2>
            <h4 class="font-text text-main text-base mt-3">
              {{ story.texte }}
            </h4>
          </div>
        </div>

        <div
          class="question border border-solid relative h-1/6 border-primary border-opacity-30 overflow-hidden"
        >
          <h3
            class="font-text text-primary transform uppercase text-6xl font-light italic"
          >
            {{ story.question }}
          </h3>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
// import locomotive from "~/mixins/locomotive.js";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default {
  // mixins: [locomotive],
  scrollToTop: true,

  data() {
    return {
      stories: [
        {
          titre: "Synopsis",
          class: "synopsis",
          texte:
            "Tout commence par une histoire où l’utilisateur en est le principal protagoniste dans un univers où son expérience est le fil conducteur de votre scénario",
          path: require("@/assets/animation/test.gif"),
          question: "Qui est votre héros ?"
        },
        {
          titre: "Univers",
          class: "univers",
          texte:
            "Dans votre univers, il va découvrir un nouveau monde à appréhender. L'aimera t-il ?",
          path: require("@/assets/img/projet-back.png"),
          question: "À quoi ressemble votre univers ?"
        },
        {
          titre: "Déclenchement",
          class: "declenchement",
          texte:
            "Le héros débarque dans votre monde avec des attentes, motivé à poursuivre sa quête",
          path: require("@/assets/img/projet-back.png"),
          question: "Pourquoi est-il là ?"
        },
        {
          titre: "Aventure",
          class: "aventure",
          texte:
            "Son aventure séquentielle, va le mener sur différentes étapes. Un parcours itératif qu'il va naviguer. Surmonter des obstacles, trouver des opportuntiés pour s'orienter et réussir son but",
          path: require("@/assets/img/projet-back.png"),
          question: "Que recherche t'il ?"
        },
        {
          titre: "Dénouement",
          class: "denouement",
          texte:
            "Une fois la mission accomplie ou même en cas d'échec, le héros en sortira grandit, reviendra t-il ?",
          path: require("@/assets/img/projet-back.png"),
          question: "Quelle est son expérience finale ?"
        }
      ]
    };
  },

  //
  mounted() {
    // gsap.utils.toArray(".panel").forEach(function(el) {
    let text = document.querySelector(".Dsg");
    text.innerHTML = text.textContent.replace(/\S/g, "<span>$&</span>");

    let pages = document.querySelectorAll(".page");

    Array.from(pages).forEach(function(page) {
      const Number = document.createElement("span");
      page.appendChild(Number);
      Number.textContent = "00";
      Array.from(Number).forEach(function(Nb, i) {
        for (i = 0; i < Nb.lenght; i++);
      });
    });
  },

  methods: {
    enterTitle: function() {
      this.$nextTick(function() {
        let TGB = gsap.timeline({});
        TGB.from(".Nst", {
          autoAlpha: 0,
          y: -20,
          duration: 1
        }).from(".Dsg span ", {
          autoAlpha: 0,
          color: "#2d344d",
          y: -50,
          duration: 4,
          stagger: {
            each: 0.1,
            from: "center"
          }
        });
      });
    },

    enterText: function() {
      gsap.from("p", { autoAlpha: 0, y: -20, duration: 1, delay: 2 });
    }
  }
};
</script>
