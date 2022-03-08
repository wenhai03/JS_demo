```
使用场景：
	1. jQuery中只有一个$
	2. react 中的reactElement()方法
	
class jQuery  {
    constructor(selector) {
        this.selector = selector
    }
    css() {
        console.log('css 操作')
    }
}

window.$ = function(selector) {
    return new jQuery(selector)  // 这里就是工厂，外部调用不用知道jQuery的实现
}
$('body').css()

```

```
// 单例模式：只能实例化一个对象，例子中是在getInstance中实例化，其他地方就不需要调用
class LoginForm {
    constructor() {
        this.state = true
    }
    show() {
        if(this.state) {
            console.log('已经显示了')
            return
        }
        this.state = true
        console.log('显示成功')
    }
    hide() {
        if(!this.state) {
            console.log('已经隐藏')
            return
        }
        this.state = false
        console.log('隐藏成功')
    }
}
LoginForm.getInstance = (function() {
    let instance
    return function() {
        if(!instance) {
            instance = new LoginForm()
        }
        return instance
    }
})()

let a1 = LoginForm.getInstance()
a1.show()
let a2 = LoginForm.getInstance()
a2.hide()

```

```
使用场景
	1. 封装旧接口
	2. vue compputed属性

class Adaptee {
    sRequest() {
        return '德国插头标准'
    }
}
class Target {
    constructor() {
        this.adaptee = new Adaptee()
    }
    request() {
        let info = this.adaptee.sRequest()
        return `${info} 转换为 中国插头标准`
    }
}
let target = new Target()
console.log(target.request())

```

```
1. 第三方库：core-decorators（https://github.com/jayphelps/core-decorators）
2. 为对象添加新功能，不改变其原有的结构和功能
3. 例子：https://blog.csdn.net/zhuanyemanong/article/details/86661495
4. 例子：https://www.jianshu.com/p/398f0e8f2699

```
