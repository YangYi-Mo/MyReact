import request from '../utils/request'

// 登录
export function login(data){
    return request({
        method: 'POST',
        url: '/authorizations',
        data
    })
}

// 获取用户信息
export function sendCode(mobile){
    return request({
        url:`sms/codes/${mobile}`
    })
}

// 获取用户信息
export function getUserInfo(){
    return request({
        url:'/user/profile'
    })
}