import {
  gsap
} from "gsap";
import {
  ScrollTrigger
} from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import locomotiveScroll from "locomotive-scroll";

export const smoothScroll = {
  data() {
    return {
      x: null
    };
  },
  watch: {
    $route() {
      scrollX.update();
    }
  },
  mounted: function () {

    const scrollX = new locomotiveScroll({
      el: document.querySelector(".smooth-scroll"),
      smooth: true
    });

    this.x = scrollX;

    scrollX.on("scroll", ScrollTrigger.update);


    ScrollTrigger.scrollerProxy(".smooth-scroll", {
      scrollTop(value) {
        return arguments.length ?
          scrollX.scrollTo(value, 0, 0) :
          scrollX.scroll.instance.scroll.y;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight
        };
      },
      pinType: document.querySelector(".smooth-scroll").style.transform ?
        "transform" : "fixed"
    });
    ScrollTrigger.addEventListener("refresh", () => scrollX.update());
    ScrollTrigger.refresh();
  },

  destroyed() {
    const x = scrollX
    x.destroy();
  },
  methods: {
    scrollMeTo(target, duration) {
      var z = this.x;
      z.scrollTo(target, duration);
    }
  }
};
