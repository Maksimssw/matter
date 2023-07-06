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

function setup() {
  const canvas = createCanvas(400, 300)
  engine = Engine.create()
  world = engine.world
  canvas.parent('canvas')
  createCircleBoundaries()
}

const createCircleBoundaries = () => {
  for (let i = 0; i < 16; i++) {
    const linePins = 3 + i;
    const lineWidth = linePins * 15;
    for (let n = 0; n < linePins; n++) {
      boundaries.push(new CircleBoundary(
        width / 2 - lineWidth / 2 + n * 15,
        10 + i * 15,
        3
      ))
    }
  }
}

const button = document.querySelector('.button-spin')

console.log(document)
button.addEventListener('click', () => {
  circles.push(new Circle(width / random(2, 2.2), 0, 4))
})

function draw() {
  clear();
  background('rgba(0,255,0, 0)')
  Engine.update(engine)

  for (let i = 0; i < circles.length; i++) {
    circles[i].onShow()
  }

  for (let i = 0; i < boundaries.length; i++) {
    boundaries[i].onShow()
  }
}