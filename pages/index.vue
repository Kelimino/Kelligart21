<template>
  <div id="accueil">
    <section class="bienvenue panel">
  <button @click="videoPause">Pause</button>
      <video class="back-video" width="320" height="240" ref="video">
        <source :src="video" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <h1><span>Directeur artistique</span></h1>
      <h2><span>&amp; creative designer </span></h2>

      <p>skip intro</p>
    </section>
  </div>
</template>

<script>
import { gsap } from "gsap";

export default {
  data() {
    return {
      showImg: true,

      video: require("@/assets/animation/video.mp4")
    };
  },

  methods: {

    videoPause: function (){
   this.$refs.video.pause();
    },
  },

  mounted() {
    //function declaration
  function greet(){
  console.log("bonjour")
  }
      //function expression que lon met dans une variable
  const speak = function(name, time){
  console.log('good'+ (time) + (name) )
    };

    //function évoquée 
    speak();
    greet()




    let vid = document.querySelector(".back-video");
    vid.pause()

    this.titleEffect = gsap
      .timeline({})
      .to(".about-link ", { color: "#FFF" })
      .from(".bienvenue h1 span ", { y: "2em" })
      .from(".bienvenue h2 span ", { y: "2em" }, "<")
      .to(".bienvenue h1 span ", { y: "0em", duration: 1.5 })
      .to(".bienvenue h2 span ", { y: "0em", duration: 1.5 }, "<")
      .add( function(){ 
    vid.play() }, "<=0.5" )
    .to(".bienvenue h1 span ", { y: "-2em" })
    .to(".bienvenue h2 span ", { y: "-2em" }, "<")
    .to(".back-video", { scale: 2, duration: 2})
  }
};
</script>
