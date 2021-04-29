import Matter from "matter-js/build/matter.js";
import P5 from "../node_modules/p5/lib/p5";
const { World } = require("matter-js");

export default {
  mounted() {
    function Box(x, y, w, h) {
      this.body = Matter.Bodies.rectangle(x, y, w, h);
      this.w = w;
      this.h = h;
      World.add(this.world, this.body);

      this.show = function() {
        var pos = this.body.position;
        var angle = this.body.angle;

        P5.push();
        P5.translate(pos.x, pos.y);
        P5.rotate(angle);
        P5.rectMode(P5.CENTER);
        P5.rect(0, 0, this.w, this.h);
        P5.pop();
      };
    }
  }
};
