const arr = [
  {
    name: '北京',
    isBottom: 1,
    children: [
      {
        name: '北京1',
        isBottom: 1,
        children: [
          {
            name: '北京2-1',
            isBottom: 0,
            children: null
          },
          {
            name: '北京2-2',
            isBottom: 1,
            children: null
          }
        ]
      }
    ]
  }
]
// isBottom>0的时候，将同级的children变成[{}],否则是[]
// children有数据不用管
const areaFilterValue = (data) => {
  return data.map((item) => {
    return {
      ...item,
      children:
        item.isBottom > 0 && item.children?.length > 0
        ? areaFilterValue(item.children)
        : item.isBottom > 0
          ? [{}]
          : [],
    }
  })
}


const res = areaFilterValue(arr)
console.log(res)