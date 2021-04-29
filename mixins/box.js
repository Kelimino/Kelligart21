import Matter from "matter-js/build/matter.js";
import p5 from "../node_modules/p5/lib/p5";
const { World } = require("matter-js");

function Box(x, y, w, h) {
  this.body = Matter.Bodies.rectangle(x, y, w, h);
  this.w = w;
  this.h = h;
  World.add(this.world, this.body);

  this.show = function() {
    var pos = this.body.position;
    var angle = this.body.angle;

    p5.push();
    p5.translate(pos.x, pos.y);
    p5.rotate(angle);
    p5.rectMode(p5.CENTER);
    p5.rect(0, 0, this.w, this.h);
    p5.pop();
  };
}

export { Box };
