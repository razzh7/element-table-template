<template>
  <div id="app">
    <fast-table :data="fastData" :columns="columns" border stripe></fast-table>
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
          },
          {
            name: "razzh",
            date: "2022",
            habbit: "coding",
          },
          {
            name: "razzh+",
            date: "2023",
            habbit: "al",
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
    }
  },
  components: {
    FastTable,
  },
};
</script>

<style lang="scss">
</style>
