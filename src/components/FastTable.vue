<template>
  <div class="fast-table">
    <el-table
      :data="fastData.data"
      style="width: 100%"
      :border="fastData.border">
      <el-table-column
      v-if="fastData.isSelection === 'selection'" type="selection">
      </el-table-column>
      <!-- 是否需要序号 -->
      <el-table-column
      v-if="fastData.isIndex"
      type="index"
      label="序号"
      align="center">
      </el-table-column>
      <!-- 具体内容 -->
      <template
       v-for="(column,index) in fastData.columns">
        <el-table-column 
          :key="index"
          :prop="column.prop"
          :label="column.title"
          align="center"
          >
        </el-table-column>
      </template>
      <!-- 操作栏 -->
      <el-table-column
          v-if="fastData.operation"
          :label="fastData.operation.title"
           align="center"
          :width="fastData.operation.width"
          :fixed="setFixed"
          >
          <template slot-scope="scope">
            <template v-if="fastData.operation.btnList.length > 0">
              <div class="btn">
                <div class="btn-item" v-for="(item,index) in fastData.operation.btnList" :key="index">
                  <el-button v-if="item.icon" :icon="item.icon" :type="item.type" @click.native="item.handleCb(scope.$index, scope.row, item.name)" size="mini" v-bind="item">{{ item.name }}</el-button>
                  <el-button v-else :type="item.type" @click.native="item.handleCb(scope.$index, scope.row, item.name,scope)" size="mini" v-bind="item">{{ item.name }}</el-button>
                </div>
              </div>
            </template>
          </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'FastTable',
  props: {
    fastData: {
      type: Object,
      default: () => []
    }
  },
  computed: {
    setFixed() { // 设置操作栏位置
      const position = this.fastData.operation.fixed
      if(position === 'left') return 'left';
      else if(position === 'right') return 'right';
    }
  },
  methods: {
    
  }
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