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
      <section v-for="(story, index) in stories" :key="index" class="h-full">
        <div class="pages grid grid-cols-2 h-5/6">
          <div
            class="illustration border border-solid border-primary border-opacity-30 flex justify-center items-center relative"
          >
            <p
              class="absolute top-5 left-5 font-title text-primary text-xl font-bold"
            >
              01
            </p>
            <div class="imgwrap w-1/2 h-2/3 mx-auto relative">
              <img
                :src="story.path"
                alt="illustration"
                class="absolute object-cover w-full h-full"
              />
            </div>
          </div>
          <div
            class="chapitre border border-solid border-primary border-opacity-30 flex flex-col justify-center items-start relative p-40 text-left"
          >
            <p
              class="absolute top-5 left-5 font-title text-primary text-xl font-bold"
            >
              02
            </p>
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
      <!-- <section class="intro panel">
        <h1><span>nous sommes tous</span></h1>
        <h2><span>Designers</span></h2>
        <p>Je vous accompagne dans cette aventure collective et créative</p>
      </section>

      <section class="synopsis panel">
        <div class="img-wrap">
          <img src="~/assets/img/story1.jpg" alt="img " />
        </div>
        <h5>01</h5>
        <h4>Synopsis</h4>
        <h3>
          Tout commence par une histoire où l’utilisateur en est le principal
          protagoniste, dans un univers où son expérience est le fil conducteur
          de votre scénario
        </h3>
        <p class="question">Qui est votre héros ?</p>
      </section>
      <section class="univers panel">
        <div class="img-wrap">
          <img src="~/assets/img/story2.jpg" alt="img " />
        </div>
        <h5>02</h5>
        <h4>Univers</h4>
        <h3>
          Dans votre univers, il va découvrir un nouveau monde à appréhender.
          L'aimera t-il ?
        </h3>
        <p class="question">À quoi ressemble votre univers ?</p>
      </section>
      <section class="declenchement panel">
        <div class="img-wrap">
          <img src="~/assets/img/story3.jpg" alt="img " />
        </div>
        <h5>03</h5>
        <h4>Déclenchement</h4>
        <h3>
          Le héros débarque dans votre monde avec des attentes, motivé à
          poursuivre sa quête
        </h3>
        <p class="question">Pourquoi le héros arrive t-il dans votre monde ?</p>
      </section>
      <section class="aventure panel">
        <div class="img-wrap">
          <img src="~/assets/img/story5.jpg" alt="img " />
        </div>
        <h5>04</h5>
        <h4>Aventure</h4>
        <h3>
          Son aventure séquentielle, va le mener sur différentes étapes. Un
          parcours itératif qu'il va naviguer. Surmonter des obstacles, trouver
          des opportuntiés pour s'orienter et réussir son but
        </h3>
        <p class="question">Quel sera son parcours, que recherche t'il ?</p>
      </section>
      <section class="denouement panel">
        <div class="img-wrap">
          <img src="~/assets/img/story4.jpg" alt="img " />
        </div>
        <h5>05</h5>
        <h4>Dénouement</h4>
        <h3>
          Une fois la mission accomplie ou même en cas d'échec, le héros en
          sortira grandit, reviendra t-il ?
        </h3>
        <p class="question">Quelle est son expérience finale ?</p>
      </section> -->
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
          texte:
            "Tout commence par une histoire où l’utilisateur en est le principal protagoniste dans un univers où son expérience est le fil conducteur de votre scénario",
          path: require("@/assets/img/projet-back.png"),
          question: "Qui est votre héros ?"
        },
        {
          titre: "Univers",
          texte:
            "Dans votre univers, il va découvrir un nouveau monde à appréhender. L'aimera t-il ?",
          path: require("@/assets/img/projet-back.png"),
          question: "À quoi ressemble votre univers ?"
        }
      ]
    };
  },

  //
  mounted() {
    // gsap.utils.toArray(".panel").forEach(function(el) {
    let text = document.querySelector(".Dsg");
    text.innerHTML = text.textContent.replace(/\S/g, "<span>$&</span>");
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
