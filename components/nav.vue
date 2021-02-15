<template>
  <div>
    <div>
      <nuxt-link to="about"><img src="" alt="" />À propos</nuxt-link>
    </div>

    <footer>
      <nav>
        <ul>
          <li>
            <nuxt-link to="/" class="logo" v-on:mouseover="animLogo">
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
  data (){
    return{
      animationsOptions: {
        logo: {
          animationData: logo.default,
          autoplay: false,
          loop: false
        }
      },
    }
  },
    methods: {
    handleAnimation: function(anim) {
      this.anim = anim;
    },
    animLogo: function(){
        this.anim.play()
        console.log(logo)
    }
    }
};
</script>
