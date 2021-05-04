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
        ground = new Boundary(p5.windowWidth / 2, 400, p5.windowWidth, 100);

        // GENERATE WORLD
        // World.add(world, [ground]);
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
        Engine.update(engine);
        //p5.background(243, 245, 251);
        p5.background(51);
        p5.push();
        for (let i = 0; i < boxes.length; i++) {
          boxes[i].show();
          // if (boxes[i].isOffScreen()) {
          //   boxes.splice(i, 1);
          // }
        }

        ground.show();
      };

      //CONSTRUCTOR CEREAL BOXES
      class Boxes {
        constructor(x, y, w, h) {
          var options = {
            friction: 0.8,
            restitution: 0.5
          };
          this.body = Bodies.rectangle(x, y, w, h, options);
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
          p5.image(flake, 0, 0, this.w * 1.2, this.h * 1.2);
          p5.pop();
        }
        move() {
          // this.x = p5.random(0, p5.windowWidth);
          // this.y = p5.random(0, p5.windowHeight);
        }
      }
      //CONSTRUCTOR BOTTOM BOUNDARY
      class Boundary {
        constructor(x, y, w, h) {
          var options = {
            isStatic: true,
            friction: 1,
            restitution: 1
          };
          this.body = Bodies.rectangle(x, y, w, h, options);
          this.x = x;
          this.y = y;
          this.w = w;
          this.h = h;
          World.add(world, [this.body]);
        }
        show() {
          p5.push();
          p5.fill(0);
          p5.rectMode(p5.CENTER);
          p5.rect(p5.windowWidth / 2, 400, p5.windowWidth, 80);
          p5.pop();
        }
      }
    };

    // RENDER CONSCTRUCTOR
    const P5 = require("p5");
    new P5(script);
  }
};
</script>
