import { axios } from '@xcedu/web-share'
// 修改提交数据
export function updateEmail (form) {
  return axios.put('/api-mail/mail', form)
}
// 修改数据
export function getEmailById (id) {
  return axios.get('/api-mail/mail/' + id)
}
// 查询列表
export function getEmailList (params) {
  return axios.get('/api-mail/mail', params)
}
// 新建保存
export function createEmail (form) {
  return axios.post('/api-mail/mail', form)
}
// 删除
export function deleteEmailById (id) {
  return axios.delete('/api-mail/mail/' + id)
}
