const Engine = Matter.Engine,
      Render = Matter.Render,
      Runner = Matter.Runner,
      Bodies = Matter.Bodies,
      Composite = Matter.Composite,
      World = Matter.World;

let engine
let world
let boxys = []

let ground

const option = {
  isStatic: true
}

function setup() {
  createCanvas(400, 400)
  engine = Engine.create()
  world = engine.world
  Matter.Runner.run(engine)
  ground = Bodies.rectangle(200, height, width, 10, option)
  World.add(world, ground)
}

function mousePressed() {
  boxys.push(new Boxy(mouseX, mouseY, random(10, 40), random(10, 40)))
}

function draw() {
  background(51)

  for (let i = 0; i < boxys.length; i++) {
    boxys[i].onShow()
  }

  stroke(255)
  strokeWeight(4)
  rect(0, height, width, height)
}