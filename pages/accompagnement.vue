<template>
  <div id="accompagnement">
    <!--SCROLLBAR LEFT-->
    <div
      class="scrollBar fixed w-0.5 h-10 left-14 top-1/2 bg-primary rounded overflow-hidden"
    ></div>
    <!--COUNTER RIGHT-->
    <div class="counter fixed right-10 top-1/2 text-center w-8">
      <div
        class="text-3xl text-primary font-title font-bold rounded w-full h-10 overflow-hidden"
      >
        <div class="span-wrapper">
          <span></span>
        </div>
      </div>

      <div class="w-full h-0.5 bg-primary opacity-50"></div>
      <p class="text-xl text-primary font-title font-bold mt-2 opacity-50">
        05
      </p>
    </div>
    <!--MAIN TITLE-->
    <section
      class="couverture w-full md:w-8/12 p-6 md:-p-0 mx-auto h-screen flex flex-col text-center justify-center items-center"
    >
      <h1 class="font-title flex flex-col">
        <span
          class="Nst font-text text-primary text-4xl md:text-7xl font-light italic mb-10"
          >Nous sommes tous</span
        ><span
          class="Dsg transform translate-y-0 font-title text-primary text-7xl md:text-12xl font-extrabold mt-6 uppercase"
          >Designers
        </span>
      </h1>
      <p
        class="font-text text-main text-base flex justify-center flex-col mt-10 md:mt-0"
      >
        Je vous accompagne dans cette aventure collective et créative
        <img
          src="@/assets/icons/chair.svg"
          alt="bol de céreales "
          class="h-6 md:ml-3 mt-3"
        />
      </p>
    </section>
    <!--STORY BLOCKS-->
    <div class="story-wrapper w-full overflow-x-hidden">
      <div class="story w-11/12 md:w-4/6 mx-auto">
        <section
          v-for="(story, index) in stories"
          :key="index"
          class="storyblock h-screen"
          :class="story.class"
        >
          <div
            class="page-wrapper grid md:grid-cols-2 h-full md:h-5/6 bg-white"
          >
            <div
              class="page illustration h-full md:h-auto border border-solid border-primary border-opacity-30 flex justify-center items-center relative"
            >
              <div class="imgwrap w-5/6 h-full md:h-5/6 mx-auto relative">
                <img
                  :src="story.path"
                  alt="illustration"
                  class="absolute top-0 left-0 object-contain w-full h-full"
                />
              </div>
            </div>
            <div
              class="page chapitre h-1/2 md:h-full p-10 md:p-20 border border-solid border-primary border-opacity-30 flex flex-col justify-center items-start relative text-left"
            >
              <h2 class="font-title text-primary text-2xl font-bold">
                {{ story.titre }}
              </h2>
              <h4 class="font-text text-main text-base mt-3">
                {{ story.texte }}
                <br /><br />
                <em class="mt-3 text-primary italic">{{ story.span }}</em>
              </h4>
            </div>
          </div>

          <div class="question relative h-1/6 transition-all ease-in-out">
            <h3
              class="absolute inline-flex whitespace-nowrap left-1/2 top-1/2 origin-center transform -translate-x-1/2 -translate-y-1/2 font-text text-primary uppercase text-5xl font-light italic bg-primary bg-opacity-10 p-5"
            >
              {{ story.question }}
            </h3>
          </div>
        </section>
      </div>
    </div>

    <div>
      <h2
        class="ensemble text-4xl font-title text-primary w-5/6 md:w-4/6 my-40 text-center mx-auto"
      >
        Ensemble, grâce à l'intelligence collective et avec des méthodes
        adaptées, on va pouvoir co-concevoir votre histoire
      </h2>
    </div>
    <!--BLUE BOARD-->
    <section class="board h-screen flex justify-center items-center">
      <div class="board-wrapper relative w-full h-full">
        <div
          class="laptop absolute w-11/12 md:w-2/3 h-2/3 top-1/2 left-1/2 p-2 transform -translate-x-1/2 -translate-y-1/2 bg-primary rounded-md"
        >
          <div
            class="screen w-full h-full flex flex-col justify-around items-center bg-white overflow-hidden"
          >
            <img
              src="@/assets/img/boardBack.png"
              alt="board-back"
              class="absolute top-0 left-0 w-full h-full object-cover object-center opacity-50 p-5"
            />
            <div class="method grid grid-cols-2 w-full">
              <ul class="research flex flex-col justify-start items-start ml-5">
                <li
                  class="bg-yellow-200 p-3 mb-3 w-60 flex flex-col justify-start items-start rounded-sm"
                >
                  <h3 class="font-title text-primary text-xl font-bold">
                    Connaître
                  </h3>
                  <p class="font-text text-main text-base">
                    Définir le périmètre du projet
                  </p>
                </li>
                <li
                  class="bg-yellow-200 p-3 mb-3 w-60 flex flex-col justify-start items-start rounded-sm"
                >
                  <h3 class="font-title text-primary text-xl font-bold">
                    Comprendre
                  </h3>
                  <p class="font-text text-main text-base">
                    Expliquer l’enjeux du projet
                  </p>
                </li>
                <li
                  class="bg-yellow-200 p-3 mb-3 w-60 flex flex-col justify-start items-start rounded-sm"
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
                  class="bg-yellow-200 p-3 mb-3 w-60 flex flex-col justify-start items-start rounded-sm"
                >
                  <h3 class="font-title text-primary text-xl font-bold">
                    Identifier
                  </h3>
                  <p class="font-text text-main text-base">
                    Poser les problématiques à résoudre
                  </p>
                </li>
                <li
                  class="bg-yellow-200 p-3 mb-3 w-60 flex flex-col justify-start items-start rounded-sm"
                >
                  <h3 class="font-title text-primary text-xl font-bold">
                    Créer
                  </h3>
                  <p class="font-text text-main text-base">
                    Inventer et concevoir des solutions
                  </p>
                </li>
                <li
                  class="bg-yellow-200 p-3 mb-3 w-60 flex flex-col justify-start items-start rounded-sm"
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
      </div>
    </section>
    <!--FOOTER-->
    <section class="h-footer box-border overflow-hidden">
      <nuxt-link
        to="/expertise"
        class="expertise-link link h-1/2 mt-28 mx-0 relative flex flex-col justify-center box-border"
      >
        <h2 class="text-primary font-bold font-title text-8xl text-center">
          Expertise
        </h2>
      </nuxt-link>
      <div class="cereal flex flex-row whitespace-nowrap mb-20"></div>
    </section>
    <Footer />
  </div>
