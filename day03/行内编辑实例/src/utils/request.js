import axios from 'axios'

const service = axios.create({
    baseURL: "http://localhost:3000",
    timeout: 10000
})

service.interceptors.response.use(response => response.data)
export default service