<template>
  <div id="canvas"></div>
</template>
<script>
// import Matter from "matter-js/build/matter.js";
export default {
  mounted() {
    const script = function(p5) {
      //VARIABLES

      // SETUP
      p5.setup = () => {
        var canvas = p5.createCanvas(500, 500);
        canvas.parent("canvas");
        p5.background(0);
      };

      // DRAW
      p5.draw = () => {
        p5.ellipse(100, 100, 50, 50);
        p5.fill(255, 0, 0);
      };
    };

    // RENDER CONSCTRUCTOR
    const P5 = require("p5");
    new P5(script);
  }
};
</script>
