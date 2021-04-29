<template>
  <div id="canvas"></div>
</template>
<script>
import Matter from "matter-js/build/matter.js";
import { Box } from "mixins/box.js";
export default {
  mounted() {
    const script = function(p5) {
      //MODULE ALIAS
      var Engine = Matter.Engine,
        // Render = Matter.Render,
        Runner = Matter.Runner,
        Bodies = Matter.Bodies,
        World = Matter.World;

      var engine,
        world,
        box,
        // box = [],
        ground;

      // SETUP

      p5.setup = () => {
        var canvas = p5.createCanvas(400, 400);
        canvas.parent("canvas");
        p5.rect(p5.CENTER, p5.CENTER);

        engine = Engine.create();
        world = engine.world;
        Runner.run(engine);

        box = Bodies.rectangle(200, 100, 40, 40);
        // box = new Box(200,200,80,80);

        ground = Bodies.rectangle(0, 300, 500, 40, { isStatic: true });

        World.add(world, [box, ground]);
      };
      // function mousePressed() {
      //   box.push(Bodies.rectangle(200, 200, 40, 40));
      // }
      // mousePressed();

      // DRAW
      p5.draw = () => {
        p5.background(0);

        // Box.show()
        // for (let index = 0; index < box.length; index++) {
        //   p5.fill(0, 255, 0);
        //   p5.rect(200, 200, 40, 40);
        // }
        p5.fill(0, 255, 0);
        p5.rect(box.position.x, box.position.y, 40, 40);

        p5.fill(255, 0, 0);
        p5.rect(ground.position.x, ground.position.y, 400, 400);
      };
    };

    // RENDER CONSCTRUCTOR
    const P5 = require("p5");
    new P5(script);
  }
};
</script>
