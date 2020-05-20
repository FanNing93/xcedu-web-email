<template>
  <section class="layout-list-content">
    <el-table :data="tableData" style="width: 100%" @row-click="viewEmail">
      <el-table-column type="selection" width="55" />
      <el-table-column prop="status" label="状态" width="180">
        <template>
          <i class="icon-unread-mail" />
        </template>
      </el-table-column>
      <el-table-column prop="sendName" label="发件人" width="180" />
      <el-table-column prop="title" label="主题" />
      <el-table-column prop="emergency" label="优先级" />
      <el-table-column prop="createdate" label="收件时间" />
      <el-table-column label="操作" width="120">
        <template slot-scope="scope">
          <i class="icon-star-hollow" />
          <i class="icon-delete" @click.stop="deleteRow(scope.$index, tableData, scope.id)" />
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      :page-size="10"
      layout="prev, pager, next, jumper, sizes, total"
      :total="total"
      class="tx-c margin-top-size-nomal"
    />
  </section>
</template>

<script>
import { getEmailList, deleteEmailById } from '@/api/index'
export default {
  data () {
    return {
      tableData: [
        {
          oldStatus: 2,
          sendid: '8aa376486d0b9b78016d14dffabc00b0',
          hasforward: 0,
          userName: '张育平',
          emergency: 0,
          createdate: '2020-05-11 08:56:44',
          isstar: 0,
          title: '新信息：嘟嘟嘟 2020-05-11',
          contenttype: 1,
          userId: '8aa376486d0b9b78016d130f5fdb003a',
          sendName: '周伟锋<校长>',
          isread: 0,
          fileId: '',
          mailid: '2c90abb871fddae70172013bec2e0d0e',
          receipt: 0,
          hasreply: 0,
          id: '2c90abb871fddae70172013bec2e0da1',
          viewdate: null,
          status: 2
        },
        {
          oldStatus: 2,
          sendid: '1',
          hasforward: 0,
          userName: '系统',
          emergency: 0,
          createdate: '2020-05-08 18:12:21',
          isstar: 0,
          title: '待办提醒',
          contenttype: 1,
          userId: '8aa376486d0b9b78016d130f5fdb003a',
          sendName: '系统',
          isread: 0,
          fileId: null,
          mailid: '2c90abb871f38cd60171f3c586a70155',
          receipt: 0,
          hasreply: 0,
          id: '2c90abb871f38cd60171f3c586a70156',
          viewdate: null,
          status: 2
        },
        {
          oldStatus: 2,
          sendid: '1',
          hasforward: 0,
          userName: '系统',
          emergency: 0,
          createdate: '2020-05-08 17:58:20',
          isstar: 0,
          title: '待办提醒',
          contenttype: 1,
          userId: '8aa376486d0b9b78016d130f5fdb003a',
          sendName: '系统',
          isread: 0,
          fileId: null,
          mailid: '2c90abb871f38cd60171f3b8b36500b6',
          receipt: 0,
          hasreply: 0,
          id: '2c90abb871f38cd60171f3b8b36500b7',
          viewdate: null,
          status: 2
        }
      ],
      total: 0,
      page: 1,
      pageSize: 10,
      currentPage1: 1
    }
  },
  mounted: function () {
    this.initList({
      page: this.page,
      pageSize: this.pageSize
    })
  },
  methods: {
    initList (params) {
      const req = {
        ...params
      }
      getEmailList(req).then(res => {
        this.tableData = res.records
        this.total = res.totalRecords
      })
    },
    deleteRow (index, rows) {
      this.$confirm('确认删除此条记录吗？', '', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        const id = rows[index].id
        deleteEmailById(id).then(res => {
          if (res) {
            rows.splice(index, 1)
          } else {
            this.$message('删除失败')
          }
        })
      })
    },
    viewEmail (row) {
      this.$router.push({ path: '/mfs-email/compose', query: { id: row.id } })
    }
  }
}
</script>
