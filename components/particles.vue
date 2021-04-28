<template>
  <div></div>
</template>
<script>
import Matter from "matter-js/build/matter.js";
// import { Box } from "mixins/box.js";
export default {
  mounted() {
    // this.$nextTick( () =>{
    // });

    const script = function(p5) {
      //MODULE ALIAS
      var Engine = Matter.Engine,
        // Render = Matter.Render,
        Runner = Matter.Runner,
        Bodies = Matter.Bodies,
        World = Matter.World;

      var engine, world, box, ground;

      // SETUP

      p5.setup = () => {
        p5.createCanvas(400, 400);

        engine = Engine.create();
        world = engine.world;
        Runner.run(engine);

        box = Bodies.rectangle(200, 100, 40, 40);
        p5.fill(0, 255, 0);

        ground = Bodies.rectangle(100, 400, 400, 40, { isStatic: true });
        p5.fill(255, 0, 0);

        World.add(world, [box, ground]);
      };

      // DRAW
      p5.draw = () => {
        p5.background(0);
        p5.rect(box.position.x, box.position.y, 40, 40);
        p5.rect(ground.position.x, ground.position.y, 400, 400);
      };
    };

    // RENDER CONSCTRUCTOR
    const P5 = require("p5");
    new P5(script);
  }
};
</script>
