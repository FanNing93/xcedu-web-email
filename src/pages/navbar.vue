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
    <el-menu class="el-menu-vertical-demo" router :default-active="`/mfs-email/msgList/${viewName}`">
      <el-menu-item v-for="(nav, index) in navList" :key="index" :index="`/mfs-email/msgList/${nav.viewName}`">
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
      viewName: 'receiving',
      navList: [{
        icon: 'icon-unread-mail',
        name: '未读邮件',
        color: 'rgb(255,0,0)',
        id: '402812816c27eb13016c28155c820002',
        viewName: 'unreadBox'
      }, {
        icon: 'icon-star-hollow',
        name: '星标邮件',
        color: 'rgb(64, 193, 151)',
        id: '40289e8b6c2177df016c22b162cf0007',
        viewName: 'starBox'
      }, {
        icon: 'icon-receiving',
        name: '收件箱',
        color: 'rgb(56, 179, 241)',
        id: '40289e8b6c1c68ce016c1c9951bf0002',
        viewName: 'receiveBox'
      }, {
        icon: 'icon-export',
        name: '发件箱',
        color: 'rgb(226,225,97)',
        id: '40289e8b6c2177df016c22b354ef000c',
        viewName: 'sendBox'
      }, {
        icon: 'icon-draft-box',
        name: '草稿箱',
        color: 'rgb(47,157,62)',
        id: '40289e8b6c2177df016c22b0a4110006',
        viewName: 'draftBox'
      }, {
        icon: 'icon-delete',
        name: '废件箱',
        color: 'rgb(255,0,0)',
        id: '40289e8b6c2177df016c22b354ef0001',
        viewName: 'deleteBox'
      }]
    }
  },
  mounted: function () {
    this.viewName = this.$route.path.substring(this.$route.path.lastIndexOf('/') + 1)
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
