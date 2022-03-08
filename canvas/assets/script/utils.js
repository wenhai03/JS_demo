let C = {}

// 获取鼠标在元素上的坐标
C.getOffset = function (ele) {
  const mouse = {x: 0, y: 0}
  ele.addEventListener('mousemove', function (e) {
    // console.log('e.target left -> ', e.target.left)
    // console.log('e.target top -> ', e.target.getBoundingClientRect())
    const {x, y} = C.eventWrapper(e)
    mouse.x = x
    mouse.y = y
  })
  return mouse
}

// 坐标系转换
C.eventWrapper = function (ev) {
  const {pageX, pageY, target} = ev
  // console.log('ev -> ', ev.target)
  // console.log('pageX -> ', pageX)
  // console.log('pageY -> ', pageY)
  const {left,top} = target.getBoundingClientRect()
  return {
    x: pageX - left,
    y: pageY - top
  }
}
