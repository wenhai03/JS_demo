class Node {
  constructor (data) {
    this.data = data
    this.next = null
  }
}

class LinkedList {
  constructor () {
    this.length = 0
    this.head = null
  }

  append (data) {
    // 1、创建新节点
    const newNode = new Node(data)

    // 2、追加新节点
    if (!this.head || !this.length) {
      this.head = newNode
    } else {
      let current = this.head
      // 当 currentNode.next 不为空时，
      // 循序依次找最后一个节点，即节点的 next 为 null 时，就找到最后一个节点
      while (current.next !== null) {
        current = current.next
      }
      // 最后一个节点的 next 指向新节点
      current.next = newNode
    }
    // 3、追加完新节点后，链表长度 + 1
    this.length++;
  }

  insert (position, data) {
    // position 新插入节点的位置
    // position = 0 表示新插入后是第一个节点
    // position = 1 表示新插入后是第二个节点，以此类推

    // 1、对 position 进行越界判断，不能小于 0 或大于链表长度
    if (position < 0 || position > this.length) return false;

    // 2、创建新节点
    const newNode = new Node(data)
    // 3、插入节点
    if (position === 0) {
      // position = 0 的情况
      // 让新节点的 next 指向 原来的第一个节点，即 head
      newNode.next = this.head;

      // head 赋值为 newNode
      this.head = newNode;
    }
    else {
      // 0 < position <= length 的情况

      // 初始化一些变量
      let currentNode = this.head; // 当前节点初始化为 head
      let previousNode = null; // head 的 上一节点为 null
      let index = 0; // head 的 index 为 0

      // 在 0 ~ position 之间遍历，不断地更新 currentNode 和 previousNode
      // 直到找到要插入的位置
      while (index++ < position) {
        previousNode = currentNode;
        currentNode = currentNode.next;
      }

      // 在当前节点和当前节点的上一节点之间插入新节点，即它们的改变指向
      newNode.next = currentNode;
      previousNode.next = newNode;
    }

    // 更新链表长度
    this.length++;
    return newNode;
  }


  // getData(position) 获取指定位置的 data
  getData(position) {
    // 1、position 越界判断
    if (position < 0 || position >= this.length) return null;

    // 2、获取指定 position 节点的 data
    let currentNode = this.head;
    let index = 0;

    while (index++ < position) {
      currentNode = currentNode.next;
    }

    // 3、返回 data
    return currentNode.data;
  }

  // indexOf(data) 返回指定 data 的 index，如果没有，返回 -1。
  indexOf(data) {
    let currentNode = this.head;
    let index = 0;

    while (currentNode) {
      if (currentNode.data === data) {
        return index;
      }
      currentNode = currentNode.next;
      index++;
    }

    return -1;
  }
}

const linkedList = new LinkedList();

linkedList.append('AA');
linkedList.append('BB');
linkedList.append('CC');

// 测试 insert 方法
linkedList.insert(0, '123');
linkedList.insert(2, '456');


// 测试 getData 方法
debugger
console.log(linkedList.getData(0)); //--> 123
console.log(linkedList.getData(1)); //--> AA
/*
 // 测试 append 方法
 linkedList.append('AA');
 linkedList.append('BB');
 linkedList.append('CC');*/
