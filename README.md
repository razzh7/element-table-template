# element-fast-table配置项概览

```js
fastData: {
    isIndex: boolean, // 是否开启序号
    border: boolean, // 是否开启纵向边框
    isSelection: '' // 是否开启可选
    data: [], // 表格数据
    columns: [], // 列数据
    operation: {} // 表格有操作列时设置
}
```

## columns配置项

+ 普通列

  columns: [

   {

  ​	 prop: 'name', //对应data中的key值

  ​	 title: '姓名' ,// 设置表头名称

   }

  ]

## operation配置项

```js
operation: {
    title: '操作', // 表头名称
    fixed: 'left/right', // 操作栏定位 默认为right
    width: '' // 操作栏宽度
    btnList: [ // 按钮列表
        {
            name: '', // 按钮名称
        	type: '', // 按钮类型
            icon: '', // (选填)是否添加icon图标
            handleCb: function(){} // 事件回调函数 点击后触发
        }
    ]
}
```

handleCb的回调函数接受三个参数：

+ index -> scope.$index  从0开始
+ row -> scope.row 行内数据
+ name -> name 按钮名字