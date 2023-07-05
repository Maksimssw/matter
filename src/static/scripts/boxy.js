class Circle {
  constructor(x, y, r) {
    const options = {
      friction: 0,
      restitution: 0
    }

    this.body = Bodies.circle(x, y, r, options)
    this.r = r
    Matter.World.add(world, this.body)
  }

  onShow() {
    const pos = this.body.position
    const angle = this.body.angle

    push()
    translate(pos.x, pos.y)
    rotate(angle)
    rectMode(CENTER)
    strokeWeight(0)
    stroke(140)
    fill(52,59,41)
    ellipse(0, 0, this.r * 2)
    pop()
  }
}