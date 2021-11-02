<template>
  <div id="app">
    <fast-table :fastData="fastData"></fast-table>
    <el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      width="30%"
    >
      <span>这是一段信息</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false"
          >确 定</el-button
        >
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
      fastData: {
        border: true, // 是否开启border
        isIndex: true,
        isSelection: 'selection', // 是否开启selection
        data: [
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
        operation: {
          title: "操作",
          // fixed: 'right',
          width: "260", // 操作栏的宽度
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
              icon: "el-icon-edit"
            },
            {
              name: "导出", // 操作节点名称
              type: "danger", // 按钮类型
              icon: "el-icon-upload"
            }
          ],
        },
        columns: [
          {
            title: "姓名",
            prop: "name",
          },
          {
            title: "时间",
            prop: "date",
          },
          {
            title: "爱好",
            prop: "habbit",
          },
        ],
      },
    };
  },
  methods: {
    handleCb(index, row, name,c) {
      console.log(index);
      console.log(row);
      console.log(name);
      console.log(c);
      console.log(this);
      this.dialogVisible = true;
    }
  },
  components: {
    FastTable,
  },
};
</script>

<style lang="scss">
</style>