</template>

<script>
import Footer from "/components/footer";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default {
  name: "Accompagnement",
  scrollToTop: true,
  componenets: {
    Footer
  },
  transition: {
    mode: "out-in",
    css: false,
    beforeEnter() {
      console.log("beforeEnterAccompagnement");
    },
    //TITLE ANIMATION INTRO
    enter(el, done) {
      let text = document.querySelector(".Dsg");
      text.innerHTML = text.textContent.replace(/\S/g, "<span>$&</span>");

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

      done();
    },
    leave(el, done) {
      done();
    }
  },

  data() {
    return {
      //STORY BLOCKS
      stories: [
        {
          titre: "Synopsis",
          class: "synopsis",
          texte:
            "Tout commence par une histoire où l’utilisateur en est le principal protagoniste dans un univers où son expérience est le fil conducteur de votre scénario.",
          span:
            "Une équipe pluridisciplinaire rénuie pour réaliser cette chronique",
          path: require("@/assets/animation/synopsis.png"),
          question: "Qui est votre héros ?"
        },
        {
          titre: "Univers",
          class: "univers",
          texte:
            "Un monde nouveau qu'il va découvrir et appréhender avec une certaine supposition, basée sur ses expériences passées. ",
          span:
            "Votre univers est le reflet de votre raison d'être. L'aimera t-il ?",
          path: require("@/assets/animation/univers.png"),
          question: "À quoi ressemble votre univers ?"
        },
        {
          titre: "Déclenchement",
          class: "declenchement",
          texte:
            "Le héros arrive avec une quête à accomplir, une idée en tête, une attente singulière émanant d'un problème à résoudre.  ",
          span:
            "Votre offre doit correspondre à la réponse à ses besoins et ses attentes",
          path: require("@/assets/animation/declenchement.png"),
          question: "Pourquoi est-il là ?"
        },
        {
          titre: "Aventure",
          class: "aventure",
          texte:
            "Une aventure séquentielle, un parcours itératif qui va le mener sur différentes étapes. Surmonter des obstacles, trouver des opportuntiés pour s'orienter et réussir ses objectifs.",
          span:
            "La réussite de sa mission est étroitement liée à la pertinence de vos actions",
          path: require("@/assets/animation/aventure.png"),
          question: "Que recherche t'il ?"
        },
        {
          titre: "Dénouement",
          class: "denouement",
          texte:
            "Une fois la mission accomplie ou même en cas d'échec, le héros en sortira grandit, différent, avec un sentiment basé sur son ressenti",
          span:
            "Son expérience est le résultat de votre rencontre. Reviendra t-il ?",
          path: require("@/assets/animation/denouement.png"),
          question: "Quelle est son expérience finale ?"
        }
      ]
    };
  },
  head() {
    return {
      //HEADER TITLE
      titleTemplate: " %s - Accompagnement",
      meta: [
        {
          name: "Accompagnement",
          content:
            "Tout commence par une histoire où l’utilisateur en est le principal protagoniste dans un univers où son expérience est le fil conducteur de votre scénario"
        }
      ]
    };
  },
  mounted() {
    //FOOTER BANNER CEREAL
    function addImg() {
      const cereal = document.querySelector(".cereal");

      const count = 50;
      for (let i = 0; i < count; i++) {
        const imgFlake = document.createElement("IMG");
        imgFlake.src = require("~/assets/icons/flake.png");
        imgFlake.style.width = "40px";
        var spin = Math.round(Math.random() * 180);
        imgFlake.style.transform = "rotate(" + spin + "deg)";
        cereal.appendChild(imgFlake);
      }
    }
    addImg();

    // EACH QUESTION HORIZONTAL SCROLL
    let pageWidth = document.querySelector(".page").offsetWidth;
    gsap.utils.toArray(".page").forEach(el => {
      let Qa = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          start: "80% center",
          scrub: true,
          toggleActions: "play restart play reset"
        }
      });
      Qa.from(".question h3", {
        x: function(index, target) {
          return pageWidth + target.offsetWidth;
        }
      })
        .to(".question h3", {
          x: function(index, target) {
            return -pageWidth - target.offsetWidth;
          },
          duration: 30
        })
        .to(el, {
          autoAlpha: 0
        }),
        "<";
    });

    // COUNTER ANIMATION
    const counter = document.querySelector(".counter span");
    const allChapitre = document.querySelectorAll(".chapitre");
    gsap.utils.toArray(allChapitre).forEach((el, index) => {
      ScrollTrigger.create({
        trigger: el,
        start: "top 50%",
        end: "bottom 50%",
        scrub: true,
        onEnter: function() {
          counter.textContent = "0" + (index + 1);
          tweenCounter();
        },
        onEnterBack: function() {
          counter.textContent = "0" + (index + 1);
          tweenCounter();
        }
      });
    });
    function tweenCounter() {
      gsap.from(counter, { y: -25, autoAlpha: 0 });
    }

    // ADD NUMBER PAGINATION TO EACH PAGE SPAN
    const pages = document.querySelectorAll(".page");
    Array.from(pages).forEach((page, index) => {
      const numberNode = document.createElement("span");
      numberNode.textContent = index + 1;
      page.appendChild(numberNode);
    });

    // BLUE BOARD ANIMATION
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
      .to(".laptop", {
        width: "100%",
        height: "100%",
        duration: 1,
        borderRadius: 0
      })
      .from(
        ".screen img",
        {
          autoAlpha: 0,
          duration: 0.2,
          ease: "Power2.easeIn"
        },
        "<"
      )
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
      )
      .to(".board", { background: "transparent" });

    //TITLE ANIMATION BEFORE BLUE BOARD
    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".ensemble",
        start: "top 70%",
        toggleActions: "play none reverse reset"
      }
    });
    tl2
      .from(".ensemble", { y: 40, autoAlpha: 0, skewY: "6deg", duration: 2 })
      .to(".counter", { autoAlpha: 0 }, "<")
      .to(".scrollBar", { autoAlpha: 0 }, "<");
  }
};
</script>
