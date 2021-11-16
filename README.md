# Element-fast-table

已实现：

JSON配置多选列、序号列、具体内容、自定义列（添加图标+内容）、筛选列、操作栏

Element-fast-table采用`$attrs`和`$listeners`可用在<fast-table />上使用el-table的全部属性和事件，例如：

```js
<fast-table border stripe @filter-change="filterChange"></fast-table>
```

设置border和stripe两个属性后表格将开启纵边框和条纹

@filter-change将在表格筛选条件发生变化的时候调用

## 配置概览

fast-table提供两个配置选项：

```js
fastData: []  // table所需数据 (可自定义名字）
columns: [] // 列数据
```

## columns配置项

handleCb的回调函数接受三个参数：

+ index -> scope.$index  从0开始
+ row -> scope.row 行内数据
+ name -> name 按钮名字

handleCb的使用可配合`el-dialog`实现弹框显示等

```js
columns: [
  {
    type: "selection" // 是否开启多选
  },
  {
    // 是否开启序号
    //isPagination是否开启分页变化，序号自增
    // 需在fast-table tag中传入：curPage和pageSize（当前页数，当前页显示数据条数）
    isIndex: { type: "index", width: 80, label: "序号", isPagination: false} 
  },
  {
   // column列中只有文字内容
    attrs: { label: "姓名", prop: "name" }
  },
  {
  	// 自定义列，可根据JSX自定义column内容
  	customColumn: { label: "自定义列",
                		render: (h,params) => {
                    	return (JSX语法)
                	}}
	},
  {
    // 筛选列
    // filters: 筛选列数组
    // fiterMethod: 筛选方法
    filter: { label: "筛选列", prop: "salers", filters: [text: "",value: ""],
            filterMethod: function(){} }
  }
  {
    operation: { // 操作栏配置项
      label: "操作", // 表头名字
      width: 260, // 自定义列宽
      btnList: [
        {
          name: "查看", // 按钮名称
          type: "primary", // 按钮类型
          icon: "el-icon-check" // (选填)是否添加icon图标
          handleCb: function(){} // 事件回调函数 点击后触发
        }
      ]
      
    }
  }
]
```
## 界面
![avatar](https://github.com/rzhAvenir/element-table-template/blob/dev/img/el-table.png)









