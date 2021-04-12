import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import LocomotiveScroll from "locomotive-scroll";

export const scrollY = {
  mounted() {
    //INIT SCROLL
    const scroll = new LocomotiveScroll({
      el: document.querySelector("#scroll"),
      smooth: true
    });

    //SCROLL & GSAP WORK TOGETHER
    scroll.on("scroll", ScrollTrigger.update);
    ScrollTrigger.scrollerProxy("#scroll", {
      scrollTop(value) {
        return arguments.length
          ? scroll.scrollTo(value, 0, 0)
          : scroll.scroll.instance.scroll.y;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight
        };
      },
      pinType: document.querySelector("#scroll").style.transform
        ? "transform"
        : "fixed"
    });

    ScrollTrigger.addEventListener("refresh", () => scroll.update());
    ScrollTrigger.refresh();
  }
};
