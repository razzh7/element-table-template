<template>
  <div id="app">
    <ChunkTable
      :data="fastData"
      :columns="columns"
      border
      stripe
      @filter-change="filterChange"
    ></ChunkTable>
    <el-dialog title="提示" :visible.sync="dialogVisible" width="30%">
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
import ChunkTable from './components/ChunkTable.vue';
import mock from './utils/mockData';
import { eTableList } from './utils/eTable';

export default {
  name: 'App',
  data() {
    const List = eTableList(this.filterTags, this.handleCb); // 传入要执行的函数
    return {
      dialogVisible: false,
      fastData: [...mock.list],
      columns: [...List],
    };
  },
  methods: {
    handleCb(index, row, name) {
      console.log('index', index);
      console.log('row', row);
      console.log('name', name);
      this.dialogVisible = true; // 开启dialog
    },
    filterTags(value, row) {
      return value === row.tv;
    },
    filterChange() {
      console.log('触发表单过滤事件');
    },
  },
  components: {
    ChunkTable,
  },
};
</script>

<style lang="scss"></style>
