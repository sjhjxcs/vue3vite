// index.js
import { createI18n } from 'vue-i18n'
import zh from './zh.js'
import en from './en.js'

const i18n = createI18n({
  locale: localStorage.getItem('lang') || 'zh',
  // locale: 'en', // 将语言环境设置为英文
  fallbackLocale: 'zh',
  legacy: false,
  messages: {
    zh,
    en
  }
})

export default i18n
