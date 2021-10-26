function enemyImg(w, h, src, canvas) {
  var img = new Image()
  img.src = src

  var x = getRandom(0, canvas.width - w)
  var y = -h

  var enemy = new Enemy(x, y, w, h, img, canvas)

  img.onload = function () {
    enemy.draw()
  }

  return enemy
}

class Enemy {
  constructor(x, y, w, h, img, canvas) {
    this.x = x
    this.y = y
    this.w = w
    this.h = h
    this.img = img
    this.canvas = canvas

    this.speed = getRandom(5, 8)
    this.ctx = canvas.getContext('2d')
  }

  draw() {
    this.ctx.drawImage(this.img, 0, 0, this.w, this.h, this.x, this.y, this.w, this.h)
  }

  move() {
    this.y += this.speed
  }

  isOuter() {
    if (this.y > this.canvas.height) {
      return true
    }
    return false
  }

  crash() {
    var crashAudio = new Audio('./audio/enemy1_down.mp3')
    crashAudio.play()
  }
}

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

function collide(obj1, obj2) {
  var minX1 = obj1.x
  var minX2 = obj2.x
  var minY1 = obj1.y
  var minY2 = obj2.y

  var maxX1 = obj1.x + obj1.w
  var maxX2 = obj2.x + obj2.w
  var maxY1 = obj1.y + obj1.h
  var maxY2 = obj2.y + obj2.h

  if (Math.min(maxX1, maxX2) > Math.max(minX1, minX2) && Math.min(maxY1, maxY2) > Math.max(minY1, minY2)) {
    return true
  }
  return false
}