/*
 * @Author: meifeng mei.feng@asiainfo-sec.com
 * @Date: 2022-11-21 13:58:17
 * @LastEditors: meifeng mei.feng@asiainfo-sec.com
 * @LastEditTime: 2023-06-16 14:25:41
 * @FilePath: \ai-itms-web-ui\src\utils\i18n.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Vue from 'vue'
import VueI18n from 'vue-i18n'
Vue.use(VueI18n)
import zh from '../i18n/zh'
import en from '../i18n/en'
import axios from 'axios'
const i18n = new VueI18n({
  locale: localStorage.getItem('lang') || 'en',
  messages: {
    zh,
    en
  }
})
function createI18nInstance() {
  return new Promise((resolve, reject) => {
    getConfig()
      .then(() => {
        const i18n = new VueI18n({
          locale: localStorage.getItem('lang') || 'en',
          messages: {
            zh,
            en
          }
        })
        resolve(i18n)
      })
      .catch(error => {
        reject(error)
      })
  })
}

async function getConfig() {
  return axios.get('/project.config.json').then(res => {
    if (res.data.logoutReset) {
      Vue.prototype.$config = res.data
      localStorage.setItem('lang', res.data.language)
    } else {
      localStorage.getItem('lang') || localStorage.setItem('lang', res.data.language)
    }
  })
}
export {
  i18n,
  createI18nInstance
}
