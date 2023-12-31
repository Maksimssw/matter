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
    fill(255)
    ellipse(0, 0, this.r * 2)
    pop()
  }
}

class Block {
  constructor(x, y, w, h, bonus, img) {
    const option = {
      restitution: 0.5,
      isStatic: true,
      bonus: bonus
    }

    this.body = Bodies.rectangle(x, y, w, h, option)
    this.w = w
    this.h = h
    this.img = img
    this.bonus = bonus
    World.add(world, this.body)
  }

  onShow() {
    const pos = this.body.position

    push()
    image(this.img, pos.x - 10, pos.y - 20);
    translate(pos.x, pos.y)
    rectMode(CENTER)
    strokeWeight(0)
    stroke(0)
    noFill(0)
    rect(0, 0, this.w, this.h)
    pop()
  }
}

class Wall {
  constructor(x, y, w, h) {
    const options = {
      isStatic: true,
      bonus: 5
    }

    this.body = Bodies.rectangle(x, y, w, h, options)
    this.bonus = 5
    this.w = w
    this.h = h
    World.add(world, this.body)
  }

  onShow() {
    const pos = this.body.position

    push()
    translate(pos.x, pos.y)
    rectMode(CENTER)
    strokeWeight(0)
    stroke(0)
    noFill(0)
    rect(0, 0, this.w, this.h)
    pop()
  }
}