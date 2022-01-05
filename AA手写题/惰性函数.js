// 惰性函数的本质就是函数重写

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


function b(){
  console.log('b');
  b1 = function(){
    console.log('other b');
  }
}
b(); // 执行第一个b函数
b1();// 执行第二个函数

