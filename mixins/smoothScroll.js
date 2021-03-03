import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import locomotiveScroll from "locomotive-scroll";

export const smoothScroll = {
  data() {
    return {
      x: null
    };
  },
  mounted: function () {
    const locoScroll = new locomotiveScroll({
      el: document.querySelector(".smooth-scroll"),
      smooth: true
    });

    this.x = locoScroll;

    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy(".smooth-scroll", {
      scrollTop(value) {
        return arguments.length
          ? locoScroll.scrollTo(value, 0, 0)
          : locoScroll.scroll.instance.scroll.y;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight
        };
      },
      pinType: document.querySelector(".smooth-scroll").style.transform
        ? "transform"
        : "fixed"
    });

    // --- scrollTrigger update, do not move this --- //

    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.refresh();
    
  },
  methods: {
    scrollMeTo(target, duration) {
      var z = this.x;
      z.scrollTo(target, duration);
    }
  }
};
