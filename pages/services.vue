<template>
  <div>
    <section class="header">
      <h1 class="title">Services</h1>
      <p>This a page on services</p>
      <button ref= "btn" @click="btnE" class="btnB">Hello there </button>
    </section>
    <section class="domain">
     <h2 class="DA">Direction Artistique</h2>
      <p>This a page on services</p>

    </section>
        <section id="colors">
     <div class="panel orange"><p>Hello</p></div>
    <div class=" panel blue"><p>Hello</p></div>
    <div class=" panel green"><p>Hello</p></div>

    </section>
  </div>
</template>

<script>
import { gsap, Power2 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default {
  head() {
    return {
      title: "Mes services",
      meta: [{ name: "description", content: "Cest ma page de services" }]
    };
  },


  methods: {
   
   
  btnE: function(){
    gsap.to(".btnB", 1, {
      x: 200,
      rotation: 90
    })

  }


  },
  mounted() {
    let Overlay = document.querySelector(".title");
    this.tl = gsap.timeline({})
    
    .from(
      Overlay,
      1,
      {
        y: 20,
        color: "#FF0000",
        autoAlpha: 0,
        ease: Power2.easeinOut
      })
      .to(Overlay,
      1,{
        y: 0,
        color: "#000",
        autoAlpha: 1,
        ease: Power2.easeinOut
      }
    );

this.tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".domain",
    start: "100px 80%",
    toggleActions: "restart pause resume none",
    scrub: 2,
    pin: ".domain p",
    background: "#FFA500",
    duration: 2
  }
})
.to(".domain", {background: "#FFA500" })
.from(".domain h2", {autoAlpha: 0,y: 100, duration: 1}, "-= 1")
.to(".domain h2", {autoAlpha: 1,y: 0, duration: 1}, "-= 1");

let tl3 = gsap.timeline()

tl3
.from(".orange", {xPercent: -100})
.from(".blue", {xPercent: 100})
.from(".green", {yPercent: -100})


ScrollTrigger.create({
  animation: tl3,
  trigger: "#colors",
  pin: true,
  pinSpacing: false,
  start: "top center",
  end: "bottom 80%",
  markers: true,
  anticipatePin: 1,
  toggleClass: {targets: "#colors .panel p", className: "activeP"},
  onEnter: () => console.log("heeeyye")
})


  }
};
</script>
