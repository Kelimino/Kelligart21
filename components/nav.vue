<template>
  <div>
    <nuxt-link to="about" class="about-link"
      ><span
        ><img src="@/assets/img/kellig.jpg" alt="Kellig" class="kellig"/></span
      ></nuxt-link
    >

    <footer>
      <nav>
        <ul>
          <li v-on:mouseover="animLogo" v-on:mouseleave="endLogo">
            <nuxt-link to="/" class="logo">
              <lottie
                class="logo"
                :width="50"
                :height="50"
                :options="animationsOptions.logo"
                v-on:animCreated="handleAnimation"
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
            <nuxt-link to="blog">Blog</nuxt-link>
          </li>
          <li>
            <p class="setting"><span></span><span></span><span></span></p>
          </li>
        </ul>
      </nav>
    </footer>
  </div>
</template>

<script>
import lottie from "vue-lottie/src/lottie.vue";
import * as logo from "@/assets/animation/logo.json";

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
      
      this.anim.setSpeed(1.5);
      this.anim.setDirection(-1);
      this.anim.stop();
      
    }
  }
};
</script>
