<template>
  <div id="canvas"></div>
</template>
<script>
import Matter from "matter-js/build/matter.js";
export default {
  mounted() {
    const script = function(p5) {
      //VARIABLES

      var Engine = Matter.Engine,
        // Render = Matter.Render,
        // Runner = Matter.Runner,
        Bodies = Matter.Bodies,
        World = Matter.World;
      // Composite = Matter.Composite;

      // SETUP

      var engine, world, box;
      p5.setup = () => {
        var canvas = p5.createCanvas(500, 500);
        canvas.parent("canvas");

        engine = Engine.create();
        world = engine.world;

        Engine = run(engine);
        p5.background(0);

        box = Bodies.rectangle(400, 200, 80, 80);
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
