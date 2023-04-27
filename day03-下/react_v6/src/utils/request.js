import axios from 'axios'

const service = axios.create({
    baseURL: "http://toutiao.itheima,net.v1_0",
    timeout: 10000,
})

// 请求拦截器
service.interceptors.request.use(config =>{
    const userInfo = JSON.parse(window.localStorage.getItem('user-info') || '{}')
    if(userInfo.token){
        // 为请求头对象，添加token验证的Authorization字段
        config.headers.Authorization = `Bearer ${userInfo.token}`
    }
    return config
})

// 响应拦截器
service.interceptors.response.use((response)=>{
    return response.data? response.data.data: response.data
})

export default service