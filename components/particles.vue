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
        // Render = Matter.Render,
        Runner = Matter.Runner,
        Bodies = Matter.Bodies,
        World = Matter.World;

      // var bodyWidth = document.querySelector(".bg-back").offSetWidth;

      // SETUP
      p5.setup = () => {
        var canvas = p5.createCanvas(p5.windowWidth, 400);
        canvas.parent("canvas");
        p5.rect(p5.CENTER, p5.CENTER);

        engine = Engine.create();
        world = engine.world;
        Runner.run(engine);
        // Render.run(render);

        flake = p5.loadImage(require("../assets/icons/flake.png"));
        squareSize = p5.random(50, 100);

        // box = new Box(200, 100, 40, 40);
        box = Bodies.rectangle(200, 100, 40, 40);

        ground = Bodies.rectangle(0, 300, p5.windowWidth, 40, {
          isStatic: true
        });
        World.add(world, [box, ground, flake]);
      };

      p5.mousePressed = function() {
        // circleX = 0;
      };

      p5.mouseDragged = function() {
        p5.ellipse(100, 100, 20, 20);
      };

      //VARIABLES
      var engine, world, box, ground, flake, squareSize;
      // let circleX = 100;
      // let speed = 5;

      // DRAW
      p5.draw = () => {
        var colorBack = p5.map(p5.mouseX, 0, p5.windowWidth, 0, 255);
        p5.background(colorBack);
        // p5.fill(random(50, 255), random(50, 150), random(50, 255), 100);
        // p5.circle(p5.mouseX, p5.mouseY, 20, 20);

        // if (circleX > p5.width || circleX < 0) {
        //   speed = speed * -1;
        // }
        // circleX = circleX + speed;
        // p5.fill(0, 255, 255);
        // p5.noStroke();
        // p5.ellipse(circleX, 200, 40, 40);

        var ballx = 0;
        while (ballx < p5.width) {
          p5.ellipse(x, 40, 20, 20);
          var x = x + 5;
        }

        p5.stroke(255, 35, 67);
        p5.strokeWeight(4);
        p5.fill(25, 125, 98);
        p5.rect(200, 200, squareSize);

        p5.fill(p5.mouseY);
        p5.ellipse(200, p5.mouseY, 50, 50);

        // p5.rotate(p5.random(0, 360));
        p5.image(flake, 100, 100, flake.width / 2, flake.height / 2);
        p5.rect(box.position.x, box.position.y, 40, 40);
        // box.show();

        p5.fill(255, 0, 0);
        p5.rect(ground.position.x, ground.position.y, p5.windowWidth, 400);
      };
    };

    // RENDER CONSCTRUCTOR
    const P5 = require("p5");
    new P5(script);
  }
};
</script>
