/*
* 实现promise.or方法
* 参数为promis数组
* 返回数组汇总索引靠前成功的res
* 当n-1个promise失败时，直接返回它
*
* 例如 [fail, success, fail, success]，返回promise[1]的结果
* 类似或运算: A || B || C || D
*
* */
Promise.or = function(promises) {
  let length = promises.length;
  let i = 0;
  return new Promise((resolve, reject) => {
    help(resolve, reject);
  })
  
  function help(resolve, reject) {
    promises[i].then(res => {
      resolve(res);
    }).catch(e => {
      if (i === length - 1) return reject(e);
      else {
        i++;
        help(resolve, reject);
      }
    })
  }
}