class CircleBoundary {
  constructor(x, y, r) {
    const option = {
      restitution: 0.5,
      isStatic: true,
    }

    this.body = Bodies.circle(x, y, r, option)
    this.r = r
    World.add(world, this.body)
  }

  onShow() {
    const pos = this.body.position
    const angle = this.body.angle

    push()
    translate(pos.x, pos.y)
    rotate(angle)
    rectMode(CENTER)
    strokeWeight(0)
    stroke(0)
    fill(0)
    ellipse(0, 0, this.r * 2)
    pop()
  }
}