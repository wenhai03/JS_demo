function mySetTimeout(fn, time) {
  let timer = null
  
  function interval() {
    fn()
    timer = setTimeout(interval, time)
  }
  interval()

  mySetTimeout.cancel = () => {
    clearTimeout(timer)
  }
}

mySetTimeout(() => {
  console.log('111')
}, 1000)

setTimeout(() => {
  mySetTimeout.cancel()
}, 5000)

/*
* 扩展：我们能反过来使用 setinterval 模拟实现 settimeout 吗？
* */
// const mySetTimeout = (fn, time) => {
//   let timer = setInterval(() => {
//     clearInterval(timer)
//     fn()
//   }, time)
// }
//
// mySetTimeout(() => {
//   console.log('222 -> ')
// }, 1000)

/*
* 为什么要用 settimeout 模拟实现 setinterval？setinterval 的缺陷是什么？
* */

/*
*
* 每个 setTimeout 产生的任务会直接 push 到任务队列中 而 setInterval
* 在每次把任务 push 到任务队列前，都要进行一下判断看上次的任务是否仍在队列中，如果有则不添加，没有则添加
* */

/*
* 在JS 事件循环之宏任务和微任务中讲到过，setInterval 是一个宏任务。用多了你就会发现它并不是准确无误。

推入任务队列后的时间不准确：在 setInterval 被推入任务队列时，如果在它前面有很多任务或者某个任务等待时间较长比如网络请求等，那么这个定时器的执行时间和我们预定它执行的时间可能并不一致。
函数操作耗时过长导致的不准确：考虑极端情况，假如定时器里面的代码需要进行大量的计算(耗费时间较长)，或者是 DOM 操作。这样一来，花的时间就比较长，有可能前一次代码还没有执行完，后一次代码就被添加到队列了。也会到时定时器变得不准确，甚至出现同一时间执行两次的情况
*
* */



/*
* 定时器指定的时间间隔，表示的是何时将定时器的代码添加到消息队列，而不是何时执行代码。所以真正何时执行代码的时间是不能保证的，取决于何时被主线程的事件循环取到，并执行。
*
*
* setInterval 有两个缺点：
使用 setInterval 时，某些间隔会被跳过；
可能多个定时器会连续执行；
* */
