const Engine = Matter.Engine,
      Render = Matter.Render,
      Runner = Matter.Runner,
      Bodies = Matter.Bodies,
      Composite = Matter.Composite,
      World = Matter.World;

let engine
let world

const circles = []
const boundaries = []
const blocks = []
const walls = []

function setup() {
  const canvas = createCanvas(400, 265)
  engine = Engine.create()
  world = engine.world
  canvas.parent('canvas')
  createCircleBoundaries()
  createBlock()
  collisionBlock()
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

const bonuses = [5, 3, 1.5, 1, 0.5, 0.3, 0.3, 0.3, 0.5, 1, 1.5, 3, 5]
const createBlock = () => {
  for (let i = 0; i < 13; i++) {
    const img = loadImage(`../static/images/multipliers/multiplier${bonuses[i]}.png`)
    const x = 73 + 20 * i
    blocks.push(new Block(x, height - 5, 15, 35, bonuses[i], img))
  }

  walls.push(new Wall(40, height, 40, width))
  walls.push(new Wall(width - 55, height, 40, width))
}

const collisionBlock = () => {
  Matter.Events.on(engine, 'collisionStart', (event) => {
    const bodyA = event.source.pairs.list[0].bodyA.id
    const bodyB = event.source.pairs.list[0].bodyB.id

    console.log(world.bodies[bodyA])
    if (world.bodies[bodyA].label === "Rectangle Body") {
      for (let i = 0; i < circles.length; i++) {
        if (circles[i].body.id === bodyB) {
          circles[i].removeFromWorld()
          circles.splice(i, 1);
          i--
        }
      }

      updateBalance(world.bodies[bodyA].bonus)
    }
  })
}

const button = document.querySelector('.button-spin')

button.addEventListener('click', () => {
  button.setAttribute('disabled', 'disabled')

  circles.push(new Circle(width / random(2, 2.2), 0, 4))

  setTimeout(() => {
    button.removeAttribute('disabled')
  }, 1000)
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

  for (let i = 0; i < blocks.length; i++) {
    blocks[i].onShow()
  }

  for (let i = 0; i < walls.length; i++) {
    walls[i].onShow()
  }
}
const spin = document.querySelector('[data-spin]')

spin.addEventListener('click', () => {
  const balance = document.querySelector('[data-balance]')

  balance.innerHTML = +balance.textContent - 10
})

const updateBalance = (x) => {
  const balance = document.querySelector('[data-balance]')

  const update = 10 * x
  balance.innerHTML = +balance.textContent + update
}