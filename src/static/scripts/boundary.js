class Boundary {
  constructor(x, y, w, h, a) {
    const option = {
      restitution: 0.5,
      isStatic: true,
      angle: a
    }

    this.body = Bodies.rectangle(x, y, w, h, option)
    this.w = w
    this.h = h
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
    stroke(140)
    fill(0,128,0)
    rect(0, 0, this.w, this.h)
    pop()
  }
}