import Matter from "matter-js/build/matter.js";
import p5 from "../node_modules/p5/lib/p5";

export default function Box(x, y, w, h) {
  var Bodies = Matter.Bodies,
    World = Matter.World;

  this.boxObject = Bodies.rectangle(x, y, w, h);
  this.w = w;
  this.h = h;
  World.add(this.world, [this.boxObject]);

  this.show = function() {
    var pos = this.body.position;
    // var angle = this.body.angle;

    p5.push();
    p5.translate(pos.x, pos.y);
    // p5.rotate(angle);
    p5.rect(0, 0, this.w, this.h);
    p5.pop();
  };
}

export { Box };
