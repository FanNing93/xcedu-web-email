<template>
  <section class="nav-bar">
    <div class="nav-bar-title bordercolor">
      <div class="bgcolor">
        <i class="icon-email" />
      </div>
      <p>邮件</p>
    </div>
    <div class="nav-bar-btn">
      <el-button type="primary" @click="compose"><i class="icon-plus-o el-icon--left" />新建</el-button>
    </div>
    <el-menu class="el-menu-vertical-demo">
      <el-menu-item v-for="(nav, index) in navList" :key="index" index="index" @click="viewMsgList(nav.viewName)">
        <i :class="nav.icon" :style="{ color: nav.color }" />
        <span slot="title">{{ nav.name }}</span>
      </el-menu-item>
    </el-menu>
  </section>
</template>
<script>
export default {
  name: 'EmailNavbar',
  data: () => {
    return {
      navList: [{
        icon: 'icon-receiving',
        name: '收件箱',
        color: 'rgb(40,183,128)',
        id: '40289e8b6c1c68ce016c1c9951bf0002',
        viewName: 'receiving'
      }, {
        icon: 'icon-unread-mail',
        name: '未读邮件',
        color: 'rgb(255,0,0)',
        id: '40289e8b6c2177df016c22b162cf0007',
        viewName: 'unreadmail'
      }, {
        icon: 'icon-draft-box',
        name: '草稿箱',
        color: 'rgb(47,157,62)',
        id: '40289e8b6c2177df016c22b0a4110006',
        viewName: 'draftbox'
      }, {
        icon: 'icon-export',
        name: '发件箱',
        color: 'rgb(226,225,97)',
        id: '40289e8b6c2177df016c22b354ef000c',
        viewName: 'export'
      }, {
        icon: 'icon-delete',
        name: '废件箱',
        color: 'rgb(255,0,0)',
        id: '40289e8b6c2177df016c22b354ef0001',
        viewName: 'delete'
      }]
    }
  },
  methods: {
    compose () {
      this.$router.push('/mfs-email/compose')
    },
    viewMsgList (name) {
      // this.$router.push('/email/')
      this.$router.push({ name: 'msgLlist', params: { viewname: name } })
    }
  }
}
</script>
