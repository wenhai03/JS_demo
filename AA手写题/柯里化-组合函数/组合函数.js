function compose(...fns) {
  return function (x) {
    return fns.reduceRight((arg, fn)=> {
      return fn(arg)
    }, x)
  }
}

function add(a) {
  return a + 1;
}

function double(x) {
  return x * 2;
}

const combinedFn = compose(add, double)

const res = combinedFn(5)

console.log('res -> ', res)

