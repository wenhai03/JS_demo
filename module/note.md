##### export {<变量>}这种方式一般称为 命名式导出 或者 具名导出，导出的是一个变量的引用。
##### export default这种方式称为 默认导出 或者 匿名导出，导出的是一个值。


* ES6 模块的设计思想是尽量的静态化，使得编译时就能确定模块的依赖关系，以及输入和输出的变量
* ES6 Module默认目前还没有被浏览器支持，需要使用babel
* CommonJS 模块输出的是一个值的拷贝,ES6 模块输出的是值的引用
* CommonJS 模块是运行时加载，ES6 模块是编译时输出接口


##### 导入立刻导出
* export * from './x'
* export { y } from './y' // 在文件中导出部分内容
* console.log(y) // 没有使用import 才会有声明的效果


* ES5声明变量只有两种方式：var和function
* ES6有let、const、import、class再加上ES5的var、function共有六种声明变量的方式
