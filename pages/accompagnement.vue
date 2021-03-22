<template>
  <transition appear mode="in-out" :css="false" @enter="enterTitle">
    <div id="accompagnement">
      <section
        class="couverture w-8/12 mx-auto h-screen flex flex-col text-center justify-center items-center"
      >
        <h1 class="font-title flex flex-col">
          <span class="Nst font-text text-primary text-7xl font-light italic"
            >Nous sommes tous</span
          ><span
            class="Dsg transform translate-y-0 font-title text-primary text-12xl font-extrabold mt-6 uppercase"
            >Designers
          </span>
        </h1>
        <p class="font-text text-main text-base flex">
          Je vous accompagne dans cette aventure collective et créative
          <img
            src="@/assets/icons/chair.svg"
            alt="bol de céreales "
            class="h-6 ml-3"
          />
        </p>
      </section>

      <div class="story w-4/6 mx-auto">
        <section
          v-for="(story, index) in stories"
          :key="index"
          class="storyblock h-screen"
          :class="story.class"
        >
          <div class="page-wrapper grid grid-cols-2 h-5/6 bg-white">
            <div class="cover bg-primary h-full absolute"></div>
            <div
              class="page illustration border border-solid border-primary border-opacity-30 flex justify-center items-center relative"
            >
              <div class="imgwrap w-5/6 h-5/6 mx-auto relative">
                <img
                  :src="story.path"
                  alt="illustration"
                  class="absolute top-0 left-0 object-contain w-full h-full"
                />
              </div>
            </div>
            <div
              class="page chapitre border border-solid border-primary border-opacity-30 flex flex-col justify-center items-start relative p-20 text-left"
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
            class="question relative h-1/6 overflow-x-visible bg-back transition-all ease-in-out"
          >
            <h3
              class="absolute inline-flex whitespace-nowrap left-1/2 top-1/2 origin-center transform -translate-x-1/2 -translate-y-1/2 font-text text-primary uppercase text-5xl font-light italic"
            >
              {{ story.question }}
            </h3>
          </div>
        </section>
      </div>
      <section class="board h-screen flex justify-center items-center">
        <div class="board-wrapper relative w-full h-full">
          <div
            class="bucket absolute right-44 bottom-24 border-4 border-primary border-solid w-16 h-20 rounded"
          ></div>
          <div
            class="pen absolute right-48 bottom-24 bg-primary border-solid w-2 h-28 rounded transform rotate-6"
          ></div>
          <div
            class="pen absolute right-52 bottom-24 bg-primary border-solid w-2 h-28 rounded transform -rotate-6"
          ></div>
          <div
            class="laptop absolute w-2/3 h-2/3 top-1/2 left-1/2 p-2 transform -translate-x-1/2 -translate-y-1/2 bg-primary rounded-md"
          >
            <div
              class="screen w-full h-full flex flex-col justify-around items-center bg-white bg-opacity-20"
            >
              <h2 class="text-md text-white mb-5">
                Ensemble, grâce à l'intelligence collective et avec des méthodes
                adpatées, on va pouvoir co-concevoir cette histoire
              </h2>
              <div class="method grid grid-cols-3 w-full">
                <div class="brainstorming flex justify-end h-full">
                  <img
                    src="@/assets/animation/brainstorming.png"
                    alt="img brainstorming"
                  />
                </div>
                <ul
                  class="research flex flex-col justify-start items-start ml-5"
                >
                  <li
                    class="bg-back p-3 mb-3 w-60 flex flex-col justify-start items-start rounded-sm"
                  >
                    <h3 class="font-title text-primary text-xl font-bold">
                      Connaître
                    </h3>
                    <p class="font-text text-main text-base">
                      Définir le périmètre du projet
                    </p>
                  </li>
                  <li
                    class="bg-back p-3 mb-3 w-60 flex flex-col justify-start items-start rounded-sm"
                  >
                    <h3 class="font-title text-primary text-xl font-bold">
                      Comprendre
                    </h3>
                    <p class="font-text text-main text-base">
                      Expliquer l’enjeux du projet
                    </p>
                  </li>
                  <li
                    class="bg-back p-3 mb-3 w-60 flex flex-col justify-start items-start rounded-sm"
                  >
                    <h3 class="font-title text-primary text-xl font-bold">
                      Analyser
                    </h3>
                    <p class="font-text text-main text-base">
                      Rechercher et synthétiser les données
                    </p>
                  </li>
                </ul>
                <ul class="create flex flex-col justify-start items-start">
                  <li
                    class="bg-back p-3 mb-3 w-60 flex flex-col justify-start items-start rounded-sm"
                  >
                    <h3 class="font-title text-primary text-xl font-bold">
                      Identifier
                    </h3>
                    <p class="font-text text-main text-base">
                      Poser les problématiques à résoudre
                    </p>
                  </li>
                  <li
                    class="bg-back p-3 mb-3 w-60 flex flex-col justify-start items-start rounded-sm"
                  >
                    <h3 class="font-title text-primary text-xl font-bold">
                      Créer
                    </h3>
                    <p class="font-text text-main text-base">
                      Inventer et concevoir des solutions
                    </p>
                  </li>
                  <li
                    class="bg-back p-3 mb-3 w-60 flex flex-col justify-start items-start rounded-sm"
                  >
                    <h3 class="font-title text-primary text-xl font-bold">
                      Évaluer
                    </h3>
                    <p class="font-text text-main text-base">
                      Tester &amp; décider les concepts
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div
            class="pad absolute w-5/6 h-5 bottom-20 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary rounded-md"
          ></div>
        </div>
      </section>
      <section
        class="h-96 box-border"
        @mouseover="upHere = true"
        @mouseleave="upHere = false"
      >
        <nuxt-link
          to="expertise"
          class="expertise-link h-1/2 mt-28 mx-0 relative flex flex-col justify-center box-border"
        >
          <transition name="fadeImg">
            <img
              v-show="upHere"
              src="@/assets/img/projet-back.png"
              alt="expertise"
              class="absolute top-1/2 left-1/2 w-2/5 transform -translate-x-1/2 -translate-y-1/2 origin-center rounded z-0 opacity-50"
            />
          </transition>
          <h2 class="text-main text-sm text-center mb-5">
            Découvrez mes expertises : domaines &amp; prestations
          </h2>
          <h3
            class="text-primary text-6xl inline-flex font-title mr-5 whitespace-nowrap"
          >
            Direction Artistique - Expérience Utilisateur - Design d'Interfaces
            - Communication Visuelle - Développement Front
          </h3>
        </nuxt-link>
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
      upHere: false,
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
      Qa.fromTo(".question h3", { x: 1500 }, { x: -1500, duration: 6 }).to(el, {
        autoAlpha: 0
      });
    });

    let text = document.querySelector(".Dsg");
    text.innerHTML = text.textContent.replace(/\S/g, "<span>$&</span>");

    const pages = document.querySelectorAll(".page");

    Array.from(pages).forEach((page, index) => {
      const numberNode = document.createElement("span");
      numberNode.textContent = index + 1;
      page.appendChild(numberNode);
    });

    let boardAnim = gsap.timeline({
      scrollTrigger: {
        trigger: ".board",
        pin: ".board",
        scrub: 1,
        start: "top top",
        end: "+=1000"
      }
    });
    boardAnim
      .from(".screen", { autoAlpha: 0, duration: 0.2 })
      .from(".brainstorming ", { autoAlpha: 0, duration: 0.2 }, "+=0.5")
      .from(
        ".research li",
        {
          autoAlpha: 0,
          y: 10,
          stagger: {
            each: 0.5
          }
        },
        "+=0.5"
      )
      .from(
        ".create li",
        {
          autoAlpha: 0,
          y: 10,
          stagger: {
            each: 0.5
          }
        },
        "+=1"
      );
  },

  methods: {
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
          }, "-=0.5")
          .from(
            ".couverture p",
            { autoAlpha: 0, scale: 0.9, duration: 1 },
            "+=1"
          );
      });
    }
  }
};
</script>
