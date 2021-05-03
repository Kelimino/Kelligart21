<template>
  <div id="canvas" class="w-full h-full flex justify-end"></div>
</template>
<script>
import Matter from "matter-js/build/matter.js";
export default {
  mounted() {
    const script = function(p5) {
      //MODULE ALIAS
      var Engine = Matter.Engine,
        // Render = Matter.Render,
        Runner = Matter.Runner,
        Bodies = Matter.Bodies,
        World = Matter.World;

      ///////////////////////////////// VARIABLES
      var engine, world, ground, flake;
      let boxes = [];

      p5.preload = () => {
        flake = p5.loadImage(require("../assets/icons/flake.png"));
      };

      ///////////////////////////////// SETUP
      p5.setup = () => {
        //DRAW CANVAS
        var canvas = p5.createCanvas(p5.windowWidth, 500);
        canvas.parent("canvas");
        p5.angleMode(p5.DEGREES);

        //ENGINE AND WORLD INIT
        engine = Engine.create();
        world = engine.world;
        Runner.run(engine);

        // Render.run(render);

        //OBJECT RENDER IN SETUP

        // MATTER OBJECTS
        ground = Bodies.rectangle(p5.windowWidth / 2, 500, p5.windowWidth, 10, {
          isStatic: true
        });

        // GENERATE WORLD
        World.add(world, [ground]);
      };

      // FUNCTIONS
      p5.mouseDragged = function() {
        boxes.push(
          new Boxes(
            p5.mouseX,
            p5.mouseY,
            p5.random(10, 30),
            p5.random(10, 30),
            p5.rotate(p5.PI / p5.random(0, 1))
          )
        );
      };

      ///////////////////////////////// DRAW
      p5.draw = () => {
        //p5.background(243, 245, 251);
        p5.background(51);
        for (let index = 0; index < boxes.length; index++) {
          boxes[index].show();
        }
      };

      //CONSTRUCTOR CEREAL BUBBLES
      class Boxes {
        constructor(x, y, w, h) {
          this.body = Bodies.rectangle(x, y, w, h);
          this.x = x;
          this.y = y;
          this.w = w;
          this.h = h;
          World.add(world, [this.body]);
        }
        show() {
          var angle = this.body.angle;
          var pos = this.body.position;
          p5.push();
          p5.rotate(angle);
          p5.rectMode(p5.CENTER);
          p5.translate(pos.x, pos.y);
          p5.image(flake, 0, 0, this.w, this.h);
          p5.pop();
        }
        move() {
          // this.x = p5.random(0, p5.windowWidth);
          // this.y = p5.random(0, p5.windowHeight);
        }
      }
    };

    // RENDER CONSCTRUCTOR
    const P5 = require("p5");
    new P5(script);
  }
};
</script>
