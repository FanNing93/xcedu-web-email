<template>
  <section class="layout-list-content msg-details padding-nomal">
    <div class="btns-group">
      <el-button size="small" @click="toList()">返回</el-button>
      <el-button type="primary" size="small">回复</el-button>
      <el-button size="small">回复全部</el-button>
      <el-button size="small">转发</el-button>
      <el-button size="small">删除</el-button>
    </div>
    <div class="mail-content">
      <h2>待办提醒</h2>
      <div class="mail-content-tips">
        <p>
          <span>系统管理员</span>
          <em>于2020年05月08日 18:12发送给</em>
          <span>我</span>
        </p>
        <cite>查看详情</cite>
      </div>
      <div class="mail-content-html">
        <p>崔鑫发起的提醒等待您的办理</p>
        <p>即将到期请抓紧时间办理！</p>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  methods: {
    toList () {
      this.$router.go(-1)
    }
  }
}
</script>
