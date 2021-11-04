<template>
  <div class="fast-table">
    <el-table
      v-bind="$attrs"
      style="width: 100%"
      >
      <template
       v-for="column in $attrs.columns">
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
       </el-table-column>
       <!-- 具体内容 -->
        <el-table-column
          v-else-if="column.attrs"
          :key="column.attrs.prop"
          v-bind="column.attrs || {}"
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
                        @click.native="item.handleCb(scope.$index, scope.row, item.name,scope)" 
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