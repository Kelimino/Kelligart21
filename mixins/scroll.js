import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import LocomotiveScroll from "locomotive-scroll";

export const scroll = {
  data() {
    return {
      x: null
    };
  },
  mounted: function() {
    // --- locomotive-scroll init --- //

    const Scroller = new LocomotiveScroll({
      el: document.querySelector("[data-scroll-container]"),
      smooth: true
    });

    this.x = Scroller;

    Scroller.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy("[data-scroll-container]", {
      scrollTop(value) {
        return arguments.length
          ? Scroller.scrollTo(value, 0, 0)
          : Scroller.scroll.instance.scroll.y;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight
        };
      },
      pinType: document.querySelector("[data-scroll-container]").style.transform
        ? "transform"
        : "fixed"
    });
    ScrollTrigger.addEventListener("refresh", () => Scroller.update());
    ScrollTrigger.refresh();
  },
  methods: {
    scrollMeTo(target, duration) {
      var z = this.x;
      z.scrollTo(target, duration);
    }
  }
};
