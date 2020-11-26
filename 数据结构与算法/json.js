const data = [
  {
    name: 'a',
    children: [
      { name: 'b', children: [{ name: 'e' }] },
      { name: 'c', children: [{ name: 'f' }] },
      { name: 'd', children: [{ name: 'g' }] },
    ],
  },
  {
    name: 'a2',
    children: [
      { name: 'b2', children: [{ name: 'e2' }] },
      { name: 'c2', children: [{ name: 'f2' }] },
      { name: 'd2', children: [{ name: 'g2' }] },
    ],
  }
]

function getName2(data) {
  let result = [];
  let queue = data;
  while (queue.length > 0) {
    [...queue].forEach(child => {
      queue.shift();
      result.push(child.name);
      child.children && (queue.push(...child.children));
    });
  }
  return result.join(',');
}

console.log(getName2(data))


/*
var json = {
  a: {b: {}},
  d: {e: 2}
}

var path = ['a', 'b', 'c']

var p = json
path.forEach(k => {
  p = p[k]
})

console.log('p -> ', p)*/
