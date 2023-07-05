class Boxy {
  constructor(x, y, w, h) {
    const options = {
      friction: 0.5,
      restitution: 0.5
    }

    this.body = Bodies.rectangle(x, y, w, h, options)
    this.w = w
    this.h = h
    Matter.World.add(world, this.body)
  }

  onShow() {
    const pos = this.body.position
    const angle = this.body.angle

    push()
    translate(pos.x, pos.y)
    rotate(angle)
    rectMode(CENTER)
    strokeWeight(6)
    stroke(140)
    fill(120)
    rect(0, 0, this.w, this.h)
    pop()
  }
}