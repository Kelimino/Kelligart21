<template>
  <transition appear mode="out-in" :css="false" @leave="leaveAccom">
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
          <p class="font-text text-main text-base">
            Je vous accompagne dans cette aventure collective et créative
          </p>
        </transition>
      </section>

      <div class="story">
        <section
          v-for="(story, index) in stories"
          :key="index"
          class=" storyblock h-screen"
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
                  class="absolute top-0 left-0 object-cover w-full h-full"
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
            class="question border border-solid relative h-1/6 border-primary border-opacity-30 overflow-hidden bg-back transition-all ease-in-out"
          >
            <h3
              class=" absolute inline-flex whitespace-nowrap left-1/2 top-1/2 origin-center transform -translate-x-1/2 -translate-y-1/2 font-text text-primary uppercase text-4xl font-light italic"
            >
              {{ story.question }}
            </h3>
          </div>
        </section>
      </div>
      <section class="h-1/2">
        <nuxt-link to="expertise">Expertise</nuxt-link>
      </section>
    </div>
  </transition>
</template>

<script>
// import locomotive from "~/mixins/locomotive.js";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default {
  // mixins: [locomotive],
  name: "Accompagnement",
  scrollToTop: true,

  data() {
    return {
      stories: [
        {
          titre: "Synopsis",
          class: "synopsis",
          texte:
            "Tout commence par une histoire où l’utilisateur en est le principal protagoniste dans un univers où son expérience est le fil conducteur de votre scénario. Une équipe pluridisciplinaire rénuie pour écrire cette chronique",
          path: require("@/assets/animation/synopsis.png"),
          question: "Qui est votre héros ?"
        },
        {
          titre: "Univers",
          class: "univers",
          texte:
            "Un monde nouveau qu'il va découvrir et appréhender avec une certaine supposition, basée sur ses expériences passées. Votre univers est le reflet de votre raison d'être. L'aimera t-il ?",
          path: require("@/assets/animation/univers.png"),
          question: "À quoi ressemble votre univers ?"
        },
        {
          titre: "Déclenchement",
          class: "declenchement",
          texte:
            "Le héros arrive avec une quête à accomplir, une idée en tête, une attente singulière émanant d'un problème à résoudre. La réussite de sa mission est étroitement liée à la pertinence de vos actions. ",
          path: require("@/assets/animation/declenchement.png"),
          question: "Pourquoi est-il là ?"
        },
        {
          titre: "Aventure",
          class: "aventure",
          texte:
            "Son aventure séquentielle va le mener sur différentes étapes. Un parcours itératif qu'il va naviguer. Surmonter des obstacles, trouver des opportuntiés pour s'orienter et réussir ses objectifs.",
          path: require("@/assets/animation/aventure.png"),
          question: "Que recherche t'il ?"
        },
        {
          titre: "Dénouement",
          class: "denouement",
          texte:
            "Une fois la mission accomplie ou même en cas d'échec, le héros en sortira grandit, différent, avec un sentiment basé sur son expérience, reviendra t-il ?",
          path: require("@/assets/animation/denouement.png"),
          question: "Quelle est son expérience finale ?"
        }
      ]
    };
  },

  //
  mounted() {
    gsap.utils.toArray(".page").forEach(el => {
      let Qa = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          start: "80% center",
          scrub: true,
          toggleActions: "play restart play reset"
        }
      });

      Qa.fromTo(".question h3", { x: 1000 }, { x: -1000 });
    });

    let text = document.querySelector(".Dsg");
    text.innerHTML = text.textContent.replace(/\S/g, "<span>$&</span>");

    const pages = document.querySelectorAll(".page");

    Array.from(pages).forEach((page, index) => {
      const numberNode = document.createElement("span");
      numberNode.textContent = index + 1;
      page.appendChild(numberNode);
    });
  },

  methods: {
    leaveAccom: function(el) {
      console.log(el + "Leave accompagnement");
    },
    enterTitle: function() {
      this.$nextTick(function() {
        let Title = document.querySelector(".Dsg");
        let TGB = gsap.timeline({ delay: 0.3 });
        TGB.from(".Nst", {
          autoAlpha: 0,
          y: 10,
          duration: 1
        })
          .from(
            ".Dsg span ",
            {
              autoAlpha: 0,
              color: "#000",
              y: -50,
              duration: 1.5,
              stagger: {
                each: 0.1,
                from: "center"
              }
            },
            "+=0.2"
          )
          .add(function() {
            Title.classList.add("I-anim");
          }, "-=0.5");
      });
    },

    enterText: function() {
      gsap.from("p", { autoAlpha: 0, scale: 0.9, duration: 1, delay: 5 });
    }
  }
};
</script>
