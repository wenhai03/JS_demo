/*
* DOM2事件绑定
*  元素.addEventListener()
*  元素.attachEvent()
* */

function emit(element, type, func) {
  if (element.addEventListener) {
    emit = function (element, type, func) {
      element.addEventListener(type, func, false)
    }
  } else if (element.attachEvent) {
    emit = function (element, type, func) {
      element.attachEvent('on' + type, func)
    }
  } else {
    emit = function (element, type, func) {
      element['on' + type] = func
    }
  }
  
  emit(element, type, func)
}

emit(box, 'click', fn1)
emit(box, 'click', fn2)


/*
*
* 未优化的代码 emitDemo
*
* */
function emitDemo(element, type, func) {
  if (element.addEventListener) {
    element.addEventListener(type, func, false)

  } else if (element.attachEvent) {
    element.attachEvent(type, func, false)
  } else {
    element['on' + type] = func
  }
}

