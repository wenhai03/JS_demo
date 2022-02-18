### 什么时候进入检查点，清空微任务？
```
当前调用栈清空的时候

// 栈 先进来的后出去  栈内存 stack
// 队列 [].push  先进先出
```

#### 浏览器在执行script脚本的时候就是一个宏任务
```
宏任务: ui渲染 script脚本  事件  ajax  setTimeout
微任务: promise.then   mutationObserver
```

```
 button.addEventListener('click', () => {
    Promise.resolve().then(() => console.log('M1'));
    console.log('L1');//此时堆栈清空
});
button.addEventListener('click', () => {
    Promise.resolve().then(() => console.log('M2'));
    console.log('L2');
});
// L1 L2 M1 M2
button.click();
// 堆栈在执行完Listener1后没有清空。还在Script中
```

