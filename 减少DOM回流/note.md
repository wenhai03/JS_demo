```
/* for (let i = 0; i < 10; i++) {
        let span = document.createElement('span');
        span.innerHTML = i;
        box.appendChild(span);
    } */
    /* let str = ``;
    for (let i = 0; i < 10; i++) {
        str += `<span>${i}</span>`;
    }
    box.innerHTML = str; */
    //=>文档碎片：存储文档的容器
    /* let frg = document.createDocumentFragment();
    for (let i = 0; i < 10; i++) {
        let span = document.createElement('span');
        span.innerHTML = i;
        frg.appendChild(span);
    }
    box.appendChild(frg);
    frg = null; */
    
    /* DOM操作的读写分离 */
    //=>现代版浏览器都有“渲染队列”机制：发现某一行要修改元素的样式，不立即渲染，
    而是看看下一行，如果下一行也会改变样式，则把修改样式的操作放到“渲染队列中”...一直到不在是修改样式的操作后，整体渲染一次，引发一次回流
```
