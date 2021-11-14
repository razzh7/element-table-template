# Element-fast-table

下一个目标：实现el-table-column中的自定义内容

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

columns列选项

```js
columns: [
  {
    type: "selection" // 是否开启多选
  },
  {
<<<<<<< HEAD
    // isPagination（可选）是否开启序号随分页改变而自增
    isIndex: { type: "index", width: 80, label: "序号", isPagination: false }
=======
    // 是否开启序号
    //isPagination是否开启分页变化，序号自增
    // 需在fast-table tag中传入：curPage和pageSize（当前页数，当前页显示数据条数）
    isIndex: { type: "index", width: 80, label: "序号", isPagination: false} 
>>>>>>> dev
  },
  {
    // prop:具体内容,对应fastData中的key
    // label：表头名字
    attrs: { label: "姓名", prop: "name" } 
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
<<<<<<< HEAD
  				...
=======
>>>>>>> dev
      ]
      
    }
  }
]
```

handleCb的回调函数接受三个参数：

+ index -> scope.$index  从0开始
+ row -> scope.row 行内数据
+ name -> name 按钮名字

handleCb的使用可配合`el-dialog`实现弹框显示等

## 完整代码实例

App.vue

```js
<template>
  <div id="app">
    <fast-table :data="fastData" :columns="columns" border stripe @filter-change="filterChange"></fast-table>
    <el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      width="30%"
    >
      <span>这是一段信息</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import FastTable from "./components/FastTable.vue";
export default {
  name: "App",
  data() {
    return {
      dialogVisible: false,
      fastData: [
          {
            name: "razzh-",
            date: "2021",
            habbit: "hard",
            salers: "士兵突击"
          },
          {
            name: 'razzg',
            date: "2021-",
            habbit: "game",
            salers: "正元智慧"
          },
          {
            name: "razzh",
            date: "2022",
            habbit: "coding",
            salers: "贝贝"
          },
          {
            name: "razzh+",
            date: "2023",
            habbit: "al",
            salers: "阿里巴巴"
          },
        ],
      columns: [
        {
          type: "selection"  // 是否开启多选
        },
        {
          isIndex: { type: "index", width: 80, label: "序号", isPagination: false } // isPagination是否开启分页随页数自增
        },
        {
          attrs: { label: "姓名", prop: "name" },
        },
        {
          filter: { label: "过滤列", 
                    prop:"salers", 
                    filters:[
                              {text: '士兵突击', value: '士兵突击'},
                              {text: '正元智慧', value: '正元智慧'}, 
                              {text: '贝贝', value: '贝贝'},
                              {text: '阿里巴巴', value: '阿里巴巴'}],
                    filterMethod: this.filterTags
                  }
        },
        {
          attrs: { label: "时间", prop: "date" },
        },
        {
          attrs: { label: "爱好", prop: "habbit" },
        },
        {
          operation: {
            label: "操作",
            width: 260,
            btnList: [
            {
              name: "查看", // 操作节点名称
              type: "primary", // 按钮类型
              // icon: "el-icon-check",
              handleCb: this.handleCb
            },
            {
              name: "编辑", // 操作节点名称
              type: "danger", // 按钮类型
              icon: "el-icon-edit",
              handleCb: this.handleCb
            },
            {
              name: "导出", // 操作节点名称
              type: "danger", // 按钮类型
              icon: "el-icon-upload",
              handleCb: this.handleCb
            }
          ],
          }
        }
      ],
    };
  },
  methods: {
    handleCb(index, row, name) {
      this.dialogVisible = true; // 开启dialog
    },
    filterTags(value,row){
      return value === row.salers;
    },
    filterChange() {
      console.log('触发表单过滤事件')
    }
  },
  components: {
    FastTable,
  },
};
</script>

<style lang="scss">
</style>
```

fast-table.vue

```js
<template>
  <div class="fast-table">
    <el-table
      v-bind="$attrs"
<<<<<<< HEAD
=======
      v-on="$listeners"
>>>>>>> dev
      style="width: 100%"
      >
      <template
       v-for="(column,index) in $attrs.columns">
       <!-- 是否可选 -->
       <el-table-column
          v-if="column.type === 'selection'"
          :key="column.type"
          type="selection"
          align="center">
       </el-table-column>
       <!-- 是否开启序号 -->
       <el-table-column
          v-else-if="column.isIndex"
          :key="column.isIndex['type']"
          v-bind="column.isIndex || {}"
          type="index"
          align="center">
          <!-- 自定义插槽 用于分页自增加页数 -->
          <template slot-scope="scope">
            <!-- (当前页 - 1) * 当前显示数据条数 + 当前行数据的索引 + 1 -->
            <!-- column.isPagination:是否存在分页 -->
            <span v-if="column.isIndex['isPagination']">
              {{ ($attrs.curPage - 1) * $attrs.pageSize + scope.$index + 1 }}
            </span>
            <span v-else>{{ scope.$index + 1 }}</span>
          </template>
       </el-table-column>
       <!-- 具体内容 -->
        <el-table-column
          v-else-if="column.attrs || column.filter"
          :key="index"
          v-bind="column.attrs || column.filter"
          align="center">
        </el-table-column>
        <!-- 操作栏 -->
        <el-table-column
            v-else-if="column.operation"
            :key="column.operation.title"
            v-bind="column.operation || {}"
            align="center"
            >
            <template slot-scope="scope">
              <template v-if="column.operation.btnList.length > 0">
                <div class="btn">
                  <div class="btn-item" v-for="(item,index) in column.operation.btnList" :key="index">
                    <el-button v-if="item.icon" 
                        :icon="item.icon" 
                        :type="item.type" 
                        @click.native="item.handleCb(scope.$index, scope.row, item.name)" 
                        size="mini" v-bind="item">
                        {{ item.name }}
                    </el-button>
                    <el-button v-else 
                        :type="item.type" 
                        @click.native="item.handleCb(scope.$index, scope.row, item.name)" 
                        size="mini" v-bind="item">
                        {{ item.name }}
                    </el-button>
                  </div>
                </div>
              </template>
            </template>
        </el-table-column>
      </template>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'FastTable',
}
</script>

<style lang="scss" scoped>
.btn {
  display: flex;
  justify-content: center;
  .btn-item {
    margin-right: 5px;
  }
}
</style>
```

