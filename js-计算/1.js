// options 数据
const options = [
  {
    "value": "8408",
    "label": "主机",
    "children": [
      {
        "value": "8408-01",
        "label": "机座",
        "children": [
          {
            "value": "8408-01-0001",
            "label": "主轴承瓦"
          },
          {
            "value": "8408-01-0002",
            "label": "主轴承螺栓螺母"
          },
          {
            "value": "8408-02-0001",
            "label": "气缸套"
          }
        ]
      },
      {
        "value": "8408-02",
        "label": "缸体总成",
        "children": [
          {
            "value": "8408-02-0002",
            "label": "O型圈"
          },
          {
            "value": "8408-02-0003",
            "label": "缸盖螺栓螺母"
          },
          {
            "value": "8408-02-0004",
            "label": "密封圈"
          },
          {
            "value": "8408-02-0005",
            "label": "活塞清洁环"
          },
          {
            "value": "8408-02-0006",
            "label": "缸盖总成"
          },
          {
            "value": "8408-02-0007",
            "label": "垫片"
          }
        ]
      },
      {
        "value": "8408-03",
        "label": "油机-3"
      }
    ]
  },
  {
    "value": "8501",
    "label": "发电机",
    "children": [
      {
        "value": "8501-01",
        "label": "缸体总成",
        "children": [
          {
            "value": "8501-01-0001",
            "label": "缸套"
          },
          {
            "value": "8501-01-0002",
            "label": "缝隙密封图"
          }
        ]
      },
      {
        "value": "8501-02",
        "label": "水泵总成",
        "children": [
          {
            "value": "8501-02-0001",
            "label": "淡水泵多槽皮带"
          },
          {
            "value": "8501-02-0002",
            "label": "海水泵皮带"
          }
        ]
      }
    ]
  }
];

// 查询函数
function findPath(options, targetValue, path = []) {
  for (let option of options) {
    // 如果找到目标值，则将当前节点的值添加到路径中并返回路径
    if (option.value === targetValue) {
      path.push(option.value);
      return path;
    }
    
    // 如果当前节点有子节点，则递归地调用 findPath 函数
    if (option.children) {
      const result = findPath(option.children, targetValue, [...path, option.value]);
      if (result) {
        return result;
      }
    }
  }
  
  // 如果未找到目标值，则返回 null
  return null;
}

// 测试查询
const obj = {
  "code": "8408-02-0002",
  "spareName": "O型圈",
  "parentCode": "8408-02",
  "sort": 1,
  "deviceModel": null,
  "children": null
};

const resultPath = findPath(options, obj.code);
console.log(resultPath); // 输出: ['8408-02', '8408-02-0002']
