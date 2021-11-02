<template>
  <div class="fast-table">
    <el-table 
      :data="fastData.data"
      style="width: 100%"
      border>
      <!-- 是否需要序号 -->
      <el-table-column
      v-if="fastData.isIndex"
      type="index"
      width="50"
      label="序号"
      align="center">
      </el-table-column>
      <!-- 具体内容 -->
      <template
       v-for="(column,index) in columns">
        <el-table-column 
          :key="index"
          :prop="column.prop"
          :label="column.label"
          align="center"
          >
        </el-table-column>
        
      </template>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'FastTable',
  props: {
    fastData: {
      type: Array,
      default: () => []
    },
    columns: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style>

</style>