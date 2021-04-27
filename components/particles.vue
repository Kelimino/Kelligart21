<template>
  <div id="canvas"></div>
</template>
<script src="//cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.4/p5.js"></script>
<script src="//cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.4/addons/p5.dom.js"></script>
<script>
// import Matter from "matter-js/build/matter.js";
export default {
  mounted() {
    function setup() {
      let canvas = createCanvas(600, 400);
      canvas.parent("#canvas");
    }
    setup();

    function draw() {
      background(102);
      ellipse(50, 50, 80, 80);
    }
    draw();
  }
};
</script>
