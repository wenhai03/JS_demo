~ function () {
  /*
   * myUnique : 实现数组去重
   *   @params
   *   @return
   *      [Array] 去重后的数组
   * by 666 on 20190805
   */
  function myUnique() {
    // 此时没有传递要操作的ARY进来，但是方法中的THIS是当前要操作的数组，因为是该数组调用该方法：ARY.MYUNIQUE()
    let obj = {};
    for (let i = 0; i < this.length; i++) {
      let item = this[i];
      // 如果obj中没有item这一项，就是undefined，不等于undefined，说明有了
      if (typeof obj[item] !== 'undefined') {
        // （1）删除重复项，会把这一项后面的所有项都往前提一位，性能差；
        // （2）下一轮循环，i++，就会空出一位，防止出现塌陷问题，i--；
        // （3）最后一项拿过来，替换当前项，当前项就不能用了，然后把最后一项删除
        this[i] = this[this.length - 1];
        this.length--;
        i--;
        continue; // 存在了，就不往里存了
      }
      obj[item] = item;
    }
    obj = null;
    // 保证当前方法执行完返回的结果依然是ARRAY类的一个实例
    return this;
  }
  // => 扩展到内置类的原型上
  Array.prototype.myUnique = myUnique;
}();

var ary = [12, 23, 13, 12, 23, 24, 34, 13, 23];
var r = ary.myUnique()
console.log(r)