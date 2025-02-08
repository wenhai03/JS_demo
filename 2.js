const tableList = [
  { billNo: '11', acNo: '123' },
  { billNo: '11', acNo: '222' },
  { billNo: '22', acNo: 'aaa' },
  { billNo: '33', acNo: 'bbb' },
]
const result = [
  {
    billNo: '11', acList: [
      { acNo: '123', },
      { acNo: '22', }
    ]
  },
  
  {
    billNo: '22', acList: [
      { acNo: 'aaa', },
    ]
  },
  
  {
    billNo: '33', acList: [
      { acNo: 'bbb', },
    ]
  },
]
