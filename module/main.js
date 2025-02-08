import * as counter from './counter.js'
import { changeObj, count, increment } from './counter.js'

const { count: c, obj: o } = counter

increment()
counter.changeObj()

console.log('count --->', count)
console.log('counter.count --->', counter.count)
console.log('c --->', c)
console.log('o oos--->', counter.obj===o)
console.log('o--->', o)
