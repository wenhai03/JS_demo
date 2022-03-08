/*
* 过滤空值
使用 filter() 过滤 “空” 值，如 null、undefined 或空字符串，可以使用 .filter(Boolean) 的缩写方法；
它将所有空值转为 false 并从列表中删除它们
* */
const groceries = ['apple', null, 'milk', undefined, 'bread', '']
const cleanList = groceries.filter(Boolean)

console.log(cleanList)
// ['apple', 'milk', 'bread']

/*
* 分隔数字
对大数字使用分隔符号，将极大的提高可读性；这是 ES12 的新特性
* */
const bigNumber = 1_000_000
console.log(bigNumber)
// 1000000

/*
* 箭头函数直接返回对象
* */
const createPerson = (age, name, nationality) => ({
  age,
  name,
  nationality,
})
const caroline = createPerson(27, 'Caroline', 'US')
console.log(caroline)
// {
//   age: 27,
//   name: 'Caroline'
//   nationality: 'US',
// }

/*
* await 链条
* */
const chainDirectly = (await fetch('https://www.people.com'))
  .filter(age => age > 20)
  .filter(nationality => nationality === 'NL')


