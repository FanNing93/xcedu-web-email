import request from './request'
// 修改提交数据
export function updateEmail (form) {
  return request.put('/api-mail/mail', form)
}
// 修改数据
export function getEmailById (id) {
  return request.get('/api-mail/mail/' + id)
}
// 查询列表
export function getEmailList (params) {
  return request.get('/api-mail/mail', params)
}
// 新建保存
export function createEmail (form) {
  return request.post('/api-mail/mail', form)
}
// 删除
export function deleteEmailById (id) {
  return request.delete('/api-mail/mail/' + id)
}
