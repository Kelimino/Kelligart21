<template>
  <div id="canvas"></div>
</template>
<script>
import Matter from "matter-js/build/matter.js";
// import { Box } from "../mixins/box";
export default {
  mounted() {
    const script = function(p5) {
      //MODULE ALIAS
      var Engine = Matter.Engine,
        Render = Matter.Render,
        Runner = Matter.Runner,
        Bodies = Matter.Bodies,
        World = Matter.World;

      //VARIABLES
      var engine, world, render, box, ground, flake;

      // SETUP
      p5.setup = () => {
        var canvas = p5.createCanvas(400, 400);
        canvas.parent("canvas");
        p5.rect(p5.CENTER, p5.CENTER);

        engine = Engine.create();
        world = engine.world;
        Runner.run(engine);
        Render.run(render);

        flake = p5.loadImage(require("../assets/icons/flake.png"));

        box = Bodies.rectangle(200, 100, 40, 40, {
          render: {
            sprite: {
              texture: flake
            }
          }
        });
        ground = Bodies.rectangle(0, 300, 500, 40, { isStatic: true });

        World.add(world, [box, ground, flake]);
      };

      // DRAW
      p5.draw = () => {
        p5.background(51);
        p5.image(flake, 100, 100, flake.width / 2, flake.height / 2);
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
