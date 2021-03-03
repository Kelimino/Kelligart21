<template>
  <div>
    <div id="accompagnement" data-scroll-container class="smooth-scroll">
      <section class="end">
        <p>
          Un ensemble d'expertises pour que vous puissez identifier vos besoins
        </p>
        <nuxt-link to="services" class="btnMain"
          ><span>Découvrez mes expertises</span></nuxt-link
        >
      </section>

      <div class="story">
        <section class="intro panel">
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
            protagoniste, dans un univers où son expérience est le fil
            conducteur de votre scénario
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
          <p class="question">
            Pourquoi le héros arrive t-il dans votre monde ?
          </p>
        </section>
        <section class="aventure panel">
          <div class="img-wrap">
            <img src="~/assets/img/story5.jpg" alt="img " />
          </div>
          <h5>04</h5>
          <h4>Aventure</h4>
          <h3>
            Son aventure séquentielle, va le mener sur différentes étapes. Un
            parcours itératif qu'il va naviguer. Surmonter des obstacles,
            trouver des opportuntiés pour s'orienter et réussir son but
          </h3>
          <p class="question">Quel sera son parcours, que recherche t'il ?</p>
        </section>
        <section
          class="denouement panel"
          data-scroll
          data-scroll-call="triggerEnd()"
        >
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
        </section>
      </div>
      <div class="titlePin">Nous sommes tous <span>Designers</span></div>
    </div>
  </div>
</template>

<script>
import {smoothScroll} from "~/mixins/smoothScroll.js";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default {
  mixins: [ smoothScroll],
  mounted() {

    gsap.utils.toArray(".panel").forEach(function(el) {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: el,
            scroller: ".smooth-scroll",
            start: "20% center",
            end: "bottom center",
            toggleActions: "restart none none reset",
            scrub: true
          }
        })
        .set(".panel .question", { autoAlpha: 0 })
        .from(el, { autoAlpha: 0, scale: 0.8 })
        .from(".panel h3", { autoAlpha: 0, y: 50, duration: 0.6 })
        .to(".panel h3", { autoAlpha: 1, y: 0, duration: 3 })
        .fromTo(
          ".img-wrap",
          { y: 50 },
          { y: -50, duration: 30, autoAlpha: 1, ease: "power4.inOut" },
          "<"
        )
        .fromTo(
          ".img-wrap img",
          { y: 70 },
          { y: -100, duration: 30, autoAlpha: 0.5, ease: "power4.inOut" },
          "<"
        )

        .to(".panel h3", {
          autoAlpha: 0,
          y: 0,
          duration: 3,
          ease: "power4.inOut"
        })
        .to(
          ".img-wrap",
          { autoAlpha: 0, duration: 3, ease: "power4.inOut" },
          "<"
        )
        .fromTo(
          ".panel .question",
          { autoAlpha: 0, y: 20 },
          { autoAlpha: 1, y: 20, ease: "power4.inOut" },
          "<"
        );
    });

    this.titleEffect = gsap
      .timeline({
        delay: 3
      })
      .to(".about-link ", { color: "#0D1317" })
      .from(".intro h1 span ", { y: "2em" })
      .from(".intro h2 span ", { y: "2em" }, "<")
      .fromTo(".intro p ", { autoAlpha: 0 }, { autoAlpha: 1 });

    this.tl2 = gsap
      .timeline({
        scrollTrigger: {
          trigger: ".synopsis",
          scroller: ".smooth-scroll",
          start: "top bottom",
          toggleActions: "restart none none reset",
          scrub: true
        }
      })
      .to(".titlePin", { autoAlpha: 0.1 })
      .to(".about-link ", { color: "#FFF" }, "<");

    this.endTl = gsap
      .timeline({
        scrollTrigger: {
          trigger: ".end",
          scroller: ".smooth-scroll",
          start: "top center",
          toggleActions: "restart reset resume reset"
        }
      })
      .to(".end", { autoAlpha: 1, scale: 1, duration: 0.2 });

    this.endAnim = gsap
      .timeline({
        scrollTrigger: {
          trigger: ".denouement",
          scroller: ".smooth-scroll",
          start: "bottom bottom ",
          toggleActions: "play none none reset",
          markers: true
        }
      })
      .set(".denouement", { paddingBottom: "7em" })
      .to(".story", { y: "-400px", duration: 1.5, ease: "power4.out" })
      .to(".titlePin", { autoAlpha: 0 }, "<");
  }
};
</script>
