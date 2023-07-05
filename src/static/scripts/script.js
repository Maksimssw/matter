const Engine = Matter.Engine,
      Render = Matter.Render,
      Runner = Matter.Runner,
      Bodies = Matter.Bodies,
      Composite = Matter.Composite,
      World = Matter.World;

let engine
let world
let circles = []
let boundaries = []

let ground

function setup() {
  createCanvas(400, 400)
  engine = Engine.create()
  world = engine.world
  boundaries.push(new Boundary(50, height / 6, width, 3, 0.4))
  boundaries.push(new Boundary(400, height / 3, width, 3, -0.4))
  boundaries.push(new Boundary(50, height / 2, width, 3, 0.4))
  boundaries.push(new Boundary(400, height / 1.5, width, 3, -0.4))
}

function mouseDragged() {
  circles.push(new Circle(mouseX, mouseY, random(10, 20)))
}

function draw() {
  background(0, 191, 255)
  Engine.update(engine)

  for (let i = 0; i < circles.length; i++) {
    circles[i].onShow()
  }

  for (let i = 0; i < boundaries.length; i++) {
    boundaries[i].onShow()
  }
}