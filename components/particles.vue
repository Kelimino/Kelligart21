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

      //VARIABLES
      var engine, world, box, ground, flake;
      let hello = ["hello", "my", "friend"];
      let cereals = [];

      p5.preload = () => {
        flake = p5.loadImage(require("../assets/icons/flake.png"));
      };

      // SETUP
      p5.setup = () => {
        //DRAW CANVAS
        var canvas = p5.createCanvas(p5.windowWidth, 400);
        canvas.parent("canvas");
        p5.rect(p5.CENTER, p5.CENTER);

        //ENGINE AND WORLD INIT
        engine = Engine.create();
        world = engine.world;
        Runner.run(engine);

        // Render.run(render);

        //OBJECT RENDER IN SETUP

        for (let i = 0; i < 10; i++) {
          let CerealX = p5.random(p5.width);
          let CerealY = p5.random(p5.height);
          let CerealW = p5.random(20, 30);
          let CerealH = p5.random(5, 15);
          let b = new Cereal(CerealX, CerealY, CerealW, CerealH);
          cereals.push(b);
        }

        // MATTER OBJECTS
        box = Bodies.rectangle(200, 100, 40, 40);
        ground = Bodies.rectangle(0, 300, p5.windowWidth, 40, {
          isStatic: true
        });

        // GENERATE WORLD
        World.add(world, [box, ground, flake]);
      };

      // FUNCTIONS
      p5.mouseDragged = function() {
        p5.ellipse(100, 100, 20, 20);
      };

      // DRAW
      p5.draw = () => {
        var colorBack = p5.map(p5.mouseX, 0, p5.windowWidth, 0, 255);
        p5.background(colorBack);

        for (let index = 0; index < hello.length; index++) {
          p5.text(hello[index], index * 50 + 10, 200);
        }

        for (let i = 0; i < cereals.length; i++) {
          cereals[i].show();
          cereals[i].move();
        }

        var ballx = 0;
        while (ballx <= p5.mouseX) {
          p5.fill(25, 124, 89);
          p5.ellipse(ballx, 40, 20, 20);
          ballx = ballx + 50;
        }

        p5.push();
        p5.stroke(255, 35, 67);
        p5.strokeWeight(4);
        p5.rectMode(p5.CENTER);
        p5.fill(25, 125, 98);
        p5.scale(2);
        p5.rect(200, 200, 50, 50);
        p5.pop();

        p5.fill(p5.mouseY);
        p5.ellipse(200, p5.mouseY, 50, 50);

        p5.rect(box.position.x, box.position.y, 40, 40);

        p5.fill(255, 0, 0);
        p5.rect(ground.position.x, ground.position.y, p5.windowWidth, 400);
      };

      //CONSTRUCTOR CEREAL BUBBLES
      class Cereal {
        constructor(x, y, w, h) {
          this.x = 100;
          this.y = 100;
          this.w = w;
          this.h = h;
        }

        show() {
          p5.push();
          p5.rectMode(p5.CENTER);
          p5.rotate(p5.random(0, 360));
          p5.image(flake, this.x, this.y, this.w, this.h);
          p5.pop();
        }
        move() {
          this.x = this.x + p5.random(-2, 3);
          this.y = this.y + p5.random(-2, 5);
        }
      }
    };

    // RENDER CONSCTRUCTOR
    const P5 = require("p5");
    new P5(script);
  }
};
</script>
