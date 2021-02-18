<template>
  <div class="container">

        <svg>
  <filter id="turbulence" x="0" y="0" width="100%" height="100%">
    <feTurbulence id="sea-filter" numOctaves="3" seed="2" baseFrequency="0.02 0.05"></feTurbulence>
    <feDisplacementMap scale="20" in="SourceGraphic"></feDisplacementMap>
  </filter>
</svg>

    <div>
      <section class="bienvenue panel">
        <transition
          appear
          name="fade"
          @before-enter="beforeEnter"
          @enter="Enter"
        >
          <img
            class="back-intro"
            src="@/assets/img/sea.jpg"
            alt="image"
            v-show="showImg"
          />
        </transition>
        <h1><span>Directeur artistique</span></h1>
        <h2><span>&amp; creative designer </span></h2>

        <p>skip intro</p>
      </section>
    </div>
  </div>
</template>

<script>
import { gsap } from "gsap";

export default {
  data() {
    return {
      showImg: true
    };
  },

  methods: {
    beforeEnter: function(el) {
      console.log("beforeEnter", el);
            gsap
        .timeline({})
        .from(el, { autoAlpha: 0})
        .to(el, { autoAlpha: 1, scale: 1.2, duration: 0.6, ease: "power2.out" },"+=0.5");
    },
    Enter: function() {

    }
    //   afterEnter: function (el) {
    //   el.style.width ='100%'
    //   console.log('afterEnter', el)
    //   setTimeout(() => this.showImg = false, 2000)
    // },
    //   beforeLeave: function (el) {
    //   console.log('beforeLeave', el)
    // },
    //   Leave: function (el) {
    //   console.log('leave', el)
    // },
    //   afterLeave: function (el) {
    //   console.log('afterLeave', el)
    // }
  },

  mounted() {
    this.titleEffect = gsap
      .timeline({})

      .from(".bienvenue h1 span ", { y: "2em" })
      .from(".bienvenue h2 span ", { y: "2em" }, "<");
  }
};
</script>
<style scoped>
/* .fade-enter-to{
  border: solid 10px green;

}

.fade-enter-active{

  border: solid 10px purple;
}

.fade-leave-to{
   border: solid 10px red;
  transition: all 0.6s linear;
}

.fade-leave-active{

  transition: all 0.6s linear;
} */
</style>
