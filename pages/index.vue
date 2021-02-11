<template>
  <div class="container">
    <div>
      <!-- <Logo /> -->
      <img src="@/assets/img/logo.png" alt="logo" />
      <!-- function afternoon is a string (data dans array)  -->
      <h3>{{ good("night") }}</h3>
      <label for="input">What is your favorite drink ?</label>
      <input type="text" ref="input" />
      <button @click="refclik">Submit</button>
      <p>Your favorite drink is {{ drink }}</p>
      <h1 class="title">
        {{ presentation() }}
      </h1>
      <!-- juste un crochet car c'est un objet et pas une value  -->
      <div v-bind:class="{ active: active }" @click="clickHello">
        <span>Click on me !</span>
      </div>
      <p>{{ intro }}</p>
      <!-- v-html fait passer une balise html, start est la data -->
      <p v-html="start"></p>
      <!-- vue js sait que le on:clikc appel un code donc pas de ()-->
      <!-- v-on:click = @click -->
      <div class="game">
        <div
          v-bind:style="{ width: ballon + '%', height: ballon + '%' }"
          v-bind:class="{ ballon, done: end }"
        ></div>
        <div class="air">
          <div v-bind:style="{ width: grow + '%', opacity: grow + '%' }"></div>
        </div>
        <button @click="blow" v-show="!end">Souffler</button>
        <button @click="restart">recommencer</button>
      </div>
      <button @click.once="add(1)">Add</button>
      <button @click="minus(1)">Subtract</button>
      <button @dblclick="add(10)">Add 10</button>
      <button @dblclick="minus(10)">Subtract 10</button>
      <p>my age is {{ age }}</p>
      <div id="canvas" v-on:mousemove="updateXY">{{ x }}, {{ y }}</div>
      <a @click.prevent="click" href="http://www.kelligart.com/" target="_blank"
        >kelligart</a
      >
      <div>
        <ul>
          <li v-for="(pers, index) in personnage" :key="index">
            {{ pers }}
          </li>
        </ul>
      </div>
      <div>
        <ul>
          <li v-for="(lists, index) in list" :key="index">
            {{ lists.name }}.{{ lists.age }}.{{ lists.birth }}
          </li>
        </ul>
      </div>

      <button @click="clickerror">{{ state }}</button>
      <p v-show="error">Message error appear in a box</p>
      <label for="texte">Name:</label>
      <input type="text" v-model="name" />
      <label for="texte">Last name:</label> d
      <input type="text" v-model="lastname" />

      <lottie :width="250" :height="250" :options="animationsOptions.arrow" />

      <lottie :width="250" :height="250" :options="animationsOptions.star" />

      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          rel="noopener noreferrer"
          class="button--green"
        >
          Documentation
        </a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          rel="noopener noreferrer"
          class="button--grey"
        >
          GitHub
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import lottie from "vue-lottie/src/lottie.vue";
import * as arrow from "@/assets/animation/arrow.json";
import * as star from "@/assets/animation/star.json";
import { gsap, TimelineMax, TweenMax, Power2} from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default {
  components: {
    lottie
  },
  data() {
    return {
      drink: "",
      animationsOptions: {
        arrow: {
          animationData: arrow.default
        },
        star: {
          animationData: star.default
        }
      },
      personnage: ["mario", "zelda", "pokemon"],
      list: [
        { name: "kellig", age: 33, birth: "21.08.87" },
        { name: "Eadrin", age: 12, birth: "27.10.2008" }
      ],
      error: false,
      state: "ouvrir",
      active: false,
      intro: "Je vous accompagne dans cette aventure collaborative et créative",
      name: "Kellig",
      start: '<a href="/services">Commencer l expérience </a>',
      age: 25,
      x: 0,
      y: 0,
      name: "",
      lastname: "",
      grow: 100,
      ballon: 10,
      end: false
    };
  },

  methods: {
    refclik: function() {
      console.log(this.$refs.input.value);
      this.drink = this.$refs.input.value;
    },
    clickerror: function() {
      this.error = !this.error;
      if ((this.error = this.error)) {
        this.state = "close";
      } else this.state = "open";
    },

    blow: function() {
      this.grow -= 20;
      this.ballon += 10;
      if (this.grow <= 0) {
        this.end = true;
      }
    },
    restart: function() {
      this.grow = 100;
      this.ballon = 10;
      this.end = false;
    },
    clickHello: function() {
      this.active = !this.active;
    },
    click: function() {
      alert("live");
    },
    add: function(inc) {
      this.age += inc;
    },
    minus: function(dec) {
      this.age -= dec;
    },
    good: function(time) {
      //this = à le render vue  et 'name' la data
      return "Good " + time + " " + this.name;
    },
    presentation: function() {
      return "Nous sommes tous Designers";
    },
    //on track offset de la mouse on move = event( paramêtre de la fonction)
    updateXY: function(event) {
      console.log(event);
      this.x = event.offsetX;
      this.y = event.offsetY;
    }
  },
  mounted() {
    const Overlay = document.querySelector(".title");
    let tl = new TimelineMax({}).fromTo(
      Overlay,
      1,
      { y: 100, color: "#OOO", autoAlpha: 0, ease: Power2.easeinOut },
      {
        y: 0,
        color: "#FF0000",
        autoAlpha: 1,
        ease: Power2.easeinOut
      }
    );
    let tl2 = new TimelineMax({
      // yes, we can add it to an entire timeline!
      scrollTrigger: {
        trigger: "#canvas",
        x: "500px",
        pin: true, // pin the trigger element while active
        start: "top top"
      }
    });
  }
};
</script>
