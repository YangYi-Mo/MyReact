import axios from 'axios'

const service = axios.create({
    baseURL: "http://toutiao.itheima,net.v1_0",
    timeout: 10000,
})

// 请求拦截器
service.interceptors.request.use()

// 响应拦截器
service.interceptors.response.use((response)=>{
    return response.data? response.data.data: response.data
})

export default service