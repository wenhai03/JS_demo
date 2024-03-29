* 栈也是是存放数据的一种内存区域
* 程序运行的时候，需要内存空间存放数据。一般来说,系统会划分出两种不同的内存空间：一种叫做stack(栈)，另一种叫做heap(堆)
    * stack是有结构的，每个区块按照一定次序存放，可以明确知道每个区块的大小
    * heap是没有结构的，数据可以任意存放。因此，stack的寻址速度要快于heap
* 只要是局部的、占用空间确定的数据，一般都存放在stack里面，否则就放在heap里面,所有的对象都存放在heap


### 执行上下文分类
* JS代码在执行的时候会进入一个执行上下文，可以理解为当前代码的运行环境
* 在JS中运行环境主要分为全局执行上下文环境和函数环执行上下文环境
    * 全局执行上下文只有一个，在客户端中一般由浏览器创建，也就是我们熟知的window对象，我们能通过this直接访问到它
    * window对象还是var声明的全局变量的载体。我们通过var创建的全局对象，都可以通过window直接访问


### 多个执行上下文
* 在JS执行过程会产出多个执行上下文,JS引擎会有栈来管理这些执行上下文
* 执行上下文栈(下文简称执行栈)也叫调用栈，执行栈用于存储代码执行期间创建的所有上下文，具有LIFO（Last In First Out后进先出，也就是先进后出）的特性
* 栈底永远是全局上下文，栈顶为当前正在执行的上下文
* 当开启一个函数执行时会生成一个新的执行上下文并放入调用栈，执行完毕后会自动出栈


### 堆栈内存释放问题
