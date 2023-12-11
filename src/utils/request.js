import axios from 'axios'
import { ElMessage } from 'element-plus'
import { router } from '@/router/index.js'
import {
    purifyObject,
    purifyObjectPost
} from '@/utils/format.js'

const err = (error) => {
    if (error.status === 504) {
        ElMessage({
            type: 'error',
            message: '系统无响应',
        })
    } else {
        ElMessage({
            type: 'error',
            message: error.message,
        })
    }
    return Promise.reject(error)
}

function validateData(data) {
    // let res = {}
    // for (let key in data) {
    //   if (Array.isArray(data[key]) && data[key].length !== 0 || data[key] !== '' && !Array.isArray(data[key])) {
    //     res[key] = data[key]
    //   }
    // }
    return data
}

/**
 * @description axios初始化
 */
const instance = axios.create({
    // baseURL:process.env.NODE_ENV === 'mock' ? 'mock-server' : '/api',
    // baseURL:'http://172.29.30.112:29110',
    timeout: 300000,
    headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        // 'ADD_INFO': '{"serviceId":"2"}',
        // 'USER-ID': 1632640,
        // 'USER-INFO': '{ "id": 1632640, "appId": 265, "groupsId": "18916", "grantGroupIds": "18916", "username": "hougy00", "originalId": "0", "password": "$2a$10$OFhPh.1a3MuNqau6QT244uS.LEPpw27d7QFvbD74HZgAlRYnuHyQq", "nickname": "cs00", "name": null, "email": null, "sex": null, "mobile": "13653223432", "headPic": "", "userStatus": 0, "userSource": 0, "joinType": 0, "addInfo": "1,2,3,4,5", "superManage": 0, "oidcInfo": null, "firstGroupsInfo": [{ "id": 18829, "groupsName": "dzwl", "remarks": null }], "grantFirstGroupIds": [{ "id": 18829, "groupsName": "dzwl", "remarks": null }], "authorities": [], "loginTime": 1677498270729, "enabled": true, "accountNonLocked": true, "accountNonExpired": true, "credentialsNonExpired": true }',
        // 'GROUPS-ID': 18916
    },
})
/**
 * @description axios请求拦截器
 */
instance.interceptors.request.use(
    (config) => {
        if (window.localStorage.getItem('token_travel')) {
            config.headers['Authorization'] = window.localStorage.getItem('token_travel')
            //config.headers['ADD_INFO'] = '{"serviceId":"1"}'
            // config.headers['Access-Token'] = 'Bearer ' + window.localStorage.getItem('token_travel')
        }
        if (config.data) {
            if (config.method === 'post') {
                // config.data = validateData(config.data)
                config.data = purifyObjectPost(config.data)
            } else if (config.method === 'get') {
                let url = config.url + '?'
                for (let key in config.data) {
                    url += `${key}=${config.data[key]}&`
                }
                config.url = url
            }

        }
        return config

    },
    (error) => {
        return Promise.reject(error);
        // return {};
        console.log(error)
    }
)
/**
 * @description axios响应拦截器
 */
instance.interceptors.response.use(
    (response) => {
        const res = response.data;
        if (res.code !== 200 && res.code !== 20001 && res.code !== 20003 && res.code !== 20004) {
            if (res.code === 401) {
              ElMessage({
                type: 'error',
                message: `${res.message || '请重新登录！'}`,
              })
              window.localStorage.removeItem('token_travel');
              router.push('/login')
            }
            if (res.code === 507) {
                ElMessage({
                    type: 'error',
                    message: `${res.message || '业务异常！'}`,
                })
                return Promise.reject(new Error(`${res.message || '数据异常！'}`))
            }
            if (res.code === 602) {
                return Promise.reject(res)
            }
            else {
                ElMessage({
                    type: 'error',
                    message: `${res.message || '数据异常！'}`,
                })
                return Promise.reject(new Error(`${res.message || '数据异常！'}`))
            }
        } else {
            return res
        }
    },
    (error) => {
        console.log('err' + error) // for debug
        ElMessage({
            type: 'error',
            message: `${error.message || '数据异常！'}`,
        })
        return Promise.reject(error)
    }
)
export default instance
