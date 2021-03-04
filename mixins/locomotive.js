import {
  gsap
} from "gsap";
import {
  ScrollTrigger
} from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import locomotiveScroll from "locomotive-scroll";


export default {
  data() {
    return {
      x: null
    };
  },
  watch: {
    $route() {
      this.lmS.update();
    }
  },
  mounted() {
    this.$nextTick(
      function () {
        this.lmS = new locomotiveScroll({
          el: document.querySelector(".smooth-scroll"),
          smooth: true /* if false disable overflow: hidden on html, body */
        });
        this.x = this.lmS;
        this.lmS.on("scroll", ScrollTrigger.update);


        ScrollTrigger.scrollerProxy(".smooth-scroll", {
          scrollTop(value) {
            return arguments.length ?
              this.lmS.scrollTo(value, 0, 0) :
              this.lmS.scroll.instance.scroll.y;
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
        ScrollTrigger.addEventListener("refresh", () => this.lmS.update());
        ScrollTrigger.refresh();

      }.bind(this)
    );
  },
  destroyed() {
    this.lmS.destroy();
  }
};
