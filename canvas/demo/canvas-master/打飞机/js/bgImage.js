function loadImage(url, canvas) {
  var audio = new Audio()
  audio.src = './audio/game_music.mp3'
  audio.pause = false
  audio.loop = true
  audio.play()

  var ctx = canvas.getContext('2d')
  var img = new Image()
  img.src = url

  img.onload = function () {
    move()
  }

  var speed = 4
  var offsetY = 0
  function move() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.save()

    ctx.translate(0, offsetY)
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height)
    ctx.drawImage(img, 0, -canvas.height, canvas.width, canvas.height)

    offsetY += speed

    if (offsetY > canvas.height) {
      offsetY = 0
    }

    ctx.restore()

    window.requestAnimationFrame(move)
  }

}