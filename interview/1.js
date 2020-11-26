// 谈谈同步IO和异步IO和它们的应用场景
// Promise的状态
// 页面打印
function A() {
  this.n = 0
}

A.prototype.callMe = function () {
  console.log('this.n -> ', this.n)
}

let a = new A
document.addEventListener('click', a.callMe)
document.addEventListener('click', () => {
   a.callMe()
})

document.addEventListener('click', function () {
  a.callMe()
})

// 实现bfs返回树汇总值为value的节点、 bfs(root, value)
// 事件循环相关

// 实现一个debounce函数，要求能够对一个事件循环内的所有调用进行防抖，例如
/*
*
* F(){
*   console.log(1)
* }
* G = debounce(F)
* function A(){
*   G()
*   G()
*   G()
* }
*
* A() 只打印一次
*
* setTimeout(G, 0)
* G()
*
* 则会打印两次
* */

// 原型链相关
/*
*
* function G(){}

function F(){
    return new G()
}

a = new F()
a instanceof F
* */

// background-size: cover 和contain的区别
// 访问一个http请求的过程，http1.1和2的区别