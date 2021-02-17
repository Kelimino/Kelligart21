<template>
  <div class="container">
    <div>

      <section class="bienvenue panel">
        <div class="back-intro"></div>
      <!-- <transition appear
     @before-enter="beforeEnter"
     @before-leave="beforeLeave"
     @enter="enter"
      >
     Place element div here for transition
      </transition> -->
       <h1> <span>Directeur artistique</span></h1>
       <h2><span>&amp; creative designer </span></h2>
       
       
       <p>skip intro</p>

      </section>
    </div>
  </div>
</template>

<script>
import { gsap } from "gsap";

export default {


  methods:{

      beforeEnter: function (el) {
      el.style.color ='green'
      console.log('i am green')
    },

      enter: function (el) {
      el.style.color ='black'
      console.log('i am black')
    },

      beforeLeave: function (el) {
      el.style.color ='pink'
      console.log('i am Pink')
    },
  },

  mounted(){

    this.titleEffect = gsap.timeline({
    })

    .from(".bienvenue h1 span ", { y: "2em"})
    .from(".bienvenue h2 span ", { y: "2em"}, "<")
  }


}
</script>
