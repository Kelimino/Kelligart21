<template>
  <div id="canvas"></div>
</template>
<script>
import Matter from "matter-js/build/matter.js";
import { Box } from "/mixins/box";
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
        var canvas = p5.createCanvas(400, 400);
        canvas.parent("canvas");
        p5.rect(p5.CENTER, p5.CENTER);

        engine = Engine.create();
        world = engine.world;
        Runner.run(engine);

        box = new Box(200, 100, 40, 40);

        ground = Bodies.rectangle(0, 300, 500, 40, { isStatic: true });

        World.add(world, [box, ground]);
      };

      // DRAW
      p5.draw = () => {
        p5.background(0);

        Box.show();

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
