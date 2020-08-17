##async await的优点
1.解决了回调地狱的问题
2.支持并发执行
3.可以添加返回值 return 
4.可以在代码中添加try、catch捕获错误

##async/await中错误处理
```
async function fn() {
  try {
    await Promise.reject('1');
  } catch (err) {
    console.log(err);
  }
}
fn(); // 1


```
##用promise的catch来做错误捕捉
```
async function fn() {
    await Promise.reject('1').catch((err) => {
        console.log(err);
    });
}
fn(); // 1

```