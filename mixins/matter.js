import Matter from "matter.js";

export default {

    head: {
    script: [
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.3.1/p5.min.js' }
    ]
  }
}
  mounted() {
    // module aliases
    var Engine = Matter.Engine,
      //   Render = Matter.Render,
      Runner = Matter.Runner,
      Bodies = Matter.Bodies,
      Composite = Matter.Composite;

    var engine;
    var boxA;
    function setup() {
      createCanvas(400, 400);
        engine = Engine.create();
        world = engine.world:
        boxA = Bodies.rectangle(400, 200, 80, 80);
        Engine.run(engine)
    }
    setup()

    function draw() {
      background(51);
    }
    draw()

    // create an engine
    // var engine = Engine.create();

    // create a renderer
    // var render = Render.create({
    //   element: document.body,
    //   engine: engine
    // });

    // create two boxes and a ground

    var boxB = Bodies.rectangle(450, 50, 80, 80);
    var ground = Bodies.rectangle(400, 610, 810, 60, { isStatic: true });

    // add all of the bodies to the world
    Composite.add(engine.world, [boxA, boxB, ground]);

    // run the renderer
    // Render.run(render);

    // create runner
    var runner = Runner.create();

    // run the engine
    Runner.run(runner, engine);
  }
};
