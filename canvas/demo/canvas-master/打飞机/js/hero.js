function heroImg(src, canvas) {
  var img = new Image()
  img.src = src
  var ctx = canvas.getContext('2d')

  var imgW = 66
  var imgH = 82
  var x = canvas.width / 2 - imgW / 2
  var y = canvas.height - 20 - imgH

  var hero = new Hero(img, x, y, imgW, imgH, ctx)

  img.onload = function () {
    setInterval(() => { hero.draw() }, 16)  // 实时的绘制这个飞机
  }

  // 键盘按下时，给飞机对象添加一个方向状态
  window.onkeydown = function (e) {
    switch (e.keyCode) {
      case 37:
        hero.left = true
        break
      case 38:
        hero.up = true
        break
      case 39:
        hero.right = true
        break
      case 40:
        hero.down = true
        break
    }
  }

  window.onkeyup = function (e) {
    switch (e.keyCode) {
      case 37:
        hero.left = false
        break
      case 38:
        hero.up = false
        break
      case 39:
        hero.right = false
        break
      case 40:
        hero.down = false
        break
    }
  }

  // 实时的监听这些状态 根据方向状态改变坐标值
  setInterval(() => {
    if (hero.left) {
      hero.x -= 4
    }

    if (hero.right) {
      hero.x += 4
    }

    if (hero.up) {
      hero.y -= 4
    }

    if (hero.down) {
      hero.y += 5
    }
  }, 16)

  return hero
}

class Hero {
  constructor(img, x, y, imgW, imgH, ctx) {
    this.img = img
    this.x = x
    this.y = y
    this.w = imgW
    this.h = imgH
    this.ctx = ctx

    this.status = false
  }

  draw() {
    var sliceX = this.status ? 0 : 66
    this.ctx.clearRect(0, 0, 320, 560)
    // 切割图片 从图片的(sliceX, 0) 处开始切割，切割的宽高为(this.w, this.h)，最后在画布为(this.x,this.y)的位置上画大小为(this.w, this.h)的画
    this.ctx.drawImage(this.img, sliceX, 0, this.w, this.h, this.x, this.y, this.w, this.h)
    this.status = !this.status
  }
}

// --------------------- 子弹
function bulletImg(src, canvas, hero) {
  var img = new Image()
  img.src = src
  var ctx = canvas.getContext('2d')

  var audio = new Audio('./audio/bullet.mp3')
  audio.play()

  var imgW = 48
  var imgH = 14
  var x = hero.x + hero.w / 2 - imgW / 2  // 计算子弹所在位置
  var y = hero.y - imgH

  var bullet = new Bullet(img, x, y, imgW, imgH, ctx)

  return bullet
}

class Bullet {
  constructor(img, x, y, w, h, ctx) {
    this.img = img
    this.x = x
    this.y = y
    this.w = w
    this.h = h
    this.ctx = ctx
  }

  draw() {
    // 这里不用清除画布 你需要好多的子弹对象
    this.ctx.drawImage(this.img, this.x, this.y, this.w, this.h)
  }

  move() {
    this.y -= 10
  }

  isOuter() {
    if (this.y <= 0) {
      return true
    }
    return false
  }
}