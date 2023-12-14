import Vue from 'vue'
import { mapDictFromCache } from './util'
import { i18n } from './i18n'

Vue.filter('userstate', function(value) {
  if (!value) {
    return '-'
  }
  return mapDictFromCache('gw_user_status', value)
})

Vue.filter('credtype', function(value) {
  if (!value) {
    return '-'
  }
  return mapDictFromCache('gw_cred_type', value)
})

// 上行方式 接入方式
Vue.filter('accesstype', function(value) {
  if (!value) {
    return '-'
  }
  return mapDictFromCache('gw_access_way', value)
})
Vue.filter('faultcode', function(value) {
  if (!value) {
    return '-'
  }
  let text = ''
  switch (String(value)) {
    case '1':
      text = i18n.t('faultCode1')
      break
    case '-1':
      text = i18n.t('faultCode2')
      break
    case '-2':
      text = i18n.t('faultCode3')
      break
    case '-3':
      text = i18n.t('faultCode4')
      break
    case '-4':
      text = i18n.t('faultCode5')
      break
    case '-5':
      text = i18n.t('faultCode6')
      break
    case '-6':
      text = i18n.t('faultCode7')
      break
    case '-7':
      text = i18n.t('faultCode8')
      break
    case '-8':
      text = i18n.t('faultCode9')
      break
    case '-9':
      text = i18n.t('faultCode10')
      break
    case '-10':
      text = i18n.t('faultCode11')
      break
    case '-11':
      text = i18n.t('faultCode12')
      break
    case '-12':
      text = i18n.t('faultCode13')
      break
    case '-13':
      text = i18n.t('faultCode14')
      break
    case '9001':
    case '9002':
      text = i18n.t('faultCode15')
      break
    case '9003':
      text = i18n.t('faultCode16')
      break
    case '9004':
      text = i18n.t('faultCode17')
      break
    case '9005':
      text = i18n.t('faultCode18')
      break
    case '9006':
      text = i18n.t('faultCode19')
      break
    case '9007':
      text = i18n.t('faultCode20')
      break
    case '9008':
      text = i18n.t('faultCode21')
      break
    case '9009':
      text = i18n.t('faultCode22')
      break
    case '9010':
    case '9014':
    case '9015':
    case '9016':
    case '9017':
    case '9018':
    case '9019':
      text = i18n.t('faultCode23')
      break
    case '9011':
      text = i18n.t('faultCode24')
      break
    case '9012':
      text = i18n.t('faultCode25')
      break
    case '9013':
      text = i18n.t('faultCode26')
      break
    case '9899':
      text = i18n.t('faultCode27')
      break
    case '100000':
      text = i18n.t('faultCode28')
      break
    default:
      text = i18n.t('faultCode29')
  }
  return text
})

Vue.filter('strategyStatus', function(value) {
  if (!value) {
    return '-'
  }
  return mapDictFromCache('gw_strategy_status', value)
})

Vue.filter('opertype', function(value) {
  if (!value) {
    return '-'
  }
  return mapDictFromCache('gw_oper_type', value) === value ? 'unknown' : mapDictFromCache('gw_oper_type', value)
})
Vue.filter('servstatus', function(value) {
  if (!value) {
    return '-'
  }
  return mapDictFromCache('gw_serv_status', value) === value ? 'unknown' : mapDictFromCache('gw_serv_status', value)
})

Vue.filter('wantype', function(value) {
  if (!value) {
    return '-'
  }
  return mapDictFromCache('gw_wan_type', value) === value ? '-' : mapDictFromCache('gw_wan_type', value)
})

Vue.filter('iptype', function(value) {
  if (!value) {
    return '-'
  }
  return mapDictFromCache('gw_ip_type_t', value) === value ? 'Public network single stack' : mapDictFromCache('gw_ip_type_t', value)
})
Vue.filter('protocol', function(value) {
  if (!value) {
    return '-'
  }
  return mapDictFromCache('gw_voipProtocal_type', value) === value ? '-' : mapDictFromCache('gw_voipProtocal_type', value)
})

Vue.filter('businesstype', function(value) {
  if (!value) {
    return '-'
  }
  return mapDictFromCache('gw_business_type', value) === value ? '-' : mapDictFromCache('gw_business_type', value)
})

Vue.filter('userstatus', function(value) {
  if (!value) {
    return '异常'
  }
  return mapDictFromCache('user_status', value) === value ? '异常' : mapDictFromCache('user_status', value)
})

// 审核状态
Vue.filter('versionstatus', function(value) {
  if (!value) {
    return ''
  }
  return mapDictFromCache('gw_version_status', value)
})

// 任务状态
Vue.filter('tasktype', function(value) {
  if (!value) {
    return ''
  }
  return mapDictFromCache('task_type', value)
})

// 设备当前状态
Vue.filter('devicestatus', function(value) {
  if (!value) {
    return ''
  }
  return mapDictFromCache('gw_device_status', value)
})

// 设备版本类型
Vue.filter('deviceversiontype', function(value) {
  if (!value) {
    return ''
  }
  return mapDictFromCache('gw_device_version_type', value)
})

// 策略执行状态
Vue.filter('policystatus', function(value) {
  if (!value) {
    return ''
  }
  return value === '100' ? i18n.t('manage_buss_543') : i18n.t('manage_buss_539')
})
