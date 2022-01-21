export function eTableList() {
  const filterTags = arguments[0]
  const handleCb = arguments[1]
  let appList = [
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
      customColumn: {
        label: "自定义列",
        render: (h, params) => {
          if (params.row.custom === '待付款') {
            return (
              <div>
                <el-tag type="warning">{params.row.custom}</el-tag>
              </div>
            )
          } else if (params.row.custom === '未完成') {
            return (
              <div>
                <el-tag type="danger">{params.row.custom}</el-tag>
              </div>
            )
          } else {
            return (
              <div>
                <el-tag>{params.row.custom}</el-tag>
              </div>
            )
          }
        }
      }
    },
    {
      attrs: { label: "时间", prop: "date" },
    },
    {
      attrs: { label: "爱好", prop: "habbit" },
    },
    {
      filter: {
        label: "过滤列",
        prop: "tv",
        filters: [
          { text: '士兵突击', value: '士兵突击' },
          { text: '知否知否应是绿肥红瘦', value: '知否知否应是绿肥红瘦' },
          { text: '琅琊榜', value: '琅琊榜' },
          { text: '庆余年', value: '庆余年' }],
        filterMethod: filterTags
      }
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
            handleCb: handleCb
          },
          {
            name: "编辑", // 操作节点名称
            type: "danger", // 按钮类型
            icon: "el-icon-edit",
            handleCb: handleCb
          },
          {
            name: "导出", // 操作节点名称
            type: "warning", // 按钮类型
            icon: "el-icon-upload",
            handleCb: handleCb
          }
        ],
      }
    }
  ]
  return appList
}