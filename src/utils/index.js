import axios from 'axios'
import { Message } from 'element-ui';
import router from '../router/index'

// 生产环境时，设置为production
const env = process.env.NODE_ENV 

// 在开发环境时，将被设置为development
let baseURL = env == 'development' ? '/api' : '/'

const instance = axios.create({
    baseURL,
    timeout: 10000
})

const xhr = {
    get(url, data, config) {
        return new Promise((resolve,reject)=>{
            instance.get(url, {params: data}, config).then(res=>{
                if(res.data.code == 401){
                    Message.error('登录状态失效，正在跳转到登录页')
                    router.push('/login')
                }
                resolve(res.data)
            })
        })
    },
    
    fetch(url, data, config, methods) {
        return new Promise((resolve,reject)=>{
            instance[methods](url, data, config).then(res=>{
                resolve(res.data)
            }).catch(err=>{
                reject(err)
            })
        })
    },

    post(url, data, config) {
        return this.fetch(url,data,config,'post')
    },
    put(url, data, config) {
        return this.fetch(url,data,config,'put')
    },
    delete(url, data, config) {
        return this.fetch(url,data,config,'delete')
    },
    patch(url, data, config) {
        return this.fetch(url,data,config,'patch')
    },
}

export const $axios = xhr