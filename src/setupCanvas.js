import Matter from "matter-js";
import MatterWrap from "matter-wrap";

Matter.use(
    MatterWrap
);

const MatterCanvas = {};

MatterCanvas.avalanche = function() {
    var Engine = Matter.Engine,
        Render = Matter.Render,
        Runner = Matter.Runner,
        Composite = Matter.Composite,
        Composites = Matter.Composites,
        Events = Matter.Events,
        Common = Matter.Common,
        MouseConstraint = Matter.MouseConstraint,
        Mouse = Matter.Mouse,
        World = Matter.World,
        Bodies = Matter.Bodies;

    // create engine
    var engine = Engine.create(),
        world = engine.world;

    // create renderer
    var render = Render.create({
        element: document.body,
        engine: engine,
        options: {
            width: 800,
            height: 600,
            showAngleIndicator: false,
            wireframes: false
        }
    });

    Render.run(render);

    // create runner
    var runner = Runner.create();
    Runner.run(runner, engine);

    World.add(world, [
        Bodies.rectangle(200, 150, 700, 20, { isStatic: true, angle: Math.PI * 0.08, ground : true}),
        Bodies.rectangle(500, 350, 700, 20, { isStatic: true, angle: -Math.PI * 0.08, ground : true}),
        Bodies.rectangle(340, 580, 700, 20, { isStatic: true, angle: Math.PI * 0.05, ground : true}),
        Bodies.rectangle(-150, 300, 20, 770, { isStatic: true, angle: 0, wall: true}),
        Bodies.rectangle(850, 300, 20, 770, { isStatic: true, angle: 0, wall : true})
    ]);

    // add mouse control
    var mouse = Mouse.create(render.canvas),
        mouseConstraint = MouseConstraint.create(engine, {
            mouse: mouse,
            constraint: {
                stiffness: 0.2,
                render: {
                    visible: false
                }
            }
        });

    World.add(world, mouseConstraint);

    // keep the mouse in sync with rendering
    render.mouse = mouse;

    // fit the render viewport to the scene
    Render.lookAt(render, Composite.allBodies(world));

    // add bodies
    var stack = Composites.stack(20, -400, 3, 3, 30, 30, function(x, y) {
        let circle = Bodies.circle(x, y, Common.random(10, 20), { friction: 0, restitution: 0.001, density: 0.0001, shouldMakeSound: true });
        return circle;
    });

    World.add(world, stack);

    // wrapping using matter-wrap plugin
    for (var i = 0; i < stack.bodies.length; i += 1) {
        stack.bodies[i].plugin.wrap = {
            min: { x: -130, y: -500 },
            max: { x: 830, y: render.bounds.max.y }
        };
    }



    // context for MatterTools.Demo
    return {
        engine: engine,
        runner: runner,
        render: render,
        canvas: render.canvas,
        stop: function() {
            Matter.Render.stop(render);
            Matter.Runner.stop(runner);
        }
    };
};

export default MatterCanvas;