const inventory =
  [
    { name: "芦笋", type: "蔬菜", quantity: 5 },
    { name: "香蕉", type: "水果", quantity: 0 },
    
    { name: "樱桃", type: "水果", quantity: 5 },
    { name: "鱼", type: "肉", quantity: 22 }
  ]

const result = Object.groupBy(inventory, ({type}) => type);

console.log('result --->', result)
/*
*
*
*
{
 "蔬菜": [ { "name": "芦笋", "type": "蔬菜", "quantity": 5 } ],
 "水果": [ { "name": "香蕉", "type": "水果", "quantity": 0 }, { "name": "樱桃", "type": "水果", "quantity": 5 } ],
 "肉": [ { "name": "鱼", "type": "肉", "quantity": 22 } ]
}
*
* */
