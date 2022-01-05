```javascript
// break完全终止循环
var str = "hello";
for (var item of str){
  if(item ==="l"){
    break
  }
  console.log(item); // h e
}

```


````javascript
// continue只是终止本次循环，接着还执行后面的循环
var str = "hello";
for (var item of str){
  if(item ==="l"){
    continue
  }
 console.log(item); // h e o
}

````
