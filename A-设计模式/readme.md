# 1、设计模式的六大原则、

## 1.1、设计模式基于六大原则：

- 1、开闭原则:

一个软件实体如类、模块和函数应该对修改封闭，对扩展开放。

- 2、单一职责原则：

一个类只做一件事，一个类应该只有一个引起它修改的原因。

- 3、里氏替换原则：
  
子类应该可以完全替换父类。也就是说在使用继承时，只扩展新功能，而不要破坏父类原有的功能

- 4、依赖倒置原则：
  
细节应该依赖于抽象，抽象不应依赖于细节。把抽象层放在程序设计的高层，并保持稳定，程序的细节变化由低层的实现层来完成。
- 5、迪米特法则：
  
又名「最少知道原则」，一个类不应知道自己操作的类的细节，换言之，只和朋友谈话，不和朋友的朋友谈话。
- 6、接口隔离原则：
  
客户端不应依赖它不需要的接口。如果一个接口在实现时，部分方法由于冗余被客户端空实现，则应该将接口拆分，让实现类只需依赖自己需要的接口方法。

>设计模式一共有 23 种

## 1.2、设计模式分类

### 一.创建型模式：

这些设计模式提供了一种在创建对象的同时隐藏创建逻辑的方式，而不是使用 new 运算符直接实例化对象。这使得程序在判断针对某个给定实例需要创建哪些对象时更加灵活.

- 1.工厂模式（Factory Pattern）
- 2.抽象工厂模式（Abstract Factory Pattern）
- 3.单例模式（Singleton Pattern）
- 4.建造者模式（Builder Pattern）
- 5.原型模式（Prototype Pattern

### 二.结构型模式：
   
这些设计模式关注类和对象的组合。继承的概念被用来组合接口和定义组合对象获得新功能的方式。

- 1.适配器模式（Adapter Pattern）
- 2.桥接模式（Bridge Pattern）
- 3.过滤器模式（Filter、Criteria Pattern）
- 4.组合模式（Composite Pattern）
- 5.装饰器模式（Decorator Pattern）
- 6.外观模式（Facade Pattern）
- 7.享元模式（Flyweight Pattern）
- 8.代理模式（Proxy Pattern）

### 三.行为型模式:

这些设计模式特别关注对象之间的通信。

- 1.责任链模式（Chain of Responsibility Pattern）
- 2.命令模式（Command Pattern）
- 3.解释器模式（Interpreter Pattern）
- 4.迭代器模式（Iterator Pattern）
- 5.中介者模式（Mediator Pattern）
- 6.备忘录模式（Memento Pattern）
- 7.观察者模式（Observer Pattern）
- 8.状态模式（State Pattern）
- 9.空对象模式（Null Object Pattern）
- 10.策略模式（Strategy Pattern）
- 11.模板模式（Template Pattern）
- 12.访问者模式（Visitor Pattern）

### 四.J2EE 模式:

这些设计模式特别关注表示层。这些模式是由 Sun Java Center 鉴定的。

- 1.MVC 模式（MVC Pattern）
- 2.业务代表模式（Business Delegate Pattern）
- 3.组合实体模式（Composite Entity Pattern）
- 4.数据访问对象模式（Data Access Object Pattern）
- 5.前端控制器模式（Front Controller Pattern）
- 6.拦截过滤器模式（Intercepting Filter Pattern）
- 7.服务定位器模式（Service Locator Pattern）
- 8.传输对象模式（Transfer Object Pattern）

>表格总结设计模式的分类和区别

|序号|描述|包括|
|:----:|:----:|:---:|
|1|创建型模式：这些设计模式提供了一种在创建对象的同时隐藏创建逻辑的方式，而不是使用 new 运算符直接实例化对象。这使得程序在判断针对某个给定实例需要创建哪些对象时更加灵活。| 工厂模式（Factory Pattern）抽象工厂模式（Abstract Factory Pattern）单例模式（Singleton Pattern）建造者模式（Builder Pattern）原型模式（Prototype Pattern）|
|2|结构型模式：这些设计模式关注类和对象的组合。继承的概念被用来组合接口和定义组合对象获得新功能的方式。|适配器模式（Adapter Pattern）桥接模式（Bridge Pattern）过滤器模式（Filter、Criteria Pattern）组合模式（Composite Pattern）装饰器模式（Decorator Pattern）外观模式（Facade Pattern）享元模式（Flyweight Pattern）代理模式（Proxy Pattern）|
|3|	行为型模式:这些设计模式特别关注对象之间的通信。|责任链模式（Chain of Responsibility Pattern）命令模式（Command Pattern）解释器模式（Interpreter Pattern）迭代器模式（Iterator Pattern）中介者模式（Mediator Pattern）备忘录模式（Memento Pattern）观察者模式（Observer Pattern）状态模式（State Pattern）空对象模式（Null Object Pattern）策略模式（Strategy Pattern）模板模式（Template Pattern）访问者模式（Visitor Pattern）|
|4|J2EE 模式:这些设计模式特别关注表示层。这些模式是由 Sun Java Center 鉴定的。|MVC 模式（MVC Pattern）业务代表模式（Business Delegate Pattern）组合实体模式（Composite Entity Pattern）数据访问对象模式（Data Access Object Pattern）前端控制器模式（Front Controller Pattern）拦截过滤器模式（Intercepting Filter Pattern）服务定位器模式（Service Locator Pattern）传输对象模式（Transfer Object Pattern）|

## 1.3、设计模式之间的关系

用一个图片来整体描述一下设计模式之间的关系：

![https://www.runoob.com/wp-content/uploads/2014/08/the-relationship-between-design-patterns.jpg](https://www.runoob.com/wp-content/uploads/2014/08/the-relationship-between-design-patterns.jpg)
