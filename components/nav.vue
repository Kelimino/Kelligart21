<template>
  <div>
    <footer id="draggable">
      <nav class="mainNav">
        <ul>
          <li @mouseover="animLogo" @mouseleave="endLogo">
            <nuxt-link to="/" class="logo">
              <lottie
                class="logo"
                :width="65"
                :height="65"
                :options="animationsOptions.logo"
                @animCreated="handleAnimation"
            /></nuxt-link>
          </li>
          <li>
            <nuxt-link to="accompagnement">Accompagnement</nuxt-link>
          </li>

          <li>
            <nuxt-link to="services">Services</nuxt-link>
          </li>
          <li>
            <nuxt-link to="projets">Projets</nuxt-link>
          </li>
          <li>
            <nuxt-link to="about" class="about-link"
              ><span
                ><img
                  src="@/assets/img/kellig.jpg"
                  alt="Kellig"
                  class="kellig"/></span
            ></nuxt-link>
          </li>
        </ul>
      </nav>
    </footer>
  </div>
</template>

<script>
import lottie from "vue-lottie/src/lottie.vue";
import * as logo from "@/assets/animation/logo.json";

import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";

if (process.client) {
  gsap.registerPlugin(Draggable);
}

export default {
  components: {
    lottie
  },
  data() {
    return {
      animationsOptions: {
        logo: {
          animationData: logo.default,
          autoplay: false,
          loop: false
        }
      }
    };
  },

  mounted() {
    Draggable.create("#draggable", {
      bounds: document.querySelector("body")
    });
  },
  methods: {
    handleAnimation: function(anim) {
      this.anim = anim;
    },
    animLogo: function() {
      this.anim.setSpeed(1);
      this.anim.setDirection(1);
      this.anim.play();
    },
    endLogo: function() {
      this.anim.setSpeed(1.3);
      this.anim.setDirection(-1);
      this.anim.play();
    }
  }
};
</script>
