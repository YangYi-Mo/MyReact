import request from '../utils/request.js'

// 获取角色列表
export function getRoleList() {
    return request({
        url: '/role',
        method: 'get',
    })
}
// 添加角色
export function addRole(data) {
    return request({
        url: '/role',
        method: 'post',
        data
    })
}
// 编辑角色
export function editRole(id,data) {
    return request({
        url: `/role/${id}`,
        method: 'put',
        data
    })
}
// 删除角色
export function deletRole(id) {
    return request({
        url: `/role/${id}`,
        method: 'delete',
    })
}

// 获取角色详情
export function getRoleDetail(id) {
    return request({
        url: `/role/${id}`,
        method: 'get',
    })
}