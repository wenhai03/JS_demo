```
atan2 方法返回一个 -pi 到 pi 之间的数值，表示点 (x, y) 对应的偏移角度。
这是一个逆时针角度，以弧度为单位，正X轴和点 (x, y) 与原点连线 之间。
注意此函数接受的参数：先传递 y 坐标，然后是 x 坐标。

atan2 接受单独的 x 和 y 参数，而 atan 接受两个参数的比值。

由于 atan2 是 Math 的静态方法，所以应该像这样使用：Math.atan2()，而不是作为你创建的 Math 实例的方法。

```
