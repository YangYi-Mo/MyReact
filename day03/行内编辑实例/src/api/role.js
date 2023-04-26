import request from '../utils/request'

// 获取角色列表
export function getRoleList() {
    return request({
        url: '/role',
        method: 'get'
    })
}
// 添加角色
export function addRole(data) { // data是一个对象
    return request({
        url: '/role',
        method: 'post',
        data
    })
}
// 删除角色
export function deleteRole(id) {
    return request({
        url: `/role/${id}`,
        method: 'delete'
    })
}
// 编辑角色
export function editRole(data) {
    return request({
        url: `/role/${data.id}`,
        method: 'put',
        data
    })
}
// 获取角色详情
export function getRoleDetail(id) {
    return request({
        url: `/role/${id}`,
        method: 'get'
    })
}