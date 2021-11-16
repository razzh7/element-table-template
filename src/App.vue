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
            salers: "士兵突击",
            custom: "已完成"
          },
          {
            name: 'razzg',
            date: "2021-",
            habbit: "game",
            salers: "正元智慧",
            custom: "未完成"
          },
          {
            name: "razzh",
            date: "2022",
            habbit: "coding",
            salers: "贝贝",
            custom: "待付款"
          },
          {
            name: "razzh+",
            date: "2023",
            habbit: "al",
            salers: "阿里巴巴",
            custom: "已支付"
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
          customColumn: { label: "自定义列",
            render: (h,params) => {
            return (
              <div>
                <el-tag>{ params.row.custom }</el-tag>
              </div>
              )
            }
          }
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
      console.log('index',index);
      console.log('row',row);
      console.log('name',name);
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
