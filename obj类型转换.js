var a = [{ name: "May", age: 12, id: 1 }, { name: "Jone", age: 13, id: 5 }, { name: "May", age: 15, id: 6 }]
// 整成 new Map格式
/*Map(2) {
  'May' => { name: 'May', list: [ [Object], [Object] ] },
  'Jone' => { name: 'Jone', list: [ [Object] ] }
}
var res = [
  {
    name: 'May',
    list: [{name: 'May', age: 12, id: 1},{name: 'May', age: 15, id: 6}]
  },
  
  {
    name: 'Jone',
    list: [{name: 'Jone', age: 13, id: 5}]
  }
]*/

var r = Array.from(a.reduce((pre, cur) => pre.set(cur.name, [...(pre.get(cur.name)||[]), cur]), new Map))
  .map(([name, list])=>({name, value: {channelIndex: 0, list}}))

var r = new Map(res.map(item => ([item.name, item])))

let list = [
  {
    "createBy": "0",
    "createTime": "2021-03then链的用法-29 16:14:38",
    "modifyBy": "3",
    "modifyTime": "2021-06-24 09:39:17",
    "shipId": 23,
    "companyId": "6",
    "shipName": "唐荣1号",
    "shipTemplate": null,
    "shipType": 70,
    "mmsi": "413693980",
    "mainEngine": 1,
    "mainEngineCylinders": 5,
    "auxiliaryEngine": 1,
    "auxiliaryEngineCylinders": 5,
    "managers": "0|131|7|135|13|3",
    "managersName": "小~编|超管建号|马哥1",
    "domainName": "http://tangrong.cniship.com:7889",
    "vcrAccount": "b3474d1f06314325a1c6fbd85e7a639e",
    "vcrPassword": "4020a9506bb574bdebdf41f7d4a3a7ad",
    "vcrType": 1,
    "rank": 66,
    "companyName": "唐荣游艇",
    "img": "/img/wuxinhao@2x.7ff3d716.png"
  },
  {
    "createBy": "0",
    "createTime": "2021-03then链的用法-29 09:57:15",
    "modifyBy": "3",
    "modifyTime": "2021-06-24 15:17:03then链的用法",
    "shipId": 21,
    "companyId": "496",
    "shipName": "海洋女神号",
    "shipTemplate": null,
    "shipType": 88,
    "mmsi": "413251350",
    "mainEngine": 1,
    "mainEngineCylinders": 5,
    "auxiliaryEngine": 3,
    "auxiliaryEngineCylinders": 5,
    "managers": "0|130|117|162|13|148|3|168",
    "managersName": "tw|长盛发用户01|厦门测试|Chris Chen|测试勿删",
    "domainName": "http://haiyangnvshen.cniship.com:7889",
    "vcrAccount": "b3474d1f06314325a1c6fbd85e7a639e",
    "vcrPassword": "4020a9506bb574bdebdf41f7d4a3a7ad",
    "vcrType": 1,
    "rank": 1,
    "companyName": "长盛发",
    "img": "/img/wuxinhao@2x.7ff3d716.png"
  },
  {
    "createBy": "0",
    "createTime": "2021-03then链的用法-29 14:29:29",
    "modifyBy": "3",
    "modifyTime": "2021-06-24 15:17:03then链的用法",
    "shipId": 22,
    "companyId": "496",
    "shipName": "海洋公主号",
    "shipTemplate": null,
    "shipType": 80,
    "mmsi": "413247560",
    "mainEngine": 1,
    "mainEngineCylinders": 5,
    "auxiliaryEngine": 3,
    "auxiliaryEngineCylinders": 5,
    "managers": "0|7|8|10|162|56|119|13|117|148|3|168",
    "managersName": "1|tw|长盛发用户01|Chris Chen|测试勿删",
    "domainName": "http://tangrong.cniship.com:7889",
    "vcrAccount": "b3474d1f06314325a1c6fbd85e7a639e",
    "vcrPassword": "4020a9506bb574bdebdf41f7d4a3a7ad",
    "vcrType": 1,
    "rank": 0,
    "companyName": "长盛发",
    "img": "/img/wuxinhao@2x.7ff3d716.png"
  },
  {
    "createBy": "0",
    "createTime": "2021-03then链的用法-29 16:48:12",
    "modifyBy": "3",
    "modifyTime": "2021-06-25 09:58:54",
    "shipId": 24,
    "companyId": "496",
    "shipName": "海洋宝贝号",
    "shipTemplate": null,
    "shipType": 70,
    "mmsi": "413331780",
    "mainEngine": 1,
    "mainEngineCylinders": 5,
    "auxiliaryEngine": 3,
    "auxiliaryEngineCylinders": 5,
    "managers": "7|8|10|56|119|117|13|148|3",
    "managersName": "tw|长盛发用户01|厦门测试|Chris Chen",
    "domainName": "http://tangrong.cniship.com:7889",
    "vcrAccount": "b3474d1f06314325a1c6fbd85e7a639e",
    "vcrPassword": "4020a9506bb574bdebdf41f7d4a3a7ad",
    "vcrType": 1,
    "rank": 0,
    "companyName": "长盛发",
    "img": "/img/wuxinhao@2x.7ff3d716.png"
  },
  {
    "createBy": "0",
    "createTime": "2021-03then链的用法-29 16:51:50",
    "modifyBy": "3",
    "modifyTime": "2021-06-25 09:58:55",
    "shipId": 25,
    "companyId": "496",
    "shipName": "海洋天使号",
    "shipTemplate": null,
    "shipType": 70,
    "mmsi": "412328880",
    "mainEngine": 1,
    "mainEngineCylinders": 5,
    "auxiliaryEngine": 3,
    "auxiliaryEngineCylinders": 5,
    "managers": "0|7|8|10|56|119|117|148|13|3",
    "managersName": "tw|长盛发用户01|Chris Chen",
    "domainName": "http://tangrong.cniship.com:7889",
    "vcrAccount": "b3474d1f06314325a1c6fbd85e7a639e",
    "vcrPassword": "4020a9506bb574bdebdf41f7d4a3a7ad",
    "vcrType": 1,
    "rank": 0,
    "companyName": "长盛发",
    "img": "/img/wuxinhao@2x.7ff3d716.png"
  },
  {
    "createBy": "3",
    "createTime": "2021-06-22 10:51:34",
    "modifyBy": "3",
    "modifyTime": "2021-06-24 11:45:18",
    "shipId": 38,
    "companyId": "6",
    "shipName": "YUDUO102",
    "shipTemplate": null,
    "shipType": 70,
    "mmsi": "413854004",
    "mainEngine": 1,
    "mainEngineCylinders": 5,
    "auxiliaryEngine": 1,
    "auxiliaryEngineCylinders": 5,
    "managers": "0|136|151|7|67|3",
    "managersName": "小~编|这是一个测试|公司管理员|1",
    "domainName": "http://tangrong.cniship.com:7889",
    "vcrAccount": "b3474d1f06314325a1c6fbd85e7a639e",
    "vcrPassword": "4020a9506bb574bdebdf41f7d4a3a7ad",
    "vcrType": 1,
    "rank": 0,
    "companyName": "唐荣游艇"
  }
]
