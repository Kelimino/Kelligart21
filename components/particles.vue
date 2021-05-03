<template>
  <div id="canvas"></div>
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
      var engine, world, ground, flake, cereal;
      let cereals = [];

      p5.preload = () => {
        flake = p5.loadImage(require("../assets/icons/flake.png"));
      };

      ///////////////////////////////// SETUP
      p5.setup = () => {
        //DRAW CANVAS
        var canvas = p5.createCanvas(p5.windowWidth, 400);
        canvas.parent("canvas");
        p5.angleMode(p5.DEGREES);

        //ENGINE AND WORLD INIT
        engine = Engine.create();
        world = engine.world;
        Runner.run(engine);

        // Render.run(render);

        //OBJECT RENDER IN SETUP

        // MATTER OBJECTS
        cereal = Bodies.rectangle(200, 100, 34, 40);
        ground = Bodies.rectangle(0, 400, p5.windowWidth, 40, {
          isStatic: true
        });

        // GENERATE WORLD
        World.add(world, [ground, cereal]);
      };

      // FUNCTIONS
      p5.mousePressed = function() {
        cereals.push(new Cereal(p5.mouseX, p5.mouseY, 50, 20));
      };

      ///////////////////////////////// DRAW
      p5.draw = () => {
        p5.background(51);

        p5.image(flake, cereal.position.x, cereal.position.y, 20, 50);

        for (let index = 0; index < cereals.length; index++) {
          cereals[index].show();
        }
      };

      //CONSTRUCTOR CEREAL BUBBLES
      class Cereal {
        constructor(x, y, w, h) {
          this.corn = Bodies.rectangle(x, y, w, h);
          this.x = x;
          this.y = y;
          this.w = w;
          this.h = h;
        }
        show() {
          p5.push();
          p5.image(flake, this.x, this.y, this.w, this.h);
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
