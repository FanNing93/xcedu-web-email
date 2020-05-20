import MsgList from '@page/inbox/index.vue'
import Layout from '@page/layout.vue'
import Compose from '@page/compose.vue'
const emailLayout = {
  path: '/mfs-email',
  redirect: '/mfs-email/msgList/receiving',
  component: Layout,
  children: [{
    name: 'msgLlist',
    path: 'msgList/:viewname',
    component: MsgList
  }, {
    name: 'compose',
    path: 'compose',
    component: Compose
  }]
}

export default [emailLayout]
