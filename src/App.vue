<template>
  <div id="app">
    <fast-table :fastData="fastData" :columns="columns"></fast-table>
  </div>
</template>

<script>
import FastTable from "./components/FastTable.vue"
export default {
  name: 'App',
  data() {
    return {
      fastData: {
        data: [{
          name: '王小虎',
          date: '2020.11.6',
          hobbit: 'coding pro'
        },
        {
          name: '王小虎',
          date: '2020.11.6',
          hobbit: 'coding pro'
        },
        {
          name: '王小虎',
          date: '2020.11.6',
          hobbit: 'coding pro'
        }]
      },
      columns: [
        {
          label: '姓名',
          prop: 'name'
        },
        {
          label: '时间',
          prop: 'date'
        },
        {
          label: '爱好',
          prop: 'hobbit'
        }
      ]
    }
  },
  components: {
    FastTable
  }
}
</script>

<style lang="scss">
</style>
